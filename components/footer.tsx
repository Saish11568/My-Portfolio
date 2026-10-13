"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 md:py-20 px-6 md:px-10 bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 pb-10 border-b border-[#E5E7EB]">
          <div>
            <span className="font-serif text-2xl font-normal text-foreground">
              Saish Malalikar
            </span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-sans">
              Computer Science & Engineering · Software Development
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <a
              href="https://github.com/Saish11568"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saish-malalikar-7861a8389"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:saishmalalikar5@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-sans">
          <p>
            &copy; {new Date().getFullYear()} Saish Malalikar. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground/80">
            Engineered with Next.js, TypeScript, & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
