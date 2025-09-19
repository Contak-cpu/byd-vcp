
import React, { useState } from 'react';
import { CAR_MODELS } from '../constants';

const PreRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    models: [] as string[],
    terms: false,
    newsletter: true
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!/^\d{10,}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'El teléfono no es válido';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida';
    if (formData.models.length === 0) newErrors.models = 'Seleccione al menos un modelo';
    if (!formData.terms) newErrors.terms = 'Debe aceptar los términos y condiciones';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
        const newModels = checked 
            ? [...prev.models, value]
            : prev.models.filter(m => m !== value);
        return {...prev, models: newModels};
    });
  };

  if (submitted) {
    return (
      <section id="pre-registro" className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/form-register-bg.png" 
            alt="Formulario de registro BYD - Fondo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">¡Gracias por tu registro!</h2>
          <p className="mt-4 text-lg md:text-xl animate-fade-in-down animation-delay-300 max-w-2xl mx-auto">
            Hemos recibido tu información. Un asesor se pondrá en contacto contigo a la brevedad para confirmar los detalles de tu prereserva.
          </p>
        </div>
        <style>{`
          @keyframes fade-in-down {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animate-fade-in-down {
            opacity: 0;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="pre-registro" className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/form-register-bg.png" 
          alt="Formulario de registro BYD - Fondo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">Asegurá tu BYD Hoy</h2>
          <p className="mt-4 text-lg md:text-xl animate-fade-in-down animation-delay-300">
            Completá el formulario para ser de los primeros en Argentina en manejar un BYD. La reserva es de USD $500.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto w-full animate-fade-in-up animation-delay-500">
          <form onSubmit={handleSubmit} noValidate className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6">
          <InputField id="name" name="name" label="Nombre Completo" value={formData.name} onChange={handleChange} error={errors.name} />
          <InputField id="email" name="email" type="email" label="Email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField id="phone" name="phone" type="tel" label="Teléfono (ej: 3511234567)" value={formData.phone} onChange={handleChange} error={errors.phone} />
          <InputField id="city" name="city" label="Ciudad" value={formData.city} onChange={handleChange} error={errors.city} />

          <div>
            <label className="block text-sm font-medium text-text-light dark:text-gray-300 mb-2">Modelo(s) de Interés</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CAR_MODELS.map(model => (
                <CheckboxField key={model.id} id={model.id} name="models" value={model.name} label={model.name} onChange={handleModelChange} />
              ))}
            </div>
            {errors.models && <p className="text-red-500 text-xs mt-1">{errors.models}</p>}
          </div>

          <CheckboxField id="terms" name="terms" checked={formData.terms} onChange={handleChange} label="Acepto los términos y condiciones de la prereserva." error={errors.terms} />
          <CheckboxField id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} label="Quiero recibir noticias y promociones de BYD Argentina." />
          
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 text-lg shadow-md">
            Enviar Pre-Registro
          </button>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animate-fade-in-down, .animate-fade-in-up {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

const InputField: React.FC<{id: string, name: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string, error?: string}> = ({ id, name, label, value, onChange, type = 'text', error }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-light dark:text-gray-300">{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border ${error ? 'border-red-500' : 'border-border dark:border-border-dark'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`} />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const CheckboxField: React.FC<{id: string, name: string, label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, checked?: boolean, value?: string, error?: string}> = ({ id, name, label, onChange, checked, value, error }) => (
    <div className="flex items-start">
        <div className="flex items-center h-5">
            <input id={id} name={name} type="checkbox" checked={checked} value={value} onChange={onChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor={id} className="font-medium text-text-light dark:text-gray-300">{label}</label>
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    </div>
);

export default PreRegistrationForm;
