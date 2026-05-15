"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Plataforma AI Completa
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">Automate.</span>
          <br />
          <span className="text-foreground">Create.</span>
          <br />
          <span className="gradient-text-blue">Scale.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          O sistema de IA construido para fazer crescer negocios. Cria websites,
          conteudos, campanhas e automatiza processos em minutos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl font-medium hover:bg-foreground/90 transition-all"
          >
            Comecar Agora
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="https://rebornaaqi.vercel.app/"
            className="inline-flex items-center gap-2 text-foreground px-6 py-3.5 rounded-xl font-medium glass-light hover:bg-white/10 transition-all"
          >
            <Play size={18} />
            Experimentar Gratis
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-20 pt-12 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              11+
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Ferramentas AI
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              98%
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Tempo Poupado
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              200x
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              ROI Potencial
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              24/7
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Disponibilidade
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
