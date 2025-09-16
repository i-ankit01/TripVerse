'use client'
import React from 'react'
import{Card,  CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Eye, Shield, Navigation, ShoppingBag, ArrowRight, Sparkles } from "lucide-react"
const features = [
 {
    icon: Brain,
    title: "AI-Powered Itineraries",
    description:
      "Get personalized travel plans crafted by advanced AI based on your preferences, budget, and interests.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Multilingual Chatbot",
    description: "Chat in your preferred language with our AI assistant that understands local dialects and customs.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Eye,
    title: "AR/VR Previews",
    description: "Experience destinations before you visit with immersive AR/VR technology and 360° virtual tours.",
    color: "from-purple-500 to-pink-500",
  },
{
    icon: Shield,
    title: "Cultural Preservation",
    description: "Secure transactions and verified reviews powered by blockchain technology for complete transparency.",
    color: "from-orange-500 to-red-500",
  },
   {
    icon: Navigation,
    title: "Real-time Transport",
    description: "Live updates on local transport, traffic conditions, and the best routes to your destinations.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "Local Marketplace",
    description: "Discover and purchase authentic handicrafts, book homestays, and support local artisans directly.",
    color: "from-green-500 to-emerald-500",
  },

]
function FeaturesSection() {

  return (
    <>
     <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Platform Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for the
            <span className="gradient-text"> Perfect Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge platform combines AI technology with local expertise to create unforgettable travel
            experiences in Jharkhand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group card-3d border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}


export default FeaturesSection;
