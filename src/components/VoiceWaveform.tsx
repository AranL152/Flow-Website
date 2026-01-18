import { useMemo } from "react";

const VoiceWaveform = () => {
  const bars = useMemo(() =>
    Array.from({ length: 24 }, (_, i) => ({
      index: i,
      minHeight: Math.floor(Math.random() * 8) + 6,
      maxHeight: Math.floor(Math.random() * 20) + 15,
      duration: (Math.random() * 0.4 + 0.4).toFixed(2),
      delay: (Math.random() * 0.5).toFixed(2),
    })),
  []);

  return (
    <div className="relative">
      {/* Waveform container */}
      <div className="flex items-center justify-center gap-1 bg-card rounded-full px-6 py-5 shadow-lg border-2 border-black max-w-[250px] mx-auto h-16">
        {bars.map((bar) => (
          <div
            key={bar.index}
            className="w-1 bg-foreground rounded-full"
            style={{
              animation: `waveform-${bar.index} ${bar.duration}s ease-in-out infinite alternate`,
              animationDelay: `${bar.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        ${bars.map((bar) => `
          @keyframes waveform-${bar.index} {
            0% { height: ${bar.minHeight}px; }
            100% { height: ${bar.maxHeight}px; }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default VoiceWaveform;
