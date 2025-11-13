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
    gradient: "linear-gradient(135deg, #9333ea, #f472b6)"
  },
  {
    icon: "💵",
    title: "Milionário em Dólar",
    description: "Blindagem em moeda forte com estratégias de renda passiva internacional.",
    gradient: "linear-gradient(135deg, #059669, #10b981)"
  },
  {
    icon: "₿",
    title: "Milionário em Criptomoedas",
    description: "Portfólio anticrise com foco em multiplicação exponencial e gestão de risco cirúrgica.",
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)"
  },
  {
    icon: "🏠",
    title: "Milionário com Consórcio",
    description: "Construção de patrimônio em ativos reais com alavancagem inteligente.",
    gradient: "linear-gradient(135deg, #0284c7, #22d3ee)"
  },
  {
    icon: "⚡",
    title: "Milionário com Leilão",
    description: "Passo a passo para arrematar imóveis com até 70% de desconto e revender com lucro imediato.",
    gradient: "linear-gradient(135deg, #fb7185, #fb923c)"
  }
];

const timeline = [
  {
    title: "Preparação",
    time: "Agora",
    description: "Garanta seu lugar na lista VIP e receba o aquecimento exclusivo com orientações iniciais.",
    gradient: "linear-gradient(135deg, #fbbf24, #fef3c7)"
  },
  {
    title: "Aula Magna",
    time: "13 de Novembro - 20h",
    description: "Transmissão ao vivo com a revelação do preço irrepetível e da oferta vitalícia completa.",
    gradient: "linear-gradient(135deg, #ef4444, #fb7185)"
  },
  {
    title: "Implementação",
    time: "Pós-live",
    description: "Acesso instantâneo ao ecossistema de treinamentos, materiais bônus e comunidade premium.",
    gradient: "linear-gradient(135deg, #10b981, #34d399)"
  }
];

const testimonials = [
  {
    name: "Thiago Martins",
    result: "+R$ 312 mil em patrimônio",
    quote: "Segui o plano exatamente como foi mostrado e em 18 meses já tinha multiplicado o capital em três fontes diferentes.",
    avatar: "TM"
  },
  {
    name: "Larissa Duarte",
    result: "Renda extra em dólar",
    quote: "Nunca imaginei que conseguiria investir fora do Brasil. Hoje recebo em dólar todo mês e tenho clareza do próximo passo.",
    avatar: "LD"
  },
  {
    name: "João Ribeiro",
    result: "1º imóvel arrematado",
    quote: "Aula prática de leilões vale ouro. Comprei meu primeiro imóvel 52% abaixo do valor e já estou reformando para vender.",
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
    answer: "Imediatamente após a confirmação durante a live. Você recebe login com acesso vitalício a todo o ecossistema."
  },
  {
    question: "Preciso ter experiência prévia com investimentos?",
    answer: "Não. Os programas são estruturados por níveis e acompanham você desde a construção da reserva até operações avançadas."
  },
  {
    question: "Há suporte ou comunidade?",
    answer: "Sim. A oferta vitalícia inclui encontros de acompanhamento, comunidade de alunos e atualizações contínuas."
  }
];

