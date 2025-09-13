"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DriverSection() {
  const benefits = [
    {
      title: "Flexible schedule",
      description: "Drive when you want, how you want. Set your own hours and be your own boss.",
      amount: "Your schedule"
    },
    {
      title: "Weekly earnings",
      description: "Earn money weekly with competitive rates and bonus opportunities.",
      amount: "$800-2000+"
    },
    {
      title: "Driver rewards",
      description: "Access exclusive perks, discounts, and rewards for top-rated drivers.",
      amount: "Save 15%+"
    },
    {
      title: "Instant payments",
      description: "Cash out instantly anytime with our fast payment system.",
      amount: "Available 24/7"
    }
  ];

  const requirements = [
    "Valid driver's license",
    "Vehicle inspection passed",
    "Background check cleared",
    "Minimum age of 21",
    "Insurance coverage",
    "Smartphone required"
  ];

  return (
    <section id="drive" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Drive and earn with UberRide
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of drivers who are earning money on their own schedule. 
                Start driving today and turn your car into a money-making machine.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-2xl font-bold text-black">{benefit.amount}</div>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-900">{benefit.title}</div>
                    <div className="text-sm text-gray-600">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
                Start driving
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-gray-300 hover:bg-gray-50">
                Learn more
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>50,000+ active drivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>4.8★ average driver rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Requirements */}
          <div className="space-y-8">
            {/* Driver Image */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bca941ab-4330-4004-87c7-819a3f33dda0.png"
                  alt="Happy professional driver standing next to clean modern car with smartphone app interface"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Earnings Badge */}
              <Card className="absolute -bottom-6 left-6 right-6 border-0 shadow-xl bg-white">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$1,247</div>
                    <div className="text-sm text-gray-600">earned this week</div>
                    <div className="text-xs text-gray-500 mt-1">+23% from last week</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Requirements */}
            <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg mt-12">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Driver requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-800">
                    <strong>Getting started is easy!</strong> Most drivers get approved within 24 hours 
                    and can start earning right away.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}