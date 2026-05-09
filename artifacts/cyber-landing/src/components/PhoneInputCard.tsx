import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { code: "MZ", name: "Mozambique", dial: "+258", flag: "🇲🇿" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", dial: "+233", flag: "🇬🇭" },
  { code: "TZ", name: "Tanzania", dial: "+255", flag: "🇹🇿" },
  { code: "UG", name: "Uganda", dial: "+256", flag: "🇺🇬" },
  { code: "EG", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { code: "MA", name: "Morocco", dial: "+212", flag: "🇲🇦" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "PT", name: "Portugal", dial: "+351", flag: "🇵🇹" },
];

export default function PhoneInputCard({ onChange }: { onChange?: (val: string) => void }) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[9]); // Default to US
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          const country = COUNTRIES.find(c => c.code === data.country_code);
          if (country) setSelectedCountry(country);
        }
      })
      .catch(() => {
        // Fallback or ignore on failure
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhone(val);
    onChange?.(selectedCountry.dial + val);
  };

  return (
    <div className="relative w-full z-20" ref={dropdownRef}>
      <div className="flex items-center w-full h-[52px] bg-white/[0.03] border border-white/[0.08] rounded-lg focus-within:border-[#00FFB2]/50 focus-within:shadow-[0_0_15px_rgba(0,255,178,0.15)] transition-all overflow-hidden group">
        
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 h-full pl-4 pr-3 hover:bg-white/[0.05] transition-colors shrink-0"
        >
          <span className="text-xl leading-none">{selectedCountry.flag}</span>
          <span className="text-white font-mono text-sm">{selectedCountry.dial}</span>
          <ChevronDown className={cn("w-4 h-4 text-[#94A3B8] transition-transform", isOpen && "rotate-180")} />
        </button>
        
        <div className="w-[1px] h-6 bg-white/[0.08]" />

        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter target device number"
          className="flex-1 w-full h-full bg-transparent border-none outline-none px-4 text-white placeholder:text-[#94A3B8]/50 text-base font-sans"
          data-testid="input-phone-number"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full max-h-60 overflow-y-auto bg-[#0F172A]/90 backdrop-blur-xl border border-white/[0.08] rounded-lg shadow-2xl z-50 p-1 flex flex-col gap-1 custom-scrollbar">
          {COUNTRIES.map(country => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
                onChange?.(country.dial + phone);
              }}
              className="flex items-center gap-3 w-full px-3 py-2 hover:bg-white/[0.05] rounded-md transition-colors text-left"
            >
              <span className="text-xl leading-none">{country.flag}</span>
              <span className="text-white/80 font-mono text-sm w-12">{country.dial}</span>
              <span className="text-white text-sm">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}