"use client";

import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  Home,
  Leaf,
  Menu,
  Save,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

export default function UserSettings() {
  const [userData, setUserData] = useState({
    name: "Ankit Kumar",
    contactNo: "9876543210",
    email: "ankitdemo@gmail.com",
    placesVisit: 2,
    dob: "1998-05-14",
    gender: "male",
    language: "english",
    residence: "Jharkhand, India",
    emergencyContact: "9123456789",
  });

  // Form state
  const [formData, setFormData] = useState({ ...userData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Simulate API call to backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update user data on successful submission
      setUserData({ ...formData });
      setSuccessMessage("Profile updated successfully!");

      // In a real application, you would send data to your backend:
      // const response = await fetch('/api/update-profile', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      //
      // if (!response.ok) {
      //   throw new Error('Failed to update profile')
      // }
      //
      // const data = await response.json()
      // setUserData({...formData})
      // setSuccessMessage(data.message)
    } catch (error) {
      setErrorMessage("Failed to update profile. Please try again.");
      console.error("Error updating profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gradient-to-br from-green-100 via-white to-blue-100 overflow-y-auto overflow-x-hidden">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Account Settings</h1>
            <p className="text-gray-600">Update your profile information</p>
          </div>

          {/* Settings Form */}
          <div className="bg-white rounded-lg border shadow-md">
            <div className="border-b p-4">
              <h2 className="text-lg font-medium">Personal Information</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              {/* Success and Error Messages */}
              {successMessage && (
                <div className="mb-6 rounded-md bg-green-50 p-4 text-green-700">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mb-6 rounded-md bg-red-50 p-4 text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Grid with 3 per row */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label
                    htmlFor="contactNo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNo"
                    name="contactNo"
                    type="tel"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob || ""}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language || ""}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="local">
                      Local (Santhali, Nagpuri, etc.)
                    </option>
                  </select>
                </div>

                {/* Country/State */}
                <div>
                  <label
                    htmlFor="residence"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country / State of Residence
                  </label>
                  <input
                    id="residence"
                    name="residence"
                    type="text"
                    placeholder="e.g. Jharkhand, India"
                    value={formData.residence || ""}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Emergency Contact */}
                <div>
                  <label
                    htmlFor="emergencyContact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Emergency Contact
                  </label>
                  <input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="tel"
                    value={formData.emergencyContact || ""}
                    onChange={handleInputChange}
                    placeholder="Optional"
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none 
          focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Settings Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Travel Preferences Section */}
            <div className="bg-white rounded-lg border shadow-md">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium">Travel Preferences</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Categories
                  </label>
                  <select className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">
                    <option>Adventure</option>
                    <option>Spiritual</option>
                    <option>Cultural</option>
                    <option>Eco-tourism</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹5000 - ₹15000"
                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Saved Itineraries Section */}
            <div className="bg-white rounded-lg border shadow-md">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium">
                  Saved Itineraries & Bookings
                </h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Access your saved trips, homestay bookings, and guide
                  reservations.
                </p>
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Manage Trips
                </button>
              </div>
            </div>

            {/* Privacy & Security Section */}
            <div className="bg-white rounded-lg border shadow-md">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium">Privacy & Security</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Share Location</span>
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Enable Blockchain Wallet
                  </span>
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Settings Sections */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Password Section */}
            <div className="bg-white rounded-lg border shadow-md">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium">Password</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Update your password to keep your account secure.
                </p>
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Change Password
                </button>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-white rounded-lg border shadow-md">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium">Notifications</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Configure how you receive notifications and updates.
                </p>
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Manage Notifications
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="mt-8 bg-white rounded-lg border border-red-200 shadow-md">
            <div className="border-b border-red-200 p-4">
              <h2 className="text-lg font-medium text-red-600">Danger Zone</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
              <button className="inline-flex items-center rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Delete Account
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
