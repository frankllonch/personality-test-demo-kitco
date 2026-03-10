import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function FlipCard3D({ title, text, image }) {
  const cardRef = useRef(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    const rotateY = (px - 0.5) * 12
    const rotateX = (0.5 - py) * 12

    setRotate({ x: rotateX, y: rotateY })
  }

  const resetTilt = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      className="card-3d-wrap w-full max-w-3xl"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => {
        setIsFlipped(false)
        resetTilt()
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: rotate.x,
          rotateY: isFlipped ? rotate.y + 180 : rotate.y,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="card-3d-inner relative h-[420px] w-full"
      >
        <div className="card-face glass-panel absolute inset-0 overflow-hidden rounded-[30px]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            Hover to flip
          </div>
        </div>

        <div className="card-face card-back glass-panel absolute inset-0 rounded-[30px] bg-[#f8f2e9] p-8 md:p-12">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58f1f]">
              Talent
            </p>
            <h2 className="max-w-2xl text-3xl font-bold uppercase leading-tight text-[#d4553b] md:text-5xl">
              {title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700 md:text-2xl">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}