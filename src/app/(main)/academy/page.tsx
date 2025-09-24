'use client'

import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function AcademyPage() {
  const heroRef = useFadeIn(0.2)
  const eventsRef = useSlideUp(0.5)

  const events = [
    {
      id: 1,
      title: "Digital Branding Masterclass",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "San Francisco, CA",
      speaker: "Alex Johnson",
      description: "Learn the fundamentals of digital branding and how to create compelling brand identities that resonate with your audience.",
      price: "$299",
      spots: 25,
      available: 8
    },
    {
      id: 2,
      title: "UI/UX Design Workshop",
      date: "2024-02-22",
      time: "9:00 AM - 5:00 PM",
      location: "Online",
      speaker: "Sarah Chen",
      description: "Hands-on workshop covering user research, wireframing, prototyping, and design systems.",
      price: "$199",
      spots: 30,
      available: 15
    },
    {
      id: 3,
      title: "Growth Marketing Strategies",
      date: "2024-03-01",
      time: "2:00 PM - 6:00 PM",
      location: "San Francisco, CA",
      speaker: "Mike Rodriguez",
      description: "Discover proven growth marketing strategies and how to scale your business through digital channels.",
      price: "$149",
      spots: 20,
      available: 3
    },
    {
      id: 4,
      title: "Content Creation & Production",
      date: "2024-03-08",
      time: "10:00 AM - 3:00 PM",
      location: "Online",
      speaker: "Emma Wilson",
      description: "Master the art of content creation, from concept to production, including photography and video.",
      price: "$179",
      spots: 25,
      available: 12
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={heroRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 scorpio-text-glow">
              Academy & Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts and connect with like-minded professionals in our exclusive workshops and events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={eventsRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our expert-led workshops and masterclasses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-scorpio-primary font-medium">{event.speaker}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-scorpio-primary">{event.price}</div>
                    <div className="text-sm text-gray-400">{event.available} spots left</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Users className="w-5 h-5" />
                    <span>{event.spots} participants max</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 px-6 py-3 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                    Register Now
                  </button>
                  <button className="px-6 py-3 border border-scorpio-primary text-scorpio-primary font-semibold rounded-lg hover:bg-scorpio-primary hover:text-scorpio-dark transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Academy */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Join Our Academy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry leaders and advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Instructors</h3>
              <p className="text-gray-400">Learn from industry professionals with years of real-world experience</p>
            </div>
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Hands-on Learning</h3>
              <p className="text-gray-400">Practical workshops and real projects to apply your new skills</p>
            </div>
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Networking</h3>
              <p className="text-gray-400">Connect with like-minded professionals and expand your network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified about new workshops, events, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-scorpio-primary"
            />
            <button className="px-6 py-3 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
