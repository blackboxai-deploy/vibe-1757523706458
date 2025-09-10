import Header from '@/components/Header';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Formal pero Impactante */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-green-50"></div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="formal-gradient-text block">
                      Transformación Integral
                    </span>
                    <span className="text-brand-earth block mt-2">
                      Estilo de Vida Keto
                    </span>
                    <span className="font-script text-brand-coral text-3xl lg:text-4xl block mt-1">
                      + Creatividad Auténtica
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                    Centro especializado en <strong className="text-brand-forest">transformación integral</strong> que combina 
                    la ciencia nutricional del protocolo ketogénico con técnicas probadas de 
                    <strong className="text-brand-coral"> desarrollo creativo</strong> para lograr 
                    un bienestar auténtico y duradero.
                  </p>
                </div>

                 {/* Valores Profesionales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 professional-card rounded-xl">
                    <div className="text-2xl mb-2">🌱</div>
                    <div className="text-sm font-semibold text-brand-forest">Enfoque Natural</div>
                  </div>
                  <div className="text-center p-4 professional-card rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-semibold text-brand-forest">Métodos Personalizados</div>
                  </div>
                  <div className="text-center p-4 professional-card rounded-xl">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-semibold text-brand-forest">Transformación Auténtica</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/servicios"
                    className="px-8 py-4 organic-accent text-white formal-button text-center font-semibold"
                  >
                    🌱 Explorar Servicios
                  </Link>
                  <Link
                    href="/tips"
                    className="px-8 py-4 border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white formal-button text-center font-semibold"
                  >
                    💡 Ver Tips
                  </Link>
                </div>
              </div>

               {/* Hero Design - Abstracto */}
              <div className="relative">
                <div className="professional-card rounded-2xl overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0011bf9d-2c0c-4876-9fad-c36a5146f033.png"
                    alt="Diseño orgánico representando transformación keto y creatividad" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 professional-card rounded-xl p-4 text-center">
                  <div className="text-2xl">🌿</div>
                  <div className="text-xs text-gray-600 font-semibold">100% Natural</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Formal */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold formal-gradient-text mb-4">
                Servicios Especializados
              </h2>
              <div className="section-divider max-w-24 mx-auto"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programas integrales diseñados para tu transformación completa
              </p>
            </div>

             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Ebooks Premium */}
              <div className="professional-card rounded-2xl p-8 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 organic-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-4">
                  Ebooks Premium
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Guías especializadas y recursos digitales para tu transformación ketogénica y desarrollo creativo profesional.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-forest">$29.99</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                  
                   {/* Opciones de Compra */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white formal-button py-3 flex items-center justify-center space-x-3">
                    <span>💳</span>
                    <span>Pagar con PayPal</span>
                  </button>
                  
                  <button className="w-full organic-accent text-white formal-button py-3 mt-3">
                    🛒 Ver en Hotmart
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    ✓ Garantía 30 días
                  </span>
                </div>
              </div>

               {/* Tips Gratuitos */}
              <div className="professional-card rounded-2xl p-8 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-brand-sage rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-4">
                  Tips Especializados
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Accede a consejos prácticos, recetas keto, técnicas creativas y contenido de valor completamente gratuito.
                </p>
                <div className="text-center">
                  <Link
                    href="/tips"
                    className="inline-block px-6 py-3 bg-brand-sage text-white formal-button"
                  >
                    💡 Ver Tips Gratis
                  </Link>
                </div>
              </div>

 
            </div>
          </div>
        </section>

        {/* About Section - Professional */}
        <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold formal-gradient-text mb-8">
              Enfoque Integral y Personalizado
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-20 h-20 organic-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl text-white">🥑</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-forest">
                  Nutrición Ketogénica
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protocolos científicamente respaldados para optimizar tu metabolismo y energía natural.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-20 h-20 earth-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl text-white">🎨</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-forest">
                  Desarrollo Creativo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Técnicas profesionales para liberar y canalizar tu potencial creativo hacia objetivos específicos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-20 h-20 bg-brand-sage rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-forest">
                  Bienestar Integral
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Equilibrio holístico que integra salud física, claridad mental y expresión creativa.
                </p>
              </div>
            </div>

            <div className="professional-card rounded-2xl p-8">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "La verdadera transformación ocurre cuando alineamos nuestro cuerpo, mente y espíritu creativo 
                hacia un propósito común de bienestar auténtico."
              </blockquote>
              <cite className="font-script text-brand-coral text-xl">
                — Mi Vida Keto ALMA CREATIVA
              </cite>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 bg-brand-forest text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para tu Transformación?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Comienza hoy tu viaje hacia una versión más saludable, creativa y auténtica de ti mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                href="/contacto"
                className="px-8 py-4 bg-white text-brand-forest formal-button font-semibold hover:bg-brand-cream"
              >
                💬 Contactar
              </Link>
              <Link
                href="/servicios"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-forest formal-button font-semibold"
              >
                🌱 Ver Servicios
              </Link>
            </div>

            {/* Social Links Profesionales */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-lg mb-6 opacity-90">Conecta conmigo:</p>
              <div className="flex justify-center space-x-8">
                {[
                  { name: 'Telegram', icon: '📱', url: 'https://t.me/mividaketoalmacreativa' },
                  { name: 'Instagram', icon: '📸', url: 'https://instagram.com/mividaketoalmacreativa' },
                  { name: 'Facebook', icon: '👥', url: 'https://facebook.com/mividaketoalmacreativa' },
                  { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@mividaketoalmacreativa' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-stone text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">Mi Vida Keto ALMA CREATIVA</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Centro especializado en transformación integral a través del estilo de vida ketogénico 
                y desarrollo creativo auténtico.
              </p>
            </div>

            {/* Quick Links */}
             <div className="space-y-4">
              <h3 className="font-semibold">Navegación</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/servicios" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                  Servicios
                </Link>
                <Link href="/tips" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                  Tips
                </Link>
                <Link href="/sobre-mi" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                  Sobre Mí
                </Link>
                <Link href="/contacto" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Contact */}
              <div className="space-y-4">
              <h3 className="font-semibold">Contacto</h3>
              <div className="text-sm opacity-80 space-y-2">
                <p>📧 Consultas sobre ebooks</p>
                <p>📱 Telegram para tips diarios</p>
                <p>💬 Preguntas y colaboraciones</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-70">
              © 2024 Mi Vida Keto ALMA CREATIVA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}