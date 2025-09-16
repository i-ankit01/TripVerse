"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Sparkles } from "lucide-react";

export function AnimatedPin() {
  const places = [
    {
      title: "Dassam Falls",
      description: "Majestic waterfall amidst lush green forests.",
      image: "https://placekitten.com/400/400",
    },
    {
      title: "Parasnath Hill",
      description: "Pilgrim’s paradise with breathtaking mountain views.",
      image: "https://placekitten.com/401/400",
    },
    {
      title: "Betla National Park",
      description: "Wildlife haven with tigers and serene landscapes.",
      image: "https://placekitten.com/402/400",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-32 px-4">
      {/* Heading Section */}
      <div className="text-center mb-16 max-w-4xl">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-800 font-medium mb-4">
    <Sparkles className="w-4 h-4" />
    Explore Jharkhand
  </div>
  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
    Discover the{" "}
    <span className="gradient-text text-green-500">Famous Places in Jharkhand</span>
  </h2>
  <p className="text-xl text-muted-foreground">
    From serene waterfalls to majestic hills, explore the hidden gems and
    unforgettable landscapes of Jharkhand.
  </p>
</div>


      {/* Row of 4 Pins */}
      <div className="flex flex-row gap-6 justify-center flex-wrap z-0">
        {places.map((place, idx) => (
          <PinContainer key={idx} title={place.title} href="#">
            <div className="flex flex-col p-4 w-[20rem] h-[20rem] tracking-tight text-slate-500">
              <div className="text-base font-normal mb-4">{place.description}</div>
              <div className="flex flex-1 w-full rounded-lg overflow-hidden">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
