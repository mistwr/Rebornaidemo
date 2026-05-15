"use client";

import { useState, useEffect } from "react";

// Icons as inline SVGs for better control
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
      clipRule="evenodd"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const CrownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      title: "AI Websites",
      description:
        "Cria landing pages, websites e funis de alta conversao com inteligencia artificial em minutos.",
      icon: <GlobeIcon />,
      features: ["Landing Pages", "Websites Completos", "Funis de Vendas"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "AI Marketing",
      description:
        "Gera videos, ads, conteudos e automacoes de marketing que convertem e escalam.",
      icon: <VideoIcon />,
      features: ["Video Generation", "Social Media", "Email & WhatsApp"],
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
      premium: true,
    },
    {
      title: "AI CRM",
      description:
        "Gere leads, equipas, pipelines e automacoes de vendas com inteligencia artificial.",
      icon: <UsersIcon />,
      features: ["Lead Management", "Team Pipelines", "AI Automations"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      description: "Para comecar a explorar",
      features: [
        "5 paginas AI por mes",
        "Templates basicos",
        "Suporte comunidade",
        "1 projeto ativo",
      ],
      cta: "Comecar Gratis",
      popular: false,
    },
    {
      name: "Pro",
      price: "9,99",
      description: "Para criadores e empreendedores",
      features: [
        "Paginas ilimitadas",
        "Todos os templates premium",
        "AI Marketing tools",
        "Suporte prioritario",
        "5 projetos ativos",
        "Exportacao avancada",
      ],
      cta: "Assinar Pro",
      popular: true,
    },
    {
      name: "Business",
      price: "29,99",
      description: "Para equipas e agencias",
      features: [
        "Tudo do Pro",
        "AI CRM completo",
        "Gestao de equipas",
        "Pipelines avancados",
        "Projetos ilimitados",
        "API access",
        "White-label",
      ],
      cta: "Comecar Business",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Solucoes personalizadas",
      features: [
        "Tudo do Business",
        "AI customizado",
        "Automacao total",
        "Suporte dedicado 24/7",
        "SLA garantido",
        "Onboarding VIP",
        "Consultoria estrategica",
      ],
      cta: "Contactar Vendas",
      popular: false,
    },
  ];

  const stats = [
    { value: "50K+", label: "Utilizadores Ativos" },
    { value: "2M+", label: "Paginas Criadas" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Paises" },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "CEO, TechStart",
      content:
        "Reborn AI transformou completamente a forma como criamos conteudo. Em 3 meses triplicamos as nossas conversoes.",
      avatar: "MS",
    },
    {
      name: "Joao Silva",
      role: "Founder, GrowthLab",
      content:
        "A melhor ferramenta de AI que ja usei. Simples, poderosa e com resultados reais desde o primeiro dia.",
      avatar: "JS",
    },
    {
      name: "Ana Costa",
      role: "Marketing Director",
      content:
        "Automatizamos 80% do nosso workflow de marketing. O ROI foi visivel em apenas 2 semanas.",
      avatar: "AC",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                <SparklesIcon />
              </div>
              <span className="text-xl font-bold">Reborn AI</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Produtos
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Precos
              </a>
              <a
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Testemunhos
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Entrar
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full gradient-gold text-black hover:opacity-90 transition-opacity">
                Comecar Gratis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-blue-500/5 rounded-full blur-3xl animate-rotate-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 border border-amber-500/30">
              <CrownIcon />
              <span className="text-sm shimmer-gold font-medium">
                Plataforma #1 de AI em Portugal
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Automate.</span>{" "}
              <span className="shimmer-gold">Create.</span>{" "}
              <span className="gradient-text">Scale.</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
              A plataforma de inteligencia artificial que te ajuda a criar
              websites, gerar conteudos, automatizar marketing e escalar o teu
              negocio. Tudo num so lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full gradient-gold text-black hover:opacity-90 transition-all glow-gold-subtle flex items-center justify-center gap-2">
                Comecar Gratis
                <ArrowRightIcon />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full glass-light border border-border hover:border-amber-500/50 transition-all flex items-center justify-center gap-2">
                <PlayIcon />
                Ver Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 delay-${index * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <div className="text-3xl sm:text-4xl font-bold shimmer-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Tudo o que precisas</span>
              <br />
              <span className="shimmer-gold">numa so plataforma</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Tres sistemas de AI poderosos que trabalham juntos para escalar o
              teu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] ${product.premium ? "premium-card glow-gold-subtle" : "glass-light hover:border-white/20"}`}
              >
                {product.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-black text-xs font-bold flex items-center gap-1">
                    <CrownIcon />
                    PREMIUM
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl ${product.premium ? "gradient-gold text-black" : product.iconBg} flex items-center justify-center mb-6 ${product.premium ? "" : product.iconColor}`}
                >
                  {product.icon}
                </div>

                <h3 className={`text-xl font-bold mb-3 ${product.premium ? "shimmer-gold" : ""}`}>
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className={product.premium ? "text-amber-400" : "text-emerald-400"}>
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${product.premium ? "gradient-gold text-black hover:opacity-90" : "bg-white/5 hover:bg-white/10 border border-white/10"}`}>
                  Explorar
                  <ArrowRightIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ve o <span className="shimmer-gold">Reborn AI</span> em acao
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descobre como a nossa plataforma pode transformar o teu negocio em
              apenas alguns minutos.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden premium-card glow-gold">
              <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-blue-500/10 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full gradient-gold text-black flex items-center justify-center hover:scale-110 transition-transform glow-gold">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Precos simples,</span>
              <br />
              <span className="shimmer-gold">resultados extraordinarios</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolhe o plano perfeito para o teu negocio. Sem custos ocultos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "premium-card glow-gold-subtle"
                    : "glass-light hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-black text-xs font-bold flex items-center gap-1">
                    <CrownIcon />
                    MAIS POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "shimmer-gold" : ""}`}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "shimmer-gold" : ""}`}>
                    {plan.price === "Custom" ? "" : "€"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && plan.price !== "0" && (
                    <span className="text-muted-foreground">/mes</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className={plan.popular ? "text-amber-400" : "text-emerald-400"}>
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.popular
                      ? "gradient-gold text-black hover:opacity-90"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">O que dizem</span>
              <br />
              <span className="shimmer-gold">os nossos clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-light rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-gold text-black flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="premium-card rounded-3xl p-8 sm:p-12 glow-gold">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <CrownIcon />
              <span className="text-sm shimmer-gold font-medium">
                Comeca hoje, gratis
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Pronto para</span>
              <br />
              <span className="shimmer-gold">transformar o teu negocio?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Junta-te a mais de 50.000 empreendedores que ja usam Reborn AI
              para escalar os seus negocios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full gradient-gold text-black hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Comecar Gratis
                <ArrowRightIcon />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full glass-light border border-amber-500/30 hover:border-amber-500/50 transition-all">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                <SparklesIcon />
              </div>
              <span className="text-xl font-bold">Reborn AI</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 Reborn AI. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
