import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "@/components/HeroParallex";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Card } from "@/components/Card";

const Landing = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // ✅ Redirect if already logged in
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     navigate("/dashboard/home");
  //   }
  // }, [navigate]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation Bar */}
      <Navbar />

      <HeroParallaxDemo/>

      <ProblemSolution/>

      <Card/>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-indigo-600">Jharkhand Darshan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the beauty and culture of Jharkhand through our interactive
            platform. Explore, learn, and connect with the heart of India.
          </p>

          {/* Call to Action */}
          <Link
            to="/signup"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Jharkhand
          </Link>

          {/* Additional Info */}
          <p className="mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
