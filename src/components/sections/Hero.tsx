import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <Section className="bg-slate-950 text-white pt-24 pb-20" >
      <div id="top" className="max-w-3xl">
        <p className="text-sm font-medium text-slate-300">
          Impulvia · Consultoría digital para pymes
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Web profesional + cumplimiento RGPD.
          <br />
          Sin humo. Con método.
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Somos un equipo de 2: desarrollo web y apoyo en protección de datos con plantillas,
          formularios y procesos listos para operar. Ideal si quieres vender más y dormir tranquilo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact"><Button>Solicitar diagnóstico</Button></a>
          <a href="/servicios"><Button variant="secondary">Ver servicios</Button></a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold text-white">Ejecución</div>
            <div className="mt-1">Diseño + desarrollo + despliegue</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold text-white">Cumplimiento</div>
            <div className="mt-1">RGPD: formularios y documentación</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold text-white">Soporte</div>
            <div className="mt-1">Mantenimiento y evolución</div>
          </div>
        </div>
      </div>
    </Section>
  );
}