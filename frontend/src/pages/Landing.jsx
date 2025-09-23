import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeroParallaxDemo } from "@/components/HeroParallex";
import { ProblemSolution } from "@/components/ProblemSolution";
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
import { AnimatedPin } from "@/components/AnimatedPin";
import { CtusSection } from "@/components/Ctus-section";
import { Footer } from "@/components/footer";




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
              <NavbarButton href={"/signin"} className="bg-black text-white" variant="primary">Login</NavbarButton>
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

        <AnimatedPin/>

        <CtusSection/>

      
        <Footer/>
      </div>
    </div>
  );
};

export default Landing;
