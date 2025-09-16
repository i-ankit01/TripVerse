import React from "react";

const impacts = [
  {
    title: "Tourists",
    description:
      "Safe, reliable, and personalized travel experiences powered by AI, AR/VR, and smart alerts.",
    image: "YOUR_IMAGE_URL_TOURISTS", // Replace with a tourist/travel photo
  },
  {
    title: "Locals",
    description:
      "Boosts local economy by promoting homestays, handicrafts, and cultural experiences.",
    image: "YOUR_IMAGE_URL_LOCALS", // Replace with Jharkhand handicrafts photo
  },
  {
    title: "Government",
    description:
      "Data-driven insights help design better tourism policies and improve eco-cultural tourism.",
    image: "YOUR_IMAGE_URL_GOVT", // Replace with government/analytics image
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-[#F4E1A6]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#3E2723] mb-16">
          Impact of Our Platform
        </h2>

        {/* Alternate Layout */}
        <div className="space-y-20">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-72 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={impact.image}
                  alt={impact.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-4">
                  {impact.title}
                </h3>
                <p className="text-[#5C4033] text-lg leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
