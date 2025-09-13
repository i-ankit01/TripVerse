import React from 'react'

/**
 * AuthLayout - Layout wrapper for authentication pages (SignIn, SignUp)
 * Provides a centered card layout with clean styling
 */
const AuthLayout = ({ children }) => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
            <div className='w-full max-w-md bg-white p-8 shadow-xl rounded-xl border border-gray-100'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
