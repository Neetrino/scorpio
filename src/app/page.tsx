'use client'

import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'

export default function Home() {
  const heroRef = useFadeIn(0.2)
  const titleRef = useSlideUp(0.5)
  const subtitleRef = useSlideUp(0.7)

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-scorpio-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-scorpio-secondary rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-scorpio-primary rounded-full animate-pulse delay-3000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div ref={heroRef} className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 scorpio-text-glow">
              SCORPIO
            </h1>
            <div ref={titleRef} className="text-2xl md:text-4xl text-scorpio-primary font-light mb-4">
              From Space to Digital Harmony
            </div>
            <div ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We create extraordinary digital experiences that launch your brand into the digital universe
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 scorpio-glow">
              Launch Your Project
            </button>
            <button className="px-8 py-4 border-2 border-scorpio-primary text-scorpio-primary font-semibold rounded-lg hover:bg-scorpio-primary hover:text-scorpio-dark transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-scorpio-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-scorpio-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We started as a small team with big dreams and grew into a full-service creative agency. 
              Our mission is to help brands reach for the stars and create digital experiences that are out of this world.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">We push boundaries and explore new frontiers in digital design</p>
            </div>
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Creativity</h3>
              <p className="text-gray-400">Every project is a unique journey through the creative cosmos</p>
            </div>
            <div className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold text-white mb-2">Harmony</h3>
              <p className="text-gray-400">We create perfect balance between form, function, and experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
