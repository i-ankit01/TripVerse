"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
// Use React Router's Link for internal navigation to dashboard routes
import { Link } from "react-router-dom";

const NavBar = () => {
 // Dashboard-oriented navigation: link paths aligned with App route config
 const navItems = [
    { name: "Home", link: "/dashboard/home" },
    { name: "Explore", link: "/dashboard/explore" },
    { name: "Bookings", link: "/dashboard/bookings" },
    { name: "Trip Planner", link: "/dashboard/trip-planner" },
    
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
   <div className="fixed top-0 left-0 w-full bg-zinc-450/80 backdrop-blur-md shadow-sm z-50">

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* 🔥 Animated Logo */}
          <motion.div
           initial={{ opacity: 0, y: -10 }}
               animate={{
                 opacity: 1,
                 y: 0,
                  color: ["#7C2D12", "#7C2D12", "#7C2D12", "#7C2D12"],
               }}
               transition={{
                 duration: 8,
                 ease: "easeInOut",
                 repeat: Infinity,
                 repeatType: "mirror",
               }}
               className="text-2xl font-bold text-gray-800"
                >
               TripVerse
                 </motion.div>


          {/* Nav Items */}
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              className:
                "text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium",
            }))}
          />

          <div className="flex items-center gap-4">
            {/* Desktop Sign Up navigates to /signup */}
            <Link to="/signup">
              <NavbarButton
                variant="primary"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors"
              >
                Sign Up
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
           <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{
    opacity: 1,
    y: 0,
    color: ["#1E3A8A", "#2563EB", "#111827"],
  }}
  transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  }}
  className="text-xl font-bold text-gray-800"
>
  TripVerse
</motion.div>

          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            {navItems.map((item, idx) => (
              // Mobile menu items navigate via Link to avoid page reloads
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-gray-700 hover:text-blue-600 duration-300 font-medium"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              {/* Mobile Sign Up button routes to /signup */}
              <Link to="/signup">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors"
                >
                  Sign Up
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;



