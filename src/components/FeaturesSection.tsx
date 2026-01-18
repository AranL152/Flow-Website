import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, Plus } from "lucide-react";

const FeaturesSection = () => {
  const languages = ["🇺🇸", "🇨🇳", "🇩🇪", "🇯🇵", "🇮🇳", "🇬🇧", "🇫🇷", "🇮🇹", "🇧🇷", "🇷🇺", "🇰🇷", "🇪🇸", "🇲🇽", "🇳🇱"];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-secondary-foreground/50">AI</span>{" "}
            <span>Auto Edits</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Speak naturally and Flow transcribes and edits your voice, instantly. Rambled thoughts become clear, perfectly formatted text.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          <Button
            variant="outline"
            className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background gap-2"
          >
            <Mic className="b-4 h-4" />
            Try Flow
          </Button>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            Download for free
          </Button>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Dictionary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 border border-border/50"
          >
            <h3 className="text-xl font-serif mb-2">Personal dictionary</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Flow automatically learns your unique words and adds them to your personal dictionary.
            </p>
            <div className="bg-muted rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Your Dictionary</span>
                <Plus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Robyn", "Viktor", "SaaS", "Caltrain", "Mackey", "Nguyen"].map((word) => (
                  <span
                    key={word}
                    className="px-3 py-1.5 bg-background rounded-full text-sm border border-border/50"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Snippet Library */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border/50"
          >
            <h3 className="text-xl font-serif mb-2">Snippet library</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Create voice shortcuts for the things your team says over and over.
            </p>
            <div className="bg-muted rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Your Snippets</span>
                <Plus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <div className="bg-secondary rounded-xl p-3">
                  <div className="text-sm font-medium mb-1">Calendar</div>
                  <div className="text-xs text-muted-foreground">
                    You can book a 30-minute call with me here: calendly.com/flow
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Hours", "Support intro", "FAQ", "Address"].map((snippet) => (
                    <span
                      key={snippet}
                      className="px-3 py-1.5 bg-background rounded-full text-sm border border-border/50"
                    >
                      {snippet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Different Tones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl p-8 border border-border/50"
          >
            <h3 className="text-xl font-serif mb-2">Different tones for each app</h3>
            <p className="text-muted-foreground text-sm">
              Flow automatically adjusts tone based on the app you're using. Sound like you—not a robot.
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-3xl p-8 border border-border/50"
          >
            <h3 className="text-xl font-serif mb-2">100+ languages</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Flow automatically detects and transcribes in your language, letting you move between them.
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((flag, index) => (
                <span
                  key={index}
                  className="text-2xl hover:scale-110 transition-transform cursor-default"
                >
                  {flag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;