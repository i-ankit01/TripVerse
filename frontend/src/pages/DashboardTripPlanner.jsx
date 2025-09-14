
import React, { useState } from "react"
import { TripPlannerForm } from "@/components/TripPlannerForm"
import { TripPlannerResult } from "@/components/TripPlannerResult"
import { Plane, MapPin, Calendar, Users } from "lucide-react"
import { getOutput } from "@/services/geminiService"

export default function DashboardTripPlanner() {
  const [tripData, setTripData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTripSubmit = async (formData) => {
    setIsLoading(true)

    try {
      console.log("Sending to backend:", JSON.stringify(formData, null, 2))

      const data = await getOutput(formData)

      setTripData(data)
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
