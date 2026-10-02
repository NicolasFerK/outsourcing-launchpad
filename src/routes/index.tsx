import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Outsourcing de TI — WK Technology" },
      {
        name: "description",
        content:
          "Um time de tecnologia dedicado, sem o peso de uma equipe interna. Profissionais especializados alocados sob demanda, com gestão inclusa e custo pós-pago.",
      },
      { property: "og:title", content: "Outsourcing de TI — WK Technology" },
      {
        property: "og:description",
        content:
          "Contratamos e gerimos os melhores profissionais para impulsionar sua eficiência operacional — você foca no negócio, nós cuidamos do resto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_URL = "https://wa.me/554830121055";

function CheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.199.058-.372-.014-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Nav() {
  const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-lg bg-primary font-display text-xl font-bold text-primary-foreground">
            WK
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-ink sm:block">
            technology
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="btn-primary px-5 py-2.5 text-xs">
          Fale com um especialista
        </a>
      </div>
    </header>
  );
}

function CodeWindow() {
  return (
    <div className="animate-fade-up overflow-hidden rounded-2xl border border-ink/20 bg-terminal shadow-[0_40px_80px_-30px_oklch(0.22_0.006_60/0.45)] [animation-delay:250ms]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="size-3 rounded-full bg-[oklch(0.65_0.21_25)]" />
        <span className="size-3 rounded-full bg-[oklch(0.8_0.13_85)]" />
        <span className="size-3 rounded-full bg-[oklch(0.68_0.17_156)]" />
        <span className="ml-3 font-mono text-xs text-code-comment">outsourcing.ts</span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-code-plain sm:text-[15px]">
        <code>
          <span className="text-code-comment">{"// outsourcing WK"}</span>
          {"\n"}
          <span className="text-code-key">const</span> time ={" "}
          <span className="text-code-string">wk</span>.<span className="text-code-key">alocar</span>
          ({"{"}
          {"\n  "}modelo: <span className="text-code-string">'dedicado'</span>,
          {"\n  "}gestao: <span className="text-code-string">'inclusa'</span>,
          {"\n  "}custo: <span className="text-code-string">'pós-pago'</span>
          {"\n"});
          {"\n\n"}
          <span className="text-code-key">return</span> time.
          <span className="text-code-string">produtivo</span>;{" "}
          <span className="text-code-comment">{"// ✓"}</span>
          <span className="caret text-code-plain">▍</span>
        </code>
      </pre>
    </div>
  );
}

const features = [
  {
    title: "Serviço pós-pago",
    text: "Profissional dedicado, sem custos de contratação permanente.",
  },
  {
    title: "Tech Lead compartilhado",
    text: "Acompanha o profissional diariamente e alinha com sua estratégia.",
  },
  {
    title: "Especialização no seu segmento",
    text: "Curva de aprendizado menor: já conhece as regras do seu negócio.",
  },
  {
    title: "Saúde mental acompanhada",
    text: "Conversas periódicas com psicólogos garantem o bem-estar do time.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow animate-fade-up">Como funciona</p>
          <h2 className="display mt-4 animate-fade-up text-4xl leading-[1.05] text-ink sm:text-5xl [animation-delay:100ms]">
            Especialistas alocados sob demanda
          </h2>
          <p className="mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:180ms]">
            Com a alocação de profissionais, sua empresa acessa habilidades
            especializadas sem a necessidade de montar e manter uma equipe
            interna de TI. Reduzimos custos, aceleramos entregas e eliminamos a
            burocracia.
          </p>
          <ul className="mt-10 space-y-6">
            {features.map((f, i) => (
              <li key={f.title} className="animate-fade-up flex gap-4" style={{ animationDelay: `${260 + i * 90}ms` }}>
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon />
                </span>
                <div>
                  <p className="font-bold text-ink">{f.title}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <CodeWindow />
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Redução de custos",
    text: "Menores despesas com recrutamento, salários e encargos trabalhistas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 9.5c-.7-.8-2.3-1.3-3.7-.7-1.5.6-1.9 2-1 3 .8.9 3.4.8 4.2 1.8.9 1 .5 2.4-1 3-1.4.6-3 .1-3.7-.7" />
        <path d="M12 6.5v11" />
      </svg>
    ),
  },
  {
    title: "Agilidade",
    text: "Profissionais prontos para produzir em até 72 horas, sem processos longos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Menos risco",
    text: "Assumimos a gestão do time e garantimos qualidade e comprometimento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

function Benefits() {
  return (
    <section id="beneficios" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow animate-fade-up">Benefícios</p>
        <h2 className="display mt-4 max-w-2xl animate-fade-up text-4xl leading-[1.05] text-ink sm:text-5xl [animation-delay:100ms]">
          Por que terceirizar com a WK
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="animate-fade-up group rounded-2xl border border-border bg-card p-8 shadow-[0_2px_10px_oklch(0.22_0.006_60/0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_oklch(0.22_0.006_60/0.25)]"
              style={{ animationDelay: `${180 + i * 110}ms` }}
            >
              <span className="grid size-13 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {b.icon}
              </span>
              <h3 className="display mt-6 text-2xl text-ink">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-24 text-background sm:py-32">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[34rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow animate-fade-up">Vamos conversar</p>
        <h2 className="display mt-4 animate-fade-up text-4xl leading-[1.05] sm:text-6xl [animation-delay:100ms]">
          Pronto para acelerar sua operação de TI?
        </h2>
        <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg leading-relaxed opacity-80 [animation-delay:180ms]">
          Conte para nós o perfil que você precisa e montamos o time ideal para
          o seu projeto.
        </p>
        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:260ms]">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-light">
            Enviar mensagem
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
            WK
          </span>
          <span className="text-sm font-bold">technology</span>
        </div>
        <nav className="flex items-center gap-7 text-sm opacity-75">
          <a href="#como-funciona" className="transition-colors hover:text-primary hover:opacity-100">
            Como funciona
          </a>
          <a href="#beneficios" className="transition-colors hover:text-primary hover:opacity-100">
            Benefícios
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary hover:opacity-100">
            WhatsApp
          </a>
        </nav>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} WK Technology. Outsourcing de TI.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="font-sans">
      <Nav />

      <main>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <p className="eyebrow animate-fade-up">Outsourcing de TI</p>
            <h1 className="display mt-5 max-w-4xl animate-fade-up text-5xl leading-[1.02] text-ink sm:text-7xl [animation-delay:80ms]">
              Um time de tecnologia dedicado, sem o peso de uma equipe interna.
            </h1>
            <p className="mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground sm:text-xl [animation-delay:160ms]">
              Contratamos e gerimos os melhores profissionais com a expertise
              necessária para impulsionar sua eficiência operacional — você foca
              no negócio, nós cuidamos do resto.
            </p>
            <div className="mt-10 animate-fade-up [animation-delay:240ms]">
              <a href="#contato" className="btn-primary">
                Montar meu time
                <ArrowIcon />
              </a>
            </div>

            <div className="mt-16 flex flex-wrap animate-fade-up gap-x-10 gap-y-4 [animation-delay:320ms]">
              {[
                "Profissionais prontos em até 72h",
                "Gestão do time inclusa",
                "Custo pós-pago",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                  <span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <Benefits />
        <FinalCta />
      </main>

      <Footer />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-6 bottom-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_var(--whatsapp)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
