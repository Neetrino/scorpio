'use client'

import { useState } from 'react'
import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'
import Link from 'next/link'

export default function ProjectsPage() {
  const heroRef = useFadeIn(0.2)
  const projectsRef = useSlideUp(0.5)
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'mobile', label: 'Mobile App' }
  ]

  const projects = [
    {
      id: 1,
      title: "TechFlow Dashboard",
      client: "TechFlow Inc.",
      category: "web",
      industry: "SaaS",
      year: "2024",
      description: "Complete redesign of their analytics dashboard with improved UX and performance",
      image: "/projects/techflow.jpg",
      results: {
        metric: "40%",
        label: "Increase in User Engagement"
      },
      tags: ["UI/UX", "Dashboard", "Analytics"]
    },
    {
      id: 2,
      title: "EcoBrand Identity",
      client: "EcoBrand",
      category: "branding",
      industry: "Sustainability",
      year: "2024",
      description: "Complete brand identity system for sustainable fashion startup",
      image: "/projects/ecobrand.jpg",
      results: {
        metric: "300%",
        label: "Brand Recognition"
      },
      tags: ["Branding", "Logo Design", "Identity"]
    },
    {
      id: 3,
      title: "FoodieApp Mobile",
      client: "FoodieApp",
      category: "mobile",
      industry: "Food & Beverage",
      year: "2023",
      description: "Mobile app design and development for food delivery service",
      image: "/projects/foodieapp.jpg",
      results: {
        metric: "2.5M",
        label: "Downloads"
      },
      tags: ["Mobile App", "iOS", "Android"]
    },
    {
      id: 4,
      title: "FinanceFlow Campaign",
      client: "FinanceFlow",
      category: "marketing",
      industry: "Fintech",
      year: "2023",
      description: "Digital marketing campaign that increased conversions by 150%",
      image: "/projects/financeflow.jpg",
      results: {
        metric: "150%",
        label: "Conversion Increase"
      },
      tags: ["Digital Marketing", "Campaign", "Growth"]
    },
    {
      id: 5,
      title: "HealthCare Portal",
      client: "MediCare Plus",
      category: "web",
      industry: "Healthcare",
      year: "2023",
      description: "Patient portal redesign with focus on accessibility and usability",
      image: "/projects/healthcare.jpg",
      results: {
        metric: "60%",
        label: "Faster Check-in Process"
      },
      tags: ["Healthcare", "Portal", "Accessibility"]
    },
    {
      id: 6,
      title: "Fashion Forward Brand",
      client: "StyleHub",
      category: "branding",
      industry: "Fashion",
      year: "2023",
      description: "Complete brand overhaul for fashion e-commerce platform",
      image: "/projects/stylehub.jpg",
      results: {
        metric: "200%",
        label: "Sales Increase"
      },
      tags: ["E-commerce", "Branding", "Fashion"]
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={heroRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-6 scorpio-text-glow">
              Our Projects
            </h1>
            <p className="text-xl text-secondary-dark max-w-3xl mx-auto">
              Discover our portfolio of successful digital experiences that have launched brands into the digital universe
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-dark text-white scorpio-glow'
                    : 'bg-white text-secondary-dark hover:text-primary-dark hover:border-primary-dark border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg border border-gray-200 hover:border-primary-dark transition-all duration-300 overflow-hidden group shadow-lg">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center text-4xl text-gray-600 group-hover:text-primary-dark transition-colors">
                  {project.title.charAt(0)}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-scorpio-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary-dark text-sm">{project.client} • {project.industry} • {project.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-scorpio-secondary">{project.results.metric}</div>
                      <div className="text-xs text-muted-dark">{project.results.label}</div>
                    </div>
                  </div>
                  
                  <p className="text-secondary-dark mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-secondary-dark text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="block w-full text-center px-4 py-2 border border-primary-dark text-primary-dark font-semibold rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-300"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-primary-dark mb-2">100+</div>
              <div className="text-secondary-dark">Projects Completed</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-primary-dark mb-2">50+</div>
              <div className="text-secondary-dark">Happy Clients</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-primary-dark mb-2">5</div>
              <div className="text-secondary-dark">Years Experience</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-primary-dark mb-2">98%</div>
              <div className="text-secondary-dark">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-secondary-dark mb-8">
            Let's create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 scorpio-glow"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-primary-dark text-primary-dark font-semibold rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
