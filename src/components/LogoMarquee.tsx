import { motion } from "framer-motion";

const logos = [
  "Stan",
  "CIBC",
  "PitStop",
  "Manulife",
  "Mathnasium",
  "Nvidia",
  "Amazon",
  "Perplexity",
  "Strava",
  "Substack",
  "Rivian",
  "Groupon",
];

const LogoMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-10"
      >
        Used by professionals everywhere to speed up their thoughts
      </motion.h3>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 min-w-[120px]"
            >
              <span className="text-lg font-medium text-foreground/40 hover:text-foreground/60 transition-colors whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;