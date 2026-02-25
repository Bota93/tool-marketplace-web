import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { OffersPage } from '@/pages/OffersPage';
import { ContactPage } from '@/pages/ContactPage';

export const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/servicios', element: <ServicesPage /> },
    { path: '/ofertas', element: <OffersPage /> },
    { path: '/contacto', element: <ContactPage /> },
]);
