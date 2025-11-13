import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const heroHighlights = [
  {
    title: "Acesso vitalício imediato",
    description: "Todos os programas reunidos em uma única plataforma."
  },
  {
    title: "Live exclusiva em 13/11",
    description: "Descubra a condição mais agressiva que já liberamos."
  },
  {
    title: "Mentoria com acompanhamento",
    description: "Planos de ação para multiplicar patrimônio em qualquer cenário."
  }
];

const stats = [
  { value: "+5.000", label: "Alunos transformados", icon: "🎯" },
  { value: "98%", label: "Satisfação geral", icon: "⭐" },
  { value: "+R$50M", label: "Patrimônio gerado", icon: "💰" }
];

const modules = [
  {
    icon: "🎯",
    title: "MVI - Mentoria Virando Investidor",
    description: "O mapa completo para sair do zero e criar renda em investimentos com suporte contínuo.",
    gradient: "from-purple-600 via-purple-500 to-pink-500"
  },
  {
    icon: "💵",
    title: "Milionário em Dólar",
    description: "Blindagem em moeda forte, com estratégias de renda passiva internacional e proteção cambial.",
    gradient: "from-emerald-500 via-emerald-600 to-green-500"
  },
  {
    icon: "₿",
    title: "Milionário em Criptomoedas",
    description: "Portfólio anti-crise com foco em multiplicação exponencial e gestão de risco cirúrgica.",
    gradient: "from-amber-500 via-orange-500 to-yellow-500"
  },
  {
    icon: "🏠",
    title: "Milionário com Consórcio",
    description: "Construção de patrimônio em ativos reais com alavancagem inteligente e parcelas estratégicas.",
    gradient: "from-sky-500 via-blue-500 to-cyan-500"
  },
  {
    icon: "⚡",
    title: "Milionário com Leilão",
    description: "Passo a passo para arrematar imóveis com até 70% de desconto e revender com lucro imediato.",
    gradient: "from-rose-500 via-red-500 to-orange-500"
  }
];

const timeline = [
  {
    title: "Preparação",
    time: "Agora",
    description: "Garanta seu lugar na lista VIP e receba o aquecimento exclusivo com orientações iniciais.",
    accent: "from-yellow-500 to-yellow-300"
  },
  {
    title: "Aula Magna",
    time: "13 de Novembro - 20h",
    description: "Transmissão ao vivo com a revelação do preço irrepetível e da oferta vitalícia completa.",
    accent: "from-red-500 to-rose-500"
  },
  {
    title: "Implementação",
    time: "Pós-live",
    description: "Acesso instantâneo ao ecossistema de treinamentos, materiais bônus e comunidade premium.",
    accent: "from-emerald-500 to-green-500"
  }
];

const testimonials = [
  {
    name: "Thiago Martins",
    result: "+R$ 312 mil em patrimônio",
    quote:
      "Segui o plano exatamente como foi mostrado e em 18 meses já tinha multiplicado o capital em três fontes diferentes.",
    avatar: "TM"
  },
  {
    name: "Larissa Duarte",
    result: "Renda extra em dólar",
    quote:
      "Nunca imaginei que conseguiria investir fora do Brasil. Hoje recebo em dólar todo mês e tenho clareza do próximo passo.",
    avatar: "LD"
  },
  {
    name: "João Ribeiro",
    result: "1º imóvel arrematado",
    quote:
      "Aula prática de leilões vale ouro. Comprei meu primeiro imóvel 52% abaixo do valor e já estou reformando para vender.",
    avatar: "JR"
  }
];

