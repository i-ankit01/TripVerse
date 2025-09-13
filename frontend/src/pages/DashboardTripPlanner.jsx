import React from 'react'

/**
 * DashboardTripPlanner - AI Trip Planner page
 * Placeholder page for the trip planning functionality
 */
const DashboardTripPlanner = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>AI Trip Planner</h1>
                <p className='text-lg text-gray-600'>
                    Plan your perfect Jharkhand adventure with our AI-powered trip planner
                </p>
            </div>
            
            {/* Coming Soon Card */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center'>
                <div className='text-6xl mb-6'>🤖</div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>Coming Soon</h2>
                <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                    Our AI trip planner is currently under development. Soon you'll be able to create 
                    personalized itineraries based on your preferences, budget, and time constraints.
                </p>
                
                {/* Feature Preview */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                    <div className='p-4 bg-indigo-50 rounded-lg border border-indigo-100'>
                        <div className='text-3xl mb-3'>🎯</div>
                        <h3 className='font-semibold text-indigo-900 mb-2'>Smart Recommendations</h3>
                        <p className='text-indigo-700 text-sm'>AI-powered suggestions based on your interests</p>
                    </div>
                    
                    <div className='p-4 bg-green-50 rounded-lg border border-green-100'>
                        <div className='text-3xl mb-3'>💰</div>
                        <h3 className='font-semibold text-green-900 mb-2'>Budget Planning</h3>
                        <p className='text-green-700 text-sm'>Optimize your trip within your budget</p>
                    </div>
                    
                    <div className='p-4 bg-purple-50 rounded-lg border border-purple-100'>
                        <div className='text-3xl mb-3'>⏰</div>
                        <h3 className='font-semibold text-purple-900 mb-2'>Time Management</h3>
                        <p className='text-purple-700 text-sm'>Efficient scheduling for maximum experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTripPlanner
