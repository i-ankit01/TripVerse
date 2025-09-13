import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Loader2, Send } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function TripPlannerForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    currentLocation: "",
    destination: "",
    startDate: undefined,
    endDate: undefined,
    travelers: 1,
    budget: "",
    travelStyle: "",
    interests: [],
    accommodation: "",
    transportation: "",
    specialRequests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate duration
    const duration =
      formData.startDate && formData.endDate
        ? Math.ceil(
            (formData.endDate.getTime() - formData.startDate.getTime()) /
              (1000 * 60 * 60 * 24)
          )
        : 0;

    const tripData = {
      ...formData,
      duration,
      startDate: formData.startDate?.toISOString(),
      endDate: formData.endDate?.toISOString(),
      timestamp: new Date().toISOString(),
    };

    onSubmit(tripData);
    console.log(tripData)
  };

  const handleInterestChange = (interest, checked) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }));
  };

  const interests = [
    "Adventure Sports",
    "Cultural Sites",
    "Food & Dining",
    "Nightlife",
    "Nature & Wildlife",
    "Photography",
    "Shopping",
    "Relaxation",
    "History",
    "Art & Museums",
    "Local Experiences",
    "Beach Activities",
  ];

  return (
    <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Plan Your Trip</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Trip Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentLocation">Current Location</Label>
              <Input
                id="currentLocation"
                placeholder="e.g., New York, NY"
                value={formData.currentLocation}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    currentLocation: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="e.g., Paris, France"
                value={formData.destination}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    destination: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.startDate
                      ? format(formData.startDate, "PPP")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.startDate}
                    onSelect={(date) =>
                      setFormData((prev) => ({ ...prev, startDate: date }))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.endDate
                      ? format(formData.endDate, "PPP")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.endDate}
                    onSelect={(date) =>
                      setFormData((prev) => ({ ...prev, endDate: date }))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Travelers and Budget */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Select
                value={formData.travelers.toString()}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    travelers: Number.parseInt(value),
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Person" : "People"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (USD)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, budget: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget ($500-1500)</SelectItem>
                  <SelectItem value="mid-range">
                    Mid-range ($1500-3000)
                  </SelectItem>
                  <SelectItem value="luxury">Luxury ($3000+)</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Travel Style and Accommodation */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Travel Style</Label>
              <Select
                value={formData.travelStyle}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, travelStyle: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select travel style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Preferred Accommodation</Label>
              <Select
                value={formData.accommodation}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, accommodation: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hotel">Hotel</SelectItem>
                  <SelectItem value="resort">Resort</SelectItem>
                  <SelectItem value="airbnb">Airbnb/Vacation Rental</SelectItem>
                  <SelectItem value="hostel">Hostel</SelectItem>
                  <SelectItem value="boutique">Boutique Hotel</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Transportation */}
          <div className="space-y-2">
            <Label>Preferred Transportation</Label>
            <Select
              value={formData.transportation}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, transportation: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select transportation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flight">Flight</SelectItem>
                <SelectItem value="car">Car/Road Trip</SelectItem>
                <SelectItem value="train">Train</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
                <SelectItem value="mixed">Mixed Transportation</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <Label>Interests & Activities</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) =>
                      handleInterestChange(interest, !!checked)
                    }
                  />
                  <Label
                    htmlFor={interest}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">
              Special Requests or Requirements
            </Label>
            <Textarea
              id="specialRequests"
              placeholder="Any dietary restrictions, accessibility needs, specific activities you want to include/avoid, etc."
              value={formData.specialRequests}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  specialRequests: e.target.value,
                }))
              }
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold"
            disabled={
              isLoading || !formData.currentLocation || !formData.destination
            }
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Planning Your Trip...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Plan My Trip
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
