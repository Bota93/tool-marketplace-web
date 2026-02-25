import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-700 bg-slate-950 py-10 text-slate-300">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Impulvia. Todos los derechos reservados.
            </div>
            <div className="text-sm text-slate-400">
              Consultoría digital para pymes
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Navegación</h3>
            <div className="flex gap-6 text-sm text-slate-400">
              <a className="hover:text-white transition" href="/">Inicio</a>
              <a className="hover:text-white transition" href="/servicios">Servicios</a>
              <a className="hover:text-white transition" href="/ofertas">Ofertas</a>
              <a className="hover:text-white transition" href="/contacto">Contacto</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <div className="flex gap-6 text-sm text-slate-400">
              <a className="hover:text-white transition" href="#">Privacidad</a>
              <a className="hover:text-white transition" href="#">Términos</a>
              <a className="hover:text-white transition" href="#">Soporte</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
