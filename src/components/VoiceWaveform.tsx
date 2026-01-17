import { motion } from "framer-motion";

const VoiceWaveform = () => {
  const bars = Array.from({ length: 24 }, (_, i) => ({
    height: Math.random() * 30 + 10,
    delay: i * 0.05,
  }));

  return (
    <div className="relative">
      {/* Curved text above waveform */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[200px] opacity-20"
        viewBox="0 0 800 200"
      >
        <path
          id="text-curve-top"
          d="M 0 180 Q 200 50, 400 100 Q 600 150, 800 30"
          fill="none"
        />
        <text className="text-[11px] font-light fill-foreground">
          <textPath href="#text-curve-top" startOffset="0%">
            Umm, hope your week has started well...I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the
          </textPath>
        </text>
      </svg>

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

      {/* Curved text below waveform */}
      <svg
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[900px] h-[200px] opacity-20"
        viewBox="0 0 900 200"
      >
        <path
          id="text-curve-bottom"
          d="M 0 30 Q 225 150, 450 80 Q 675 10, 900 120"
          fill="none"
        />
        <text className="text-[11px] font-light fill-foreground">
          <textPath href="#text-curve-bottom" startOffset="0%">
            project, but I'm not totally sure. Also, I told the team the new timeline should be ready by Friday, although it's probably going to slip. There's been a lot of back and forth
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default VoiceWaveform;