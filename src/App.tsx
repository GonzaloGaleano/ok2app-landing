import React from "react";
import { ArrowRight, CheckCircle2, ExternalLink, Layers3, Rocket, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Petlify",
    status: "Activo / En evolución",
    description: "Seguimiento y fidelización veterinaria para clínicas que quieren ordenar pacientes, vacunas, recordatorios y clientes.",
    href: "https://petlify.io",
    accent: "from-cyan-400/20 to-blue-500/20",
  },
  {
    name: "DojoFlow",
    status: "En desarrollo",
    description: "Gestión moderna para academias de artes marciales: alumnos, pagos, asistencia, eventos y progreso.",
    href: "#",
    accent: "from-orange-400/20 to-red-500/20",
  },
  {
    name: "Nuevos productos",
    status: "Próximamente",
    description: "Herramientas SaaS enfocadas en automatización, operaciones y crecimiento para negocios reales.",
    href: "#",
    accent: "from-lime-400/20 to-emerald-500/20",
  },
];

const principles = [
  {
    icon: Workflow,
    title: "Operación real",
    text: "Diseñamos software para resolver tareas concretas del día a día, no para verse complejo.",
  },
  {
    icon: Zap,
    title: "Automatización útil",
    text: "Menos trabajo manual, menos errores y más tiempo para enfocarse en hacer crecer el negocio.",
  },
  {
    icon: Layers3,
    title: "Ecosistema SaaS",
    text: "Cada producto puede crecer por separado, pero comparte una visión común: herramientas simples, modernas y escalables.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza y claridad",
    text: "Interfaces limpias, mensajes directos y procesos fáciles de entender para equipos pequeños y medianos.",
  },
];

const stats = [
  { value: "SaaS", label: "productos digitales" },
  { value: "B2B", label: "enfoque en negocios" },
  { value: "PY", label: "visión paraguaya / latam" },
];

export default function Ok2AppLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06070b] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[520px] rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img src="/ok2app-logo-highlight.png" alt="ok2app" className="h-9" />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          <a href="#productos" className="transition hover:text-white">Productos</a>
          <a href="#vision" className="transition hover:text-white">Visión</a>
          <a href="#metodo" className="transition hover:text-white">Cómo trabajamos</a>
        </nav>

        <a
          href="#productos"
          className="hidden rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 md:inline-flex"
        >
          Explorar
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10">
            <Sparkles className="h-4 w-4" />
            Herramientas modernas para negocios reales
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Software SaaS para ordenar, automatizar y hacer crecer negocios.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            OK2APP es un estudio de productos digitales enfocado en crear plataformas simples, modernas y útiles para operaciones reales: veterinarias, academias, comercios y nuevos negocios en crecimiento.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#productos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Ver productos
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conocer la visión
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-400/20 via-white/5 to-lime-300/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0d14] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">OK2APP Core</p>
                  <p className="mt-1 text-xl font-semibold">Panel de productos</p>
                </div>
                <div className="rounded-full bg-lime-300/15 px-3 py-1 text-xs font-medium text-lime-200">Online</div>
              </div>

              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="mt-1 text-xs text-cyan-100/60">{product.status}</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-lime-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Rocket className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm font-medium">Lanzamiento rápido</p>
                  <p className="mt-1 text-xs text-white/45">Validar, mejorar y escalar.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Workflow className="h-5 w-5 text-lime-300" />
                  <p className="mt-3 text-sm font-medium">Procesos claros</p>
                  <p className="mt-1 text-xs text-white/45">Menos fricción operativa.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="productos" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200/70">Ecosistema</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Productos que nacen de problemas concretos.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/55">
            Cada plataforma apunta a un nicho específico, pero todas comparten una misma base: claridad, automatización y experiencia moderna.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${product.accent} blur-2xl`} />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">{product.status}</div>
                  <ExternalLink className="h-4 w-4 text-white/35 transition group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{product.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="vision" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-lime-200/70">Visión</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">No construimos software genérico. Construimos herramientas para operar mejor.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-white/60">
              <p>
                OK2APP existe para convertir problemas operativos en productos digitales simples, rápidos y sostenibles. La meta no es agregar complejidad, sino reducirla.
              </p>
              <p>
                La marca funciona como paraguas para lanzar, probar y escalar SaaS orientados a negocios paraguayos y latinoamericanos que necesitan modernizarse sin procesos pesados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200/70">Método</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Principios para crear productos útiles.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center md:p-14">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Una marca para lanzar productos, no solo proyectos.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
              OK2APP reúne tecnología, diseño y operación para crear plataformas que puedan crecer con sus clientes.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:gozpellz@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                Contactar
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-6 py-8 text-sm text-white/45 md:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/ok2app-logo.png" alt="ok2app" className="h-6 opacity-60" />
          <p>© {new Date().getFullYear()} OK2APP. SaaS Studio.</p>
        </div>
        <p>Construyendo herramientas modernas para negocios reales.</p>
      </footer>
    </main>
  );
}
