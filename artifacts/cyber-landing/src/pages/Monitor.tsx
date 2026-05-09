import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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

const ACTIVITY_ENTRIES = [
  { id: 0,  title: "+27 71 XXX 4821 from Johannesburg securely initialized private monitoring access." },
  { id: 1,  title: "+27 82 XXX 1934 from Cape Town enabled silent real-time activity synchronization." },
  { id: 2,  title: "+27 63 XXX 5508 from Durban completed encrypted device pairing verification." },
  { id: 3,  title: "+27 76 XXX 2284 from Pretoria activated secure background monitoring tunnel." },
  { id: 4,  title: "+27 72 XXX 6641 from Port Elizabeth confirmed hidden notification mirroring access." },
  { id: 5,  title: "+27 67 XXX 9140 from Bloemfontein established private live tracking connection." },
  { id: 6,  title: "+27 79 XXX 3382 from East London synchronized encrypted message activity." },
  { id: 7,  title: "+27 74 XXX 1055 from Polokwane enabled advanced device intelligence monitoring." },
  { id: 8,  title: "+27 81 XXX 7742 from Nelspruit completed stealth connection authorization." },
  { id: 9,  title: "+27 60 XXX 4481 from Kimberley activated protected session monitoring access." },
  { id: 10, title: "+27 73 XXX 2294 from Rustenburg unlocked secure AI-powered monitoring features." },
  { id: 11, title: "+27 78 XXX 6603 from Pietermaritzburg initialized hidden device synchronization." },
  { id: 12, title: "+27 64 XXX 5177 from Johannesburg enabled silent activity detection system." },
  { id: 13, title: "+27 83 XXX 9420 from Cape Town established encrypted remote monitoring access." },
  { id: 14, title: "+27 66 XXX 3711 from Durban confirmed secure private intelligence connection." },
];

const TOTAL = ACTIVITY_ENTRIES.length;

export default function Monitor() {
  const [startIndex, setStartIndex] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % TOTAL);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleEntries = [0, 1, 2].map(offset => ACTIVITY_ENTRIES[(startIndex + offset) % TOTAL]);

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
            Congratulations, you've unlocked 1 free secure access.<br />
            Enter the target number below to begin private silent monitoring.
          </motion.p>

          <motion.div variants={item} className="w-full mb-6 relative z-30">
            <PhoneInputCard />
          </motion.div>

          <motion.div variants={item} className="w-full mb-8 relative z-20">
            <CyberButton 
              variant="cyan" 
              className="w-full"
              testId="button-begin-monitoring"
              onClick={() => setLocation("/processing")}
            >
              Begin Secure Monitoring
            </CyberButton>
          </motion.div>

          <motion.div variants={item} className="w-full flex flex-col gap-3 relative z-10">
            <h3 className="text-[10px] font-mono tracking-widest text-[#94A3B8]/50 uppercase mb-1">
              Live System Activity
            </h3>

            <div className="flex flex-col gap-2 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleEntries.map(entry => (
                  <motion.div
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ActivityCard title={entry.title} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}