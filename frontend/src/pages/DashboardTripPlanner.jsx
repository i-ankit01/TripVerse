
import React, { useState } from "react"
import { TripPlannerForm } from "@/components/TripPlannerForm"
import { TripPlannerResult } from "@/components/TripPlannerResult"
import { Plane, MapPin, Calendar, Users } from "lucide-react"

export default function DashboardTripPlanner() {
  const [tripData, setTripData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTripSubmit = async (formData) => {
    setIsLoading(true)

    // Simulate API call - replace with your actual backend endpoint
    try {
      console.log("Sending to backend:", JSON.stringify(formData, null, 2))

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response - replace with actual API response
      const mockResponse = {
        totalCost: {
          min: 1200,
          max: 2500,
          currency: "USD",
        },
        itinerary: [
          {
            day: 1,
            activities: ["Arrive and check-in", "Explore city center", "Welcome dinner"],
            locations: ["Airport", "Hotel", "Downtown"],
          },
          {
            day: 2,
            activities: ["Museum visit", "Local market tour", "Sunset viewing"],
            locations: ["Art Museum", "Central Market", "Viewpoint Hill"],
          },
          {
            day: 3,
            activities: ["Adventure activity", "Local cuisine experience", "Shopping"],
            locations: ["Adventure Park", "Food District", "Shopping Mall"],
          },
        ],
        recommendations: {
          hotels: [
            { name: "Grand Plaza Hotel", price: "$120/night", rating: 4.5 },
            { name: "Boutique Inn", price: "$85/night", rating: 4.2 },
            { name: "Luxury Resort", price: "$250/night", rating: 4.8 },
          ],
          restaurants: [
            { name: "Local Flavors", cuisine: "Traditional", price: "$$" },
            { name: "Rooftop Bistro", cuisine: "International", price: "$$$" },
            { name: "Street Food Market", cuisine: "Various", price: "$" },
          ],
          attractions: [
            { name: "Historic Cathedral", type: "Cultural", duration: "2 hours" },
            { name: "Adventure Park", type: "Recreation", duration: "4 hours" },
            { name: "Art Gallery", type: "Cultural", duration: "1.5 hours" },
          ],
        },
        transportation: {
          flights: { estimated: "$400-800" },
          local: { estimated: "$50-100" },
        },
      }

      setTripData(mockResponse)
    } catch (error) {
      console.error("Error planning trip:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-balance">AI Trip Planner</h1>
              <p className="text-sm text-muted-foreground">Plan your perfect adventure with AI</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Trip Planning Form */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-balance mb-2">
                Where will your next adventure take you?
              </h2>
              <p className="text-muted-foreground text-pretty">
                Tell us about your dream trip and let our AI create the perfect itinerary for you.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Smart Routes</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Perfect Timing</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Group Friendly</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">All Inclusive</p>
              </div>
            </div>

            <TripPlannerForm onSubmit={handleTripSubmit} isLoading={isLoading} />
          </div>

          {/* Results Section */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <TripPlannerResult data={tripData} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  )
}
