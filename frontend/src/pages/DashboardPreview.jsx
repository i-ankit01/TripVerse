import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, Headphones, Sparkles, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import React from 'react'


export default function DashboardPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Coming Soon
          </Badge>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-orange-500 rounded-full mb-6">
              <Eye className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">AR/VR Previews</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience Jharkhand's breathtaking destinations in immersive 3D before you visit. Virtual tours that
              bring you closer to nature's wonders.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">360° Virtual Tours</h3>
                <p className="text-sm text-gray-600">
                  Explore waterfalls, temples, and wildlife sanctuaries in stunning 360-degree views
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AR Experiences</h3>
                <p className="text-sm text-gray-600">
                  Use your phone to see historical information and wildlife facts overlaid on real locations
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">VR Previews</h3>
                <p className="text-sm text-gray-600">
                  Get a realistic preview of your destination with immersive VR technology
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Info */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-green-500 to-orange-500 text-white">
            <CardContent className="p-8">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Launching Soon</h2>
              <p className="text-green-50 mb-6">
                We're working hard to bring you the most immersive way to explore Jharkhand. Get ready for virtual
                adventures like never before!
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Notify Me When Ready
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
