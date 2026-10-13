"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.send(
        "service_gws4llj",
        "template_mbhw24o",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "8wxPy01h8DRtMZjmy"
      )

      setStatus("success")
      setStatusMessage("Thank you. Your message has been delivered successfully.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      setStatus("error")
      setStatusMessage("Direct message dispatch encountered an issue. Please feel free to email directly at saishmalalikar5@gmail.com.")
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 border-b border-[#E5DFD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#E5DFD3]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary font-mono mb-3">
              <span>05</span>
              <span className="w-8 h-px bg-primary/40" />
              <span>Correspondence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground">
              Get in <span className="italic text-primary">Touch</span>
            </h2>
          </div>

          <p className="hidden md:block max-w-xs text-xs text-muted-foreground leading-relaxed font-sans text-right">
            Open to engineering conversations, technical collaborations, and software opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                Let&apos;s start a conversation.
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                Whether you have an inquiry regarding my projects, an engineering internship opportunity, or technical questions, feel free to reach out directly through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E5DFD3]">
              <a
                href="mailto:saishmalalikar5@gmail.com"
                className="p-5 rounded-lg border border-[#E5DFD3] bg-card hover:border-primary/50 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-md bg-[#F4EFE6] text-primary">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      Email
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      saishmalalikar5@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/Saish11568"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-lg border border-[#E5DFD3] bg-card hover:border-primary/50 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-md bg-[#F4EFE6] text-primary">
                    <Github className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      GitHub
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      github.com/Saish11568
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/saish-malalikar-7861a8389"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-lg border border-[#E5DFD3] bg-card hover:border-primary/50 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-md bg-[#F4EFE6] text-primary">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      LinkedIn
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Saish Malalikar
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#E5DFD3] lg:pl-12">
            <div className="p-8 md:p-10 rounded-xl border border-[#E5DFD3] bg-card">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 rounded-md border border-[#E5DFD3] bg-[#FBF9F4] text-foreground text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-md border border-[#E5DFD3] bg-[#FBF9F4] text-foreground text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or project inquiry here..."
                    className="w-full px-4 py-2.5 rounded-md border border-[#E5DFD3] bg-[#FBF9F4] text-foreground text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "sending" ? "Transmitting..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <div className="p-3.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}