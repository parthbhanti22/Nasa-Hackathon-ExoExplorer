
import streamlit as st
import pandas as pd
import numpy as np
import time
import pickle
from pathlib import Path
import seaborn as sns
import matplotlib.pyplot as plt

# Data Preprocessing & Model Training
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# --- PAGE CONFIGURATION ---
st.set_page_config(
    page_title="ExoDetect AI 🪐",
    page_icon="🔭",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --- CACHED FUNCTIONS ---
@st.cache_data
def load_data(file):
    """Loads data from a file, cached for performance."""
    df = pd.read_csv(file)
    return df

@st.cache_data
def preprocess_data(df):
    """Prepares the raw data for machine learning, cached for performance."""
    # Drop unnecessary/problematic columns
    columns_to_drop = [
        'rowid', 'kepid', 'kepoi_name', 'kepler_name',
        'koi_pdisposition', 'koi_score', 'koi_tce_delivname'
    ]
    df_clean = df.drop(columns=columns_to_drop, errors='ignore')
    df_clean = df_clean.loc[:, ~df_clean.columns.str.contains('_err1|_err2')]

    # Filter target column
    if 'koi_disposition' in df_clean.columns:
        df_clean = df_clean[df_clean['koi_disposition'].isin(['CANDIDATE', 'CONFIRMED'])]
    
    # Transform target to binary
    if 'koi_disposition' in df_clean.columns:
        df_clean['target'] = df_clean['koi_disposition'].map({'CANDIDATE': 1, 'CONFIRMED': 0})
        df_clean = df_clean.drop('koi_disposition', axis=1)

    if 'target' not in df_clean.columns:
        st.error("Target column 'koi_disposition' not found. Cannot proceed.")
        return None, None, None, None

    X = df_clean.drop('target', axis=1)
    y = df_clean['target']
    
    # Select only numeric columns to prevent errors with non-numeric data
    X_numeric = X.select_dtypes(include=np.number)
    feature_names = X_numeric.columns.tolist()
    
    # Impute missing values with the mean
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X_numeric)
    
    X = pd.DataFrame(X_imputed, columns=feature_names)
    return X, y, imputer, feature_names

# --- STYLING ---
# (Optional) You can define CSS styles here for reuse
PRIMARY_COLOR = "#FF4B4B"
SECONDARY_COLOR = "#C4A484"

# --- SIDEBAR ---
with st.sidebar:
    st.markdown("## ⚙️ Configuration")
    
    st.markdown("### 1. Upload Data")
    uploaded_file = st.file_uploader(
        "Upload the NASA Kepler dataset (CSV)",
        type=['csv']
    )
    
    data_file_path = Path("cumulative_2025.09.20_06.45.53.csv")
    use_default_data = st.checkbox("Use default NASA dataset", value=not uploaded_file and data_file_path.exists())

    st.markdown("---")
    st.markdown("### 2. Model Hyperparameters")
    n_estimators = st.slider("Number of Trees (n_estimators)", 100, 2000, 1600, 100)
    max_depth = st.slider("Max Depth of Trees", 5, 50, 30, 1)
    test_size = st.slider("Test Set Size", 0.1, 0.5, 0.3, 0.05)
    st.info("Adjust these settings to see how they impact model performance.")


# --- MAIN APPLICATION ---

# Header image
st.image("https://www.nasa.gov/wp-content/uploads/2015/05/pia19323-main_kepler-10c-planet-and-star.jpg",
         caption="Artist's concept of Kepler-10c, a 'mega-Earth' that weighs 17 times as much as our planet.")

# Custom styled title using Markdown and HTML
st.markdown(f"""
<h1 style='text-align: center; color: {SECONDARY_COLOR};'>
    ExoDetect AI: Find New Worlds 🔭
</h1>
""", unsafe_allow_html=True)

st.markdown("""
This tool uses a **Random Forest Classifier** to identify potential exoplanets from NASA's Kepler mission data. 
Based on the transit method—where a planet passing in front of its star causes a dip in starlight—our AI model learns to distinguish between confirmed exoplanets and candidates.
""")

# --- DATA LOADING AND PROCESSING ---
df_raw = None
if uploaded_file is not None:
    df_raw = load_data(uploaded_file)
elif use_default_data and data_file_path.exists():
    df_raw = load_data(data_file_path)

