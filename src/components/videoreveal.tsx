import { AnimatePresence, motion } from 'framer-motion'

export default function VideoReveal({ videoPath, selectedValue }) {
  return (
    <div className="video-frame glass-panel w-full max-w-3xl">
      <AnimatePresence mode="wait">
        {selectedValue ? (
          <motion.video
            key={videoPath}
            src={videoPath}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="aspect-video w-full object-cover"
          />
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex aspect-video items-center justify-center bg-white/40 p-8 text-center text-zinc-500"
          >
            Select a level from 1 to 5 to preview the animation intensity.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}