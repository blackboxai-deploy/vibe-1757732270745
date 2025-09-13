"use client";

export default function Footer() {
  const footerLinks = {
    Company: [
      "About us",
      "Careers",
      "Press",
      "Blog",
      "Investor relations"
    ],
    Products: [
      "Ride",
      "Drive",
      "Eat",
      "Business",
      "Freight"
    ],
    Support: [
      "Help center",
      "Safety",
      "Contact us",
      "Accessibility",
      "Emergency"
    ],
    Legal: [
      "Terms of service",
      "Privacy policy",
      "Cookie policy",
      "Data protection",
      "Licenses"
    ]
  };

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "YouTube", href: "#" }
  ];

  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "Austin", "Jacksonville", "Fort Worth"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Mobile App Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Get the UberRide app
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Download our app for the fastest, most convenient way to request a ride. 
              Available on iOS and Android.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white text-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-semibold mb-6">Cities where UberRide is available</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-400">
            {cities.map((city, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:text-white transition-colors duration-200"
              >
                {city}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              View all cities →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="font-semibold text-lg">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-2xl font-bold">UberRide</div>
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 UberRide Technologies Inc. All rights reserved.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  {social.name.slice(0, 1).toUpperCase()}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <span>🌍 Available in 100+ cities worldwide</span>
            <span>🚗 Over 1 billion rides completed</span>
            <span>⭐ 4.9/5 average rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
}