import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormFieldProps {
  id: string
  label: string
  type?: string
  required?: boolean
  rows?: number
  delay?: number
}

function FormField({ id, label, type = 'text', required = false, rows, delay = 0 }: FormFieldProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0)
  }

  const isTextarea = rows !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            rows={rows}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={handleChange}
            className="w-full px-4 pt-6 pb-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:border-white/60 focus:outline-none transition-all duration-300 resize-none"
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={handleChange}
            className="w-full px-4 pt-6 pb-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:border-white/60 focus:outline-none transition-all duration-300"
          />
        )}
        
        <motion.label
          htmlFor={id}
          animate={{
            y: focused || hasValue ? -8 : 0,
            scale: focused || hasValue ? 0.85 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`absolute left-4 pointer-events-none transition-colors duration-300 ${
            focused || hasValue 
              ? 'top-2 text-white' 
              : 'top-1/2 -translate-y-1/2 text-white/70'
          }`}
        >
          {label}
          {required && <span className="text-white/50 ml-1">*</span>}
        </motion.label>

        {/* Animated border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/60 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success message
    }, 2000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <FormField id="name" label="Name" required delay={0.1} />
      <FormField id="email" label="Email" type="email" required delay={0.2} />
      <FormField id="message" label="Message" rows={6} required delay={0.3} />

      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
      >
        <motion.span
          className="relative z-10"
          animate={{ opacity: isSubmitting ? 0 : 1 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.span>
        
        {/* Animated background on hover */}
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.form>
  )
}

