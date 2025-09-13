import React from 'react'

/**
 * DashboardSettings - User Settings page
 * Placeholder page for user account settings and preferences
 */
const DashboardSettings = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>User Settings</h1>
                <p className='text-lg text-gray-600'>
                    Manage your account settings and preferences
                </p>
            </div>
            
            {/* Coming Soon Card */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center'>
                <div className='text-6xl mb-6'>⚙️</div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>Coming Soon</h2>
                <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                    Your settings panel is under development. Soon you'll be able to customize 
                    your profile, preferences, and account settings.
                </p>
                
                {/* Feature Preview */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div className='p-4 bg-blue-50 rounded-lg border border-blue-100'>
                        <div className='text-3xl mb-3'>👤</div>
                        <h3 className='font-semibold text-blue-900 mb-2'>Profile Management</h3>
                        <p className='text-blue-700 text-sm'>Update your personal information and profile picture</p>
                    </div>
                    
                    <div className='p-4 bg-green-50 rounded-lg border border-green-100'>
                        <div className='text-3xl mb-3'>🔒</div>
                        <h3 className='font-semibold text-green-900 mb-2'>Security Settings</h3>
                        <p className='text-green-700 text-sm'>Change password and manage account security</p>
                    </div>
                    
                    <div className='p-4 bg-purple-50 rounded-lg border border-purple-100'>
                        <div className='text-3xl mb-3'>🔔</div>
                        <h3 className='font-semibold text-purple-900 mb-2'>Notifications</h3>
                        <p className='text-purple-700 text-sm'>Control email and push notification preferences</p>
                    </div>
                    
                    <div className='p-4 bg-orange-50 rounded-lg border border-orange-100'>
                        <div className='text-3xl mb-3'>🎨</div>
                        <h3 className='font-semibold text-orange-900 mb-2'>Appearance</h3>
                        <p className='text-orange-700 text-sm'>Customize theme, language, and display options</p>
                    </div>
                </div>
                
                {/* Settings Categories */}
                <div className='mt-8'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Settings Categories</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>📧</div>
                                <h4 className='font-medium text-gray-900'>Email Preferences</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Manage newsletter and notification emails</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🌍</div>
                                <h4 className='font-medium text-gray-900'>Language & Region</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Set your preferred language and timezone</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>📱</div>
                                <h4 className='font-medium text-gray-900'>Mobile Settings</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Configure mobile app preferences</p>
                        </div>
                        
                        <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 text-left'>
                            <div className='flex items-center mb-2'>
                                <div className='text-2xl mr-3'>🗑️</div>
                                <h4 className='font-medium text-gray-900'>Data Management</h4>
                            </div>
                            <p className='text-gray-600 text-sm'>Export or delete your account data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSettings
