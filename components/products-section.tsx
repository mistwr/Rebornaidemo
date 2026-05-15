"use client";

import { motion } from "framer-motion";
import { Globe, Megaphone, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Globe,
    title: "AI Websites",
    description:
      "Landing pages, websites e funnels gerados por IA. Cria presenca online profissional para qualquer negocio em minutos.",
    features: ["WebCraft AI", "Templates Premium", "Deploy Automatico"],
    href: "https://rebornaaqi.vercel.app/",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Megaphone,
    title: "AI Marketing",
    description:
      "Geracao de videos, anuncios, conteudo, redes sociais, email e WhatsApp automatizados para maximizar alcance.",
    features: [
      "Videos & Reels",
      "Posts Automaticos",
      "Email & SMS Campaigns",
    ],
    href: "https://rebornaaqi.vercel.app/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Users,
    title: "AI CRM",
    description:
      "Gestao de leads, equipas, pipelines e automatizacoes inteligentes para escalar operacoes de vendas.",
    features: [
      "Lead Management",
      "Pipeline Automation",
      "Team Collaboration",
    ],
    href: "https://rebornaaqi.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export function ProductsSection() {
  return (
    <section className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Produtos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Tres pilares para escalar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Websites, Marketing e CRM - tudo o que precisas numa unica
            plataforma de IA.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative glass-light rounded-2xl p-8 h-full flex flex-col hover:border-primary/50 transition-colors">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Explorar
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
