// Variables globales
let translations = {};
let currentLanguage = localStorage.getItem('language') || 'en';

// Función para cargar las traducciones
async function loadTranslations() {
  try {
    const response = await fetch('./js/lang/translations.json');
    translations = await response.json();
    applyTranslations();
    updateLanguageButton();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Función para cambiar el idioma
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  localStorage.setItem('language', currentLanguage);
  applyTranslations();
  updateLanguageButton();
}

// Actualizar el texto del botón
function updateLanguageButton() {
  const langText = document.getElementById('lang-text');
  langText.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
}

// Función para aplicar las traducciones
function applyTranslations() {
  if (!translations[currentLanguage]) return;
  
  // Traducir navegación
  document.querySelector('.nav-link[href="#about"]').textContent = translations[currentLanguage].nav.about;
  document.querySelector('.nav-link[href="#skills"]').textContent = translations[currentLanguage].nav.skills;
  document.querySelector('.nav-link[href="#projects"]').textContent = translations[currentLanguage].nav.projects;
  document.querySelector('.nav-link[href="#experience"]').textContent = translations[currentLanguage].nav.experience;
  
  // Traducir sección de perfil
  document.querySelector('.title-name').textContent = translations[currentLanguage].profile.title;
  document.querySelector('.resume .subtitle').textContent = translations[currentLanguage].profile.subtitle;
  document.querySelector('.resume .resume-text').textContent = translations[currentLanguage].profile.description;
  document.querySelector('.resume h2.subtitle').textContent = translations[currentLanguage].profile.contact;
  
  // Traducir sección About Me
  document.querySelector('#about h2.subtitle').textContent = translations[currentLanguage].about.title;
  document.querySelector('#about .resume-text').textContent = translations[currentLanguage].about.description;
  
  // Traducir sección Skills
  document.querySelector('#skills h2.subtitle').textContent = translations[currentLanguage].skills.title;
  document.querySelector('#skills h3:nth-of-type(1)').textContent = translations[currentLanguage].skills.programming;
  document.querySelector('#skills h3:nth-of-type(2)').textContent = translations[currentLanguage].skills.frameworks;
  document.querySelector('#skills h3:nth-of-type(3)').textContent = translations[currentLanguage].skills.technologies;
  
  // Traducir sección Projects
  document.querySelector('#projects h2.subtitle').textContent = translations[currentLanguage].projects.title;
  
  // Proyectos individuales
  const projectContainers = document.querySelectorAll('#projects .project-container');
  
  // Proyecto 1
  projectContainers[0].querySelector('h3').textContent = translations[currentLanguage].projects.project1.title;
  projectContainers[0].querySelector('.resume-text').textContent = translations[currentLanguage].projects.project1.description;
  
  // Proyecto 2
  projectContainers[1].querySelector('h3').textContent = translations[currentLanguage].projects.project2.title;
  projectContainers[1].querySelector('.resume-text').textContent = translations[currentLanguage].projects.project2.description;
  
  // Proyecto 3
  projectContainers[2].querySelector('h3').textContent = translations[currentLanguage].projects.project3.title;
  projectContainers[2].querySelector('.resume-text').textContent = translations[currentLanguage].projects.project3.description;
  
  // Proyecto 4
  projectContainers[3].querySelector('h3').textContent = translations[currentLanguage].projects.project4.title;
  projectContainers[3].querySelector('.resume-text').textContent = translations[currentLanguage].projects.project4.description;
  
  // Traducir sección de credenciales
  document.querySelector('#experience h2.subtitle').textContent = translations[currentLanguage].credentials.title;
  
  // Experiencia
  document.querySelector('.left-credentials-column h2.subtitle').textContent = translations[currentLanguage].credentials.experience.title;
  document.querySelector('.left-credentials-column h3').textContent = translations[currentLanguage].credentials.experience.job1.position;
  document.querySelector('.left-credentials-column .resume-text').textContent = translations[currentLanguage].credentials.experience.job1.description;
  
  // Educación
  document.querySelector('.education h2.subtitle').textContent = translations[currentLanguage].credentials.education.title;
  document.querySelector('.education h3').textContent = translations[currentLanguage].credentials.education.degree1.title;
  document.querySelector('.education .resume-text').textContent = translations[currentLanguage].credentials.education.degree1.description;
  
  // Certificaciones
  document.querySelector('.end-container-credentials h2.subtitle').textContent = translations[currentLanguage].credentials.certifications.title;
  document.querySelector('.certifications h3:nth-of-type(1)').textContent = translations[currentLanguage].credentials.certifications.cert1.title;
  document.querySelector('.certifications p:nth-of-type(1)').textContent = translations[currentLanguage].credentials.certifications.cert1.description;
  document.querySelector('.certifications h3:nth-of-type(2)').textContent = translations[currentLanguage].credentials.certifications.cert2.title;
  document.querySelector('.certifications p:nth-of-type(2)').textContent = translations[currentLanguage].credentials.certifications.cert2.description;
  
  // Traducir botones de detalles de proyecto
  document.querySelectorAll('.back-button').forEach(button => {
    button.querySelector('i + text, i + span').textContent = translations[currentLanguage].projects.back;
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  loadTranslations();
  
  // Agregar el evento al botón de cambio de idioma
  document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
});
