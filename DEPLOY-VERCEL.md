# Vercel deployment instructions for CRM-Leads-JDTP

1. **Instala Vercel CLI (opcional, recomendado para pruebas locales):**
   npm install -g vercel

2. **Autentícate en Vercel:**
   vercel login

3. **Despliega el proyecto:**
   vercel --prod

4. **Variables de entorno:**
   - Si usas variables en `.env`, configúralas en el dashboard de Vercel (Project Settings > Environment Variables).
   - Ejemplo: VITE_FIREBASE_API_KEY, etc.

5. **Configuración SPA:**
   - El archivo `vercel.json` ya incluye rewrites para que el enrutamiento de React funcione correctamente (SPA fallback).

6. **Directorio de salida:**
   - Vercel usará automáticamente la carpeta `dist` generada por Vite.

7. **Preview y producción:**
   - Cada push a main crea un preview.
   - Usa `vercel --prod` para producción.

8. **Soporte:**
   - Documentación oficial: https://vercel.com/docs

¡Listo para desplegar 🚀!
