'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Palette } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Careers', href: '/careers' },
    ],
    services: [
      { name: 'Branding & Creative', href: '/services/branding' },
      { name: 'Digital Marketing', href: '/services/marketing' },
      { name: 'Design & Development', href: '/services/design' },
      { name: 'Content & Production', href: '/services/content' },
      { name: 'Consulting & Strategy', href: '/services/consulting' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Academy', href: '/academy' },
      { name: 'Case Studies', href: '/projects' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Portfolio', href: '#', icon: Palette },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary-dark scorpio-text-glow">
                SCORPIO
              </div>
            </Link>
            <p className="text-secondary-dark mb-6 max-w-sm">
              From Space to Digital Harmony. We create extraordinary digital experiences 
              that launch your brand into the digital universe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-dark">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@scorpio.agency</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-dark">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-dark">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-primary-dark font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-dark hover:text-primary-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-primary-dark font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-dark hover:text-primary-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-primary-dark font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-dark hover:text-primary-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-primary-dark font-semibold mb-3">Newsletter</h4>
              <p className="text-secondary-dark text-sm mb-3">
                Stay updated with our latest insights
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-scorpio-primary"
                />
                <button className="px-4 py-2 bg-primary-dark text-white font-semibold rounded-r-lg hover:bg-opacity-90 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-dark text-sm">
              © {currentYear} Scorpio Creative Agency. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-secondary-dark hover:text-primary-dark transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
