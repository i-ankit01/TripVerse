import React from 'react'

/**
 * DashboardHome - Main dashboard page
 * Welcome message and overview of the platform
 */
const DashboardHome = () => {
    return (
        <div className='max-w-6xl mx-auto p-6'>
            {/* Welcome Section */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                    Welcome to Jharkhand Darshan Dashboard
                </h1>
                <p className='text-lg text-gray-600 mb-6'>
                    Explore the beauty and culture of Jharkhand through our interactive platform.
                </p>
                
                {/* Quick Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-indigo-50 rounded-lg p-6 border border-indigo-100'>
                        <div className='flex items-center'>
                            <div className='text-3xl mr-4'>🗺️</div>
                            <div>
                                <h3 className='text-lg font-semibold text-indigo-900'>Explore</h3>
                                <p className='text-indigo-700'>Discover places</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-green-50 rounded-lg p-6 border border-green-100'>
                        <div className='flex items-center'>
                            <div className='text-3xl mr-4'>💬</div>
                            <div>
                                <h3 className='text-lg font-semibold text-green-900'>Chat</h3>
                                <p className='text-green-700'>AI Assistant</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-purple-50 rounded-lg p-6 border border-purple-100'>
                        <div className='flex items-center'>
                            <div className='text-3xl mr-4'>📚</div>
                            <div>
                                <h3 className='text-lg font-semibold text-purple-900'>Learn</h3>
                                <p className='text-purple-700'>Cultural insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
            {/* Recent Activity */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Recent Activity</h2>
                <div className='space-y-4'>
                    <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                        <div className='text-2xl mr-4'>🎯</div>
                        <div>
                            <h3 className='font-semibold text-gray-900'>Getting Started</h3>
                            <p className='text-gray-600'>Complete your profile to get personalized recommendations</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                        <div className='text-2xl mr-4'>🌟</div>
                        <div>
                            <h3 className='font-semibold text-gray-900'>Featured Places</h3>
                            <p className='text-gray-600'>Check out the most popular destinations in Jharkhand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
