"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  MapPin,
  Eye,
  Cable as Cube,
  Star,
  Clock,
  DollarSign,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: MapPin },
  { id: "waterfalls", label: "Waterfalls", icon: MapPin },
  { id: "religious", label: "Religious", icon: MapPin },
  { id: "wildlife", label: "Wildlife", icon: MapPin },
  { id: "hills", label: "Hills", icon: MapPin },
  { id: "cultural", label: "Cultural", icon: MapPin },
];

const destinations = {
  all: [
    {
      id: 1,
      title: "Hundru Falls",
      category: "waterfalls",
      image:
        "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Summer_Season_in_Hundru_Waterfall_d4d2a06e91.webp",
      description:
        "Waterfall on the Subarnarekha River, about 45 km from Ranchi. Falls from ~98 m. Popular picnic & trekking spot. :contentReference[oaicite:0]{index=0}",
      rating: 4.6,
      duration: "Half day",
      price: "₹10", // entry fee for Indian visitors approx. :contentReference[oaicite:1]{index=1}
      featured: true,
    },
    {
      id: 2,
      title: "Betla National Park",
      category: "wildlife",
      image:
        "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/07/23111157/In-Which-State-is-Betla-National-Park-Located.png",
      description:
        "One of Jharkhand’s premier wildlife parks (part of Palamau Tiger Reserve). Wildlife safaris, forest walks & historic forts. :contentReference[oaicite:2]{index=2}",
      rating: 4.8,
      duration: "1-2 days",
      price: "₹100", // entry for Indian nationals approx. :contentReference[oaicite:3]{index=3}
      featured: true,
    },
    {
      id: 3,
      title: "Jonha Falls",
      category: "waterfalls",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Jonha_falls.jpg",
      description:
        "Also known as Gautamdhara Falls, ~43–45 m high, ~70 km from Ranchi. Known for a Buddhist shrine nearby. Scenic and tranquil. :contentReference[oaicite:4]{index=4}",
      rating: 4.5,
      duration: "Half day",
      price: "₹7", // small entry fee for Indian visitors approx. :contentReference[oaicite:5]{index=5}
      featured: false,
    },
    {
      id: 4,
      title: "Dassam Falls",
      category: "waterfalls",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero?qlt=82&ts=1727010932624",
      description:
        "Falls on the Kanchi river, ~44-45 m high, close to the highway between Ranchi-Jamshedpur. Popular especially after rains. :contentReference[oaicite:6]{index=6}",
      rating: 4.4,
      duration: "Half day",
      price: "Free or very small entry", // many sources say free or negligible cost. :contentReference[oaicite:7]{index=7}
      featured: false,
    },
    {
      id: 5,
      title: "Lodh Falls",
      category: "waterfalls",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UZN0jSW4zMBnaRQ7_OMBSqRXHgci8lAKew&s",
      description:
        "Jharkhand’s highest waterfall (~143 m / 468 ft) on the Burha river in Latehar district. :contentReference[oaicite:8]{index=8}",
      rating: 4.7,
      duration: "Full day",
      price: "Nominal/₹10-₹50 maybe", // not precisely documented, expected small local entry. Approximate.
      featured: true,
    },
    {
      id: 6,
      title: "Suraj Kund Hot Spring (Hazaribagh)",
      category: "cultural",
      image:
        "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/steemflow/23tmFdw7JQtAEWxucJvKuGwAT7W9Ly9fK8Vy15pDCvAgzXtf6AY44KAgNh5QY9k2NZC1j.jpg",
      description:
        "A set of hot springs named after deities (Surya, Sita etc.), near Hazaribagh. Believed to have therapeutic effects. :contentReference[oaicite:9]{index=9}",
      rating: 4.3,
      duration: "Half day",
      price: "₹20-₹50", // approximate small fee or donation if infrastructure, otherwise minimal.
      featured: false,
    },
    {
      id: 7,
      title: "Shikharji (Parasnath Hill)",
      category: "religious",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoOKgYbf3FNpV-955Ad1JWzotQ52wClsGdQ&s",
      description:
        "Sacred place for Jains where many Tirthankaras attained Moksha. Situated on Parasnath Hill range. :contentReference[oaicite:10]{index=10}",
      rating: 4.9,
      duration: "2-3 days pilgrimage",
      price: "Accommodation starts ~ ₹500/non-AC, ₹1000/AC in Yatri Niwas etc.", // lodging cost. :contentReference[oaicite:11]{index=11}
      featured: true,
    },
    {
      id: 8,
      title: "Dimna Lake",
      category: "all-season nature / cultural",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dimna-lake-jamshedpur-jharkhand-3-attr-hero?qlt=82&ts=1742172767006",
      description:
        "A peaceful artificial lake near Jamshedpur, surrounded by forested hills; boating & relaxing spot. :contentReference[oaicite:12]{index=12}",
      rating: 4.2,
      duration: "Half day",
      price: "Boating Charges", // approximate
      featured: false,
    },
    {
      id: 9,
      title: "Parasnath Hills (Shikharji Peak)",
      category: "hills",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9b09e4f561e8dd2954b42774ecb0bae8_1000x1000.jpg",
      description:
        "Jharkhand’s highest hill (~1,365 m), very sacred for Jains. Trekking, temples, wildlife sanctuary around. Located in Giridih. :contentReference[oaicite:8]{index=8}",
      rating: 4.9,
      duration: "1-2 days (trek + darshan)",
      price: "₹200-₹500 approx", // lodging etc. approximate
      featured: true,
    },
    {
      id: 10,
      title: "Netarhat Hill Station",
      category: "hills",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
      description:
        "Plateau town in Latehar district, known for sunrise/sunset views, springs, forests & viewpoints. ~1,127 m elevation. :contentReference[oaicite:9]{index=9}",
      rating: 4.7,
      duration: "1-2 days",
      price: "₹500-₹1,000 per night (lodging) + local travel", // approximate
      featured: true,
    },
  ],
  waterfalls: [
    // picking those with category waterfalls
    {
      id: 1,
      title: "Hundru Falls",
      category: "waterfalls",
      image:
        "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Summer_Season_in_Hundru_Waterfall_d4d2a06e91.webp",
      description:
        "Waterfall on the Subarnarekha River, about 45 km from Ranchi. Falls from ~98 m. Popular picnic & trekking spot. :contentReference[oaicite:0]{index=0}",
      rating: 4.6,
      duration: "Half day",
      price: "₹10", // entry fee for Indian visitors approx. :contentReference[oaicite:1]{index=1}
      featured: true,
    },
    {
      id: 3,
      title: "Jonha Falls",
      category: "waterfalls",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Jonha_falls.jpg",
      description:
        "Also known as Gautamdhara Falls, ~43–45 m high, ~70 km from Ranchi. Known for a Buddhist shrine nearby. Scenic and tranquil. :contentReference[oaicite:4]{index=4}",
      rating: 4.5,
      duration: "Half day",
      price: "₹7", // small entry fee for Indian visitors approx. :contentReference[oaicite:5]{index=5}
      featured: false,
    },
    {
      id: 4,
      title: "Dassam Falls",
      category: "waterfalls",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero?qlt=82&ts=1727010932624",
      description:
        "Falls on the Kanchi river, ~44-45 m high, close to the highway between Ranchi-Jamshedpur. Popular especially after rains. :contentReference[oaicite:6]{index=6}",
      rating: 4.4,
      duration: "Half day",
      price: "Free", // many sources say free or negligible cost. :contentReference[oaicite:7]{index=7}
      featured: false,
    },
    {
      id: 5,
      title: "Lodh Falls",
      category: "waterfalls",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UZN0jSW4zMBnaRQ7_OMBSqRXHgci8lAKew&s",
      description:
        "Jharkhand’s highest waterfall (~143 m / 468 ft) on the Burha river in Latehar district. :contentReference[oaicite:8]{index=8}",
      rating: 4.7,
      duration: "Full day",
      price: "₹10-₹50 maybe", // not precisely documented, expected small local entry. Approximate.
      featured: true,
    },
  ],
  wildlife: [
    {
      id: 2,
      title: "Betla National Park",
      category: "wildlife",
      image:
        "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/07/23111157/In-Which-State-is-Betla-National-Park-Located.png",
      description:
        "One of Jharkhand’s premier wildlife parks (part of Palamau Tiger Reserve). Wildlife safaris, forest walks & historic forts. :contentReference[oaicite:2]{index=2}",
      rating: 4.8,
      duration: "1-2 days",
      price: "₹100", // entry for Indian nationals approx. :contentReference[oaicite:3]{index=3}
      featured: true,
    },
  ],
  religious: [
    {
      id: 7,
      title: "Shikharji (Parasnath Hill)",
      category: "religious",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoOKgYbf3FNpV-955Ad1JWzotQ52wClsGdQ&s",
      description:
        "Sacred place for Jains where many Tirthankaras attained Moksha. Situated on Parasnath Hill range. :contentReference[oaicite:10]{index=10}",
      rating: 4.9,
      duration: "2-3 days pilgrimage",
      price: "Accommodation starts ~ ₹500/non-AC, ₹1000/AC in Yatri Niwas etc.", // lodging cost. :contentReference[oaicite:11]{index=11}
      featured: true,
    },
  ],
  hills: [
    {
      id: 9,
      title: "Parasnath Hills (Shikharji Peak)",
      category: "hills",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9b09e4f561e8dd2954b42774ecb0bae8_1000x1000.jpg",
      description:
        "Jharkhand’s highest hill (~1,365 m), very sacred for Jains. Trekking, temples, wildlife sanctuary around. Located in Giridih. :contentReference[oaicite:8]{index=8}",
      rating: 4.9,
      duration: "1-2 days (trek + darshan)",
      price: "₹200-₹500 approx", // lodging etc. approximate
      featured: true,
    },
    {
      id: 10,
      title: "Netarhat Hill Station",
      category: "hills",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
      description:
        "Plateau town in Latehar district, known for sunrise/sunset views, springs, forests & viewpoints. ~1,127 m elevation. :contentReference[oaicite:9]{index=9}",
      rating: 4.7,
      duration: "1-2 days",
      price: "₹500-₹1,000 per night (lodging) + local travel", // approximate
      featured: true,
    },
  ],
  cultural: [
    {
      id: 6,
      title: "Suraj Kund Hot Spring (Hazaribagh)",
      category: "cultural",
      image:
        "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/steemflow/23tmFdw7JQtAEWxucJvKuGwAT7W9Ly9fK8Vy15pDCvAgzXtf6AY44KAgNh5QY9k2NZC1j.jpg",
      description:
        "A set of hot springs named after deities (Surya, Sita etc.), near Hazaribagh. Believed to have therapeutic effects. :contentReference[oaicite:9]{index=9}",
      rating: 4.3,
      duration: "Half day",
      price: "₹20-₹50", // approximate small fee or donation if infrastructure, otherwise minimal.
      featured: false,
    },
    {
      id: 8,
      title: "Dimna Lake",
      category: "all-season nature / cultural",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dimna-lake-jamshedpur-jharkhand-3-attr-hero?qlt=82&ts=1742172767006",
      description:
        "A peaceful artificial lake near Jamshedpur, surrounded by forested hills; boating & relaxing spot. :contentReference[oaicite:12]{index=12}",
      rating: 4.2,
      duration: "Half day",
      price: "Boating Charges", // approximate
      featured: false,
    },
  ],
};

