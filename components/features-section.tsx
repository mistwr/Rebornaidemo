"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Mic,
  Image,
  Globe,
  Presentation,
  BookOpen,
  Mail,
  MessageCircle,
  Eye,
  Scissors,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat Inteligente",
    description:
      "Conversa natural com IA avancada, analise de imagens, pesquisa web em tempo real e historico completo.",
    highlighted: false,
  },
  {
    icon: Mic,
    title: "Modo Live",
    description:
      "Interacao em tempo real com voz e video. Visao AI ao vivo com respostas instantaneas.",
    highlighted: false,
  },
  {
    icon: Image,
    title: "Imagens AI",
    description:
      "Geracao de imagens profissionais com multiplos estilos e alta resolucao.",
    highlighted: false,
  },
  {
    icon: Globe,
    title: "WebCraft",
    description:
      "Cria websites completos, landing pages e paginas profissionais para negocios locais com IA.",
    highlighted: true,
    badge: "Mais indicado para ganhar dinheiro",
  },
  {
    icon: Presentation,
    title: "Apresentacoes",
    description:
      "Slides profissionais com 12 estilos visuais e imagens geradas automaticamente.",
    highlighted: false,
  },
  {
    icon: BookOpen,
    title: "Ebooks",
    description:
      "Livros digitais completos com capa profissional e design personalizado.",
    highlighted: false,
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Campanhas de email em massa com validacao automatica e personalizacao.",
    highlighted: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS",
    description:
      "Mensagens em massa para WhatsApp e SMS com QR codes e validacao.",
    highlighted: false,
  },
  {
    icon: Eye,
    title: "Visao AI",
    description:
      "OCR e analise de imagens, PDFs e documentos com extracao inteligente.",
    highlighted: false,
  },
  {
    icon: Scissors,
    title: "Clipper",
    description:
      "Edicao de videos para TikTok/Reels com transcricao e legendas automaticas.",
    highlighted: false,
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Posts para redes sociais com legendas, hashtags e cores da marca.",
    highlighted: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-secondary/30">
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
            Ferramentas Profissionais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Tudo o Que Precisas Numa Plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            11+ ferramentas poderosas de IA para transformar o teu negocio
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative p-6 rounded-xl transition-all duration-300 ${
                feature.highlighted
                  ? "glass-light border-accent/50 bg-accent/5"
                  : "glass-light hover:border-primary/30"
              }`}
            >
              {feature.highlighted && feature.badge && (
                <span className="absolute -top-3 left-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                  {feature.badge}
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  feature.highlighted
                    ? "bg-accent/20"
                    : "bg-primary/10 group-hover:bg-primary/20"
                } transition-colors`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.highlighted ? "text-accent" : "text-primary"
                  }`}
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
