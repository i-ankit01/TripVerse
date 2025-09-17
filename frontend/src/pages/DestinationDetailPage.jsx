"use client"
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Phone,
  Globe,
  Car,
  Plane,
  Train,
  Camera,
  Users,
  Bed,
  Shield,
  CheckCircle,
  XCircle,
  Navigation,
} from "lucide-react"

// Sample destination data - in real app, this would come from API
const destinationData = {
  "1": {
    "id": "6",
    "name": "Hundru Falls",
    "category": ["Waterfall", "Nature", "Adventure"],
    "description": "One of the highest waterfalls in Jharkhand, plunging from a height of 98 meters on the Subarnarekha River.",
    "location": {
      "district": "Ranchi",
      "city": "Hundru",
      "coordinates": {
        "latitude": "23.4216",
        "longitude": "85.4696"
      }
    },
    "entry_fee": {
      "indian": "₹10",
      "foreigner": "₹50",
      "children": "₹5"
    },
    "timings": {
      "opening_time": "08:00 AM",
      "closing_time": "05:00 PM",
      "best_season": ["Monsoon", "Winter"]
    },
    "activities": ["Photography", "Trekking", "Picnic"],
    "nearby_attractions": [
      {"name": "Jonha Falls", "distance_km": "35"},
      {"name": "Dassam Falls", "distance_km": "45"}
    ],
    "how_to_reach": {
      "nearest_airport": "Birsa Munda Airport, 45 km",
      "nearest_railway_station": "Ranchi Railway Station, 40 km",
      "road_connectivity": "Accessible via Ranchi-Purulia Road"
    },
    "facilities": {
      "restrooms": true,
      "parking": true,
      "food_stalls": true,
      "guided_tours": false,
      "wheelchair_accessible": false
    },
    "accommodation": [
      {
        "hotel_name": "Hotel Ranchi Ashok",
        "type": "Mid-Range",
        "price_range": "₹2000 - ₹3500",
        "distance_from_place": "40 km"
      }
    ],
    "safety_tips": ["Be careful on slippery rocks", "Avoid swimming during strong currents"],
    "local_culture": {
      "festivals": ["Karma", "Sarhul"],
      "art_forms": ["Nagpuri Folk Songs"],
      "famous_foods": ["Dhuska", "Chilka Roti"]
    },
    "contact_info": {
      "tourism_office": "+91-651-678901",
      "website": "https://jharkhandtourism.gov.in"
    },
    "images": [
      "https://content.jdmagicbox.com/v2/comp/ranchi/b2/0651px651.x651.220920210526.h4b2/catalogue/hundru-fall-picnic-spot-ranchi-picnic-spots-kze338GvBX.jpg",
      "https://example.com/hundru2.jpg"
    ],
    "rating": {
      "average": 4.4,
      "total_reviews": 1500
    }
  },
}

export default function DestinationDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const destination = destinationData[id]

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Explore
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-balance">{destination.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  {destination.location.city}, {destination.location.district}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image & Basic Info */}
            <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={destination.images[0] || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Categories */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {destination.category.map((cat, index) => (
                    <Badge key={index} className="bg-primary text-primary-foreground">
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{destination.rating.average}</span>
                  <span className="text-white/70 text-sm">({destination.rating.total_reviews})</span>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty leading-relaxed">{destination.description}</p>
              </CardContent>
            </Card>

            {/* Timings & Entry Fee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Timings & Best Season
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opening Time:</span>
                    <span className="font-medium">{destination.timings.opening_time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing Time:</span>
                    <span className="font-medium">{destination.timings.closing_time}</span>
                  </div>
                  <Separator />
                  <div>
                    <span className="text-muted-foreground block mb-2">Best Season:</span>
                    <div className="flex gap-2">
                      {destination.timings.best_season.map((season, index) => (
                        <Badge key={index} variant="secondary">
                          {season}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Entry Fee
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Indian Citizens:</span>
                    <span className="font-medium text-green-600">{destination.entry_fee.indian}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Foreign Nationals:</span>
                    <span className="font-medium text-green-600">{destination.entry_fee.foreigner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Children:</span>
                    <span className="font-medium text-green-600">{destination.entry_fee.children}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activities */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Reach */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  How to Reach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="font-medium">By Air:</span>
                    <p className="text-muted-foreground">{destination.how_to_reach.nearest_airport}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="font-medium">By Train:</span>
                    <p className="text-muted-foreground">{destination.how_to_reach.nearest_railway_station}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="font-medium">By Road:</span>
                    <p className="text-muted-foreground">{destination.how_to_reach.road_connectivity}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Culture */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Local Culture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-medium block mb-2">Festivals:</span>
                  <div className="flex flex-wrap gap-2">
                    {destination.local_culture.festivals.map((festival, index) => (
                      <Badge key={index} variant="secondary">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium block mb-2">Art Forms:</span>
                  <div className="flex flex-wrap gap-2">
                    {destination.local_culture.art_forms.map((art, index) => (
                      <Badge key={index} variant="secondary">
                        {art}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium block mb-2">Famous Foods:</span>
                  <div className="flex flex-wrap gap-2">
                    {destination.local_culture.famous_foods.map((food, index) => (
                      <Badge key={index} variant="secondary">
                        {food}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Facilities */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Facilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(destination.facilities).map(([facility, available]) => (
                  <div key={facility} className="flex items-center justify-between">
                    <span className="text-sm capitalize">{facility.replace("_", " ")}</span>
                    {available ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nearby Attractions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {destination.nearby_attractions.map((attraction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{attraction.name}</span>
                    <Badge variant="outline">{attraction.distance_km} km</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Accommodation */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {destination.accommodation.map((hotel, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium">{hotel.hotel_name}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <Badge variant="secondary">{hotel.type}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Price Range:</span>
                        <span className="font-medium">{hotel.price_range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Distance:</span>
                        <span>{hotel.distance_from_place}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {destination.safety_tips.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{destination.contact_info.tourism_office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={destination.contact_info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Official Website
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
