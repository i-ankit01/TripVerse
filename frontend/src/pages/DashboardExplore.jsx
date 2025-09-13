import React from 'react'

/**
 * DashboardExplore - Explore page for discovering places
 * Placeholder content for the explore functionality
 */
const DashboardExplore = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>Explore Jharkhand Attractions</h1>
                <p className='text-lg text-gray-600'>
                    Discover the hidden gems and cultural treasures of Jharkhand (Coming Soon)
                </p>
            </div>
            
            {/* Search Bar */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <input
                        type='text'
                        placeholder='Search places, cities, or attractions...'
                        className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    />
                    <button className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200'>
                        Search
                    </button>
                </div>
            </div>
            
            {/* Categories */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200'>
                    <div className='text-4xl mb-4'>🏛️</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>Historical Sites</h3>
                    <p className='text-gray-600'>Explore ancient monuments and historical landmarks</p>
                </div>
                
                <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200'>
                    <div className='text-4xl mb-4'>🌿</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>Natural Beauty</h3>
                    <p className='text-gray-600'>Discover national parks and scenic landscapes</p>
                </div>
                
                <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200'>
                    <div className='text-4xl mb-4'>🎭</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>Cultural Heritage</h3>
                    <p className='text-gray-600'>Experience local traditions and festivals</p>
                </div>
            </div>
            
            {/* Featured Places */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Featured Places</h2>
                <div className='space-y-4'>
                    <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                        <div className='text-3xl mr-4'>🏔️</div>
                        <div className='flex-1'>
                            <h3 className='font-semibold text-gray-900'>Netarhat</h3>
                            <p className='text-gray-600'>Queen of Chotanagpur - A hill station with breathtaking views</p>
                        </div>
                        <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'>
                            Explore
                        </button>
                    </div>
                    
                    <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                        <div className='text-3xl mr-4'>🌊</div>
                        <div className='flex-1'>
                            <h3 className='font-semibold text-gray-900'>Hundru Falls</h3>
                            <p className='text-gray-600'>One of the most spectacular waterfalls in Jharkhand</p>
                        </div>
                        <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'>
                            Explore
                        </button>
                    </div>
                    
                    <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                        <div className='text-3xl mr-4'>🏛️</div>
                        <div className='flex-1'>
                            <h3 className='font-semibold text-gray-900'>Jagannath Temple</h3>
                            <p className='text-gray-600'>Ancient temple with rich architectural heritage</p>
                        </div>
                        <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'>
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardExplore
