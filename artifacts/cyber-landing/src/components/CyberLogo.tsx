import { motion } from "framer-motion";

export default function CyberLogo() {
  return (
    <motion.div 
      className="relative flex items-center justify-center"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          cx="24" cy="24" r="20" 
          stroke="#00FFB2" strokeWidth="1" strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M24 10L36 16V30L24 38L12 30V16L24 10Z" 
          stroke="#00FFB2" strokeWidth="2" fill="rgba(0, 255, 178, 0.1)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="24" cy="24" r="4" fill="#00FFB2" />
      </svg>
      <div className="absolute inset-0 bg-[#00FFB2]/20 blur-[20px] rounded-full" />
    </motion.div>
  );
}