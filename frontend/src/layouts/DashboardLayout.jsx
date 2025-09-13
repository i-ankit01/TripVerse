import React from 'react'
import Sidebar from '../components/Sidebar'

/**
 * DashboardLayout - Layout wrapper for dashboard pages
 * Provides a sidebar navigation and main content area
 */
const DashboardLayout = ({ children }) => {
    return (
        <div className='flex h-screen bg-gray-50'>
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content Area */}
            <div className='flex-1 flex flex-col overflow-hidden'>
                {/* Top Header Bar */}
                <header className='bg-white shadow-sm border-b border-gray-200 px-6 py-4'>
                    <h1 className='text-2xl font-bold text-gray-800'>Jharkhand Darshan</h1>
                </header>
                
                {/* Main Content */}
                <main className='flex-1 overflow-y-auto p-6'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
