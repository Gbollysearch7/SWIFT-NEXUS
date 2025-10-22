import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' }
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      role="navigation"
      aria-label="Main navigation"
      animate={{
        backgroundColor: isScrolled ? 'rgba(13, 13, 13, 0.96)' : 'rgba(15, 30, 53, 0.82)',
        backdropFilter: isScrolled ? 'blur(14px)' : 'blur(8px)',
        borderColor: isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-semibold"
          >
            <a href="#home" className="text-white" aria-label="Swift Nexus - Home">
              Swift Nexus
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-8 uppercase tracking-[0.3em]"
            role="menubar"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={fadeInUp}
            className="text-neutral-light hover:text-neutral-lighter transition-colors duration-200 font-medium text-xs relative after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
                role="menuitem"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="px-5 py-2 rounded-lg transition-all duration-200 text-sm font-semibold shadow-[0_12px_30px_rgba(212,175,55,0.28)]"
              asChild
            >
              <a href="#final-cta" aria-label="Request a strategic audit">Request Audit</a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="px-5 py-2 rounded-lg transition-all duration-200 text-sm font-semibold border-white/15 text-white hover:text-dark hover:bg-neutral-lighter"
              asChild
            >
              <a href="#final-cta" aria-label="Book a consultation">Book Consultation</a>
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
                className="block text-neutral-light hover:text-white transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="w-full rounded-lg shadow-[0_12px_30px_rgba(212,175,55,0.28)]" asChild>
              <a href="#final-cta" aria-label="Request a strategic audit">Request Audit</a>
            </Button>
            <Button size="sm" variant="outline" className="w-full rounded-lg border-white/15 text-white hover:text-dark hover:bg-neutral-lighter" asChild>
              <a href="#final-cta" aria-label="Book a consultation">Book Consultation</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
