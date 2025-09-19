// Utilidades para el scroll con offset del header
export const scrollToElement = (selector: string, offset: number = 80) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Función para scroll con delay (útil cuando se cambia de página)
export const scrollToElementWithDelay = (selector: string, delay: number = 200, offset: number = 80) => {
  setTimeout(() => {
    scrollToElement(selector, offset);
  }, delay);
};
