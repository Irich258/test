import { motion } from "framer-motion";

interface ProgressCardProps {
  progress: number;
  location: string;
}

export default function ProgressCard({ progress, location }: ProgressCardProps) {
  let statusText = "Secure synchronization completed ✓";
  if (progress <= 15) statusText = "Initializing secure protocols...";
  else if (progress <= 30) statusText = "Establishing encrypted tunnel...";
  else if (progress <= 50) statusText = "Synchronizing device signals...";
  else if (progress <= 70) statusText = "Analyzing communication patterns...";
  else if (progress <= 90) statusText = "Validating synchronization data...";
  else if (progress <= 99) statusText = "Finalizing encrypted analysis...";

  return (
    <motion.div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">Secure Synchronization Analysis</span>
        <span className="text-xs text-[#94A3B8]">{location}</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Encrypted Processing</span>
          <span>{progress}%</span>
        </div>
        
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00FFB2]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ boxShadow: progress > 0 ? "0 0 12px rgba(0,255,178,0.4)" : "none" }}
          />
        </div>

        <span className="text-xs text-[#94A3B8] mt-1">{statusText}</span>
      </div>
    </motion.div>
  );
}