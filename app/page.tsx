"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Icons as inline SVGs
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const CrownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
  </svg>
);

const PresentationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
  </svg>
);

// Feature Card Component
function FeatureCard({ icon, title, description, highlighted, badge }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
}) {
  return (
    <div className={`group relative p-6 rounded-2xl transition-all duration-300 ${
      highlighted ? "premium-card" : "glass-card hover:border-amber-200"
    }`}>
      {highlighted && badge && (
        <span className="absolute -top-3 left-4 px-3 py-1 text-xs font-bold gradient-gold text-white rounded-full shadow-lg">
          {badge}
        </span>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        highlighted ? "gradient-gold text-white" : "bg-amber-50 text-amber-600"
      } transition-colors`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <span className={`flex-shrink-0 text-amber-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48" : "max-h-0"}`}>
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toolsList = [
    { icon: <MessageIcon />, title: "Chat Inteligente", description: "Conversa com IA avancada" },
    { icon: <VideoIcon />, title: "Modo Live", description: "Video e voz em tempo real" },
    { icon: <ImageIcon />, title: "Imagens AI", description: "Geracao de imagens profissionais" },
    { icon: <GlobeIcon />, title: "WebCraft", description: "Cria websites completos", highlight: true },
    { icon: <PresentationIcon />, title: "Apresentacoes", description: "Slides profissionais automaticos" },
    { icon: <MailIcon />, title: "Email Marketing", description: "Campanhas em massa" },
  ];

  const products = [
    {
      title: "AI Websites",
      description: "Landing pages, websites e funis de alta conversao com inteligencia artificial em minutos.",
      icon: <GlobeIcon />,
      features: ["WebCraft AI", "Templates Premium", "Deploy Automatico"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "AI Marketing",
      description: "Gera videos, ads, conteudos, redes sociais, email e WhatsApp automatizados.",
      icon: <MegaphoneIcon />,
      features: ["Video Generation", "Social Media", "Email & WhatsApp"],
      premium: true,
    },
    {
      title: "AI CRM",
      description: "Gestao de leads, equipas, pipelines e automacoes de vendas inteligentes.",
      icon: <UsersIcon />,
      features: ["Lead Management", "Team Pipelines", "AI Automations"],
    },
  ];

  const features = [
    { icon: <MessageIcon />, title: "Chat Inteligente", description: "Conversa natural com IA avancada, analise de imagens, pesquisa web em tempo real." },
    { icon: <VideoIcon />, title: "Modo Live", description: "Interacao em tempo real com voz e video. Visao AI ao vivo com respostas instantaneas." },
    { icon: <ImageIcon />, title: "Imagens AI", description: "Geracao de imagens profissionais com multiplos estilos e alta resolucao." },
    { icon: <GlobeIcon />, title: "WebCraft", description: "Cria websites completos, landing pages e paginas profissionais para negocios.", highlighted: true, badge: "Melhor para ganhar dinheiro" },
    { icon: <PresentationIcon />, title: "Apresentacoes", description: "Slides profissionais com 12 estilos visuais e imagens automaticas." },
    { icon: <MailIcon />, title: "Email Marketing", description: "Campanhas de email em massa com validacao automatica e personalizacao." },
  ];

  const earnSteps = [
    { number: "01", title: "Encontra um negocio local", description: "Fala com cafes, restaurantes, barbeiros, lojas, clinicas que precisam de presenca online." },
    { number: "02", title: "Cria o website com WebCraft", description: "Usa o Reborn AI para gerar rapidamente websites profissionais e landing pages." },
    { number: "03", title: "Cobra pelo servico", description: "Podes cobrar 200 euros ou mais por cada website criado, dependendo do projeto." },
    { number: "04", title: "Repete e escala", description: "Com uma subscricao de 9,99 euros/mes, cria oportunidades com custo reduzido e margem alta." },
  ];

  const pricingPlans = [
    {
      name: "Gratis",
      price: "0",
      description: "Para testar e explorar",
      features: ["Testar todas funcionalidades", "Chat basico limitado", "Imagens AI (demo)", "WebCraft (visualizar)", "Sem cartao credito"],
      cta: "Experimentar Gratis",
      href: "https://rebornaaqi.vercel.app/",
      popular: false,
    },
    {
      name: "Basic",
      price: "9,99",
      description: "Perfeito para comecar a criar websites para clientes.",
      features: ["Tokens diarios generosos", "Todas 11+ ferramentas", "Chat inteligente", "Imagens AI", "WebCraft completo", "Email, SMS, WhatsApp", "Suporte standard"],
      cta: "Assinar Basic",
      href: "https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00",
      popular: false,
    },
    {
      name: "PRO",
      price: "69,99",
      description: "Ideal para freelancers, agencias e criadores que querem escalar.",
      features: ["Tokens ILIMITADOS", "ZERO limites, ZERO esperas", "Chat sem restricoes", "Imagens AI ilimitadas", "WebCraft PRO + deploy Vercel", "Modo Live sem limites", "Suporte prioritario", "Novas features primeiro"],
      cta: "Upgrade para PRO",
      href: "https://buy.stripe.com/cNi4gz1J36rA264gEt5Rm06",
      popular: true,
    },
  ];

  const faqs = [
    { question: "Preciso saber programar?", answer: "Nao. O Reborn AI foi criado para simplificar a criacao de websites, conteudos e campanhas. Qualquer pessoa pode usar." },
    { question: "Posso vender websites criados com o WebCraft?", answer: "Sim. Podes usar o WebCraft para criar websites para clientes, negocios locais e empresas. Os websites sao 100% teus." },
    { question: "Quanto posso cobrar?", answer: "Depende do cliente e do projeto, mas websites simples podem ser vendidos por 200 euros ou mais. Alguns freelancers cobram 500-1000 euros por projetos mais complexos." },
    { question: "O plano Basic chega para comecar?", answer: "Sim. O plano Basic por 9,99 euros/mes e ideal para comecar a testar, criar e vender. Se precisares de mais volume, podes fazer upgrade para PRO." },
  ];

  const stats = [
    { value: "11+", label: "Ferramentas AI" },
    { value: "98%", label: "Tempo Poupado" },
    { value: "200x", label: "ROI Potencial" },
    { value: "24/7", label: "Disponibilidade" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center text-white">
                <SparklesIcon />
              </div>
              <span className="text-xl font-bold text-foreground">Reborn AI</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Produtos</a>
              
              {/* Tools Dropdown */}
              <div className="relative" ref={toolsRef}>
                <button 
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ferramentas
                  <span className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                
                {/* Dropdown Menu */}
                {toolsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50">
                    <div className="grid gap-1">
                      {toolsList.map((tool, index) => (
                        <Link
                          key={index}
                          href="https://rebornaaqi.vercel.app/"
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-slate-50 ${tool.highlight ? "bg-amber-50 hover:bg-amber-100" : ""}`}
                          onClick={() => setToolsOpen(false)}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tool.highlight ? "gradient-gold text-white" : "bg-slate-100 text-slate-600"}`}>
                            {tool.icon}
                          </div>
                          <div>
                            <div className={`font-medium text-sm ${tool.highlight ? "text-amber-700" : "text-foreground"}`}>
                              {tool.title}
                              {tool.highlight && <span className="ml-2 text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded">Popular</span>}
                            </div>
                            <div className="text-xs text-muted-foreground">{tool.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <Link 
                        href="https://rebornaaqi.vercel.app/" 
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                        onClick={() => setToolsOpen(false)}
                      >
                        Ver todas as 11+ ferramentas
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Precos</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="https://rebornaaqi.vercel.app/" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Entrar
              </Link>
              <Link href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00" className="px-4 py-2 text-sm font-medium rounded-full gradient-gold text-white hover:opacity-90 transition-opacity shadow-lg">
                Comecar Agora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-8">
              <CrownIcon />
              <span className="text-sm shimmer-gold font-medium">Plataforma AI Completa</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Automate.</span>{" "}
              <span className="shimmer-gold">Create.</span>{" "}
              <span className="gradient-text">Scale.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
              O sistema de IA construido para fazer crescer negocios. Cria websites, conteudos, campanhas e automatiza processos em minutos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full gradient-gold text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Comecar por 9,99 euros/mes
                <ArrowRightIcon />
              </Link>
              <Link href="https://rebornaaqi.vercel.app/" className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full bg-white border border-slate-200 hover:border-amber-300 text-foreground transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <PlayIcon />
                Experimentar Gratis
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-3xl sm:text-4xl font-bold shimmer-gold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Tres pilares para</span>{" "}
              <span className="shimmer-gold">escalar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Websites, Marketing e CRM - tudo o que precisas numa unica plataforma de IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div key={index} className={`group relative rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${product.premium ? "premium-card glow-gold-subtle" : "glass-card"}`}>
                {product.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                    <CrownIcon />
                    PREMIUM
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl ${product.premium ? "gradient-gold text-white" : "bg-amber-50 text-amber-600"} flex items-center justify-center mb-6`}>
                  {product.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${product.premium ? "shimmer-gold" : "text-foreground"}`}>{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground">
                      <span className={product.premium ? "text-amber-500" : "text-emerald-500"}><CheckIcon /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="https://rebornaaqi.vercel.app/" className={`w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${product.premium ? "gradient-gold text-white hover:opacity-90 shadow-lg" : "bg-slate-100 hover:bg-slate-200 text-foreground"}`}>
                  Explorar
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium shimmer-gold uppercase tracking-wider">Ferramentas Profissionais</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              <span className="gradient-text">Tudo o Que Precisas</span>{" "}
              <span className="shimmer-gold">Numa Plataforma</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              11+ ferramentas poderosas de IA para transformar o teu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Earn Section */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">Oportunidade</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              <span className="gradient-text">Como podes ganhar dinheiro</span>{" "}
              <span className="shimmer-gold">com o Reborn AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforma as ferramentas de IA em rendimento real com estes passos simples
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnSteps.map((step, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:border-amber-200 transition-all">
                <span className="text-4xl font-bold text-amber-200">{step.number}</span>
                <h3 className="text-lg font-semibold mt-4 mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Highlight CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block premium-card rounded-2xl p-8 md:p-12 max-w-3xl glow-gold-subtle">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Com apenas 1 cliente, podes pagar varios meses do Reborn AI.
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Se cobrares 200 euros por um website e pagares 9,99 euros/mes pela plataforma, tens uma oportunidade simples para comecar a gerar rendimento com IA.
              </p>
              <Link href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00" className="inline-flex items-center gap-2 gradient-gold text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg">
                Comecar Agora
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium shimmer-gold uppercase tracking-wider">Planos e Precos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              <span className="gradient-text">Escolhe o</span>{" "}
              <span className="shimmer-gold">Teu Plano</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comeca gratis ou desbloqueia todo o potencial com PRO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${plan.popular ? "premium-card glow-gold-subtle lg:scale-105" : "glass-card"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                    <CrownIcon />
                    RECOMENDADO
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "shimmer-gold" : "text-foreground"}`}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "shimmer-gold" : "text-foreground"}`}>
                    {plan.price === "0" ? "" : ""}
                    {plan.price}
                  </span>
                  {plan.price !== "0" && <span className="text-muted-foreground"> euros/mes</span>}
                  {plan.price === "0" && <span className="text-4xl font-bold text-foreground">Gratis</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground">
                      <span className={plan.popular ? "text-amber-500" : "text-emerald-500"}><CheckIcon /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className={`w-full py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${plan.popular ? "gradient-gold text-white hover:opacity-90 shadow-lg" : "bg-slate-100 hover:bg-slate-200 text-foreground"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium shimmer-gold uppercase tracking-wider">Perguntas Frequentes</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              <span className="gradient-text">Duvidas?</span>{" "}
              <span className="shimmer-gold">Temos Respostas.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="premium-card rounded-3xl p-8 sm:p-12 glow-gold">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Comeca hoje a transformar</span>{" "}
              <span className="shimmer-gold">IA em rendimento.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              O Reborn AI da-te ferramentas para criar websites, conteudos e campanhas sem comecares do zero.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://buy.stripe.com/eVqdR93RbaHQ4ecbk95Rm00" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full gradient-gold text-white hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                Adere por 9,99 euros/mes
                <ArrowRightIcon />
              </Link>
              <Link href="https://rebornaaqi.vercel.app/" className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full bg-white border border-amber-200 hover:border-amber-400 text-foreground transition-all shadow-sm">
                Ou experimenta gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center text-white">
                <SparklesIcon />
              </div>
              <span className="text-xl font-bold text-foreground">Reborn AI</span>
            </Link>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Termos</a>
              <a href="#" className="hover:text-foreground transition-colors">Contacto</a>
            </div>
            <div className="text-sm text-muted-foreground">
              Reborn AI 2026 - Desenvolvido por REBORNAI
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
