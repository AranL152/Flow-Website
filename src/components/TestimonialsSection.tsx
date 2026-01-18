import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This is the best AI product I've used since ChatGPT.",
    author: "Jason Cameron",
    role: "CEO, Superhuman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "You're making texting actually delightful right now! Can see it becoming a can't live without product fast.",
    author: "Jason Cameron",
    role: "Founding Partner at Strange Ventures",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "I have Parkinson's, and this app has just made my life so much easier using my Mac. I can't even explain the change that it has provided for me.",
    author: "Jason Cameron",
    role: "Indirect Sourcing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Hey! Flow is currently blowing my mind with how fast and useful it is!",
    author: "Jason Cameron",
    role: "ML Platforms at X",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "I was able to dictate ~70% of our Q2 board doc with Wispr, it was a massive time saver!",
    author: "Jason Cameron",
    role: "CEO, Digits AI",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Flow is that extra little part of your brain that helps you formulate full sentences when you might be stuck in thought.",
    author: "Jason Cameron",
    role: "Fiction Writer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif">
            Love letters{" "}
            <span className="text-secondary-foreground/50">to Flow</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;