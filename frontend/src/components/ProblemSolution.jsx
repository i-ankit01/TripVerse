import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Zap } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Lack of Information",
    description: "Limited access to comprehensive travel information about Jharkhand's hidden gems.",
  },
  {
    icon: AlertTriangle,
    title: "Poor Digital Infrastructure",
    description: "Outdated booking systems and lack of digital presence for local businesses.",
  },
  {
    icon: AlertTriangle,
    title: "Unorganized Services",
    description: "Fragmented tourism services with no centralized platform for planning.",
  },
  {
    icon: AlertTriangle,
    title: "Limited Outreach",
    description: "Local artisans and communities struggle to reach potential tourists.",
  },
]

const solutions = [
  {
    icon: CheckCircle,
    title: "AI-Powered Information Hub",
    description: "Comprehensive database with AI-curated content about every destination in Jharkhand.",
  },
  {
    icon: CheckCircle,
    title: "Modern Digital Platform",
    description: "State-of-the-art booking system with seamless user experience and mobile optimization.",
  },
  {
    icon: CheckCircle,
    title: "Integrated Service Ecosystem",
    description: "One-stop platform connecting travelers with accommodations, guides, and experiences.",
  },
  {
    icon: CheckCircle,
    title: "Community Empowerment",
    description: "Direct marketplace connecting local artisans and communities with global tourists.",
  },
]

export function ProblemSolution() {
  return (
    <section id="problems" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Current Challenges
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Problems We're
              <span className="text-destructive"> Solving</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jharkhand's tourism potential remains untapped due to several systemic challenges that prevent travelers
              from experiencing its true beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              <Zap className="w-4 h-4" />
              Our Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We're
              <span className="gradient-text"> Transforming Tourism</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive digital platform addresses each challenge with innovative technology and
              community-focused solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
