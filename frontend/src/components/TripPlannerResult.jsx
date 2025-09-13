import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DollarSign,
  MapPin,
  Calendar,
  Star,
  Utensils,
  Building,
  Camera,
  Plane,
  Car,
  Loader2,
  Sparkles,
} from "lucide-react"

export function TripPlannerResult({ data, isLoading }) {
  if (isLoading) {
    return (
      <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Planning Your Perfect Trip</h3>
          <p className="text-muted-foreground text-center text-sm">
            Our AI is analyzing destinations, finding the best deals, and creating your personalized itinerary...
          </p>
        </CardContent>
      </Card>
    )
  }

  if (!data) {
    return (
      <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="p-4 bg-muted rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Ready to Plan Your Adventure?</h3>
          <p className="text-muted-foreground text-center text-sm">
            Fill out the form to get your personalized AI-generated trip plan with costs, itinerary, and
            recommendations.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Cost Overview */}
      <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Estimated Cost
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              ${data.totalCost.min.toLocaleString()} - ${data.totalCost.max.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Total trip cost for all travelers</p>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <Plane className="h-4 w-4" />
                Flights
              </span>
              <span>{data.transportation.flights.estimated}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                Local Transport
              </span>
              <span>{data.transportation.local.estimated}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Itinerary */}
      <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Daily Itinerary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.itinerary.map((day, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4 last:pb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                  {day.day}
                </div>
                <h4 className="font-semibold">Day {day.day}</h4>
              </div>
              <div className="space-y-1">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-start gap-2 text-sm">
                    <MapPin className="h-3 w-3 text-muted-foreground mt-1 flex-shrink-0" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="space-y-4">
        {/* Hotels */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Building className="h-4 w-4 text-primary" />
              Recommended Hotels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.recommendations.hotels.map((hotel, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <h5 className="font-medium text-sm">{hotel.name}</h5>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{hotel.rating}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {hotel.price}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Restaurants */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Utensils className="h-4 w-4 text-primary" />
              Dining Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.recommendations.restaurants.map((restaurant, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <h5 className="font-medium text-sm">{restaurant.name}</h5>
                  <p className="text-xs text-muted-foreground">{restaurant.cuisine}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {restaurant.price}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Attractions */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Camera className="h-4 w-4 text-primary" />
              Must-Visit Attractions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.recommendations.attractions.map((attraction, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <h5 className="font-medium text-sm">{attraction.name}</h5>
                  <p className="text-xs text-muted-foreground">{attraction.type}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {attraction.duration}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
