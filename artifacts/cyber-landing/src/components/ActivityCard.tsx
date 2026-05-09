import { motion } from "framer-motion";

interface ActivityCardProps {
  title: string;
  location: string;
  time: string;
}

export default function ActivityCard({ title, location, time }: ActivityCardProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] border-l-2 border-l-[#00FFB2]/30 w-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFB2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mt-1 flex-shrink-0 relative">
        <div className="w-2 h-2 rounded-full bg-[#00FFB2] shadow-[0_0_8px_#00FFB2] animate-pulse" />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-white text-sm font-medium tracking-wide truncate">{title}</span>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-[#94A3B8] text-xs truncate">{location}</span>
          <span className="text-[#94A3B8]/60 text-[10px] whitespace-nowrap ml-2 font-mono">{time}</span>
        </div>
      </div>
    </div>
  );
}