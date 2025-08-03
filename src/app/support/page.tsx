import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  CheckCircle,
  Truck,
  RotateCcw,
  FileText
} from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "1-800-HYDRALUX",
      hours: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@hydralux.com",
      hours: "24/7",
      response: "Within 4 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on website",
      hours: "Mon-Sun: 8AM-10PM EST",
      response: "Instant"
    }
  ]

  const quickHelp = [
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to common questions",
      link: "#faq"
    },
    {
      icon: Truck,
      title: "Shipping Info",
      description: "Track orders and shipping details",
      link: "/shipping"
    },
    {
      icon: RotateCcw,
      title: "Returns",
      description: "Return policy and process",
      link: "/returns"
    },
    {
      icon: FileText,
      title: "User Manuals",
      description: "Installation guides and manuals",
      link: "#manuals"
    }
  ]

  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days."
        },
        {
          q: "How can I track my order?",
          a: "You'll receive a tracking number via email once your order ships. You can also track orders in your account dashboard."
        }
      ]
    },
    {
      category: "Products & Installation",
      questions: [
        {
          q: "Are your filters certified?",
          a: "Yes, all our filters are NSF and EPA certified for safety and effectiveness. They remove 99.99% of contaminants."
        },
        {
          q: "How difficult is installation?",
          a: "Very easy! All products are designed for tool-free installation. Most customers complete setup in under 10 minutes."
        },
        {
          q: "When should I replace my filter?",
          a: "Replacement frequency varies by product and usage. Most filters have indicators, and we send replacement reminders."
        }
      ]
    },
    {
      category: "Returns & Warranty",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day money-back guarantee. If you're not satisfied, return for a full refund."
        },
        {
          q: "Do products come with a warranty?",
          a: "Yes, all products include a comprehensive warranty covering manufacturing defects and performance issues."
        },
        {
          q: "How do I start a return?",
          a: "Contact our support team or use our online return portal. We'll provide a prepaid return label."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How Can We Help?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Get quick answers, expert support, and everything you need to know about HydraLux
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, installation guides, FAQs..."
                className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white pr-12"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <HelpCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach our expert support team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <method.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-blue-600">{method.contact}</p>
                  <div className="flex items-center justify-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{method.hours}</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Response: {method.response}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help</h2>
            <p className="text-xl text-gray-600">
              Find answers and resources for common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about HydraLux products and services
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="p-6 space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert support team is standing by to help you with any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}