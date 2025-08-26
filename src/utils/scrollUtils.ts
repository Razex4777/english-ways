// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Specific function for scrolling to registration section
export const scrollToRegistration = () => {
  scrollToSection('registration');
};
