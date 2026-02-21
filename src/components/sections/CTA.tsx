import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          ¿Hablamos?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Agenda una llamada sin compromiso para conocernos y evaluar tu proyecto.
          Primera sesión: gratuita.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contact@impulvia.com" className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a href="https://wa.me/YOUR_WHATSAPP" className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition border border-blue-400">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-blue-100">
          O rellena el formulario de diagnóstico. Nos pondremos en contacto en 24 horas.
        </p>
      </div>
    </Section>
  );
}
