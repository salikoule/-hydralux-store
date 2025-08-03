import { 
  RotateCcw, 
  CheckCircle, 
  Clock,
  Package,
  CreditCard,
  Phone,
  AlertCircle,
  Truck
} from "lucide-react"

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Reach out to start your return within 30 days",
      icon: Phone,
      time: "5 minutes"
    },
    {
      step: 2,
      title: "Get Return Label",
      description: "We'll email you a prepaid return shipping label",
      icon: Package,
      time: "Instant"
    },
    {
      step: 3,
      title: "Ship Your Item",
      description: "Pack securely and ship using provided label",
      icon: Truck,
      time: "2 minutes"
    },
    {
      step: 4,
      title: "Receive Refund",
      description: "Full refund processed once we receive your item",
      icon: CreditCard,
      time: "3-5 business days"
    }
  ]

  const returnConditions = [
    {
      icon: CheckCircle,
      title: "Within 30 Days",
      description: "Items must be returned within 30 days of delivery",
      status: "required"
    },
    {
      icon: Package,
      title: "Original Packaging",
      description: "Items should be in original packaging when possible",
      status: "preferred"
    },
    {
      icon: CheckCircle,
      title: "Good Condition",
      description: "Items must be in resellable condition",
      status: "required"
    },
    {
      icon: Package,
      title: "All Components",
      description: "Include all accessories and documentation",
      status: "required"
    }
  ]

  const faqs = [
    {
      q: "What is your return policy?",
      a: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, return your item for a full refund."
    },
    {
      q: "Do I need to pay for return shipping?",
      a: "No! We provide a prepaid return shipping label for all returns within the continental US."
    },
    {
      q: "How long do refunds take?",
      a: "Once we receive your returned item, refunds are processed within 3-5 business days to your original payment method."
    },
    {
      q: "Can I exchange an item instead of returning it?",
      a: "Yes! Contact our support team to arrange an exchange. We'll help you find the perfect HydraLux product for your needs."
    },
    {
      q: "What if my item is damaged or defective?",
      a: "We'll arrange an immediate replacement or refund for any defective items. Our quality guarantee covers manufacturing defects."
    },
    {
      q: "Can I return international orders?",
      a: "Yes, but international customers are responsible for return shipping costs. Contact support for assistance with international returns."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RotateCcw className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Easy Returns & Refunds
          </h1>
          <p className="text-xl text-blue-100">
            Not satisfied? No problem. We make returns simple and hassle-free.
          </p>
        </div>
      </section>

      {/* 30-Day Guarantee */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Try any HydraLux product risk-free for 30 days. If you're not completely satisfied, 
              return it for a full refund – no questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-900">30 Days</p>
                <p className="text-sm text-gray-600">To try our products</p>
              </div>
              <div>
                <Package className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-900">Free Returns</p>
                <p className="text-sm text-gray-600">Prepaid shipping label</p>
              </div>
              <div>
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-900">Full Refund</p>
                <p className="text-sm text-gray-600">No restocking fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Return Your Order</h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get your refund
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  {step.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center">
              <RotateCcw className="w-5 h-5 mr-2" />
              Start a Return
            </button>
          </div>
        </div>
      </section>

      {/* Return Conditions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Return Requirements</h2>
            <p className="text-xl text-gray-600">
              To ensure a smooth return process, please follow these guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {returnConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start">
                  <condition.icon className={`w-8 h-8 mr-4 mt-1 ${
                    condition.status === 'required' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-bold text-gray-900 mr-2">{condition.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        condition.status === 'required' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {condition.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Used filter cartridges cannot be returned for hygiene reasons</li>
                  <li>• Items damaged by misuse or normal wear are not eligible for return</li>
                  <li>• Custom or personalized items cannot be returned unless defective</li>
                  <li>• Original proof of purchase is required for all returns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about returns and refunds
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help with Your Return?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our customer support team is here to make your return experience as smooth as possible
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm">1-800-HYDRALUX</p>
              <p className="text-blue-100 text-xs">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Package className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Email Support</h3>
              <p className="text-blue-100 text-sm">returns@hydralux.com</p>
              <p className="text-blue-100 text-xs">Response within 4 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-blue-100 text-sm">Available on website</p>
              <p className="text-blue-100 text-xs">Instant responses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}