'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline()
    
    // Stars animation
    if (starsRef.current) {
      gsap.fromTo(starsRef.current.children, 
        { 
          scale: 0,
          opacity: 0,
          rotation: 0
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 360,
          duration: 2,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }
      )
    }

    // Title animation with wow effect
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { 
          y: 100,
          opacity: 0,
          scale: 0.5,
          rotationX: 90
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out"
        }
      )
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, 
        { 
          y: 50,
          opacity: 0,
          x: -50
        },
        {
          y: 0,
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5"
      )
    }

    // Buttons animation
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current.children, 
        { 
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.3"
      )
    }

    // Mission section scroll animation
    if (missionRef.current) {
      gsap.fromTo(missionRef.current, 
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children, 
        { 
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotationY: 45
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Floating animation for stars
    if (starsRef.current) {
      gsap.to(starsRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: "random(0, 2)"
      })
    }

    // Glow effect for title
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        textShadow: "0 0 20px #00D4FF, 0 0 40px #00D4FF, 0 0 60px #00D4FF",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    }

  }, [])

  return (
    <div className="min-h-screen scorpio-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Stars */}
        <div ref={starsRef} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-scorpio-primary rounded-full shadow-lg shadow-scorpio-primary/50"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/30"></div>
          <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-scorpio-secondary rounded-full shadow-lg shadow-scorpio-secondary/50"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-scorpio-primary rounded-full shadow-lg shadow-scorpio-primary/30"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-scorpio-primary rounded-full shadow-lg shadow-scorpio-primary/40"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/20"></div>
          <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-scorpio-secondary rounded-full shadow-lg shadow-scorpio-secondary/30"></div>
          <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-scorpio-primary rounded-full shadow-lg shadow-scorpio-primary/50"></div>
        </div>

        {/* Animated Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <motion.h1 
              ref={titleRef}
              className="text-6xl md:text-8xl font-bold text-white mb-6 scorpio-text-glow"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 30px #00D4FF, 0 0 60px #00D4FF, 0 0 90px #00D4FF"
              }}
              transition={{ duration: 0.3 }}
            >
              SCORPIO
            </motion.h1>
            <motion.div 
              ref={subtitleRef}
              className="text-2xl md:text-4xl text-scorpio-primary font-light mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              From Space to Digital Harmony
            </motion.div>
            <motion.div 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We create extraordinary digital experiences that launch your brand into the digital universe
            </motion.div>
          </div>

          {/* Animated CTA Buttons */}
          <motion.div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              className="px-8 py-4 bg-scorpio-primary text-scorpio-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 scorpio-glow relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Launch Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-scorpio-primary text-scorpio-primary font-semibold rounded-lg hover:bg-scorpio-primary hover:text-scorpio-dark transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-scorpio-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-scorpio-primary rounded-full flex justify-center group cursor-pointer">
            <motion.div 
              className="w-1 h-3 bg-scorpio-primary rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              whileInView={{ 
                background: "linear-gradient(45deg, #00D4FF, #FF6B35, #00D4FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We started as a small team with big dreams and grew into a full-service creative agency. 
              Our mission is to help brands reach for the stars and create digital experiences that are out of this world.
            </motion.p>
          </motion.div>

          {/* Animated Values Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scorpio-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  filter: "drop-shadow(0 0 10px #00D4FF)"
                }}
                transition={{ duration: 0.5 }}
              >
                🚀
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-scorpio-primary transition-colors">
                Innovation
              </h3>
              <p className="text-gray-400 relative z-10">
                We push boundaries and explore new frontiers in digital design
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scorpio-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  filter: "drop-shadow(0 0 10px #FF6B35)"
                }}
                transition={{ duration: 0.5 }}
              >
                ✨
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-scorpio-primary transition-colors">
                Creativity
              </h3>
              <p className="text-gray-400 relative z-10">
                Every project is a unique journey through the creative cosmos
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scorpio-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  filter: "drop-shadow(0 0 10px #00D4FF)"
                }}
                transition={{ duration: 0.5 }}
              >
                🌌
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-scorpio-primary transition-colors">
                Harmony
              </h3>
              <p className="text-gray-400 relative z-10">
                We create perfect balance between form, function, and experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
