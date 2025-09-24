'use client'

import { useState } from 'react'
import { useFadeIn, useSlideUp } from '@/hooks/useAnimation'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const heroRef = useFadeIn(0.2)
  const postsRef = useSlideUp(0.5)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'development', label: 'Development' },
    { id: 'strategy', label: 'Strategy' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Branding: Trends to Watch in 2024",
      slug: "future-digital-branding-2024",
      excerpt: "Explore the latest trends in digital branding and how they're shaping the future of brand identity in the digital space.",
      category: "design",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/blog/branding-trends.jpg",
      tags: ["Branding", "Trends", "Digital"]
    },
    {
      id: 2,
      title: "How to Create a Successful Social Media Strategy",
      slug: "successful-social-media-strategy",
      excerpt: "Learn the key components of a winning social media strategy that drives engagement and grows your audience.",
      category: "marketing",
      author: "Mike Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/blog/social-media-strategy.jpg",
      tags: ["Social Media", "Strategy", "Marketing"]
    },
    {
      id: 3,
      title: "Building Accessible Web Applications: A Developer's Guide",
      slug: "accessible-web-applications-guide",
      excerpt: "A comprehensive guide to creating web applications that are accessible to all users, including best practices and tools.",
      category: "development",
      author: "Sarah Chen",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "/blog/accessibility-guide.jpg",
      tags: ["Accessibility", "Web Development", "UX"]
    },
    {
      id: 4,
      title: "The Psychology of Color in Digital Design",
      slug: "psychology-color-digital-design",
      excerpt: "Understanding how color choices impact user behavior and emotions in digital interfaces.",
      category: "design",
      author: "Emma Wilson",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "/blog/color-psychology.jpg",
      tags: ["Design", "Psychology", "UX"]
    },
    {
      id: 5,
      title: "Growth Hacking Strategies for Startups",
      slug: "growth-hacking-strategies-startups",
      excerpt: "Proven growth hacking techniques that can help startups scale quickly and efficiently.",
      category: "strategy",
      author: "Mike Rodriguez",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/blog/growth-hacking.jpg",
      tags: ["Growth", "Startups", "Strategy"]
    },
    {
      id: 6,
      title: "The Complete Guide to UI/UX Design Process",
      slug: "complete-guide-ui-ux-design-process",
      excerpt: "A step-by-step guide to the UI/UX design process, from research to final implementation.",
      category: "design",
      author: "Sarah Chen",
      date: "2023-12-15",
      readTime: "10 min read",
      image: "/blog/ui-ux-process.jpg",
      tags: ["UI/UX", "Design Process", "Methodology"]
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
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
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in digital design, marketing, and development
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-scorpio-primary text-scorpio-dark scorpio-glow'
                    : 'bg-scorpio-dark-light text-gray-300 hover:text-scorpio-primary hover:border-scorpio-primary border border-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-scorpio-dark-light rounded-lg border border-gray-800 overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gray-700 flex items-center justify-center text-4xl text-gray-400">
                  Featured
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-scorpio-primary text-scorpio-dark text-sm font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="text-scorpio-primary text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center space-x-2 text-scorpio-primary font-semibold hover:text-white transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-scorpio-dark-light rounded-lg border border-gray-800 hover:border-scorpio-primary transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gray-700 flex items-center justify-center text-2xl text-gray-400 group-hover:text-scorpio-primary transition-colors">
                  {post.title.charAt(0)}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-scorpio-primary text-xs font-semibold rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-scorpio-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-scorpio-primary font-semibold hover:text-white transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights and updates delivered to your inbox
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
