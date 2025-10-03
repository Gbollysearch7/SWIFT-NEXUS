import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blogPosts'

export default function Blog() {
  // Use first 9 posts for display
  const displayPosts = blogPosts.slice(0, 9)

  const legacyBlogPosts = [
    {
      title: 'The Email Marketing Mistake That\'s Costing You Thousands (And How to Fix It)',
      excerpt: 'Most brands treat their welcome email like an afterthought. Big mistake. Your welcome sequence is your first impression and the most profitable email you\'ll ever send. Here\'s how to build one that converts.',
      category: 'Email Marketing',
      date: 'March 15, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      author: 'Sarah Chen'
    },
    {
      title: 'How to Rank #1 on Google in 2025: The SEO Strategies That Actually Work',
      excerpt: 'Google\'s algorithm is constantly evolving, but the fundamentals of ranking haven\'t changed. In this guide, we break down the exact SEO strategies we use to get clients to page one and keep them there.',
      category: 'SEO',
      date: 'March 12, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
      author: 'Alex Rivera'
    },
    {
      title: 'Why Your Content Isn\'t Converting (And What to Do About It)',
      excerpt: 'Publishing blog posts isn\'t enough. If your content isn\'t driving traffic, building your email list, or generating leads, you\'re wasting time. Here\'s how to create content that actually moves the needle.',
      category: 'Content Strategy',
      date: 'March 8, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
      author: 'Marcus Johnson'
    },
    {
      title: '7 Email Subject Lines That Get 50%+ Open Rates (With Examples)',
      excerpt: 'Your subject line is the difference between an opened email and one that goes straight to trash. Here are the 7 proven formulas we use to consistently achieve 50%+ open rates for our clients.',
      category: 'Email Marketing',
      date: 'March 5, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop',
      author: 'Sarah Chen'
    },
    {
      title: 'The Death of Traditional SEO: Why AI Search Changes Everything',
      excerpt: 'ChatGPT and AI-powered search are disrupting traditional SEO. But that doesn\'t mean SEO is dead. It means the rules have changed. Here\'s how to adapt your strategy for the AI era.',
      category: 'SEO',
      date: 'March 1, 2025',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      author: 'Alex Rivera'
    },
    {
      title: 'How to Build a Content Calendar That Actually Gets Results',
      excerpt: 'Most content calendars are just glorified to-do lists. A real content calendar aligns with your business goals, targets the right keywords, and supports every stage of the buyer journey. Here\'s how to build one.',
      category: 'Content Strategy',
      date: 'February 28, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop',
      author: 'Marcus Johnson'
    },
    {
      title: 'The $100K Email Automation Playbook: 5 Flows Every Business Needs',
      excerpt: 'Email automation isn\'t just about saving time. It\'s about making money while you sleep. These 5 automated flows have generated over $100K for our clients. Here\'s how to set them up.',
      category: 'Email Marketing',
      date: 'February 25, 2025',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
      author: 'Sarah Chen'
    },
    {
      title: 'Backlinks in 2025: What Works, What Doesn\'t, and What\'s Dangerous',
      excerpt: 'Link building is still one of the most powerful SEO tactics, but the game has changed. Outdated strategies can get you penalized. Here\'s what actually works in 2025.',
      category: 'SEO',
      date: 'February 22, 2025',
      readTime: '13 min read',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop',
      author: 'Alex Rivera'
    },
    {
      title: 'How to Repurpose One Blog Post Into 30 Pieces of Content',
      excerpt: 'Stop creating content from scratch every time. One well-researched blog post can fuel your content for an entire month. Here\'s the exact repurposing system we use for our clients.',
      category: 'Content Strategy',
      date: 'February 18, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      author: 'Marcus Johnson'
    }
  ]

  const categories = ['All', 'SEO', 'Email Marketing', 'Content Strategy', 'Social Media']

  return (
    <div className="min-h-screen bg-dark pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Rank First Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Actionable insights on SEO, email marketing, and content strategy to help you rank first and stay first.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-12 bg-white/90 border-white/30 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-dark-800 border-b border-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${displayPosts[0].slug}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-dark-800 border-dark-600">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={displayPosts[0].image}
                      alt={displayPosts[0].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-neutral mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {displayPosts[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {displayPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {displayPosts[0].readTime}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 hover:text-accent transition-colors cursor-pointer text-white">
                      {displayPosts[0].title}
                    </h2>
                    <p className="text-neutral mb-6 text-lg">
                      {displayPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral">By {displayPosts[0].author}</span>
                      <Button>
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 bg-dark-700 border-dark-600">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 text-xs text-neutral mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors cursor-pointer line-clamp-2 text-white">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral">By {post.author}</span>
                        <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                          Read →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Growth Insights Delivered to Your Inbox
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 5,000+ marketers and founders who get our weekly email with actionable SEO, email marketing, and content strategy tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/90 border-white/30 h-12 flex-1"
              />
              <Button size="lg" variant="secondary" className="bg-white text-dark hover:bg-gray-100">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
