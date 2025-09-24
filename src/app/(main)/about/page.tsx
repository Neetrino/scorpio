'use client'

import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'

export default function AboutPage() {
  const heroRef = useFadeIn(0.2)
  const timelineRef = useSlideUp(0.5)
  const valuesRef = useSlideUp(0.7)

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a small team with big dreams, working from a small office in San Francisco."
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Landed our first enterprise client and expanded our team to 5 people."
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Opened our second office and launched our Academy program for digital education."
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Won 'Best Creative Agency' award and expanded internationally."
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Now a full-service creative agency with 25+ team members and 100+ successful projects."
    }
  ]

  const values = [
    {
      title: "Collaboration",
      description: "We believe in the power of working together. As a team, we are stronger than the sum of our parts.",
      icon: "🤝"
    },
    {
      title: "Creativity",
      description: "Every project is a unique journey through the creative cosmos, pushing boundaries and exploring new frontiers.",
      icon: "✨"
    },
    {
      title: "Harmony",
      description: "We create perfect balance between form, function, and experience, bringing everything into perfect alignment.",
      icon: "🌌"
    },
    {
      title: "Accountability",
      description: "We take ownership of our work and deliver on our promises, treating every client as family.",
      icon: "🎯"
    }
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      bio: "Visionary leader with 10+ years in digital design and brand strategy.",
      image: "/team/alex.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating seamless digital experiences.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Mike Rodriguez",
      role: "Marketing Strategist",
      bio: "Data-driven marketer with expertise in growth hacking and digital campaigns.",
      image: "/team/mike.jpg"
    },
    {
      name: "Emma Wilson",
      role: "UX Designer",
      bio: "User experience specialist focused on creating intuitive and accessible designs.",
      image: "/team/emma.jpg"
    }
  ]

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={heroRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 scorpio-text-glow">
              About Scorpio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What started as a small team with big ambition has grown into a creative agency 
              with a mission to ensure every business reaches its full digital potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-300 max-w-4xl mx-auto">
              <p>
                "Scorpio arose from a desire to bring people, projects, and clients into perfect harmony."
              </p>
              <p>
                "Collaboration is key to how we function because as a team, we are stronger than the sum of our parts."
              </p>
              <p>
                "Our customers regard us as an extension of their team. We regard them as family."
              </p>
              <p className="text-scorpio-primary font-semibold">
                "We're coming from Space to make your digital Space an aesthetic place to connect and communicate."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={timelineRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small team to a full-service creative agency
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-scorpio-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-scorpio-dark-light p-6 rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300">
                      <div className="text-scorpio-primary font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-scorpio-primary rounded-full border-4 border-scorpio-dark"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={valuesRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The creative minds behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center text-4xl text-gray-400 group-hover:text-scorpio-primary transition-colors duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-scorpio-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 scorpio-glow">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-scorpio-primary text-scorpio-primary font-semibold rounded-lg hover:bg-scorpio-primary hover:text-scorpio-dark transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
