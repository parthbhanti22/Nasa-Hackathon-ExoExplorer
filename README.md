# ExoVate - An Interactive Exoplanet Explorer

Welcome to **ExoVate**, an interactive web platform that brings the science of exoplanet discovery to your fingertips. This project leverages a machine learning model to classify exoplanet candidates from NASA's Kepler mission data and presents it through a rich, educational, and visually stunning user interface.

<img src="https://github.com/parthbhanti22/Nasa-Hackathon-ExoExplorer/blob/main/Picture1.png" alt="Alt text" width="800">

<img src="https://github.com/parthbhanti22/Nasa-Hackathon-ExoExplorer/blob/main/Picture2.png" alt="Alt text" width="800">


---

## 🚀 Live Demo

Explore the live application here: **[https://exovate-exoexplorer.vercel.app/](https://exovate-exoexplorer.vercel.app/)**

---

## ✨ Key Features

ExoVate is more than just a data browser; it's a comprehensive educational tool packed with features:

* 🌌 **Exoplanet Explorer:** A searchable and filterable catalog of confirmed exoplanets, with detailed information and visuals for each celestial body.
* 🔬 **Interactive Simulations:**
    * **Transit Simulator:** Visualize how the transit method works by seeing a planet's light curve change as it passes its star.
    * **Orbit Simulator:** Explore the dynamics of planetary orbits.
    * **Habitable Zone Calculator:** Input stellar parameters to calculate and visualize the "Goldilocks" zone where liquid water could exist.
* 🎮 **Educational Games:**
    * **Exoplanet Quiz:** Test your knowledge on fascinating facts about exoplanets.
    * **Planet Hunter & Memory Games:** Engage in fun challenges designed to make learning memorable.
* 🤖 **AI Model Insights:** We believe in transparency. A dedicated section visualizes the performance of our classification model, complete with a confusion matrix, classification report, and other key metrics.
* 📚 **Encyclopedia:** An integrated knowledge base with information about space missions, scientific terminology, and key astronomical concepts.

---

## 🛠️ Tech Stack

This application was built using a modern, high-performance technology stack to ensure a seamless and responsive user experience.

* **Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Deployment:** Vercel
* **ML** Scikit-learn Numpy Matplotlib
* **ML deployment** streamlit

---

## 🔧 Getting Started & Local Development

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/parthbhanti22/Nasa-Hackathon-ExoExplorer.git](https://github.com/parthbhanti22/Nasa-Hackathon-ExoExplorer.git)
    cd Nasa-Hackathon-ExoExplorer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to see the application running.

---

## 🌟 Future Work

ExoVate is an evolving project. Future plans include:

* Integrating new datasets from missions.
* Implementing user accounts to track progress and save favorite exoplanets.
* Enhancing the AI model with more advanced deep learning architectures.
