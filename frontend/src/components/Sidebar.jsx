import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Sidebar - Navigation sidebar for dashboard pages
 * Contains links to different dashboard sections
 */
const Sidebar = () => {
    const location = useLocation()
    
    // Navigation items for the sidebar
    // Each item has a path, label, and icon for the dashboard navigation
    const navItems = [
        { path: '/dashboard/home', label: 'Home', icon: '🏠' },
        { path: '/dashboard/trip-planner', label: 'Trip Planner', icon: '🗺️' },
        { path: '/dashboard/explore', label: 'Explore', icon: '🔍' },
        { path: '/dashboard/preview', label: 'Preview (AR/VR)', icon: '🥽' },
        { path: '/dashboard/bookings', label: 'My Bookings', icon: '📋' },
        { path: '/dashboard/chat', label: 'Chatbot', icon: '💬' },
        { path: '/dashboard/settings', label: 'Settings', icon: '⚙️' }
    ]
    
    return (
        <div className='w-64 bg-white shadow-lg border-r border-gray-200'>
            {/* Sidebar Header */}
            <div className='p-6 border-b border-gray-200'>
                <h2 className='text-lg font-semibold text-gray-800'>Dashboard</h2>
            </div>
            
            {/* Navigation Links */}
            <nav className='mt-6'>
                <ul className='space-y-2 px-4'>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-indigo-100 text-indigo-700 border-r-2 border-indigo-500'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                                    }`}
                                >
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='font-medium'>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
            {/* Sign Out Button */}
            <div className='absolute bottom-6 left-4 right-4'>
                <Link
                    to='/'
                    className='flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors duration-200'
                >
                    <span className='text-xl'>🚪</span>
                    <span className='font-medium'>Sign Out</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
