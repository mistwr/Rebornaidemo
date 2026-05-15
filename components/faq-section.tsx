"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Preciso saber programar?",
    answer:
      "Nao. O Reborn AI foi criado para simplificar a criacao de websites, conteudos e campanhas. Qualquer pessoa pode usar.",
  },
  {
    question: "Posso vender websites criados com o WebCraft?",
    answer:
      "Sim. Podes usar o WebCraft para criar websites para clientes, negocios locais e empresas. Os websites sao 100% teus.",
  },
  {
    question: "Quanto posso cobrar?",
    answer:
      "Depende do cliente e do projeto, mas websites simples podem ser vendidos por 200 euros ou mais. Alguns freelancers cobram 500-1000 euros por projetos mais complexos.",
  },
  {
    question: "O plano Basic chega para comecar?",
    answer:
      "Sim. O plano Basic por 9,99 euros/mes e ideal para comecar a testar, criar e vender. Se precisares de mais volume, podes fazer upgrade para PRO.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Podes cancelar a tua subscricao a qualquer momento. Sem compromissos de longa duracao.",
  },
  {
    question: "Que metodos de pagamento aceitam?",
    answer:
      "Aceitamos cartoes de credito/debito (Visa, Mastercard, American Express) atraves do Stripe, a plataforma de pagamentos mais segura do mundo.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "glass-light rounded-xl overflow-hidden transition-all",
        isOpen && "border-primary/30"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          {isOpen ? (
            <Minus size={16} className="text-primary" />
          ) : (
            <Plus size={16} className="text-muted-foreground" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48" : "max-h-0"
        )}
      >
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Duvidas? Temos Respostas.
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
