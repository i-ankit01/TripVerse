import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import pages
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import DashboardHome from './pages/DashboardHome'
import DashboardTripPlanner from './pages/DashboardTripPlanner'
import DashboardExplore from './pages/DashboardExplore'
import DashboardPreview from './pages/DashboardPreview'
import DashboardBookings from './pages/DashboardBookings'
import DashboardChat from './pages/DashboardChat'
import DashboardSettings from './pages/DashboardSettings'

// Import layouts
import DashboardLayout from './layouts/DashboardLayout'
import DestinationDetailPage from './pages/DestinationDetailPage'

/**
 * App - Main application component with routing setup
 * Defines all the routes and their corresponding components
 */
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    
                    {/* Protected Dashboard Routes */}
                    {/* All dashboard routes are wrapped with DashboardLayout for consistent sidebar navigation */}
                    <Route path="/dashboard/home" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
                    <Route path="/dashboard/trip-planner" element={<DashboardLayout><DashboardTripPlanner /></DashboardLayout>} />
                    <Route path="/dashboard/explore" element={<DashboardLayout><DashboardExplore /></DashboardLayout>} />
                    <Route path="/dashboard/preview" element={<DashboardLayout><DashboardPreview /></DashboardLayout>} />
                    <Route path="/dashboard/bookings" element={<DashboardLayout><DashboardBookings /></DashboardLayout>} />
                    <Route path="/dashboard/chat" element={<DashboardLayout><DashboardChat /></DashboardLayout>} />
                    <Route path="/dashboard/settings" element={<DashboardLayout><DashboardSettings /></DashboardLayout>} />
                    <Route path="/dashboard/explore/:id" element={<DashboardLayout><DestinationDetailPage/></DashboardLayout>} />
                    
                    {/* Redirect to home for unknown routes */}
                    <Route path="*" element={<Landing />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
