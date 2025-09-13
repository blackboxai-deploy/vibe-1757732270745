"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function SafetySection() {
  const safetyFeatures = [
    {
      id: "verification",
      title: "Driver verification",
      description: "All drivers undergo comprehensive background checks and identity verification before joining our platform.",
      icon: "🛡️"
    },
    {
      id: "tracking",
      title: "Real-time tracking",
      description: "Share your trip with friends and family so they know where you are at all times during your ride.",
      icon: "📍"
    },
    {
      id: "ratings",
      title: "Two-way ratings",
      description: "Rate your driver and see their rating before you ride. Maintaining quality and trust in our community.",
      icon: "⭐"
    },
    {
      id: "support",
      title: "24/7 support",
      description: "Our safety team is available around the clock to help with any issues or emergency situations.",
      icon: "🆘"
    },
    {
      id: "insurance",
      title: "Insurance protection",
      description: "Every ride is covered by comprehensive insurance for your peace of mind during your journey.",
      icon: "🏥"
    },
    {
      id: "emergency",
      title: "Emergency button",
      description: "Quick access to emergency services with one tap, automatically sharing your location and ride details.",
      icon: "🚨"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your safety is our priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing safe, reliable transportation with industry-leading 
            safety features and protocols to protect every ride.
          </p>
        </div>

        {/* Safety Hero Image */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/01b9adef-cf15-49e1-a474-5c2804fe4098.png"
              alt="Professional driver in clean modern car with safety features and technology dashboard"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#f3f4f6';
                target.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
              <div className="text-white p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Advanced safety technology
                </h3>
                <p className="text-lg opacity-90 max-w-md">
                  GPS tracking, emergency assistance, and verified drivers ensure your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature) => (
            <Card 
              key={feature.id} 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12">
          <div className="text-center text-white space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Safety by the numbers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-green-400">99.9%</div>
                <div className="text-gray-300">Safe trips completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">5M+</div>
                <div className="text-gray-300">Background checks completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-300">Safety support available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}