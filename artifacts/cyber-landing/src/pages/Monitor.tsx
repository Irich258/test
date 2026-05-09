import { motion } from "framer-motion";
import BackgroundEffects from "@/components/BackgroundEffects";
import CyberLogo from "@/components/CyberLogo";
import StatusBadge from "@/components/StatusBadge";
import CyberButton from "@/components/CyberButton";
import PhoneInputCard from "@/components/PhoneInputCard";
import ActivityCard from "@/components/ActivityCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Monitor() {
  return (
    <main className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#070B14] text-white selection:bg-[#00FFB2]/30 selection:text-white py-12">
      <BackgroundEffects />
      
      <div className="relative z-10 w-full max-w-md px-4 mx-auto flex flex-col items-center">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 sm:p-8 rounded-2xl shadow-2xl"
        >
          <motion.div variants={item} className="mb-6">
            <CyberLogo />
          </motion.div>
          
          <motion.div variants={item} className="mb-6">
            <StatusBadge text="SECURE CONNECTION ACTIVE" />
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-center"
          >
            Initialize Secure Connection
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-sm sm:text-base text-[#94A3B8] text-center mb-8 leading-relaxed"
          >
            Private AI-powered real-time monitoring intelligence designed to keep your relationship safe.
          </motion.p>

          <motion.div variants={item} className="w-full mb-6 relative z-30">
            <PhoneInputCard />
          </motion.div>

          <motion.div variants={item} className="w-full mb-8 relative z-20">
            <CyberButton 
              variant="cyan" 
              className="w-full"
              testId="button-begin-monitoring"
            >
              Begin Secure Monitoring
            </CyberButton>
          </motion.div>

          <motion.div variants={item} className="w-full flex flex-col gap-3 relative z-10">
            <h3 className="text-[10px] font-mono tracking-widest text-[#94A3B8]/50 uppercase mb-1">
              Live System Activity
            </h3>
            
            <motion.div variants={item}>
              <ActivityCard 
                title="Device session initialized" 
                location="Johannesburg, South Africa" 
                time="2 minutes ago" 
              />
            </motion.div>
            
            <motion.div variants={item}>
              <ActivityCard 
                title="Secure connection established" 
                location="Cape Town, South Africa" 
                time="5 minutes ago" 
              />
            </motion.div>
            
            <motion.div variants={item}>
              <ActivityCard 
                title="Notification sync enabled" 
                location="Durban, South Africa" 
                time="1 minute ago" 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}