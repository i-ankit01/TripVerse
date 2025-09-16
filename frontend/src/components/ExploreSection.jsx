import React from "react";

const exploreFeatures = [
  {
    title: "AI Assistant",
    description:
      "Get personalized itineraries and multilingual chatbot support for a seamless travel experience.",
    image: "YOUR_IMAGE_URL_AI", // Replace with real Jharkhand/AI image
  },
  {
    title: "Smart Alerts",
    description:
      "Stay updated with live weather conditions, travel advisories, and real-time updates.",
    image: "YOUR_IMAGE_URL_ALERTS",
  },
  {
    title: "Interactive Maps",
    description:
      "Navigate Jharkhand’s attractions with smart routes, nearby hotels, and local highlights.",
    image: "YOUR_IMAGE_URL_MAPS",
  },
  {
    title: "AR/VR Previews",
    description:
      "Experience Netarhat, Betla, and Deoghar virtually before planning your trip.",
    image: "YOUR_IMAGE_URL_VR",
  },
  {
    title: "Local Marketplace",
    description:
      "Support local communities by booking homestays and shopping for tribal handicrafts.",
    image: "YOUR_IMAGE_URL_MARKETPLACE",
  },
];

const ExploreSection = () => {
  return (
    <section id="explore" className="py-20 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#3E2723] mb-16">
          Explore Features
        </h2>

        {/* Alternate Layout */}
        <div className="space-y-20">
          {exploreFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-72 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#5C4033] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
