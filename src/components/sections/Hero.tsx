import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Web corporativa que convierte",
    desc: "Diseño sobrio, rápido y orientado a captación: contacto, WhatsApp, reservas o venta.",
  },
  {
    title: 'RGPD operativo (no "papel mojado")',
    desc: "Textos legales, consentimiento, formularios, registro básico y plantillas para tu día a día.",
  },
  {
    title: "Automatización y soporte",
    desc: "Reducimos tareas repetitivas con herramientas simples: emails, formularios, CRM y flujos.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselLabelId = useId();
  const slideRegionId = useId(); // para aria-controls
  const slideTitleId = useId(); // para aria-labelledby del slide actual

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

  return (
    <header
      id="top"
      role="banner"
      aria-label="Presentación de Impulvia"
      className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Capa decorativa: que el lector de pantalla la ignore */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent to-white pointer-events-none"
      />

      <div className="max-w-4xl px-6 relative z-10">
        <p className="sr-only">
          Impulvia: consultoría digital. Web profesional y cumplimiento RGPD.
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight leading-tight">
          Web profesional + cumplimiento RGPD.
          <br />
          <span className="bg-linear-to-r from-orange-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Sin humo. Con método.
          </span>
        </h1>

        <p className="mt-8 text-xl text-center text-slate-300 max-w-2xl mx-auto">
          Somos un equipo especializado en desarrollo web y apoyo en protección de datos con plantillas,
          formularios y procesos listos para operar. Ideal si quieres vender más y dormir tranquilo.
        </p>

        {/* Acciones principales */}
        <nav className="mt-10 flex flex-wrap gap-4 justify-center" aria-label="Acciones principales">
          <a href="#contact">
            <Button>Solicitar diagnóstico</Button>
          </a>
          <a href="/servicios">
            <Button variant="secondary">Ver servicios</Button>
          </a>
        </nav>

        {/* Servicios (Carrusel) */}
        <section className="mt-16 max-w-2xl mx-auto pb-20" aria-labelledby={carouselLabelId}>
          <h2 id={carouselLabelId} className="text-2xl font-semibold mb-8 text-center">
            Nuestros servicios
          </h2>

          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Carrusel de servicios"
          >
            <Card
              regionId={slideRegionId}
              titleId={slideTitleId}
              title={services[currentSlide].title}
              description={services[currentSlide].desc}
              currentIndex={currentSlide}
              total={services.length}
            />

            {/* Navegación del carrusel */}
            <div className="mt-6 flex items-center justify-between" aria-label="Controles del carrusel">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Servicio anterior"
                aria-controls={slideRegionId}
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Paginación: es una lista de botones */}
              <ol className="flex gap-2" aria-label="Seleccionar servicio">
                {services.map((service, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <li key={service.title}>
                      <button
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition ${
                          isActive ? "bg-orange-500" : "bg-white/30"
                        }`}
                        aria-label={`Ir al servicio ${index + 1}: ${service.title}`}
                        aria-controls={slideRegionId}
                        aria-current={isActive ? "true" : undefined}
                      />
                    </li>
                  );
                })}
              </ol>

              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Servicio siguiente"
                aria-controls={slideRegionId}
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
