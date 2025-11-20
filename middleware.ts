// Copia este código dentro del nuevo archivo middleware.ts

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Opcional: Define las rutas que Clerk debe proteger/inspeccionar
export const config = {
  // Asegura que las rutas api/trpc estén protegidas y excluye archivos estáticos.
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};