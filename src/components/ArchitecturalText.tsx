import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ArchitecturalTextProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'h1' | 'h2' | 'h3' | 'body'
}

export default function ArchitecturalText({
  children,
  className = '',
  delay = 0,
  variant = 'body',
}: ArchitecturalTextProps) {
  const variants = {
    h1: 'text-hero font-display font-bold',
    h2: 'text-h1 font-display font-bold',
    h3: 'text-h2 font-display font-semibold',
    body: 'text-base',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

