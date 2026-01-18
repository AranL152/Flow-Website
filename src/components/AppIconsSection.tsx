import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const apps = [
  { name: "Slack", color: "bg-purple-100" },
  { name: "Gmail", color: "bg-red-100" },
  { name: "VS Code", color: "bg-blue-100" },
  { name: "Notion", color: "bg-gray-100" },
  { name: "WhatsApp", color: "bg-green-100" },
  { name: "Teams", color: "bg-indigo-100" },
  { name: "Figma", color: "bg-pink-100" },
  { name: "GitHub", color: "bg-gray-100" },
  { name: "ChatGPT", color: "bg-teal-100" },
  { name: "Telegram", color: "bg-sky-100" },
  { name: "Obsidian", color: "bg-violet-100" },
  { name: "Linear", color: "bg-indigo-100" },
];

const AppIconsSection = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <section className="py-24 px-4 bg-muted/50 rounded-t-[60px] -mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={isLogoHovered ? { y: [0, -8, 0] } : { y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center mb-8 cursor-pointer"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.rect
                x="2" y="3" width="20" height="3" rx="1.5"
                fill="currentColor"
                animate={isLogoHovered ? { width: [20, 18, 20] } : { width: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.rect
                x="2" y="7.5" width="11" height="3" rx="1.5"
                fill="currentColor"
                animate={isLogoHovered ? { width: [11, 13, 11] } : { width: 11 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.rect
                x="2" y="12" width="20" height="3" rx="1.5"
                fill="currentColor"
                animate={isLogoHovered ? { width: [20, 17, 20] } : { width: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.rect
                x="2" y="16.5" width="11" height="3" rx="1.5"
                fill="currentColor"
                animate={isLogoHovered ? { width: [11, 14, 11] } : { width: 11 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.rect
                x="2" y="21" width="8" height="3" rx="1.5"
                fill="currentColor"
                animate={isLogoHovered ? { width: [8, 10, 8] } : { width: 8 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border/50">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-medium">iOS</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border/50">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-medium">Mac</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border/50">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z"/>
              </svg>
              <span className="text-sm font-medium">Windows</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Write faster in all your apps, on any device
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Seamless speech-to-text in every application on your iPhone or computer.
          </p>
        </motion.div>

        {/* App icons grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-12"
        >
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`aspect-square rounded-2xl ${app.color} flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
            >
              <span className="text-xs font-medium text-foreground/60">{app.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Watch in action
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppIconsSection;