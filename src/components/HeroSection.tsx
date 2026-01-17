import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import VoiceWaveform from "./VoiceWaveform";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-16 px-4 overflow-hidden">
      {/* Curved flowing text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -left-20 top-48 opacity-10"
          width="200"
          height="600"
          viewBox="0 0 200 600"
        >
          <path
            id="curve-left"
            d="M 150 0 Q 50 150, 100 300 Q 150 450, 50 600"
            fill="none"
          />
          <text className="text-xs font-light fill-foreground">
            <textPath href="#curve-left" startOffset="0%">
              project, but I'm not totally sure. Also, I told the team the the
              new timeline should be ready by Friday,
            </textPath>
          </text>
        </svg>

        <svg
          className="absolute -right-20 top-48 opacity-10"
          width="300"
          height="600"
          viewBox="0 0 300 600"
        >
          <path
            id="curve-right"
            d="M 50 0 Q 200 150, 150 300 Q 100 450, 250 600"
            fill="none"
          />
          <text className="text-xs font-light fill-foreground">
            <textPath href="#curve-right" startOffset="0%">
              els like nobody really knows what's going on. Can you check in
              with the team and see
            </textPath>
          </text>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 font-serif"
        >
          <span className="text-foreground/70">Don't type, </span>
          <span className="text-foreground">just speak</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          The voice-to-text AI that turns speech into clear, polished writing in
          every app.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-[#f0d7ff] text-foreground hover:bg-[#e8c7ff] px-8 py-6 text-base font-medium gap-2"
            onClick={() =>
              window.open(
                "https://github.com/AranL152/wisprflow-builder",
                "_blank",
              )
            }
          >
            <Apple className="w-5 h-5" />
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" />
              <path d="M12 7l5 5-5 5V7z" />
            </svg>
            Download for macOS
          </Button>

          <p className="text-sm text-muted-foreground">
            Available on Mac, Windows and iPhone
          </p>

          <a
            href="#"
            className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
          >
            Android coming soon
          </a>
        </motion.div>

        {/* Voice Waveform Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative"
        >
          <VoiceWaveform />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
