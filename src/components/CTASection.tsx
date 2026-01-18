import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative rounded-[40px] overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/80" />

        {/* Content */}
        <div className="relative px-8 py-20 md:py-28 text-center text-background">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            Start flowing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-background/80 text-lg max-w-xl mx-auto mb-10"
          >
            Effortless voice dictation in every application: 4x faster than typing, AI commands and auto-edits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              className="rounded-full bg-background text-foreground hover:bg-background/90 px-6 gap-2 border-2 border-black"
              onClick={() => window.open('https://github.com/AranL152/wisprflow-builder', '_blank')}
            >
              <Mic className="w-4 h-4" />
              Try Flow
            </Button>
            <Button
              className="rounded-lg bg-background text-foreground hover:bg-background/90 px-6 border-2 border-black"
              onClick={() => window.open('https://github.com/AranL152/wisprflow-builder', '_blank')}
            >
              Download for macOS
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-background/60 text-sm mt-6"
          >
            Available on Mac, Windows and iPhone
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;