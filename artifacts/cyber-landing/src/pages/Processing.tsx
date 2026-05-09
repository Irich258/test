import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import CyberLogo from "@/components/CyberLogo";
import StatusBadge from "@/components/StatusBadge";
import VideoContainer from "@/components/VideoContainer";
import ProgressCard from "@/components/ProgressCard";
import LiveLogs from "@/components/LiveLogs";

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

const TOTAL_DURATION = 180; // seconds

export default function Processing() {
  const [elapsed, setElapsed] = useState(0);
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(prev => {
        if (prev >= TOTAL_DURATION) {
          clearInterval(interval);
          return TOTAL_DURATION;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city && data.country_name) {
          setLocation(`${data.city}, ${data.country_name}`);
        } else {
          setLocation("Location Secured");
        }
      })
      .catch(() => setLocation("Location Secured"));
  }, []);

  const progress = Math.round((elapsed / TOTAL_DURATION) * 100);
  const visibleLogCount = Math.min(12, Math.floor(elapsed / 15) + (elapsed > 0 ? 1 : 0));
  const isComplete = progress >= 100;

  return (
    <main className="relative min-h-[100dvh] w-full flex flex-col bg-[#070B14] text-white selection:bg-[#00FFB2]/30 selection:text-white py-10">
      <BackgroundEffects />
      
      <div className="relative z-10 w-full max-w-lg px-4 mx-auto flex flex-col">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full gap-6"
        >
          <motion.div variants={item} className="flex flex-col items-center gap-4">
            <CyberLogo />
            <StatusBadge text="LIVE SECURE PROCESSING" />
          </motion.div>
          
          <motion.div variants={item} className="flex flex-col items-center gap-2 text-center mt-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ongoing Deep Research Investigations
            </h1>
            <p className="text-sm sm:text-base text-[#94A3B8]/70 max-w-sm leading-relaxed">
              Do not leave this page while the investigation is in progress, or the target number{" "}
              <motion.span
                className="text-[#94A3B8]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                may be alerted.
              </motion.span>
            </p>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <VideoContainer />
          </motion.div>

          <motion.div variants={item} className="w-full">
            <ProgressCard progress={progress} location={location} />
          </motion.div>

          <motion.div variants={item} className="w-full">
            {isComplete ? (
              <motion.button
                data-testid="button-access-report"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#7C3AED] to-[#00FFB2] border border-[#00FFB2]/50"
                style={{ boxShadow: "0 0 30px rgba(0,255,178,0.3)" }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => console.log("Report accessed")}
              >
                <Unlock className="w-5 h-5" />
                Access Secure Report
              </motion.button>
            ) : (
              <div 
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[#94A3B8]/40 bg-white/[0.03] border border-white/[0.06] cursor-not-allowed relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Lock className="w-5 h-5" />
                Access Secure Report — Processing...
              </div>
            )}
          </motion.div>

          <motion.div variants={item} className="w-full mt-4">
            <LiveLogs visibleCount={visibleLogCount} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}