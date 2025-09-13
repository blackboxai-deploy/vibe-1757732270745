import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SafetySection from "@/components/SafetySection";
import DriverSection from "@/components/DriverSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const services = [
    {
      title: "UberX",
      description: "Affordable, everyday rides for up to 4 passengers",
      price: "$8-12",
      duration: "2 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0724557-c01b-4bf1-aeca-564c957ea347.png",
      features: ["AC", "GPS tracking", "Cashless payment", "4 seats"],
      capacity: "1-4 passengers",
      isPopular: true
    },
    {
      title: "Comfort",
      description: "Extra legroom and quiet, highly-rated drivers",
      price: "$12-18",
      duration: "3 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1628cda-979a-4407-b3d1-066fc0d4ba4f.png",
      features: ["Extra legroom", "Top-rated drivers", "Premium cars", "4 seats"],
      capacity: "1-4 passengers"
    },
    {
      title: "UberXL",
      description: "Affordable rides for groups up to 6 passengers",
      price: "$15-22",
      duration: "4 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/235db54f-4442-419b-a7d3-a348da5432b1.png",
      features: ["6 seats", "Extra space", "Group rides", "Luggage space"],
      capacity: "1-6 passengers"
    },
    {
      title: "Uber Black",
      description: "Premium rides in luxury vehicles with professional drivers",
      price: "$25-35",
      duration: "5 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/385decb8-a5cd-4221-8cfe-96c405412289.png",
      features: ["Luxury cars", "Professional drivers", "Premium service", "4 seats"],
      capacity: "1-4 passengers"
    },
    {
      title: "Uber Pool",
      description: "Share your ride and split the cost with other passengers",
      price: "$5-8",
      duration: "6 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d37a4cab-1dc4-4fc0-ba91-d5395a5bf26b.png",
      features: ["Shared ride", "Lower cost", "Eco-friendly", "2-3 seats"],
      capacity: "1-3 passengers"
    },
    {
      title: "Uber Green",
      description: "Eco-friendly rides in hybrid and electric vehicles",
      price: "$10-15",
      duration: "4 min away",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4ebca07-f5c6-4a84-868a-dd3227b0d2a3.png",
      features: ["Electric/Hybrid", "Eco-friendly", "Zero emissions", "4 seats"],
      capacity: "1-4 passengers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Services Section */}
      <section id="ride" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Choose your ride
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From affordable everyday rides to premium luxury vehicles, 
              we have the perfect option for every journey and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
                image={service.image}
                features={service.features}
                capacity={service.capacity}
                isPopular={service.isPopular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why choose UberRide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium features and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast & Reliable</h3>
              <p className="text-gray-600">
                Get a ride in minutes with our extensive network of drivers. 
                Average wait time of just 2 minutes in most cities.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl">
                💳
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cashless Payments</h3>
              <p className="text-gray-600">
                Seamless payment experience with automatic billing. 
                No need to handle cash or worry about exact change.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                📍
              </div>
              <h3 className="text-xl font-bold text-gray-900">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track your ride in real-time and share your location with friends 
                and family for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SafetySection />
      <DriverSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What our riders say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join millions of satisfied customers who trust UberRide for their daily transportation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, NY",
                rating: 5,
                comment: "Absolutely love the convenience and reliability. My driver was professional and the car was spotless!"
              },
              {
                name: "Mike Chen",
                location: "San Francisco, CA",
                rating: 5,
                comment: "Fast pickup times and fair pricing. The app is super easy to use and I always feel safe during my rides."
              },
              {
                name: "Emily Rodriguez",
                location: "Chicago, IL",
                rating: 5,
                comment: "UberRide has made my daily commute so much easier. Great drivers and clean vehicles every time."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}