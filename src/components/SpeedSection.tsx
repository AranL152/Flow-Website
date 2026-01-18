import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const SpeedSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
            <span className="text-lavender-dark">4x faster</span>
            <br />
            <span>than typing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            After 150 years of using the same keyboard, voice that actually works is{" "}
            <span className="italic">finally</span> here. When you create, code, and respond faster, you free up time for more.
          </p>
        </motion.div>

        {/* Speed comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Keyboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-sm text-muted-foreground">Keyboard</div>
            </div>
            <h3 className="text-3xl font-serif mb-4">45 wpm</h3>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              I'm getting started with the project. How would you like to set up the file? Here are a few options...
            </p>
          </motion.div>

          {/* Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-3xl p-8 border border-lavender-dark/30 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-foreground rounded-full"></div>
                <div className="w-0.5 h-2 bg-foreground rounded-full mt-0.5"></div>
                <div className="w-0.5 h-3 bg-foreground rounded-full"></div>
              </div>
              <div className="text-sm text-foreground/70">Flow</div>
            </div>
            <h3 className="text-3xl font-serif mb-4">220 wpm</h3>
            <div className="h-2 bg-lavender-dark rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              I'm getting started with the project. How would you like to set up the file? Here are a few options. I'm getting started with the project...
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="outline"
            className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background px-6 gap-2"
          >
            <Mic className="b-4 h-4" />
            Try Flow
          </Button>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">
            Download for free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedSection;