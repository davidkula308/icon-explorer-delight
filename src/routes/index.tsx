import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Moon, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netgenix Tech Icons | Digital Products & Technology" },
      {
        name: "description",
        content:
          "Netgenix combines product thinking, design and engineering to build useful websites, mobile apps and technology systems.",
      },
      { property: "og:title", content: "Netgenix Tech Icons | Digital Products & Technology" },
      {
        property: "og:description",
        content: "We turn ambitious ideas into digital products people want to use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  "Website Design and Development",
  "Mobile App Development",
  "Search Engine Optimization",
  "Database Design and Maintenance",
];

const proof = [
  { label: "Shipped", value: "Web & mobile products built for launch" },
  { label: "Stack", value: "Clean, maintainable code and systems" },
  { label: "Partner", value: "A senior team from brief to release" },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Netgenix Tech Icons">
      <span className="grid size-9 place-items-center bg-brand text-sm font-extrabold text-brand-foreground">
        N
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-extrabold">Netgenix Tech Icons</span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-coral">
          Technology solutions
        </span>
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-2 text-[11px] sm:px-6">
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-1.5 text-brand-foreground/80 transition-colors hover:text-brand-foreground" href="tel:+254791480876">
              <Phone className="size-3 text-coral" aria-hidden="true" />
              +254791480876
            </a>
            <a className="hidden items-center gap-1.5 text-brand-foreground/80 transition-colors hover:text-brand-foreground sm:inline-flex" href="mailto:info@netgenixicons.com">
              <Mail className="size-3 text-coral" aria-hidden="true" />
              info@netgenixicons.com
            </a>
          </div>
          <span className="inline-flex items-center gap-2 tracking-wide text-brand-foreground/85">
            <span className="size-1.5 bg-coral" />
            <span className="hidden xs:inline">Building useful digital products</span>
            <span className="xs:hidden">Building useful products</span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-6">
          <a href="#top" className="shrink-0"><BrandMark /></a>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex" aria-label="Primary navigation">
            <a className="nav-link nav-link-active" href="#top">Home</a>
            <a className="nav-link" href="#about">Who We Are</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#testimonials">Testimonials</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="grid size-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-coral hover:text-coral" type="button" aria-label="Theme settings" title="Theme settings">
              <Moon className="size-4" />
            </button>
            <a className="hidden items-center gap-2 bg-coral px-4 py-2.5 text-[13px] font-bold text-coral-foreground transition-colors hover:bg-coral-strong sm:inline-flex" href="#contact">
              Request a Quote <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="hero-grid relative overflow-hidden">
        <section className="mx-auto grid min-h-[760px] max-w-[1240px] grid-cols-1 gap-10 px-5 py-14 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-0 lg:py-20">
          <div className="hero-enter lg:col-span-7 lg:pr-12">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
              Digital products · Software · Technology
            </p>
            <h1 className="max-w-[18ch] text-balance text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-[3.65rem]">
              We turn ambitious ideas into <span className="text-primary">digital products</span> people want to use.
            </h1>
            <p className="mt-6 max-w-[55ch] text-pretty text-[15px] leading-7 text-muted-foreground">
              Netgenix combines product thinking, design and engineering to build websites, mobile apps, software and technology systems that solve real business problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-soft" href="#contact">
                Start Your Project <ArrowRight className="size-4 text-coral" />
              </a>
              <a className="inline-flex items-center border border-border bg-background px-5 py-3 text-sm font-bold transition-colors hover:border-coral hover:text-coral" href="#services">
                Explore Our Work
              </a>
            </div>

            <div className="mt-11 grid border border-border bg-border sm:grid-cols-3 sm:gap-px">
              {proof.map((item) => (
                <div className="bg-background px-4 py-4" key={item.label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral">{item.label}</p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {["Strategy", "Design", "Delivery"].map((item) => (
                <span className="inline-flex items-center gap-2 border border-coral/40 px-3 py-2 text-xs font-bold" key={item}>
                  <span className="size-1.5 bg-coral" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden border-l border-border lg:col-span-1 lg:block lg:h-[500px]" />

          <aside className="panel-enter bg-brand p-7 text-brand-foreground lg:col-span-4 lg:p-8" aria-labelledby="capabilities-title">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">Digital capability</p>
            <h2 id="capabilities-title" className="mt-2 text-2xl font-extrabold">Built to move fast.</h2>
            <ul className="mt-7 divide-y divide-brand-foreground/10">
              {services.map((service, index) => (
                <li className="group flex items-start gap-4 py-4" key={service}>
                  <span className="pt-0.5 text-xs font-bold text-coral">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold leading-snug transition-transform group-hover:translate-x-1">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-brand-foreground/10 pt-5 text-[11px] text-brand-foreground/60">
              <span className="size-1.5 bg-coral" />
              Strategy, design and engineering in one team
            </div>
          </aside>
        </section>

        <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex" aria-label="Page sections">
          <span className="vertical-label text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">On this page</span>
          <div className="flex flex-col gap-2.5">
            <a href="#top" aria-label="Introduction" className="size-2 bg-coral" />
            <a href="#services" aria-label="Services" className="size-2 border border-foreground/30 bg-background" />
            <a href="#about" aria-label="About" className="size-2 border border-foreground/30 bg-background" />
            <a href="#contact" aria-label="Contact" className="size-2 border border-foreground/30 bg-background" />
          </div>
        </aside>

        <section id="services" className="border-y border-border bg-secondary/80">
          <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 py-10 sm:px-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">What we do</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">One technology partner. Multiple capabilities.</h2>
            </div>
            <a className="inline-flex items-center gap-2 self-start text-sm font-bold text-primary md:self-auto" href="#contact">Explore all services <ArrowRight className="size-4" /></a>
          </div>
        </section>

        <div id="about" className="sr-only">Who we are</div>
        <div id="testimonials" className="sr-only">Testimonials</div>
        <div id="contact" className="sr-only">Contact Netgenix</div>
      </main>
    </div>
  );
}