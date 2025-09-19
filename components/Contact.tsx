import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">Contacto y Ubicación</h2>
          <p className="mt-4 text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
            Estamos ansiosos por recibirte. Encontranos en el corazón de las sierras.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <ContactInfoItem icon="location" title="Dirección" text="Av. San Martín 490, X5152 Villa Carlos Paz, Córdoba" />
            <ContactInfoItem icon="phone" title="WhatsApp" text="+54 9 351 123 4567" link="https://wa.me/5493511234567" />
            <ContactInfoItem icon="mail" title="Email" text="info@byd-carlospaz.com.ar" link="mailto:info@byd-carlospaz.com.ar" />
            <ContactInfoItem icon="clock" title="Horarios de Atención (Desde 30/11/2024)" text="Lunes a Viernes: 9:00 - 18:00 | Sábados: 9:00 - 13:00" />
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 dark:bg-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.5!2d-64.531776!3d-31.423824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sAv.%20San%20Mart%C3%ADn%20490%2C%20X5152%20Villa%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Concesionario BYD - Av. San Martín 490, Villa Carlos Paz"
                className="w-full h-full"
              ></iframe>
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md">
                <a 
                  href="https://www.google.com/maps/search/Av.+San+Mart%C3%ADn+490,+X5152+Villa+Carlos+Paz,+C%C3%B3rdoba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Abrir en Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem: React.FC<{ icon: string, title: string, text: string, link?: string }> = ({ icon, title, text, link }) => {
  // FIX: Use React.JSX.Element to explicitly reference the type from the React namespace.
  const icons: { [key: string]: React.JSX.Element } = {
    location: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
    phone: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.58-1.353l-3.46-3.46a2.25 2.25 0 00-3.182 0l-1.365 1.365a1.125 1.125 0 01-1.59 0l-4.82-4.82a1.125 1.125 0 010-1.59l1.365-1.365a2.25 2.25 0 000-3.182L5.61 2.83a2.25 2.25 0 00-1.353-.58H2.25A2.25 2.25 0 000 4.5v2.25z" />,
    mail: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  };
  
  const content = link ? <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{text}</a> : <span>{text}</span>;

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{icons[icon]}</svg>
      </div>
      <div>
        <h4 className="text-lg font-bold text-secondary dark:text-white">{title}</h4>
        <p className="text-text-light dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
};

export default Contact;