"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RideBookingForm() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const rideOptions = [
    {
      id: "uberx",
      name: "UberX",
      description: "Affordable, everyday rides",
      price: "$8-12",
      time: "2 min",
      passengers: "1-4"
    },
    {
      id: "comfort",
      name: "Comfort",
      description: "Extra legroom and quiet rides",
      price: "$12-18",
      time: "3 min",
      passengers: "1-4"
    },
    {
      id: "xl",
      name: "UberXL",
      description: "Affordable rides for groups up to 6",
      price: "$15-22",
      time: "4 min",
      passengers: "1-6"
    },
    {
      id: "black",
      name: "Uber Black",
      description: "Premium rides in luxury cars",
      price: "$25-35",
      time: "5 min",
      passengers: "1-4"
    }
  ];

  const popularLocations = [
    "Airport",
    "Downtown",
    "Mall",
    "University",
    "Train Station",
    "Hospital"
  ];

  const handleBookRide = () => {
    if (!pickup || !destination || !rideType) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);
    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      alert(`Ride booked! Your ${rideOptions.find(r => r.id === rideType)?.name} will arrive in ${rideOptions.find(r => r.id === rideType)?.time}.`);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white shadow-xl border-0">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get a ride
              </h2>
              <p className="text-gray-600 text-sm">
                Where are you going?
              </p>
            </div>

            {/* Location Inputs */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-3 w-2 h-2 bg-gray-400 rounded-full"></div>
                <Input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="pl-8 h-12 border-gray-300 focus:border-black"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-3 w-2 h-2 bg-black rounded-full"></div>
                <Input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-8 h-12 border-gray-300 focus:border-black"
                />
              </div>
            </div>

            {/* Popular Locations */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Popular destinations:</p>
              <div className="flex flex-wrap gap-2">
                {popularLocations.slice(0, 4).map((location) => (
                  <Badge
                    key={location}
                    variant="secondary"
                    className="cursor-pointer hover:bg-gray-200 text-xs"
                    onClick={() => setDestination(location)}
                  >
                    {location}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Ride Type Selection */}
            <div>
              <Select value={rideType} onValueChange={setRideType}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-black">
                  <SelectValue placeholder="Choose ride type" />
                </SelectTrigger>
                <SelectContent>
                  {rideOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <div className="font-medium">{option.name}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-sm font-medium">{option.price}</div>
                          <div className="text-xs text-gray-500">{option.time} away</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Selected Ride Info */}
            {rideType && (() => {
              const selectedRide = rideOptions.find(r => r.id === rideType);
              return selectedRide ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{selectedRide.name}</div>
                      <div className="text-sm text-gray-600">
                        {selectedRide.passengers} passengers • {selectedRide.time} away
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{selectedRide.price}</div>
                      <div className="text-xs text-gray-500">Estimated fare</div>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}

            {/* Book Ride Button */}
            <Button 
              onClick={handleBookRide}
              disabled={isLoading}
              className="w-full h-12 bg-black text-white hover:bg-gray-800 font-semibold text-base"
            >
              {isLoading ? "Finding your ride..." : "Request ride"}
            </Button>

            <div className="text-center text-xs text-gray-500">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}