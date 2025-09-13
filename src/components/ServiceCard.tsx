"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  capacity: string;
  isPopular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  image,
  features,
  capacity,
  isPopular = false,
}: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-green-500 text-white">Popular</Badge>
        </div>
      )}
      
      <CardContent className="p-0">
        {/* Service Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#f3f4f6';
              target.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Service Info */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">{price}</div>
                <div className="text-sm text-gray-500">{duration}</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Capacity */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">{capacity}</span>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-900">Includes:</div>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Available now</span>
              <div className="flex items-center space-x-1 text-green-600">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}