import { motion } from "framer-motion";

const VoiceWaveform = () => {
  const bars = Array.from({ length: 24 }, (_, i) => ({
    height: Math.random() * 30 + 10,
    delay: i * 0.05,
  }));

  return (
    <div className="relative">
      {/* Waveform container */}
      <div className="flex items-center justify-center gap-1 bg-card rounded-full px-6 py-5 shadow-lg border-2 border-black max-w-[250px] mx-auto h-16">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            className="w-1 bg-foreground rounded-full"
            initial={{ height: 8 }}
            animate={{
              height: [8, bar.height, 8],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: bar.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VoiceWaveform;