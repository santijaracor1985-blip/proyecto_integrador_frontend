// app/layout.tsx (EJEMPLO CORREGIDO Y CONSOLIDADO)

import type { Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import "../globals.css";
// import Navbar from "@/components/layout/Navbar"; // Usa esto si tienes un componente Navbar simple

// ... (Metadata e imports de fuentes si los tienes) ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body>
          {/* BARRA DE NAVEGACIÓN Y AUTENTICACIÓN CONSOLIDADA */}
          <header className="flex justify-between items-center p-4 h-16 border-b">
            {/* Contenido de navegación (ej: Links de Inicio, Productos) */}
            <nav className="flex gap-4">
              {/* ASUME que aquí tienes los links de navegación estáticos */}
              {/* <Navbar /> o tus links directamente */}
              {/* Si usaste <Navbar /> antes, vuelve a ponerlo aquí */}
            </nav>

            {/* Lógica de Autenticación de Clerk */}
            <div className="flex gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Iniciar sesión
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Registrarse
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>

          {children} {/* Aquí se renderiza el contenido de las páginas */}
        </body>
      </html>
    </ClerkProvider>
  );
}