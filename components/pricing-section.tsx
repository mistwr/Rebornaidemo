"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Gratis",
    price: "0",
    period: "",
    description: "Para testar e explorar",
    features: [
      "Testar todas funcionalidades",
      "Chat basico limitado",
      "Imagens AI (demo)",
      "WebCraft (visualizar)",
      "Sem cartao credito",
    ],
    cta: "Experimentar Gratis",
    href: "https://rebornaaqi.vercel.app/",
    featured: false,
    badge: null,
  },
  {
    name: "Basic",
    price: "9.99",
    period: "/mes",
    description: "Perfeito para comecar a criar websites para clientes.",
    features: [
      "Tokens diarios generosos",
      "Todas 11+ ferramentas",
      "Chat inteligente",
      "Imagens AI",
      "WebCraft completo",
      "Email, SMS, WhatsApp",
      "Suporte standard",
    ],
    cta: "Assinar Basic",
    href: "https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00",
    featured: false,
    badge: null,
  },
  {
    name: "PRO",
    price: "69.99",
    period: "/mes",
    description: "Ideal para freelancers, agencias e criadores que querem escalar.",
    features: [
      "Tokens ILIMITADOS",
      "ZERO limites, ZERO esperas",
      "Chat sem restricoes",
      "Imagens AI ilimitadas",
      "WebCraft PRO + deploy Vercel",
      "Modo Live sem limites",
      "Suporte prioritario",
      "Novas features primeiro",
    ],
    cta: "Upgrade para PRO",
    href: "https://buy.stripe.com/cNi4gz1J36rA264gEt5Rm06",
    featured: true,
    badge: "Recomendado",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Planos e Precos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Escolhe o Teu Plano
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comeca gratis ou desbloqueia todo o potencial com PRO
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                plan.featured
                  ? "glass border-primary/50 scale-105 z-10"
                  : "glass-light"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star size={14} fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={cn(
                        "mt-0.5 flex-shrink-0",
                        plan.featured ? "text-primary" : "text-accent"
                      )}
                    />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={cn(
                  "w-full py-3.5 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2",
                  plan.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                {plan.featured && <Zap size={18} />}
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