if df_raw is not None:
    st.markdown("---")
    st.markdown("## 📊 Dataset Preview")
    st.dataframe(df_raw.head())
    st.info(f"Dataset loaded with **{df_raw.shape[0]} rows** and **{df_raw.shape[1]} columns**.")

    # --- MODEL TRAINING AND EVALUATION ---
    if st.button("🚀 Train AI Model and Analyze Data", type="primary"):
        with st.spinner("Preprocessing data... This may take a moment."):
            X, y, imputer, feature_names = preprocess_data(df_raw)
            pickle.dump(imputer, open('imputer.pkl', 'wb'))

        if X is not None:
            with st.spinner(f"Training RandomForest model with {n_estimators} trees..."):
                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=42, stratify=y)
                
                scaler = StandardScaler()
                X_train_scaled = scaler.fit_transform(X_train)
                X_test_scaled = scaler.transform(X_test)
                pickle.dump(scaler, open('scaler.pkl', 'wb'))
                
                model = RandomForestClassifier(
                    n_estimators=n_estimators, max_depth=max_depth,
                    criterion='entropy', random_state=42, n_jobs=-1
                )
                model.fit(X_train_scaled, y_train)
                pickle.dump(model, open('model.pkl', 'wb'))
                
                y_pred = model.predict(X_test_scaled)
                accuracy = accuracy_score(y_test, y_pred)

            st.success("✅ Model training complete!")
            st.markdown("---")
            st.markdown("## 📈 Model Performance")
            
            col1, col2 = st.columns(2)
            with col1:
                st.metric(label="Model Accuracy", value=f"{accuracy:.4f}")
                st.markdown("**Classification Report:**")
                report_text = classification_report(y_test, y_pred, target_names=['Confirmed Planet', 'Candidate'])
                st.code(report_text, language='text')

            with col2:
                st.markdown("**Confusion Matrix:**")
                cm = confusion_matrix(y_test, y_pred)
                fig, ax = plt.subplots()
                sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
                            xticklabels=['Confirmed', 'Candidate'], yticklabels=['Confirmed', 'Candidate'], ax=ax)
                plt.xlabel('Predicted')
                plt.ylabel('Actual')
                st.pyplot(fig)
            
            st.markdown("---")
            st.markdown("## ✨ Feature Importance")
            st.write("Which data points did the model find most predictive?")
            
            importances = pd.DataFrame({
                'feature': feature_names,
                'importance': model.feature_importances_
            }).sort_values('importance', ascending=False).head(15)

            fig_importance, ax_importance = plt.subplots(figsize=(10, 6))
            sns.barplot(x='importance', y='feature', data=importances, ax=ax_importance, palette='viridis')
            plt.title('Top 15 Most Important Features')
            st.pyplot(fig_importance)

# --- PREDICTION INTERFACE ---
model_path = Path("model.pkl")
if model_path.exists():
    st.markdown("---")
    st.markdown(f"<h2 style='color: {SECONDARY_COLOR};'>🛰️ Predict on New Data</h2>", unsafe_allow_html=True)
    st.write("Enter the orbital parameters below to classify a new object of interest.")

    model = pickle.load(open('model.pkl', 'rb'))
    scaler = pickle.load(open('scaler.pkl', 'rb'))
    imputer = pickle.load(open('imputer.pkl', 'rb'))
    
    if hasattr(imputer, 'feature_names_in_'):
        feature_names = imputer.feature_names_in_
    else:
        temp_df = preprocess_data(df_raw)[0]
        feature_names = temp_df.columns.tolist()

    input_data = {}
    cols = st.columns(3)
    key_features = [
        'koi_fpflag_ss', 'koi_fpflag_co', 'koi_fpflag_nt', 'koi_model_snr',
        'koi_duration', 'koi_prad', 'koi_depth', 'koi_period', 'koi_impact'
    ]
    
    for i, feature in enumerate(feature_names):
        col_index = i % 3
        label = f"**{feature}**" if feature in key_features else feature
        input_data[feature] = cols[col_index].number_input(label=label, value=0.0, format="%.4f", key=f"input_{feature}")

    if st.button("CLASSIFY 🔎", type="primary"):
        input_df = pd.DataFrame([input_data])[feature_names]
        input_scaled = scaler.transform(input_df)
        prediction_proba = model.predict_proba(input_scaled)
        prediction = model.predict(input_scaled)
        
        st.markdown("### Prediction Result")
        if prediction[0] == 0:
            st.success("✅ CONFIRMED EXOPLANET")
            st.write(f"The model is **{prediction_proba[0][0]*100:.2f}%** confident.")
            st.image("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg", caption="A new world awaits!")
        else:
            st.warning("⚠️ CANDIDATE / POTENTIAL FALSE POSITIVE")
            st.write(f"The model is **{prediction_proba[0][1]*100:.2f}%** confident this is a candidate, not yet a confirmed exoplanet.")
            st.image("https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg", caption="Further analysis may be needed.")
else:
    st.markdown("---")

    st.info("Please upload a dataset and train a model to enable the prediction interface.")
