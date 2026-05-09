import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
      
      {/* Radial Gradient Glow Blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00FFB2]/10 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}