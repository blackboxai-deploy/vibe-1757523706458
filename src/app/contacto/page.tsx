"use client";

import Header from '@/components/Header';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-brand-cream via-white to-green-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold formal-gradient-text mb-6">
              Contacto Profesional
            </h1>
            <div className="section-divider max-w-24 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Agenda tu consulta especializada para iniciar tu proceso de transformación integral
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="professional-card rounded-2xl p-8">
                 <h2 className="font-serif text-2xl font-bold formal-gradient-text mb-6">
                  Formulario de Contacto
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-forest mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-forest mb-2">
                        Email Profesional *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-forest mb-2">
                      Teléfono (Opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-brand-forest mb-2">
                      Servicio de Interés *
                    </label>
                     <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent"
                    >
                      <option value="">Seleccionar tema de consulta</option>
                      <option value="protocolo-keto">Consulta sobre Protocolo Keto</option>
                      <option value="desarrollo-creativo">Pregunta sobre Desarrollo Creativo</option>
                      <option value="metodo-linguistico">Información del Método Lingüístico</option>
                      <option value="colaboracion">Oportunidad de Colaboración</option>
                      <option value="consulta-general">Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-forest mb-2">
                      Mensaje Detallado *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent resize-vertical"
                       placeholder="Escribe tu mensaje, pregunta o consulta. Cuéntame cómo puedo ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 formal-button font-semibold text-white ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'organic-accent hover:bg-brand-moss'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando solicitud...
                      </span>
                     ) : (
                      '📧 Enviar Mensaje'
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">✅ Solicitud enviada correctamente</p>
                        <p className="text-green-700 text-sm mt-1">
                        Te responderé pronto a tu mensaje.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">❌ Error al enviar</p>
                      <p className="text-red-700 text-sm mt-1">
                        Por favor, intenta nuevamente o contáctame directamente por Telegram.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="professional-card rounded-2xl p-8">
                   <h3 className="font-serif text-2xl font-bold formal-gradient-text mb-6">
                    Formas de Contacto
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 organic-accent rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">📧</span>
                      </div>
                       <div>
                        <h4 className="font-semibold text-brand-forest">Email Profesional</h4>
                        <p className="text-gray-600 text-sm">
                          Para consultas sobre ebooks y preguntas especializadas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">📱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-forest">Telegram</h4>
                        <p className="text-gray-600 text-sm">
                          Consultas rápidas y tips diarios especializados
                        </p>
                        <a href="https://t.me/mividaketoalmacreativa" 
                           className="text-blue-600 text-sm hover:underline">
                          @mividaketoalmacreativa
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">📸</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-forest">Instagram</h4>
                        <p className="text-gray-600 text-sm">
                          Contenido visual e inspiración diaria
                        </p>
                        <a href="https://instagram.com/mividaketoalmacreativa" 
                           className="text-pink-600 text-sm hover:underline">
                          @mividaketoalmacreativa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* Métodos de Contacto */}
                <div className="professional-card rounded-2xl p-6">
                  <h4 className="font-semibold text-brand-forest mb-4">📞 Métodos de Contacto</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-sage">📧</span>
                      <span className="text-gray-600">Formulario profesional para consultas detalladas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-sage">📱</span>
                      <span className="text-gray-600">Telegram para preguntas rápidas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-sage">🎯</span>
                      <span className="text-gray-600">Coaching personalizado mediante cita previa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}