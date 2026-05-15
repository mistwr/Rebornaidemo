"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Encontra um negocio local",
    description:
      "Fala com cafes, restaurantes, barbeiros, lojas, clinicas, empresas e amigos que precisam de presenca online.",
  },
  {
    number: "02",
    title: "Cria o website com WebCraft",
    description:
      "Usa o Reborn AI para gerar rapidamente websites profissionais, paginas de venda e landing pages.",
  },
  {
    number: "03",
    title: "Cobra pelo servico",
    description:
      "Podes cobrar 200 euros ou mais por cada website criado, dependendo do projeto e do cliente.",
  },
  {
    number: "04",
    title: "Repete e escala",
    description:
      "Com uma subscricao de 9,99 euros/mes, podes criar oportunidades com custo reduzido e margem alta.",
  },
];

export function HowToEarnSection() {
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Oportunidade
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Como podes ganhar dinheiro com o Reborn AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforma as ferramentas de IA em rendimento real com estes passos
            simples
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative glass-light rounded-xl p-6 h-full hover:border-accent/50 transition-colors">
                <span className="text-4xl font-bold text-accent/30">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-light rounded-2xl p-8 md:p-12 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Com apenas 1 cliente, podes pagar varios meses do Reborn AI.
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Se cobrares 200 euros por um website e pagares 9,99 euros/mes pela
              plataforma, tens uma oportunidade simples para comecar a gerar
              rendimento com IA.
            </p>
            <Link
              href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-xl font-medium hover:bg-accent/90 transition-all"
            >
              Comecar Agora
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
