import { 
  Droplets, 
  Target, 
  Users, 
  Award,
  Shield,
  Leaf,
  Heart,
  Globe
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Droplets,
      title: "Pure Innovation",
      description: "We're committed to developing cutting-edge filtration technology that delivers the purest water possible."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and meets the highest industry standards for safety and performance."
    },
    {
      icon: Leaf,
      title: "Environmental Care",
      description: "We're dedicated to sustainable practices and reducing plastic waste through superior filtration solutions."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to support you every step of your clean water journey."
    }
  ]

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "2M+", label: "Gallons Filtered" },
    { number: "99.99%", label: "Contaminant Removal" },
    { number: "4.8/5", label: "Customer Rating" }
  ]

  const certifications = [
    {
      name: "NSF Certified",
      description: "Independently tested and verified for safety and performance",
      icon: Award
    },
    {
      name: "EPA Approved",
      description: "Meets Environmental Protection Agency standards",
      icon: Shield
    },
    {
      name: "ISO 9001",
      description: "International quality management certification",
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Clean Living, Elevated.
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            At HydraLux, we believe everyone deserves access to pure, clean water. 
            We're on a mission to elevate your daily water experience through innovative, 
            sophisticated filtration solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              Founded in 2020 by a team of water quality engineers and design enthusiasts, 
              HydraLux was born from a simple observation: existing water filters were either 
              effective but ugly, or beautiful but ineffective.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              We set out to change that. Our founders, Sarah Chen and Marcus Rodriguez, 
              combined their expertise in environmental engineering and industrial design 
              to create water filtration products that don't compromise on performance or aesthetics.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Today, HydraLux serves over 50,000 customers worldwide, from urban professionals 
              seeking cleaner tap water to outdoor enthusiasts exploring remote destinations. 
              Our products have filtered over 2 million gallons of water, removing countless 
              contaminants and providing peace of mind to families everywhere.
            </p>
            
            <p className="text-lg leading-relaxed">
              But we're just getting started. As we continue to innovate and expand our product line, 
              our commitment remains unchanged: to deliver clean living, elevated.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">HydraLux by the Numbers</h2>
            <p className="text-xl text-blue-100">
              The impact we're making together
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">
              Independent verification of our quality and safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <cert.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 leading-relaxed font-light">
            "To make clean, pure water accessible to everyone, everywhere, 
            through innovative products that combine superior performance 
            with elegant design."
          </p>
          <div className="mt-8">
            <span className="text-gray-500">— Sarah Chen & Marcus Rodriguez, Co-Founders</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind HydraLux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members would go here - using placeholder for now */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Environmental engineer with 15+ years in water treatment technology
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-3">Co-Founder & CTO</p>
                <p className="text-gray-600 text-sm">
                  Industrial designer focused on sustainable consumer products
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Emily Watson</h3>
                <p className="text-blue-600 font-medium mb-3">Head of R&D</p>
                <p className="text-gray-600 text-sm">
                  Water quality scientist with expertise in filtration technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the HydraLux Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference that clean, pure water can make in your daily life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}