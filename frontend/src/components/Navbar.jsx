import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Navbar - Navigation bar for the landing page
 * Simple navigation with project name and sign in button
 */
const Navbar = () => {
    return (
        <nav className='bg-white shadow-lg border-b border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo/Project Name */}
                    <div className='flex-shrink-0'>
                        <Link to='/' className='text-2xl font-bold text-indigo-600 hover:text-indigo-700'>
                            Jharkhand Darshan
                        </Link>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className='flex items-center space-x-4'>
                        <Link 
                            to='/signin' 
                            className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
