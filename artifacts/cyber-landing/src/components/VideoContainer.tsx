import { motion } from "framer-motion";

export default function VideoContainer() {
  return (
    <motion.div 
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#00FFB2]/20 bg-black"
      style={{ boxShadow: "0 0 40px rgba(0,255,178,0.08)" }}
    >
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00FFB2]">
        <motion.div 
          className="w-1.5 h-1.5 rounded-full bg-red-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        🔴 LIVE ANALYSIS
      </div>
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/lcTv9vAIbVQ?si=4iNVNqs4SoKP8X1Y&autoplay=1&mute=0&rel=0&modestbranding=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
}