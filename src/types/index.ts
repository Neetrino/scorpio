// Base types
export interface BaseEntity {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Project types
export interface Project extends BaseEntity {
  title: string
  slug: { current: string }
  description: string
  content: any[]
  featuredImage: SanityImage
  gallery: SanityImage[]
  category: string
  tags: string[]
  client: string
  year: number
  featured: boolean
  order: number
}

// Service types
export interface Service extends BaseEntity {
  title: string
  slug: { current: string }
  description: string
  content: any[]
  icon: string
  featured: boolean
  order: number
  price?: {
    from: number
    to: number
    currency: string
  }
}

// Team types
export interface TeamMember extends BaseEntity {
  name: string
  position: string
  bio: string
  photo: SanityImage
  linkedin?: string
  twitter?: string
  order: number
}

// Blog types
export interface BlogPost extends BaseEntity {
  title: string
  slug: { current: string }
  excerpt: string
  content: any[]
  featuredImage: SanityImage
  category: string
  tags: string[]
  publishedAt: string
  featured: boolean
}

// Contact types
export interface ContactInfo extends BaseEntity {
  email: string
  phone: string
  address: string
  socialMedia: {
    linkedin: string
    twitter: string
    instagram: string
    behance: string
  }
}

// Sanity Image type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// Navigation types
export interface NavigationItem {
  title: string
  href: string
  children?: NavigationItem[]
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  service?: string
}

// Animation types
export interface AnimationConfig {
  duration: number
  delay: number
  ease: string
  direction?: 'up' | 'down' | 'left' | 'right'
}
