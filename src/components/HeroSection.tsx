"use client";

import RideBookingForm from "./RideBookingForm";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43e9b6fe-6c1a-4f9e-863d-be194ffd5548.png"
          alt="Modern city skyline at night with busy traffic and illuminated buildings urban transportation scene"
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Get there
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  your way
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-lg">
                Request a ride, hop in, and go. Choose from a variety of ride options to fit your needs and budget.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold">2 min</div>
                <div className="text-gray-400">Average wait time</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-gray-400">Average rating</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-gray-400">Always available</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Safe rides</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Cashless payments</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-300">24/7 support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <RideBookingForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}