import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

/**
 * SignUp Page - User registration page
 * Form with name, email, and password fields
 */
const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Implement registration logic
        console.log('Sign up attempt:', formData)
        
        // For now, redirect to dashboard after "successful" sign up
        // In a real app, this would happen after successful API response
        navigate('/dashboard/home')
    }
    
    return (
        <AuthLayout>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-gray-900 mb-2'>Create Account</h2>
                <p className='text-gray-600'>Join Jharkhand Darshan today</p>
            </div>
            
            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200'
                        placeholder='Enter your full name'
                    />
                </div>
                
                {/* Email Field */}
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                        Email Address
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200'
                        placeholder='Enter your email'
                    />
                </div>
                
                {/* Password Field */}
                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200'
                        placeholder='Create a password'
                    />
                </div>
                
                {/* Confirm Password Field */}
                <div>
                    <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200'
                        placeholder='Confirm your password'
                    />
                </div>
                
                {/* Submit Button */}
                <button
                    type='submit'
                    className='w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200'
                >
                    Create Account
                </button>
            </form>
            
            {/* Sign In Link */}
            <div className='mt-6 text-center'>
                <p className='text-gray-600'>
                    Already have an account?{' '}
                    <Link to='/signin' className='text-indigo-600 hover:text-indigo-700 font-medium'>
                        Sign in here
                    </Link>
                </p>
            </div>
        </AuthLayout>
    )
}

export default SignUp
