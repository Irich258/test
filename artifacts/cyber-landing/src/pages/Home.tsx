import { motion } from "framer-motion";
import BackgroundEffects from "@/components/BackgroundEffects";
import CyberLogo from "@/components/CyberLogo";
import StatusBadge from "@/components/StatusBadge";
import CyberButton from "@/components/CyberButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#070B14] text-white selection:bg-[#00FFB2]/30 selection:text-white">
      <BackgroundEffects />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8 text-center">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={item} className="mb-8">
            <CyberLogo />
          </motion.div>
          
          <motion.div variants={item} className="mb-10">
            <StatusBadge />
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Discover What's Really Happening Behind The Screen
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mb-12 leading-relaxed"
          >
            Private AI-powered monitoring technology designed for modern digital protection.
          </motion.p>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <CyberButton 
              variant="cyan" 
              testId="button-monitor-male"
            >
              Monitor Male Device
            </CyberButton>
            <CyberButton 
              variant="purple"
              testId="button-monitor-female"
            >
              Monitor Female Device
            </CyberButton>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-20 flex items-center justify-center gap-2 text-sm text-[#94A3B8]/60 font-medium tracking-wide uppercase"
          >
            <span>End-to-end encrypted</span>
            <span className="w-1 h-1 rounded-full bg-[#94A3B8]/40" />
            <span>Secure dashboard</span>
            <span className="w-1 h-1 rounded-full bg-[#94A3B8]/40" />
            <span>AI-powered insights</span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}