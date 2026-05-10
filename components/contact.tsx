"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react"
import { useRef, useState } from "react"
import { LineReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"

const contactLinks = [
  {
    icon: Mail,
    label: "saishmalalikar5@gmail.com",
    href: "mailto:saishmalalikar5@gmail.com",
    color: "#ea4335",
  },
  {
    icon: Github,
    label: "github.com/Saish11568",
    href: "https://github.com/Saish11568",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saish-malalikar-7861a8389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "#0077b5",
  },
]

function ContactLink({
  link,
  index,
}: {
  link: (typeof contactLinks)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block p-6 md:p-8 rounded-2xl border border-border bg-card/20 backdrop-blur-sm overflow-hidden"
      data-cursor="Click"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: link.color }}
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <link.icon
              className="w-6 h-6 transition-colors"
              style={{ color: isHovered ? "#000" : link.color }}
            />
          </motion.div>
          <span
            className="text-lg md:text-xl font-medium transition-colors"
            style={{ color: isHovered ? "#000" : "inherit" }}
          >
            {link.label}
          </span>
        </div>
        <motion.div
          animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight
            className="w-6 h-6 transition-colors"
            style={{ color: isHovered ? "#000" : "var(--muted-foreground)" }}
          />
        </motion.div>
      </div>

      {/* Border animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  )
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      id="contact"
    >
      {/* Background elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none"
      />

      {/* Section header */}
      <div className="mb-20">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm inline-flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-primary" />
          04 // Contact
        </motion.span>
        <LineReveal className="mt-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
        </LineReveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left side - CTA */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"
          >
            Have a project in mind?
            <br />
            <span className="text-primary">Let&apos;s build it together.</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Open to freelance projects, collaborations, and interesting
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here if needed
              alert("Message sent! (Demo)");
            }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Alex Chen"
                className="w-full bg-card/20 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="hello@example.com"
                className="w-full bg-card/20 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Hey Saish, I'd love to..."
                className="w-full bg-card/20 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <MagneticButton
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium group cursor-pointer w-full justify-center md:w-auto"
            >
              <Send className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              Send Message
            </MagneticButton>
          </motion.form>
        </div>

        {/* Right side - Contact links */}
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <ContactLink key={link.label} link={link} index={index} />
          ))}
        </div>
      </div>

      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -right-10 bottom-0 text-[150px] md:text-[200px] font-bold text-primary/[0.03] select-none pointer-events-none"
      >
        SAY HI
      </motion.div>
    </section>
  )
}
