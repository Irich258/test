import { motion } from "framer-motion";

interface ActivityCardProps {
  title: string;
}

export default function ActivityCard({ title }: ActivityCardProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] border-l-2 border-l-[#00FFB2]/30 w-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFB2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mt-1 flex-shrink-0">
        <motion.div
          className="w-2 h-2 rounded-full bg-[#00FFB2] shadow-[0_0_8px_#00FFB2]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="text-[#94A3B8] text-xs leading-relaxed">{title}</p>
    </div>
  );
}