const faqs = [
  {
    question: "A oferta vitalícia realmente não se repete?",
    answer:
      "Exato. Esta condição está amarrada à live de 13/11 e não será reaberta com o mesmo valor e benefícios combinados."
  },
  {
    question: "Quando tenho acesso aos treinamentos?",
    answer:
      "Imediatamente após a confirmação durante a live. Você recebe login com acesso vitalício a todo o ecossistema."
  },
  {
    question: "Preciso ter experiência prévia com investimentos?",
    answer:
      "Não. Os programas são estruturados por níveis e acompanham você desde a construção da reserva até operações avançadas."
  },
  {
    question: "Há suporte ou comunidade?",
    answer:
      "Sim. A oferta vitalícia inclui encontros de acompanhamento, comunidade de alunos e atualizações contínuas." 
  }
];

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

  useEffect(() => {
    const targetDate = new Date("2024-11-13T20:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

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
    window.open(
      "https://wa.me/5511999999999?text=Quero%20participar%20da%20Black%20Vital%C3%ADcia%20Milion%C3%A1ria",
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05010a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,0,68,0.22),_transparent_65%)] blur-3xl" />
        <div className="absolute top-1/3 left-10 h-48 w-48 animate-float rounded-full bg-gradient-to-br from-emerald-500/40 to-sky-500/40 blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 py-3 text-center text-sm font-bold text-black shadow-[0_0_35px_rgba(234,179,8,0.35)]">
          <div className="animate-marquee whitespace-nowrap">
            ⚡ ACESSO VITALÍCIO GARANTIDO • LIVE BLACK VITALÍCIA MILIONÁRIA 2025 • CONDIÇÃO ÚNICA E LIMITADA • GARANTA SUA VAGA ⚡
          </div>
        </div>

        <section className="relative overflow-hidden pt-14 pb-24 md:pb-32">
          <div className="absolute inset-0">
            <picture>
              <source srcSet="/user_photo.webp" type="image/webp" />
              <img
                src="/user_photo.jpg"
                alt="Carlos Magno apresentando a oferta"
                className="h-full w-full object-cover object-center opacity-60"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-[#05010a]/95 via-[#05010a]/88 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05010a]/60 via-transparent to-[#05010a]" />
          </div>

          <div className="relative container mx-auto grid gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex animate-shine items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                Acesso vitalício + oferta irrepetível
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl xl:text-6xl">
                A <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent">melhor condição da história</span> para transformar seu patrimônio de forma definitiva.
              </h1>

              <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
                Entre para a comunidade que domina investimentos em múltiplos mercados, recebe atualizações contínuas e garante liberdade financeira com estratégias comprovadas por milhares de alunos.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-amber-200">{item.title}</p>
                    <p className="mt-2 text-xs text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="text-xl">📍</span>
                  Live 100% online e gratuita
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="text-xl">🗓️</span>
                  13 de novembro, às 20h
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="text-xl">⏳</span>
                  Vagas extremamente limitadas
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="h-14 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-10 text-lg font-black shadow-[0_15px_50px_rgba(244,63,94,0.35)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(244,63,94,0.45)]"
                >
                  Quero ser avisado na hora!
                </Button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex h-14 items-center gap-3 rounded-full border border-emerald-400/60 bg-emerald-500/20 px-8 text-sm font-semibold text-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-400/30"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-black">WA</span>
                  Conversar no WhatsApp agora
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">🔒</div>
                  Garantia de privacidade nos seus dados
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">♾️</div>
                  Atualizações vitalícias inclusas
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 rounded-[32px] bg-gradient-to-br from-amber-300 via-red-400 to-purple-500 opacity-70 blur-md" />
              <div className="relative rounded-[32px] border border-white/10 bg-[#0b0614]/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.65)] backdrop-blur-xl">
                <div className="mb-6 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Confirme sua presença</p>
                  <h3 className="mt-3 text-3xl font-black">
                    Lista VIP para a live
                    <span className="block text-sm font-semibold text-amber-200">garanta o link em primeira mão</span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Nome completo</label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Como você gostaria de ser chamado(a)?"
                      className="h-12 rounded-xl border-white/10 bg-white/10 text-base text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Melhor e-mail</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Ex: voce@email.com"
                      className="h-12 rounded-xl border-white/10 bg-white/10 text-base text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">WhatsApp com DDD</label>
                    <Input
                      type="tel"
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      placeholder="(11) 99999-0000"
                      className="h-12 rounded-xl border-white/10 bg-white/10 text-base text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 text-lg font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(244,63,94,0.4)] transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative">quero participar agora</span>
                  </Button>
                </form>

                <p className="mt-4 text-center text-xs text-gray-400">
                  🔒 Prometemos enviar apenas conteúdos relevantes. Você pode se descadastrar quando quiser.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex flex-col items-center text-amber-200">
              <span className="text-xs uppercase tracking-[0.5em]">Role para ver mais</span>
              <span className="mt-3 animate-bounce text-3xl">⌄</span>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-black/50 py-16">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 text-center shadow-[0_25px_60px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60"
              >
                <span className="text-4xl">{stat.icon}</span>
                <p className="mt-4 text-4xl font-black text-amber-200">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-amber-200">Oferta inédita</p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                O combo completo para multiplicar patrimônio em qualquer cenário econômico
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Ao confirmar presença na live, você desbloqueia uma condição vitalícia com todos os programas premium, atualizações permanentes e comunidade estratégica.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/60"
                >
                  <div className={`absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-br ${module.gradient}`} />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
                    {module.icon}
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold">{module.title}</h3>
                  <p className="relative mt-3 text-sm text-gray-300">{module.description}</p>
                  <div className="relative mt-6 h-px w-full bg-gradient-to-r from-amber-200/0 via-amber-200/60 to-transparent" />
                  <p className="relative mt-4 text-xs uppercase tracking-[0.35em] text-amber-200">Incluído na oferta vitalícia</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-black font-bold">+6</span>
                Bonus inéditos liberados apenas ao vivo
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-black font-bold">24h</span>
                Acesso à condição somente durante a janela oficial
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-black/40 py-20">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-amber-200">Contagem regressiva</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                A revelação acontece em {" "}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, "0")}d {String(timeLeft.hours).padStart(2, "0")}h {String(timeLeft.minutes).padStart(2, "0")}m
                </span>
              </h2>
              <p className="mt-6 text-base text-gray-300">
                Estamos finalizando os detalhes para abrir a última oportunidade vitalícia. Garanta seu nome na lista para receber o link oficial e os conteúdos de aquecimento.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-4 sm:items-center">
              {["Dias", "Horas", "Minutos", "Segundos"].map((label, index) => {
                const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
                return (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5 text-center shadow-[0_20px_50px_rgba(15,23,42,0.4)]"
                  >
                    <p className="text-3xl font-black text-amber-200 md:text-4xl">{String(values[index]).padStart(2, "0")}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.4em] text-gray-400">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-amber-200">Jornada ao vivo</p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                Três etapas para destravar sua nova fase financeira
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/60"
                >
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-br ${item.accent}`} />
                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-200">{item.time}</span>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="relative mt-3 text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-black/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200">Resultados reais</p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                Histórias de quem já trilhou o caminho vitalício
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-black font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-300">“{testimonial.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-amber-200">Perguntas frequentes</p>
              <h2 className="text-3xl font-black md:text-4xl">
                Tudo o que você precisa saber antes da aula magna
              </h2>
              <p className="text-base text-gray-300">
                Ainda está em dúvida? Reunimos as perguntas que mais recebemos da nossa comunidade para você entrar preparado(a) para a melhor oferta da história.
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-10 py-6 text-base font-bold text-black shadow-[0_20px_50px_rgba(234,179,8,0.35)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Quero meu acesso vitalício
              </Button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 text-lg font-semibold text-white">
                    <div className="flex items-center justify-between gap-6">
                      <span>{faq.question}</span>
                      <span className="text-2xl text-amber-200 transition-transform duration-300 group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-gray-300">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 py-16">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_70%)]" />
          </div>
          <div className="container relative mx-auto flex flex-col items-center gap-6 px-4 text-center text-white">
            <p className="text-xs uppercase tracking-[0.5em]">Última chamada</p>
            <h2 className="text-3xl font-black md:text-4xl">Não deixe seu nome fora da lista vitalícia</h2>
            <p className="max-w-2xl text-base text-white/80">
              13/11 será o dia em que abriremos a porta definitiva para todos os nossos treinamentos, mentorias e atualizações. O link é enviado exclusivamente para quem estiver confirmado na lista.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full bg-black/80 px-10 py-6 text-base font-black uppercase tracking-[0.3em] text-white shadow-[0_20px_60px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:scale-[1.05]"
            >
              garantir minha vaga vip
            </Button>
          </div>
        </section>

        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_15px_45px_rgba(16,185,129,0.45)] transition-transform duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Falar com a equipe agora
        </button>

        {showExitPopup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur">
            <div className="relative max-w-md rounded-[30px] border border-amber-300/60 bg-[#090312] p-8 shadow-[0_35px_90px_rgba(15,23,42,0.65)]">
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute right-5 top-5 text-2xl text-gray-400 transition-colors hover:text-white"
              >
                ×
              </button>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-3xl text-black">
                  ⚠️
                </div>
                <h3 className="mt-6 text-3xl font-black text-amber-200">Espere! A condição vitalícia está chegando</h3>
                <p className="mt-4 text-sm text-gray-300">
                  Deixe seus dados para receber o link privado e não perder a única janela com acesso vitalício a todos os treinamentos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <Input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome completo"
                  className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                  required
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                  required
                />
                <Input
                  type="tel"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="WhatsApp com DDD"
                  className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-amber-300/70"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 text-sm font-black uppercase tracking-[0.3em]"
                >
                  garantir meu acesso
                </Button>
              </form>
            </div>
          </div>
        )}

        <footer className="border-t border-white/10 bg-[#05010a] py-10 text-center text-xs text-gray-500">
          BLACK VITALÍCIA MILIONÁRIA 2025 • TODOS OS DIREITOS RESERVADOS • PRODUZIDO POR CARLOS MAGNO
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shine {
          background-size: 200% auto;
          animation: shine 6s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
