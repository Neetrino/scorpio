'use client'

import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'
import Link from 'next/link'

export default function ServicesPage() {
  const heroRef = useFadeIn(0.2)
  const servicesRef = useSlideUp(0.5)

  const services = [
    {
      title: "Branding & Creative",
      slug: "branding",
      description: "Naming, identity systems, brand books, art direction",
      icon: "🎨",
      features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Art Direction"],
      price: "From $5,000"
    },
    {
      title: "Digital Marketing",
      slug: "marketing",
      description: "SMM, influencer campaigns, paid ads, analytics",
      icon: "📈",
      features: ["Social Media", "Influencer Marketing", "Paid Advertising", "Analytics"],
      price: "From $3,000"
    },
    {
      title: "Design & Development",
      slug: "design",
      description: "UI/UX, responsive websites, landing pages, e-commerce",
      icon: "💻",
      features: ["UI/UX Design", "Web Development", "Landing Pages", "E-commerce"],
      price: "From $8,000"
    },
    {
      title: "Content & Production",
      slug: "content",
      description: "Photo, video, motion design, post-production",
      icon: "🎬",
      features: ["Photography", "Video Production", "Motion Graphics", "Post-Production"],
      price: "From $4,000"
    },
    {
      title: "Consulting & Strategy",
      slug: "consulting",
      description: "Market analysis, GTM, growth strategy, audits",
      icon: "🧠",
      features: ["Market Analysis", "Growth Strategy", "Business Audits", "GTM Planning"],
      price: "From $2,000"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business, goals, and challenges to understand what makes you unique."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs."
    },
    {
      step: "03",
      title: "Execution",
      description: "Our team brings the strategy to life with creative excellence and technical precision."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We continuously monitor, analyze, and optimize to ensure maximum impact and ROI."
    }
  ]

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={heroRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 scorpio-text-glow">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to launch your brand into the digital universe
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 p-8 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-scorpio-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                        <span className="w-2 h-2 bg-scorpio-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-scorpio-primary font-bold text-lg">{service.price}</span>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="block w-full text-center px-6 py-3 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-scorpio-primary text-scorpio-dark font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and find the perfect solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 scorpio-glow"
            >
              Request a Proposal
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-scorpio-primary text-scorpio-primary font-semibold rounded-lg hover:bg-scorpio-primary hover:text-scorpio-dark transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
