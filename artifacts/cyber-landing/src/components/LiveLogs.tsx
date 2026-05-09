import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiveLogsProps {
  visibleCount: number;
}

const LOGS = [
  "Initializing encrypted connection...",
  "Locating nearest secure relay...",
  "Verifying protected device session...",
  "Synchronizing secure activity...",
  "Establishing encrypted tunnel...",
  "Processing intelligence metadata...",
  "Detecting active device signals...",
  "Analyzing communication patterns...",
  "Validating synchronization protocols...",
  "Securing real-time monitoring access...",
  "Finalizing encrypted analysis...",
  "Secure synchronization completed successfully.",
];

export default function LiveLogs({ visibleCount }: LiveLogsProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-[10px] font-mono tracking-widest text-[#94A3B8]/40 uppercase">
        ENCRYPTED SYSTEM LOGS
      </h3>
      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {LOGS.slice(0, visibleCount).map((log, index) => {
            const isLast = index === 11;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "flex items-start gap-2 text-xs font-mono",
                  isLast ? "text-[#00FFB2] font-medium" : "text-[#94A3B8]"
                )}
              >
                <Check className="w-3 h-3 text-[#00FFB2] shrink-0 mt-0.5" />
                <span>{log}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}