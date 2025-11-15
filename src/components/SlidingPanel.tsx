import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlidingPanelProps {
  children: ReactNode
  direction?: 'left' | 'right'
  delay?: number
  className?: string
}

export default function SlidingPanel({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: SlidingPanelProps) {
  const xValue = direction === 'left' ? -100 : 100

  return (
    <motion.div
      initial={{ x: xValue, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

