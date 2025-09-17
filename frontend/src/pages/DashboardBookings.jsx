import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import React from 'react'

export default function DashboardBooking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Coming Soon
          </Badge>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-green-500 rounded-full mb-6">
              <Calendar className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">My Bookings</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Manage all your Jharkhand travel bookings in one place. Track your adventures, modify plans, and create
              memories.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trip Management</h3>
                <p className="text-sm text-gray-600">
                  View, modify, and cancel your bookings for hotels, tours, and activities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Group Bookings</h3>
                <p className="text-sm text-gray-600">
                  Coordinate group trips and manage bookings for family and friends
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                <p className="text-sm text-gray-600">
                  Get instant notifications about booking confirmations and travel updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Info */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-500 to-green-500 text-white">
            <CardContent className="p-8">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Launching Soon</h2>
              <p className="text-orange-50 mb-6">
                Your personal travel dashboard is coming soon! Manage all your Jharkhand adventures from booking to
                memories in one seamless experience.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                Get Early Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
