import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/brand/logo_impulvia.jpeg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Impulvia" className="h-12 w-auto" />
            <span className="sr-only">Impulvia</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a className="hover:text-white transition" href="/">Inicio</a>
            <a className="hover:text-white transition" href="/servicios">Servicios</a>
            <a className="hover:text-white transition" href="/ofertas">Ofertas</a>
            <a className="hover:text-white transition" href="#contact">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact">
              <Button>Agenda una llamada</Button>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}