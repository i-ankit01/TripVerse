import React , { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Plane,
  MapPin,
  Calendar,
  TrendingUp,
  Heart,
  BookOpen,
  Cloud,
  Sun,
  CloudRain,
  Bot,
  Eye,
  Activity,
  Clock,
} from "lucide-react"

export default function DashboardHome() {
  const [userStats] = useState({
    totalTrips: 12,
    totalBookings: 8,
    favorites: 24,
    onlineHours: 156,
  })

  const weatherData = [
    { city: "Ranchi", temp: 28, condition: "Sunny", icon: Sun },
    { city: "Jamshedpur", temp: 32, condition: "Partly Cloudy", icon: Cloud },
    { city: "Dhanbad", temp: 26, condition: "Rainy", icon: CloudRain },
    { city: "Bokaro", temp: 30, condition: "Sunny", icon: Sun },
  ]

  const recentActivities = [
    { id: 1, action: "Booked trip to Dassam Falls", time: "2 hours ago", type: "booking" },
    { id: 2, action: "Added Netarhat to favorites", time: "5 hours ago", type: "favorite" },
    { id: 3, action: "Completed trip to Hundru Falls", time: "1 day ago", type: "completed" },
    { id: 4, action: "Viewed 3D preview of Patratu Valley", time: "2 days ago", type: "preview" },
    { id: 5, action: "Planned 5-day Jharkhand tour", time: "3 days ago", type: "planning" },
  ]

  const navigationLinks = [
    { name: "Trip Planner", href: "/trip-planner", icon: Plane, description: "Plan your perfect trip" },
    { name: "Explore", href: "/explore", icon: MapPin, description: "Discover new destinations" },
    { name: "AR/VR Previews", href: "/ar-vr", icon: Eye, description: "Virtual destination tours" },
    { name: "My Bookings", href: "/bookings", icon: BookOpen, description: "Manage your bookings" },
    { name: "ChatBot", href: "/chat", icon: Bot, description: "AI travel assistant" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Plane className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">TripVerse</h1>
                <p className="text-sm text-muted-foreground">Your intelligent travel companion</p>
              </div>
            </div>

            <nav className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium text-primary">
                Home
              </Link>
              <Link to="/trip-planner" className="text-sm font-medium hover:text-primary transition-colors">
                Plan Trip
              </Link>
              <Link to="/explore" className="text-sm font-medium hover:text-primary transition-colors">
                Explore
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Welcome back, Explorer! 🌟</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ready for your next adventure? Discover amazing destinations, plan perfect trips, and create unforgettable
            memories.
          </p>
        </section>

        {/* Quick Navigation */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {navigationLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{link.name}</h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* User Stats */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Your Travel Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Trips</p>
                    <p className="text-3xl font-bold text-primary">{userStats.totalTrips}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <p className="text-3xl font-bold text-emerald-600">{userStats.totalBookings}</p>
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Favorites</p>
                    <p className="text-3xl font-bold text-red-500">{userStats.favorites}</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-full">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Online Hours</p>
                    <p className="text-3xl font-bold text-blue-600">{userStats.onlineHours}h</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activity Graph */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Activity This Week
              </CardTitle>
              <CardDescription>Track your travel planning engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Monday</span>
                  <div className="flex-1 mx-4">
                    <Progress value={85} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">8.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tuesday</span>
                  <div className="flex-1 mx-4">
                    <Progress value={60} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">6.0h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Wednesday</span>
                  <div className="flex-1 mx-4">
                    <Progress value={95} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">9.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Thursday</span>
                  <div className="flex-1 mx-4">
                    <Progress value={70} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">7.0h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Friday</span>
                  <div className="flex-1 mx-4">
                    <Progress value={40} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">4.0h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Weather Widgets */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Jharkhand Weather</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weatherData.map((weather) => (
              <Card key={weather.city} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{weather.city}</h4>
                    <weather.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{weather.temp}°C</p>
                    <p className="text-sm text-muted-foreground">{weather.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activities */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Your latest travel planning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      {activity.type === "booking" && <BookOpen className="h-4 w-4 text-primary" />}
                      {activity.type === "favorite" && <Heart className="h-4 w-4 text-red-500" />}
                      {activity.type === "completed" && <MapPin className="h-4 w-4 text-green-500" />}
                      {activity.type === "preview" && <Eye className="h-4 w-4 text-blue-500" />}
                      {activity.type === "planning" && <Calendar className="h-4 w-4 text-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
