import Header from '@/components/Header';
import Link from 'next/link';

const ebooks = [
   {
    id: '1',
    title: 'Vida Keto Real: Lo Que Nadie Te Dice',
    subtitle: 'La Verdad Sobre el Estilo de Vida Keto',
    description: 'Descubre la realidad del estilo de vida ketogénico sin filtros. Todo lo que realmente necesitas saber para comenzar y mantener keto de manera sostenible y realista.',
    price: 9.99,
    features: [
      'La verdad sobre los primeros días en keto',
      'Errores comunes que nadie menciona', 
      'Recetas simples y realistas para principiantes',
      'Cómo mantener keto en situaciones sociales',
      'Tips prácticos para el éxito a largo plazo'
    ],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5cfa4839-e76d-4e73-8af2-cb56d98e05fb.png',
    paypalLink: 'https://www.paypal.com/paypalme/mividaketoalmacreativa/9.99',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/vida-keto-real'
  },
  {
    id: '2', 
    title: 'Desarrollo Creativo Sistemático',
    subtitle: 'Metodología de Creatividad Profesional',
    description: 'Sistema estructurado para desarrollar habilidades creativas aplicables en contextos profesionales y personales, con ejercicios prácticos y técnicas validadas.',
    price: 39.99,
    features: [
      'Evaluación inicial de potencial creativo',
      'Técnicas de brainstorming profesional',
      'Desarrollo de proyectos creativos estructurados', 
      'Superación de bloqueos creativos',
      'Portfolio de desarrollo creativo'
    ],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c257214-ea60-4f2d-b354-8a88d92033af.png',
    paypalLink: 'https://www.paypal.com/paypalme/mividaketoalmacreativa/39.99',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/desarrollo-creativo'
  },
  {
    id: '3',
    title: 'Aprendizaje de Idiomas Integrado',
    subtitle: 'Método Keto-Lingüístico',
    description: 'Metodología única que combina principios de neuroplasticidad ketogénica con técnicas avanzadas de adquisición de idiomas para acelerar el aprendizaje.',
    price: 34.99,
    features: [
      'Base neurocientífica del método',
      'Técnicas de memorización optimizada',
      'Práctica conversacional estructurada',
      'Recursos multimediales integrados',
      'Sistema de progreso medible'
    ],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1af13805-1b0f-4771-abd3-6909715e5c85.png',
    paypalLink: 'https://www.paypal.com/paypalme/mividaketoalmacreativa/34.99',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/keto-linguistico'
  }
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-brand-cream via-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold formal-gradient-text mb-6">
              Servicios Profesionales
            </h1>
            <div className="section-divider max-w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Programas especializados diseñados para profesionales que buscan transformación 
              integral a través de metodologías probadas y enfoque científico.
            </p>
          </div>
        </section>

        {/* Ebooks Premium */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold formal-gradient-text mb-4">
                Recursos Digitales Premium
              </h2>
              <p className="text-lg text-gray-600">
                Guías especializadas con metodología profesional y resultados medibles
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {ebooks.map((ebook) => (
                <div key={ebook.id} className="professional-card rounded-2xl overflow-hidden group">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={ebook.image}
                      alt={ebook.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl font-bold">${ebook.price}</div>
                      <div className="text-sm opacity-80">USD</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-brand-forest mb-2">
                      {ebook.title}
                    </h3>
                    <p className="text-brand-sage font-medium mb-4">
                      {ebook.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {ebook.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-forest mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {ebook.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="text-brand-sage mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                     {/* Purchase Options */}
                    <div className="space-y-3">
                      <a
                        href={ebook.paypalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white formal-button py-3 flex items-center justify-center space-x-3"
                      >
                        <span>💳</span>
                        <span>Pagar con PayPal</span>
                      </a>
                      
                      <a
                        href={ebook.hotmartLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full organic-accent text-white formal-button py-3 text-center block"
                      >
                        🛒 Comprar en Hotmart
                      </a>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                        ✓ Garantía profesional 30 días
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* Tips y Comunidad Section */}
        <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold formal-gradient-text mb-8">
              Conecta y Aprende
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="professional-card rounded-2xl p-8">
                <div className="w-16 h-16 bg-brand-sage rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-4">
                  Tips Especializados
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Contenido práctico y valioso sobre nutrición keto, desarrollo creativo y bienestar integral.
                </p>
                <Link
                  href="/tips"
                  className="inline-block px-6 py-3 bg-brand-sage text-white formal-button"
                >
                  💡 Ver Tips
                </Link>
              </div>
              
              <div className="professional-card rounded-2xl p-8">
                <div className="w-16 h-16 earth-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-4">
                  Únete a la Comunidad
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Recibe tips diarios, motivación y conecta con otros que están en su proceso de transformación.
                </p>
                <a
                  href="https://t.me/mividaketoalmacreativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 earth-accent text-white formal-button"
                >
                  📱 Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}