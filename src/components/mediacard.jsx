import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Mediacard({ title, text, image, videoPath }) {
  const cardRef = useRef(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    const rotateY = (px - 0.5) * 8
    const rotateX = (0.5 - py) * 8

    setRotate({ x: rotateX, y: rotateY })
  }

  const resetTilt = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      className="w-full max-w-[900px] [perspective:1600px]"
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
        className="relative w-full aspect-[16/9]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#f7f7f7]"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full h-70% object-cover"
            draggable={false}
          />

          {videoPath && (
            <motion.video
              key={videoPath}
              src={videoPath}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.22, ease: 'linear' }}
              className="absolute inset-0 h-full w-full object-contain bg-transparent"
            />
          )}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-[28px] bg-white px-10 text-center"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#b58f1f]">
              talento
            </p>

            <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#d4553b] md:text-6xl">
              {title}
            </h2>

            <p className="mx-auto mt-8 max-w-[520px] text-xl leading-[1.45] text-zinc-700 md:text-2xl">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}