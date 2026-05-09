import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: React.ReactNode;
  variant: "cyan" | "purple";
  onClick?: () => void;
  className?: string;
  testId?: string;
}

export default function CyberButton({ children, variant, onClick, className, testId }: CyberButtonProps) {
  const isCyan = variant === "cyan";
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      data-testid={testId}
      className={cn(
        "relative group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-lg overflow-hidden font-medium tracking-wide text-white transition-all",
        "border border-white/10 bg-white/5 backdrop-blur-md",
        className
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isCyan 
            ? "bg-gradient-to-r from-[#7C3AED]/20 to-[#00E5FF]/20" 
            : "bg-gradient-to-r from-[#e81cff]/20 to-[#7C3AED]/20"
        )} 
      />
      
      <div 
        className={cn(
          "absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-[8px]",
          isCyan 
            ? "bg-gradient-to-r from-[#7C3AED] to-[#00E5FF]" 
            : "bg-gradient-to-r from-[#e81cff] to-[#7C3AED]"
        )} 
      />

      <div className="relative flex items-center gap-3">
        <Lock className={cn("w-4 h-4", isCyan ? "text-[#00E5FF]" : "text-[#e81cff]")} />
        {children}
      </div>
    </motion.button>
  );
}