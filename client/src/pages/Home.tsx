import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date('2024-11-13T20:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Exit Intent Popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }
    toast.success("Inscrição realizada com sucesso! Em breve você receberá mais informações.");
    setName("");
    setEmail("");
    setWhatsapp("");
    setShowExitPopup(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Quero%20participar%20da%20Black%20Vital%C3%ADcia%20Milion%C3%A1ria', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black py-3 px-4 text-center font-bold text-sm md:text-base overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap inline-block">
          ⚡ ACESSO VITALÍCIO ⚡ LIVE BLACK VITALÍCIA MILIONÁRIA 2025 ⚡ ACESSO VITALÍCIO ⚡ LIVE BLACK VITALÍCIA MILIONÁRIA 2025 ⚡ ACESSO VITALÍCIO ⚡ LIVE BLACK VITALÍCIA MILIONÁRIA 2025 ⚡
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/user_photo.webp" type="image/webp" />
            <img
              src="/user_photo.jpg"
              alt="Background"
              className="w-full h-full object-cover object-center opacity-80"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm md:text-base shadow-lg">
                ACESSO VITALÍCIO | BLACK VITALÍCIA MILIONÁRIA
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                A MELHOR OFERTA{" "}
                <span className="text-yellow-400">DA HISTÓRIA!</span>
              </h1>

              <div className="space-y-3 border-l-4 border-yellow-400 pl-4">
                <p className="text-xl md:text-2xl font-black text-yellow-400">
                  SUA ÚLTIMA CHANCE DE SER VITALÍCIO.
                </p>
                <p className="text-lg md:text-xl font-bold text-yellow-300">
                  Revelação oficial: 13 de Novembro
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  No Youtube às 20h
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Tenha acesso a todos os meus Treinamentos sobre Investimentos com uma{" "}
                <strong className="text-white">CONDIÇÃO INÉDITA</strong> e de forma{" "}
                <strong className="text-yellow-400">100% VITALÍCIA!</strong>
              </p>
              
              <p className="text-lg md:text-xl font-black text-red-400 animate-pulse">
                🚨 Isso nunca mais se repetirá!
              </p>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-yellow-400">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-400">
                  Digite seus dados abaixo para participar:
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-yellow-400 border-2 text-white placeholder:text-gray-400 h-12 text-base"
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-yellow-400 border-2 text-white placeholder:text-gray-400 h-12 text-base"
                    required
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Seu Whatsapp com DDD"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="bg-gray-800 border-yellow-400 border-2 text-white placeholder:text-gray-400 h-12 text-base"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg h-14 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    QUERO PARTICIPAR AGORA
                  </Button>

                  <p className="text-center text-xs text-gray-400 mt-2">
                    🔒 Seus dados estão seguros conosco
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-yellow-400 text-3xl">↓</div>
        </div>
      </section>

      {/* Offer Section - Modern Design */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Prepara-se
            </h3>
            
            <p className="text-center text-gray-300 mb-8 text-lg max-w-3xl mx-auto">
              Para a maior condição nunca feita anteriormente, para você ter acesso ao MVI - Mentoria Virando Investidor e aos meus principais treinamentos sobre investimentos.
            </p>

            <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-12">
              Confira abaixo a melhor oferta da história que você terá acesso no dia 13 de novembro:
            </h4>
          </div>

          {/* Modern Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "MVI - Mentoria Virando Investidor",
                icon: "🎯",
                gradient: "from-purple-600 to-pink-600",
                delay: "0s"
              },
              {
                title: "Milionário em Dólar",
                icon: "💵",
                gradient: "from-green-600 to-emerald-600",
                delay: "0.1s"
              },
              {
                title: "Milionário em Criptomoedas",
                icon: "₿",
                gradient: "from-orange-600 to-yellow-600",
                delay: "0.2s"
              },
              {
                title: "Milionário com Consórcio",
                icon: "🏠",
                gradient: "from-blue-600 to-cyan-600",
                delay: "0.3s"
              },
              {
                title: "Milionário com Leilão",
                icon: "⚡",
                gradient: "from-red-600 to-rose-600",
                delay: "0.4s"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 animate-fade-in"
                style={{animationDelay: item.delay}}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4 text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h5 className="relative text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h5>
                
                {/* Check Icon */}
                <div className="absolute top-4 right-4 text-green-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✓
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg px-12 h-16 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-600/50 hover:shadow-red-600/80"
            >
              🔥 GARANTA AGORA A SUA VAGA
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Discount Banner */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-4">
            DESCONTO SURREAL DE BLACK VITALÍCIA.
          </h3>
          <p className="text-xl md:text-2xl font-bold">
            PARTICIPE DA LIVE DE BLACK FRIDAY VITALÍCIA MILIONÁRIA DIA 13/11
          </p>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="bg-black py-12 md:py-16 border-y border-yellow-400/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
              ⏰ A REVELAÇÃO ACONTECE EM:
            </h3>
            <p className="text-gray-400 mb-8">Não perca essa oportunidade única!</p>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: timeLeft.days, label: 'Dias' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Minutos' },
                { value: timeLeft.seconds, label: 'Segundos' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 md:p-6 border border-yellow-400/50 shadow-lg shadow-yellow-400/20">
                  <div className="text-3xl md:text-5xl font-black text-yellow-400 mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase font-bold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Reveal Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            E o valor com a <strong className="text-yellow-400">CONDIÇÃO ESPECIAL</strong> será revelado no dia{" "}
            <strong className="text-yellow-400">13 de novembro</strong> em nossa aula magna.
          </p>
        </div>
      </section>

      {/* Products Details Section - Modern Design */}
      <section className="bg-gradient-to-b from-gray-900 via-black to-gray-950 py-12 md:py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Detalhes dos Treinamentos
            </h3>
            <p className="text-gray-400 text-lg">Conheça cada um dos programas que farão parte da sua jornada</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                number: "01",
                title: "Milionário em Dólar",
                icon: "💵",
                description: "Aprenda o caminho para construir patrimônio na moeda mais forte do mundo. Vou te mostrar as estratégias que usei para criar renda em dólar, morando no Brasil ou fora, e proteger seu futuro financeiro da instabilidade econômica.",
                gradient: "from-green-600 to-emerald-600",
                delay: "0s"
              },
              {
                number: "02",
                title: "Milionário com Cripto",
                icon: "₿",
                description: "Descubra como transformar R$100 em R$1.000 (e mais) no mercado de criptomoedas, mesmo que você não entenda nada de tecnologia. O guia completo para encontrar as melhores oportunidades antes de todo mundo.",
                gradient: "from-orange-600 to-yellow-600",
                delay: "0.1s"
              },
              {
                number: "03",
                title: "Milionário com Consórcio",
                icon: "🏠",
                description: "O segredo da alavancagem para comprar imóveis e carros praticamente sem juros. Vou te ensinar a usar o consórcio de forma inteligente para multiplicar seu patrimônio de maneira segura e planejada.",
                gradient: "from-blue-600 to-cyan-600",
                delay: "0.2s"
              },
              {
                number: "04",
                title: "Milionário com Leilão",
                icon: "⚡",
                description: "Como comprar imóveis e outros bens com 30%, 50% ou até 70% de desconto. Perca o medo dos leilões e aprenda o passo a passo para encontrar as melhores oportunidades e arrematar com segurança.",
                gradient: "from-red-600 to-rose-600",
                delay: "0.3s"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/20 animate-fade-in"
                style={{animationDelay: product.delay}}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-black text-black text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  {product.number}
                </div>
                
                {/* Icon */}
                <div className="relative mb-4 text-5xl transform group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>
                
                {/* Title */}
                <h4 className="relative text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {product.title}
                </h4>
                
                {/* Description */}
                <p className="relative text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {product.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-red-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Junte-se a Milhares de Alunos
            </h3>
            <p className="text-gray-400 text-lg">Que já transformaram suas vidas com nossos treinamentos</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: '+5.000', label: 'Alunos Transformados', icon: '🎯' },
              { number: '+R$50M', label: 'Em Patrimônio Gerado', icon: '💰' },
              { number: '98%', label: 'Taxa de Satisfação', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-green-400/30 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Turma Photo */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20">
              <picture>
                <source srcSet="/turma_photo.webp" type="image/webp" />
                <img
                  src="/turma_photo.jpg"
                  alt="Turma de alunos"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </picture>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <p className="text-white text-lg md:text-xl font-bold text-center">
                  🎉 Turma MVI - Alunos que já estão no caminho da liberdade financeira!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black text-lg px-12 h-16 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-600/50"
            >
              🚀 EU QUERO FAZER PARTE DESSA TURMA!
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-400 rounded-2xl p-8 max-w-md relative">
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <div className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-yellow-400">
                ESPERE! NÃO VÁ EMBORA!
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Você está a um passo de garantir a <strong className="text-yellow-400">MELHOR OFERTA DA HISTÓRIA</strong> para transformar sua vida financeira!
              </p>
              <p className="text-red-400 font-bold mb-6">
                ⏰ Esta oportunidade só estará disponível até 13/11!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-yellow-400 border-2 text-white"
                  required
                />
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-yellow-400 border-2 text-white"
                  required
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="bg-gray-800 border-yellow-400 border-2 text-white"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg h-14"
                >
                  🔥 SIM, QUERO GARANTIR MINHA VAGA!
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            BLACK VITALÍCIA MILIONÁRIA 2025 - TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </footer>
    </div>
  );
}

