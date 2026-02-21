import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Impulvia. Todos los derechos reservados.
            </div>
            <div className="text-sm text-zinc-600">
              Consultoría digital para pymes
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-zinc-900">Navegación</h3>
            <div className="flex gap-6 text-sm text-zinc-700">
              <a className="hover:text-zinc-900" href="/">Inicio</a>
              <a className="hover:text-zinc-900" href="/servicios">Servicios</a>
              <a className="hover:text-zinc-900" href="/ofertas">Ofertas</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-zinc-900">Legal</h3>
            <div className="flex gap-6 text-sm text-zinc-700">
              <a className="hover:text-zinc-900" href="#">Privacidad</a>
              <a className="hover:text-zinc-900" href="#">Términos</a>
              <a className="hover:text-zinc-900" href="#">Soporte</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}