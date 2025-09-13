import React from 'react'

/**
 * DashboardBookings - My Bookings page
 * Placeholder page for managing user bookings and reservations
 */
const DashboardBookings = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>My Bookings</h1>
                <p className='text-lg text-gray-600'>
                    Manage your reservations and track your Jharkhand travel plans
                </p>
            </div>
            
            {/* Coming Soon Card */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center'>
                <div className='text-6xl mb-6'>📋</div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>Coming Soon</h2>
                <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                    Your booking management system is under development. Soon you'll be able to 
                    view, modify, and cancel your reservations all in one place.
                </p>
                
                {/* Feature Preview */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                    <div className='p-4 bg-green-50 rounded-lg border border-green-100'>
                        <div className='text-3xl mb-3'>📅</div>
                        <h3 className='font-semibold text-green-900 mb-2'>Booking History</h3>
                        <p className='text-green-700 text-sm'>View all your past and upcoming trips</p>
                    </div>
                    
                    <div className='p-4 bg-blue-50 rounded-lg border border-blue-100'>
                        <div className='text-3xl mb-3'>✏️</div>
                        <h3 className='font-semibold text-blue-900 mb-2'>Modify Bookings</h3>
                        <p className='text-blue-700 text-sm'>Change dates, add services, or update details</p>
                    </div>
                    
                    <div className='p-4 bg-red-50 rounded-lg border border-red-100'>
                        <div className='text-3xl mb-3'>❌</div>
                        <h3 className='font-semibold text-red-900 mb-2'>Cancel Reservations</h3>
                        <p className='text-red-700 text-sm'>Cancel bookings with easy refund process</p>
                    </div>
                </div>
                
                {/* Sample Booking Types */}
                <div className='mt-8'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Types of Bookings</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🏨</div>
                                <h4 className='font-medium text-gray-900'>Hotels & Accommodations</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Book your stay in Jharkhand</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🚌</div>
                                <h4 className='font-medium text-gray-900'>Tours & Transportation</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Guided tours and travel arrangements</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🎫</div>
                                <h4 className='font-medium text-gray-900'>Event Tickets</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Festivals and cultural events</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🍽️</div>
                                <h4 className='font-medium text-gray-900'>Restaurant Reservations</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Book tables at local restaurants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBookings
