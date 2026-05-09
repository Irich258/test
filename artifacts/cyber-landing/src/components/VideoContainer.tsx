import { motion } from "framer-motion";

export default function VideoContainer() {
  return (
    <motion.div 
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#00FFB2]/20 bg-black"
      style={{ boxShadow: "0 0 40px rgba(0,255,178,0.08)" }}
    >

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