import Header from '@/components/Header';

const tips = [
  {
    id: '1',
    title: 'Inicio en Keto: Primeros Pasos',
    category: 'Nutrición Keto',
    excerpt: 'Aprende los fundamentos básicos para comenzar tu transformación ketogénica de manera segura y efectiva.',
    content: `
      El protocolo ketogénico requiere una transición gradual y consciente. Estos son los pasos esenciales:
      
      1. **Reducción gradual de carbohidratos**: Comienza eliminando azúcares procesados
      2. **Incrementa grasas saludables**: Aguacate, aceite de oliva, nueces
      3. **Proteína moderada**: Calcula según tu peso corporal
      4. **Hidratación adecuada**: Aumenta el consumo de agua
      5. **Electrolitos**: Magnesio, potasio y sodio son esenciales
    `,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d26a7bc4-fb69-439f-b201-0784607647ef.png',
    date: '2024-01-15',
    readTime: 5
  },
  {
    id: '2',
    title: 'Creatividad y Alimentación: La Conexión',
    category: 'Desarrollo Creativo',
    excerpt: 'Descubre cómo la nutrición ketogénica puede potenciar tu creatividad y claridad mental para proyectos artísticos.',
    content: `
      La relación entre nutrición y creatividad es más profunda de lo que imaginamos:
      
      1. **Cetosis y función cerebral**: Mayor producción de BDNF
      2. **Estabilidad energética**: Sin picos de glucosa
      3. **Reducción de inflamación**: Mejor conexión neuronal
      4. **Tiempo de flow**: Estados de concentración profunda
      5. **Proyectos a largo plazo**: Energía sostenida para crear
    `,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20592671-1bb5-429a-98bb-ec12dd7346e9.png',
    date: '2024-01-12',
    readTime: 7
  },
  {
    id: '3',
    title: 'Equilibrio Natural: Mente, Cuerpo y Creatividad',
    category: 'Bienestar Integral',
    excerpt: 'Técnicas holísticas para mantener un equilibrio auténtico entre tu salud física, claridad mental y expresión creativa.',
    content: `
      El bienestar integral requiere atención consciente a múltiples dimensiones:
      
      1. **Rutina matutina**: Meditación y planificación creativa
      2. **Alimentación consciente**: Conexión con los alimentos
      3. **Movimiento natural**: Ejercicio que disfrutes
      4. **Tiempo creativo**: Espacios dedicados a la expresión
      5. **Descanso reparador**: Sueño de calidad para regeneración
    `,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce615f78-1061-4326-bae0-724e95bf0497.png',
    date: '2024-01-10',
    readTime: 6
  },
  {
    id: '4',
    title: 'Planificación de Comidas Keto Semanales',
    category: 'Nutrición Práctica',
    excerpt: 'Sistema práctico para organizar tus comidas ketogénicas de manera eficiente y mantener la consistencia.',
    content: `
      La planificación es clave para el éxito en el protocolo ketogénico:
      
      1. **Domingo de preparación**: Planifica la semana completa
      2. **Lista de compras estratégica**: Ingredientes frescos y de calidad
      3. **Prep básico**: Cortar vegetales y proteínas
      4. **Porciones calculadas**: Macros balanceados por comida
      5. **Opciones de emergencia**: Snacks keto preparados
    `,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d60328f7-fba7-454e-aeeb-2acbf0afe053.png',
    date: '2024-01-08',
    readTime: 8
  }
];

export default function TipsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-brand-cream via-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold formal-gradient-text mb-6">
              Tips y Consejos Especializados
            </h1>
            <div className="section-divider max-w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Contenido valioso y práctico para tu transformación integral. 
              Técnicas probadas, tips nutricionales y estrategias de desarrollo creativo.
            </p>
          </div>
        </section>

        {/* Tips Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {tips.map((tip, index) => (
                <article key={tip.id} className="professional-card rounded-2xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-forest/90 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                          {tip.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <time>{new Date(tip.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                        <span>•</span>
                        <span>{tip.readTime} min de lectura</span>
                      </div>

                      <h2 className="font-serif text-2xl lg:text-3xl font-bold formal-gradient-text mb-4">
                        {tip.title}
                      </h2>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {tip.excerpt}
                      </p>

                      <div className="prose prose-sm text-gray-700 mb-6">
                        {tip.content.split('\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-3 leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">
                          Por <strong className="text-brand-forest">Mi Vida Keto ALMA CREATIVA</strong>
                        </span>
                        <div className="flex space-x-3">
                          <button className="text-brand-sage hover:text-brand-forest transition-colors duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </button>
                          <button className="text-brand-sage hover:text-brand-forest transition-colors duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-cream to-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="professional-card rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-bold formal-gradient-text mb-4">
                ¿Te resultaron útiles estos tips?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Si quieres profundizar en tu transformación con metodología personalizada, 
                explora nuestros servicios profesionales o agenda una consulta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/servicios"
                  className="px-6 py-3 organic-accent text-white formal-button font-semibold"
                >
                  🌱 Ver Servicios
                </a>
                <a
                  href="/contacto"
                  className="px-6 py-3 border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white formal-button font-semibold"
                >
                  💬 Contactar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}