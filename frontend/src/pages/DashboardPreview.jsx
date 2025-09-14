import React from 'react'

/**
 * DashboardPreview - AR/VR Preview page
 * Placeholder page for AR/VR preview functionality
 */
const DashboardPreview = () => {
    return (
        <div className='max-w-6xl mx-auto p-6'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>AR/VR Previews</h1>
                <p className='text-lg text-gray-600'>
                    Experience Jharkhand's attractions in immersive AR/VR before you visit
                </p>
            </div>
            
            {/* Coming Soon Card */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center'>
                <div className='text-6xl mb-6'>🥽</div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>Coming Soon</h2>
                <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                    Get ready to explore Jharkhand like never before! Our AR/VR preview feature 
                    will let you virtually visit attractions and get a real feel for the places.
                </p>
                
                {/* Feature Preview */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div className='p-6 bg-blue-50 rounded-lg border border-blue-100'>
                        <div className='text-4xl mb-4'>📱</div>
                        <h3 className='font-semibold text-blue-900 mb-2'>AR Experience</h3>
                        <p className='text-blue-700 text-sm'>
                            Point your phone camera and see attractions overlaid in your environment
                        </p>
                    </div>
                    
                    <div className='p-6 bg-purple-50 rounded-lg border border-purple-100'>
                        <div className='text-4xl mb-4'>🥽</div>
                        <h3 className='font-semibold text-purple-900 mb-2'>VR Tours</h3>
                        <p className='text-purple-700 text-sm'>
                            Immerse yourself in 360° virtual tours of Jharkhand's most beautiful places
                        </p>
                    </div>
                </div>
                
                {/* Sample Attractions */}
                <div className='mt-8'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Preview These Attractions</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200'>
                            <div className='text-2xl mb-2'>🏔️</div>
                            <h4 className='font-medium text-gray-900'>Netarhat</h4>
                            <p className='text-gray-600 text-sm'>Queen of Chotanagpur</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200'>
                            <div className='text-2xl mb-2'>🌊</div>
                            <h4 className='font-medium text-gray-900'>Hundru Falls</h4>
                            <p className='text-gray-600 text-sm'>Spectacular Waterfall</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200'>
                            <div className='text-2xl mb-2'>🏛️</div>
                            <h4 className='font-medium text-gray-900'>Jagannath Temple</h4>
                            <p className='text-gray-600 text-sm'>Ancient Heritage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPreview
