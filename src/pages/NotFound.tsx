import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark pt-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            className="text-9xl md:text-[200px] font-bold text-accent mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            404
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Looks like this page isn't ranking.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Even the best of us end up on page 404 sometimes. Let's get you back on track and ranking #1 again.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" asChild className="group">
              <Link to="/">
                <Home className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                <Search className="mr-2 w-5 h-5" />
                Browse Blog
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-gray-600 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#services" className="text-accent hover:text-accent-dark transition-colors">
                Our Services
              </Link>
              <Link to="/#case-studies" className="text-accent hover:text-accent-dark transition-colors">
                Case Studies
              </Link>
              <Link to="/about" className="text-accent hover:text-accent-dark transition-colors">
                About Us
              </Link>
              <Link to="/#pricing" className="text-accent hover:text-accent-dark transition-colors">
                Pricing
              </Link>
              <Link to="/#contact" className="text-accent hover:text-accent-dark transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Floating Illustration */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Search className="w-32 h-32 mx-auto text-accent/30" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
