import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ContactForm from '@/components/ContactForm'
import {
  Mail,
  Search,
  FileText,
  Newspaper,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Users,
  Target,
  Palette,
  BarChart,
  Lightbulb,
  Cpu,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'


export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h1 className="font-display font-semibold mb-8 leading-tight text-white">
              Every great brand<br />
              starts with <span className="text-accent">ranking first</span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-neutral mb-16 max-w-3xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              We help ambitious brands dominate search, win inbox attention,<br />
              and turn content into revenue.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Button
                size="lg"
                className="group bg-accent hover:bg-accent-dark text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-200"
              >
                Get My Free Growth Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-light-600 hover:text-white hover:bg-dark-600 px-8 py-6 text-base font-medium rounded-lg transition-all duration-200"
              >
                Book a Strategy Call
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-40 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { value: '217%', label: 'Average Organic Traffic Growth' },
              { value: '$2.4M+', label: 'Revenue Generated for Clients' },
              { value: '94%', label: 'Client Retention Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-6xl font-display font-semibold text-white mb-3">{stat.value}</div>
                <div className="text-light-600 font-normal text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by brands that refuse to stay invisible
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              We partner with ambitious companies who understand that ranking on page 2 is the same as being invisible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {['TechFlow Solutions', 'Luxe Apparel Co.', 'GreenLeaf Organics', 'Maverick SaaS',
              'Peak Performance', 'Urban Nest', 'Infinite Digital', 'Bloom Beauty'].map((client, i) => (
              <div key={i} className="text-xl font-semibold text-neutral">{client}</div>
            ))}
          </div>

          <p className="text-center text-neutral mt-12 max-w-3xl mx-auto">
            Over 80% of buyers never scroll past page one. Our clients don't just rank: they dominate the first page and own the conversation in their industry.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                We're not just another <span className="text-accent">marketing agency</span>
              </h2>
              <div className="space-y-4 text-lg text-neutral">
                <p>
                  At Rank First, we don't chase vanity metrics. We don't care about likes, followers, or "brand awareness" that doesn't convert. We care about measurable growth: the kind that shows up in your revenue reports, not just your analytics dashboard.
                </p>
                <p>
                  We built this agency on a simple truth: your most valuable digital asset isn't your social media following. It's your email list. It's your search rankings. It's the content that brings qualified buyers to your door, ready to invest.
                </p>
                <p>
                  Our clients come to us when they're tired of agencies that overpromise and underdeliver. They stay because we build systems that generate consistent, predictable growth.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
                  <p className="font-semibold text-accent">
                    Our mission: help ambitious brands rank first, stay first, and turn their digital presence into a revenue-generating machine.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 leading-tight text-white">
              <span className="text-accent">Services</span> That Drive Revenue
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto font-normal leading-relaxed">
              From AI-powered automation to proven growth strategies, we deliver results that matter to your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: 'SEO',
                description: 'Dominate search results with data-driven strategies that increase organic traffic and rankings.',
                badge: null
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Paid Ads (PPC & Social)',
                description: 'Maximize ROI with targeted campaigns across Google, Facebook, Instagram, and LinkedIn.',
                badge: null
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Marketing & Automation',
                description: 'Build automated email sequences that nurture leads and drive consistent revenue.',
                badge: null
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Social Media Management',
                description: 'Grow your brand with strategic content that builds authority and drives engagement.',
                badge: null
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Graphic Design & Branding',
                description: 'Create a memorable brand identity with professional design that stands out.',
                badge: null
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Content Marketing',
                description: 'Strategic content creation including blogs, videos, and infographics that convert.',
                badge: null
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'Marketing Audits',
                description: 'Comprehensive performance audits and competitive analysis to uncover growth opportunities.',
                badge: null
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'Marketing Strategy & Consultation',
                description: 'Expert guidance to develop winning marketing strategies aligned with your business goals.',
                badge: null
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'AI-Driven Marketing & Automation',
                description: 'Leverage AI for personalized campaigns, predictive analytics, and intelligent automation that scales your growth.',
                badge: 'New'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-dark-800 border border-dark-600 hover:border-accent transition-all duration-300 relative">
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  <CardHeader className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold mb-2 text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-neutral leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">AI-Powered Growth</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Marketing <span className="text-accent">Intelligence</span> That Scales
              </h2>
              <p className="text-xl text-neutral mb-8 leading-relaxed">
                We leverage cutting-edge AI and automation to deliver personalized campaigns, optimize performance in real-time, and scale your growth without scaling your costs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
                    <p className="text-neutral">AI-powered insights that predict customer behavior and optimize campaign performance before you spend a dollar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Intelligent Automation</h3>
                    <p className="text-neutral">Automated workflows for email sequences, lead scoring, chatbots, and campaign optimization that run 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Hyper-Personalization</h3>
                    <p className="text-neutral">Machine learning algorithms that deliver the right message to the right person at exactly the right time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-dark-800 border-dark-600 p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-light font-medium">Campaign ROI</span>
                      <span className="text-accent font-bold">+347%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-light font-medium">Lead Quality Score</span>
                      <span className="text-accent font-bold">92/100</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-light font-medium">Conversion Rate</span>
                      <span className="text-accent font-bold">+215%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-dark-600">
                    <p className="text-sm text-neutral italic">
                      "Rank First's AI-powered automation increased our qualified leads by 3x while reducing our cost per acquisition by 60%."
                    </p>
                    <p className="text-sm text-neutral-light mt-2 font-semibold">— Sarah Chen, CMO at TechFlow</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Proof That <span className="text-accent">It Works</span>
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Real results from real clients. See how we've helped businesses achieve exponential growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'How a Fashion Brand Generated $57K in 90 Days with Email',
                category: 'Email Marketing',
                challenge: 'A direct-to-consumer fashion brand had 12,000 email subscribers but was generating less than $2,000/month from campaigns.',
                solution: 'We rebuilt their email strategy with a personalized 5-part welcome series, optimized subject lines, and implemented abandoned cart flows.',
                results: ['+42% open rates', '+18% CTR', '$57K in 90 days'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
              },
              {
                title: 'How a SaaS Startup Went from Page 5 to #1 in 6 Months',
                category: 'SEO & Content Marketing',
                challenge: 'A SaaS startup was buried on page 5 of Google and relying entirely on paid ads, draining their runway fast.',
                solution: 'Full technical SEO audit, site restructure, comprehensive keyword research, and 47 high-authority backlinks.',
                results: ['#1 for 7 keywords', '320% traffic increase', '60% lower CAC'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
              },
              {
                title: 'How a Local Service Brand Went from Invisible to Industry Leader',
                category: 'Content + Social Media',
                challenge: 'A local home services company had zero online presence beyond a basic website.',
                solution: 'Full-funnel content strategy with SEO blog posts, Instagram Reels, LinkedIn thought leadership, and community engagement.',
                results: ['10x social following', '2x inbound leads', 'Top-ranked locally'],
                image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop'
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-500 bg-dark-700 border-dark-600">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-white mb-1">Challenge:</p>
                        <p className="text-neutral">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Solution:</p>
                        <p className="text-neutral">{study.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-2">Results:</p>
                        <div className="space-y-1">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent" />
                              <span className="text-neutral-light font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full mt-2 text-accent hover:bg-accent/10">
                        Read Full Case Study →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                quote: "Before Rank First, we were throwing money at Facebook ads and hoping for the best. Now we have a real email strategy that brings in consistent revenue every week. We've generated over $80K in the last 6 months from email alone.",
                name: 'Sarah Mitchell',
                title: 'Founder, Luxe Apparel Co.'
              },
              {
                quote: "We went from barely ranking for anything to owning page one for our most important keywords. Our organic traffic has tripled, and we're finally seeing consistent inbound leads.",
                name: 'Marcus Chen',
                title: 'CEO, Maverick SaaS'
              },
              {
                quote: "I've worked with four marketing agencies in the past three years. Rank First is the only one that actually moved the needle. They don't just report on metrics, they focus on revenue.",
                name: 'Jennifer Rodriguez',
                title: 'VP of Marketing, TechFlow Solutions'
              },
              {
                quote: "Most agencies overpromise and underdeliver. Rank First did the opposite. Our website traffic is up 280%, our social following has exploded, and we're getting DMs from potential clients weekly.",
                name: 'David Park',
                title: 'Founder, Peak Performance Coaching'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.4 } }}
              >
                <Card className="h-full bg-dark-800 border border-dark-600 hover:shadow-2xl transition-all duration-400">
                  <CardContent className="p-10">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-accent/40" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-neutral-light mb-8 leading-relaxed text-lg font-light">"{testimonial.quote}"</p>
                    <div className="border-t border-dark-600 pt-6">
                      <p className="font-serif font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-sm text-neutral mt-1 font-medium">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Competitors Are Already Fighting for Page One
            </h2>
            <p className="text-xl mb-8 text-white/90">
              The only question is: will you get there first?
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-dark hover:bg-gray-100">
              Book Your Free Audit Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does SEO take to work?',
                a: 'SEO is a long-term strategy, not a quick fix. Most clients start seeing meaningful results within 3-6 months, with significant traffic and ranking improvements by month 6-12. We focus on quick wins early while building toward long-term growth.'
              },
              {
                q: 'Do you guarantee results?',
                a: "We don't guarantee specific rankings. No ethical agency can. What we do guarantee is proven, white-hat strategies that have worked for hundreds of clients. We'll be transparent about what's working and adjust based on data."
              },
              {
                q: 'What industries do you work with?',
                a: "We work with e-commerce, SaaS, service-based businesses, B2B companies, and local service providers. Our strategies are industry-agnostic. What matters is that you're ready to invest in long-term growth."
              },
              {
                q: 'Do you offer one-off projects?',
                a: 'Yes, we offer one-time SEO audits, email strategy builds, and content roadmaps. However, our best results come from ongoing partnerships where we can continuously test, optimize, and scale.'
              },
              {
                q: "What makes your email marketing different?",
                a: "We treat email like the revenue-generating machine it is. We build strategic sequences, test obsessively, and segment your list so every email feels personal. Our clients see open rates 2-3x higher than industry average."
              },
              {
                q: 'How do you measure success?',
                a: "We measure what matters: traffic, rankings, leads, and revenue. Every month, you'll get a clear report showing your growth metrics and how they tie to your bottom line. No vanity metrics."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all bg-dark-700 border-dark-600 hover:border-accent" onClick={() => toggleFaq(index)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white">{faq.q}</CardTitle>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral" />
                      )}
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-neutral-light">{faq.a}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Transparent <span className="text-accent">Pricing</span> for Serious Growth
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto">
              Every business is different. After your free growth audit, we'll build a custom plan based on your goals and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Growth Plan',
                price: '$2,500 - $4,500',
                period: '/month',
                description: 'Small businesses and startups ready to build a foundation',
                features: [
                  'Comprehensive SEO audit',
                  'Keyword research & strategy',
                  '4 SEO-optimized blog posts',
                  'Monthly reporting',
                  'Email support'
                ],
                cta: 'Get Custom Quote',
                popular: false
              },
              {
                name: 'Growth Accelerator',
                price: '$5,000 - $8,500',
                period: '/month',
                description: 'Growing businesses ready to dominate their market',
                features: [
                  'Everything in Starter, plus:',
                  'Advanced SEO optimization',
                  '8 blog posts per month',
                  'Email marketing campaigns',
                  'Social media (2 platforms)',
                  'Bi-weekly strategy calls'
                ],
                cta: 'Get Custom Quote',
                popular: true
              },
              {
                name: 'Enterprise Dominance',
                price: '$10,000+',
                period: '/month',
                description: 'Established brands ready to scale aggressively',
                features: [
                  'Everything in Accelerator, plus:',
                  '12+ content pieces/month',
                  'Advanced email automation',
                  'Social media (3+ platforms)',
                  'Link building & PR outreach',
                  'Dedicated account manager'
                ],
                cta: 'Book Strategy Call',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={plan.popular ? 'md:-mt-4' : ''}
              >
                <Card className={`h-full relative bg-dark-700 border-dark-600 ${plan.popular ? 'border-accent border-2 shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2 text-white">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-accent">{plan.price}</span>
                      <span className="text-neutral">{plan.period}</span>
                    </div>
                    <CardDescription className="text-neutral">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="inline-block bg-dark-700 border-dark-600">
              <CardContent className="p-6">
                <p className="text-lg font-semibold mb-2 text-white">One-Time Projects & Audits</p>
                <p className="text-neutral">
                  Not ready for ongoing work? We offer SEO audits ($1,500), email strategy builds ($2,500),
                  and content roadmaps ($2,000).
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* Final CTA & Contact */}
      <section id="contact" className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
                <span className="font-semibold text-sm">FREE Marketing Audit ($2,500 Value)</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Custom Growth Roadmap
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Book a free 30-minute strategy call and receive:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Complete marketing audit of your current strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Custom 90-day growth roadmap tailored to your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Competitive analysis showing gaps you can exploit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Quick wins you can implement immediately</span>
                </li>
              </ul>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">hello@rankfirst.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <span className="text-lg">San Francisco, CA</span>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                  { icon: <Twitter className="w-5 h-5" />, href: '#' },
                  { icon: <Instagram className="w-5 h-5" />, href: '#' },
                  { icon: <Youtube className="w-5 h-5" />, href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Rank First</h3>
              <p className="text-gray-400 text-sm">
                Empowering ambitious brands to dominate search, win inbox attention, and turn content into revenue.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services/seo" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="/services/email-marketing" className="hover:text-white transition-colors">Email Marketing</a></li>
                <li><a href="/services/content-strategy" className="hover:text-white transition-colors">Content Strategy</a></li>
                <li><a href="/services/content-marketing" className="hover:text-white transition-colors">Content Marketing</a></li>
                <li><a href="/services/social-media" className="hover:text-white transition-colors">Social Media</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Free Growth Audit</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book a Call</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Rank First. All rights reserved. | Dominating search results and inbox since 2020.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
