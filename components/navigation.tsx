"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Rocket, BarChart3, Telescope, BookOpen, Gamepad2, Sparkles, Menu } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Rocket },
  { href: "/model", label: "ML Model", icon: BarChart3 },
  { href: "/explorer", label: "Live Explorer", icon: Telescope },
  { href: "/encyclopedia", label: "Encyclopedia", icon: BookOpen },
  { href: "/simulations", label: "Simulations", icon: Sparkles },
  { href: "/games", label: "Games", icon: Gamepad2 },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 border-2 border-primary">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ExoML Explorer
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn("gap-2", isActive && "bg-primary/20 text-primary hover:bg-primary/30")}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 h-12",
                            isActive && "bg-primary/20 text-primary hover:bg-primary/30",
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-base">{item.label}</span>
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