export default function DashboardExplore() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleView3D = (destination) => {
    console.log("Opening 3D view for:", destination.title);
    alert(`3D view for ${destination.title} - Feature coming soon!`);
  };

  const handleViewMore = (destination) => {
    if (destination.id === 1) {
      window.location.href = "/dashboard/explore/1";
    }
    else{
    console.log("Viewing more details for:", destination.title);
    alert(`More details for ${destination.title} - Feature coming soon!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-balance mb-2">
              Explore Destinations
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover breathtaking places around the world and plan your next
              adventure
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 h-auto p-2 bg-card/50 backdrop-blur-sm">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 hover:bg-primary/10"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Destination Cards */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {destinations[category.id]?.map((destination) => (
                  <Card
                    key={destination.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="relative">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Featured Badge */}
                      {destination.featured && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}

                      {/* Rating */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-white font-medium">
                          {destination.rating}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold text-lg text-balance group-hover:text-primary transition-colors">
                            {destination.title}
                          </h3>
                          <p className="text-sm text-muted-foreground text-pretty line-clamp-2">
                            {destination.description}
                          </p>
                        </div>

                        {/* Details */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{destination.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            <span>{destination.price}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                            onClick={() => handleViewMore(destination)}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View More
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                            onClick={() => handleView3D(destination)}
                          >
                            <Cube className="h-3 w-3 mr-1" />
                            View 3D
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {destinations[category.id]?.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    No destinations found
                  </h3>
                  <p className="text-muted-foreground">
                    We're working on adding more {category.label.toLowerCase()}{" "}
                    destinations.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
