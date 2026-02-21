import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const packages = [
  {
    id: "startup",
    name: "Startup",
    price: "2,500€",
    description: "Perfecto para quien empieza",
    incluye: [
      "Web corporativa (5 páginas)",
      "RGPD básico (políticas + formularios)",
      "Integración WhatsApp",
      "Email de bienvenida",
      "Soporte 3 meses"
    ],
    notIncluye: [
      "CRM integrado",
      "Automatizaciones avanzadas",
      "Soporte premium"
    ],
    popular: false
  },
  {
    id: "professional",
    name: "Professional",
    price: "4,500€",
    description: "La opción más popular",
    incluye: [
      "Web corporativa + tienda (10-15 páginas)",
      "RGPD completo",
      "CRM ligero integrado",
      "Automatizaciones email",
      "Soporte 6 meses + mantenimiento",
      "Analytics y reportes",
      "Formación equipo"
    ],
    notIncluye: [
      "Flujos complejos personalizados",
      "Integraciones externas ilimitadas"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Personalizado",
    description: "Solución completa y personalizada",
    incluye: [
      "Todo incluido en Professional",
      "Flujos de trabajo personalizados",
      "Integraciones ilimitadas",
      "Soporte premium (prioridad 24h)",
      "Consultoría estratégica",
      "Mantenimiento no limitado",
      "Evolución continua"
    ],
    notIncluye: [],
    popular: false
  }
];

export function OffersPage() {
  return (
    <div className="min-h-dvh bg-slate-950">
      <Header />
      <main>
        <Section className="bg-slate-900 text-white pt-20 pb-12">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Nuestras Ofertas y Paquetes
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Elige el plan que mejor se adapte a tu negocio. Todos incluyen soporte y revisiones.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="bg-white text-slate-900 py-20">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl border-2 overflow-hidden transition ${
                    pkg.popular
                      ? "border-blue-600 bg-blue-50 shadow-xl"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 text-center text-sm font-semibold">
                      ★ MÁS POPULAR ★
                    </div>
                  )}
                  
                  <div className={`p-8 ${pkg.popular ? "pt-16" : ""}`}>
                    <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 text-sm mb-6">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                      {pkg.price !== "Personalizado" && (
                        <span className="text-slate-600 ml-2">one-time</span>
                      )}
                    </div>
                    
                    <a href="#contact" className="w-full">
                      <Button 
                        variant={pkg.popular ? "primary" : "secondary"}
                        className="w-full"
                      >
                        {pkg.price === "Personalizado" ? "Solicitar presupuesto" : "Contratar"}
                      </Button>
                    </a>

                    <div className="mt-8 space-y-4">
                      <h4 className="font-semibold text-slate-900">Incluye:</h4>
                      <ul className="space-y-3">
                        {pkg.incluye.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {pkg.notIncluye.length > 0 && (
                        <>
                          <h4 className="font-semibold text-slate-900 mt-6">No incluye:</h4>
                          <ul className="space-y-2 text-slate-500 text-sm">
                            {pkg.notIncluye.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="text-slate-400">−</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-slate-50 text-slate-900 py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Preguntas frecuentes sobre pricing</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">¿Qué incluye el soporte?</h3>
                  <p className="text-slate-600">Actualizaciones, mantenimiento preventivo, corrección de errores y asesoría técnica dentro de los plazos especificados.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">¿Hay costes ocultos?</h3>
                  <p className="text-slate-600">No. El presupuesto incluye absolutamente todo lo especificado. Si hay cambios al proyecto, se negocia antes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">¿Puedo upgradear después?</h3>
                  <p className="text-slate-600">Sí. Puedes comenzar con Startup y evolucionar a Professional en cualquier momento. Solo pagas la diferencia.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">¿Incluye formación?</h3>
                  <p className="text-slate-600">Sí, en Professional y Enterprise. En Startup, la entrega incluye documentación básica y una sesión de formación.</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-blue-600 text-white py-16">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">¿No estás seguro cuál es tu mejor opción?</h2>
              <p className="mb-8 text-blue-100">
                Agenda una llamada. Analizamos tu proyecto sin compromiso.
              </p>
              <a href="#contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Solicitar consulta
                </Button>
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
