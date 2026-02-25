import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, Phone } from "lucide-react";

const channels = [
  {
    title: "Email",
    detail: "contact@impulvia.com",
    href: "mailto:contact@impulvia.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    detail: "Respuesta en horario laboral",
    href: "https://wa.me/YOUR_WHATSAPP",
    icon: MessageCircle,
  },
  {
    title: "Llamada",
    detail: "+34 600 000 000",
    href: "tel:+34600000000",
    icon: Phone,
  },
];

export function ContactPage() {
  return (
    <div className="min-h-dvh bg-slate-950">
      <Header />
      <main>
        <Section className="bg-slate-900 text-white pt-20 pb-12">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Contacto</h1>
              <p className="mt-4 text-lg text-slate-300">
                Cuéntanos tu proyecto y te respondemos con un diagnóstico inicial en menos de 24h.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="bg-white text-slate-900 py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <form className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold">Formulario de diagnóstico</h2>
                <p className="mt-2 text-slate-600">
                  Indica tus objetivos y situación actual. Cuanto más contexto, mejor propuesta.
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Nombre y empresa
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                      Servicio principal
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    >
                      <option>Web corporativa</option>
                      <option>RGPD operativo</option>
                      <option>Automatización</option>
                      <option>Pack completo</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      ¿Qué necesitas resolver?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">Sin compromiso. Sin spam.</p>
                  <Button type="submit">Enviar diagnóstico</Button>
                </div>
              </form>

              <div className="space-y-5">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.title}
                      href={channel.href}
                      className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-orange-100 p-3">
                          <Icon className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{channel.title}</h3>
                          <p className="mt-1 text-slate-600">{channel.detail}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}

                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
                  <h3 className="text-lg font-semibold">Cómo trabajamos</h3>
                  <ol className="mt-4 space-y-3 text-sm text-slate-300">
                    <li>1. Revisamos tu formulario y objetivos.</li>
                    <li>2. Te enviamos un diagnóstico inicial.</li>
                    <li>3. Agendamos una llamada para el plan final.</li>
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
