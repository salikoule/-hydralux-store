import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    products: [
      { name: "Faucet Filter", href: "/products/faucet-mounted-water-filter" },
      { name: "Adventure Bottle", href: "/products/adventure-bottle-filter" },
      { name: "Shower Head Filter", href: "/products/high-pressure-shower-head-filter" },
      { name: "Bidet Sprayer", href: "/products/dual-nozzle-bidet-sprayer" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Reviews", href: "/reviews" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" }
    ],
    support: [
      { name: "Help Center", href: "/support" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Track Order", href: "/track" },
      { name: "Contact Us", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Warranty", href: "/warranty" },
      { name: "Refund Policy", href: "/refunds" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Hydrated, Stay Informed</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of customers who trust HydraLux for clean, pure water. 
              Get exclusive offers, filter replacement reminders, and water quality tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-3">
              Get 15% off your first order when you subscribe
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                HydraLux
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Clean Living, Elevated. Premium water filtration solutions for home and outdoor use, 
              designed with sophistication and practicality in mind.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>1-800-HYDRALUX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>support@hydralux.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Austin, TX, USA</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center gap-6 mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SSL</span>
                </div>
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">NSF</span>
                </div>
                <span>NSF Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">EPA</span>
                </div>
                <span>EPA Approved</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2024 HydraLux. All rights reserved. Clean Living, Elevated.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}