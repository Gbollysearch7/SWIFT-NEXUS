import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-600" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-semibold"
          >
            <a href="#" className="text-white" aria-label="Rank First - Home">
              Rank First
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-light-600 hover:text-white transition-colors duration-200 font-normal text-sm"
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="px-5 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              asChild
            >
              <a href="#contact" aria-label="Get your free growth audit">Get Free Audit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-dark-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-6 space-y-4 border-t border-dark-600"
            role="menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-light-600 hover:text-white transition-colors py-2 font-normal"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="w-full rounded-lg" asChild>
              <a href="#contact" aria-label="Get your free growth audit">Get Free Audit</a>
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
