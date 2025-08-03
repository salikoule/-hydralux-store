import { 
  Truck, 
  Package, 
  MapPin, 
  Clock,
  Shield,
  CheckCircle,
  Globe,
  Calculator
} from "lucide-react"

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free on orders $75+",
      time: "3-5 business days",
      description: "Perfect for most orders",
      icon: Truck
    },
    {
      name: "Express Shipping",
      price: "$9.99",
      time: "1-2 business days",
      description: "When you need it fast",
      icon: Package
    },
    {
      name: "Overnight Shipping",
      price: "$24.99",
      time: "Next business day",
      description: "Urgent delivery",
      icon: Clock
    }
  ]

  const internationalZones = [
    {
      zone: "Zone 1 - Canada",
      countries: ["Canada"],
      price: "$12.99",
      time: "5-8 business days"
    },
    {
      zone: "Zone 2 - Europe",
      countries: ["UK", "Germany", "France", "Italy", "Spain", "Netherlands"],
      price: "$19.99",
      time: "7-12 business days"
    },
    {
      zone: "Zone 3 - Asia Pacific",
      countries: ["Australia", "Japan", "South Korea", "Singapore"],
      price: "$24.99",
      time: "10-15 business days"
    },
    {
      zone: "Zone 4 - Rest of World",
      countries: ["Other countries"],
      price: "$29.99",
      time: "10-20 business days"
    }
  ]

  const processingSteps = [
    {
      step: 1,
      title: "Order Confirmation",
      description: "Your order is received and confirmed",
      time: "Immediate"
    },
    {
      step: 2,
      title: "Processing",
      description: "We prepare your items for shipment",
      time: "1-2 business days"
    },
    {
      step: 3,
      title: "Shipped",
      description: "Your order is on its way",
      time: "Same day"
    },
    {
      step: 4,
      title: "Delivered",
      description: "Your HydraLux products arrive",
      time: "Based on shipping method"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Shipping Information
          </h1>
          <p className="text-xl text-blue-100">
            Fast, reliable delivery for your HydraLux products worldwide
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Domestic Shipping (USA)</h2>
            <p className="text-xl text-gray-600">
              Choose the delivery speed that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <option.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-blue-600">{option.price}</p>
                  <p className="text-gray-700 font-medium">{option.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Free Shipping Guarantee</h3>
            </div>
            <p className="text-center text-gray-700 text-lg">
              Enjoy free standard shipping on all orders over $75. 
              No minimum quantity required - just add your favorite HydraLux products to cart!
            </p>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">International Shipping</h2>
            <p className="text-xl text-gray-600">
              We ship HydraLux products to customers worldwide
            </p>
          </div>

          <div className="space-y-6">
            {internationalZones.map((zone, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{zone.zone}</h3>
                  <p className="text-gray-600 mb-2">
                    Countries: {zone.countries.join(", ")}
                  </p>
                </div>
                <div className="lg:text-right">
                  <p className="text-2xl font-bold text-blue-600 mb-1">{zone.price}</p>
                  <p className="text-gray-700">{zone.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">International Shipping Notes:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Customs duties and taxes may apply and are the customer's responsibility</li>
              <li>• Delivery times may vary due to customs processing</li>
              <li>• Some remote areas may require additional shipping time</li>
              <li>• We use DHL, FedEx, and other trusted carriers for international delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Processing</h2>
            <p className="text-xl text-gray-600">
              Here's what happens after you place your order
            </p>
          </div>

          <div className="space-y-8">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                    <div className="mt-2 lg:mt-0 lg:text-right">
                      <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Tracking</h2>
            <p className="text-xl text-gray-600">
              Stay updated on your order's journey from our warehouse to your door
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Track Your Order</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Check your email for shipping confirmation with tracking number</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Log into your HydraLux account to view order status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Use the tracking number on the carrier's website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contact support if you need help tracking your order</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Someone must be available to sign for the package</li>
                <li>• We deliver Monday through Friday, 9 AM to 6 PM</li>
                <li>• Saturday delivery available for Express and Overnight orders</li>
                <li>• If you're not home, we'll leave a delivery notice</li>
                <li>• Packages are insured against loss or damage</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Track Your Order
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Shipping?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help with any shipping questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}