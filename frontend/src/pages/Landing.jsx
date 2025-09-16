import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeroParallaxDemo } from "@/components/HeroParallex";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Card } from "@/components/Card";
import FeaturesSection from "@/components/features-section";
import {
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  Navbar,
} from "@/components/ui/resizable-navbar";

const Landing = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // ✅ Redirect if already logged in
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     navigate("/dashboard/home");
  //   }
  // }, [navigate]);

  const navItems = [
    {
      name: "Problems",
      link: "#problems",
    },
    {
      name: "Solutions",
      link: "#solution",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Impacts",
      link: "#impact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation Bar */}
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
              <NavbarButton className="bg-black text-white" variant="primary">Login</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <HeroParallaxDemo />

        <ProblemSolution />

        <FeaturesSection />

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
              Discover the beauty and culture of Jharkhand through our
              interactive platform. Explore, learn, and connect with the heart
              of India.
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
    </div>
  );
};

export default Landing;
