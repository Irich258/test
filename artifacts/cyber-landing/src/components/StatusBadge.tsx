import { motion } from "framer-motion";

export default function StatusBadge() {
  return (
    <motion.div 
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-2 h-2 rounded-full bg-[#00FFB2] shadow-[0_0_10px_#00FFB2]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-xs font-mono tracking-wider text-[#94A3B8]">
        ENCRYPTED CONNECTION ACTIVE
      </span>
    </motion.div>
  );
}