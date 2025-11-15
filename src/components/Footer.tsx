import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Studio', href: '#studio' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }
  }

  return (
    <footer className="relative border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">ARCH</h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Creating architectural excellence through innovative design and thoughtful execution.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-display font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-display font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:hello@archstudio.com"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm break-all"
                >
                  hello@archstudio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-white/70 text-xs sm:text-sm">
                123 Architecture Street
                <br />
                Design City, DC 12345
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs sm:text-sm font-display font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">
              Follow
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} ARCH Studio. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="text-white/50 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

