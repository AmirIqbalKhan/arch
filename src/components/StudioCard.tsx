import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

interface StudioCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

export default function StudioCard({ children, delay = 0, className = '' }: StudioCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -8
    const rotationY = (offsetX / (rect.width / 2)) * 8

    rotateX.set(rotationX)
    rotateY.set(rotationY)
  }

  const handleMouseEnter = () => {
    scale.set(1.02)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: delay === 0.1 ? -30 : 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