function populateHighlights() {
  const container = document.querySelector("[data-hero-highlights]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  heroHighlights.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "highlight-card";
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${index * 0.08}s`);
    card.innerHTML = `
      <p class="highlight-card__title">${item.title}</p>
      <p class="highlight-card__description">${item.description}</p>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function populateStats() {
  const container = document.querySelector("[data-stats]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  stats.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "stats-card";
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${0.1 + index * 0.08}s`);
    card.innerHTML = `
      <span class="stats-card__icon">${item.icon}</span>
      <span class="stats-card__value">${item.value}</span>
      <span class="stats-card__label">${item.label}</span>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function populateModules() {
  const container = document.querySelector("[data-modules]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  modules.forEach((module, index) => {
    const card = document.createElement("article");
    card.className = "module-card";
    card.style.setProperty("--module-gradient", module.gradient);
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${0.1 + index * 0.08}s`);
    card.innerHTML = `
      <div class="module-card__content">
        <span class="module-card__icon">${module.icon}</span>
        <h3 class="module-card__title">${module.title}</h3>
        <p class="module-card__description">${module.description}</p>
      </div>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function populateTimeline() {
  const container = document.querySelector("[data-timeline]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  timeline.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "timeline-card";
    card.style.setProperty("--timeline-gradient", item.gradient);
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${0.1 + index * 0.1}s`);
    card.innerHTML = `
      <div class="timeline-card__content">
        <span class="timeline-card__time">${item.time}</span>
        <h3 class="timeline-card__title">${item.title}</h3>
        <p class="timeline-card__description">${item.description}</p>
      </div>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function populateTestimonials() {
  const container = document.querySelector("[data-testimonials]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  testimonials.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${index * 0.12}s`);
    card.innerHTML = `
      <span class="testimonial-card__avatar">${item.avatar}</span>
      <h3 class="testimonial-card__name">${item.name}</h3>
      <p class="testimonial-card__result">${item.result}</p>
      <p class="testimonial-card__quote">“${item.quote}”</p>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function populateFaq() {
  const container = document.querySelector("[data-faq]");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  faqs.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "faq-item";
    card.setAttribute("data-animate", "");
    card.style.setProperty("--animate-delay", `${index * 0.08}s`);
    card.innerHTML = `
      <h3 class="faq-item__question">${item.question}</h3>
      <p class="faq-item__answer">${item.answer}</p>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function initCountdown() {
  const countdownParts = document.querySelectorAll("[data-countdown-part]");
  if (!countdownParts.length) return;

  const parts = Array.from(countdownParts).reduce((map, node) => {
    const key = node.getAttribute("data-countdown-part");
    if (key) {
      map[key] = node;
    }
    return map;
  }, {});

  if (!parts.days || !parts.hours || !parts.minutes || !parts.seconds) {
    return;
  }

  const targetDate = new Date("2025-11-13T20:00:00-03:00").getTime();

  let timerId;

  const updateCountdown = () => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      Object.values(parts).forEach((part) => {
        part.textContent = "00";
      });
      if (timerId) {
        clearInterval(timerId);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    parts.days.textContent = String(days).padStart(2, "0");
    parts.hours.textContent = String(hours).padStart(2, "0");
    parts.minutes.textContent = String(minutes).padStart(2, "0");
    parts.seconds.textContent = String(seconds).padStart(2, "0");
  };

  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);
}

function initScrollTargets() {
  const buttons = document.querySelectorAll("[data-scroll-target]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selector = button.getAttribute("data-scroll-target");
      if (!selector) return;
      const element = document.querySelector(selector);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initWhatsAppButton() {
  const button = document.getElementById("whatsapp-button");
  if (!button) return;
  button.addEventListener("click", () => {
    const message = encodeURIComponent(
      "Quero participar da Black Vitalícia Milionária e garantir o acesso vitalício."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank", "noopener");
  });
}

function initForm() {
  const form = document.getElementById("vip-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  const setFeedback = (message, type) => {
    feedback.textContent = message;
    feedback.classList.remove("form__feedback--success", "form__feedback--error");
    if (type) {
      feedback.classList.add(type);
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const whatsapp = (formData.get("whatsapp") || "").toString().trim();

    if (!name || !email || !whatsapp) {
      setFeedback("Por favor, preencha todos os campos.", "form__feedback--error");
      return;
    }

    const emailPattern = /.+@.+\..+/i;
    if (!emailPattern.test(email)) {
      setFeedback("Insira um e-mail válido para receber o link da live.", "form__feedback--error");
      return;
    }

    setFeedback("Inscrição realizada com sucesso! Em breve você receberá mais informações.", "form__feedback--success");
    form.reset();
  });
}

function initExitPopup() {
  const popup = document.getElementById("exit-popup");
  if (!popup) return;
  const closeButtons = popup.querySelectorAll("[data-close-popup]");
  let hasShown = false;

  const closePopup = () => {
    popup.classList.remove("exit-popup--visible");
    popup.setAttribute("aria-hidden", "true");
  };

  closeButtons.forEach((button) => button.addEventListener("click", closePopup));
  popup.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      closePopup();
    });
  });

  document.addEventListener("mouseleave", (event) => {
    if (hasShown) return;
    if (event.clientY <= 0) {
      hasShown = true;
      popup.classList.add("exit-popup--visible");
      popup.setAttribute("aria-hidden", "false");
    }
  });
}

function initMarquee() {
  const marquee = document.querySelector("[data-marquee]");
  if (!marquee) return;
  const content = marquee.textContent?.trim();
  if (!content) return;
  marquee.innerHTML = `${content} ${content}`;
}

function setCurrentYear() {
  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function initRevealAnimations() {
  const animatedElements = document.querySelectorAll("[data-animate]");
  if (!animatedElements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    animatedElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedElements.forEach((element, index) => {
    if (!element.style.getPropertyValue("--animate-delay")) {
      element.style.setProperty("--animate-delay", `${index * 0.07}s`);
    }
    observer.observe(element);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  populateHighlights();
  populateStats();
  populateModules();
  populateTimeline();
  populateTestimonials();
  populateFaq();
  initCountdown();
  initScrollTargets();
  initWhatsAppButton();
  initForm();
  initExitPopup();
  initMarquee();
  setCurrentYear();
  initRevealAnimations();
});
