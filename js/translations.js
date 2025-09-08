// Variables globales
let translations = {};
let currentLanguage = localStorage.getItem('language') || 'es';

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
  
  // Traducir detalles del proyecto de seguridad (Promerica)
  if (document.querySelector('#project-detail-security-app')) {
    document.querySelector('#project-detail-security-app .project-title').textContent = translations[currentLanguage].projectDetails.security.title;
    document.querySelector('#project-detail-security-app .project-subtitle').textContent = translations[currentLanguage].projectDetails.security.subtitle;
    document.querySelector('#project-detail-security-app .project-description').textContent = translations[currentLanguage].projectDetails.security.description;
    
    // Características
    const securityFeatures = document.querySelectorAll('#project-detail-security-app .feature-item');
    if (securityFeatures.length >= 6) {
      securityFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.verification;
      securityFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.security;
      securityFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.verification;
      securityFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.continuous;
      securityFeatures[4].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.interfaces;
      securityFeatures[5].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.responsive;
      securityFeatures[6].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.security.features.administration;
    }
  }
  
  // Traducir detalles del gestor de recetas
  if (document.querySelector('#project-detail-task-manager')) {
    document.querySelector('#project-detail-task-manager .project-title').textContent = translations[currentLanguage].projectDetails.recipe.title;
    document.querySelector('#project-detail-task-manager .project-subtitle').textContent = translations[currentLanguage].projectDetails.recipe.subtitle;
    document.querySelector('#project-detail-task-manager .project-description').textContent = translations[currentLanguage].projectDetails.recipe.description;
    
    // Características
    const recipeFeatures = document.querySelectorAll('#project-detail-task-manager .feature-item');
    if (recipeFeatures.length >= 4) {
      recipeFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.recipe.features.management;
      recipeFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.recipe.features.shopping;
      recipeFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.recipe.features.suggestions;
      recipeFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.recipe.features.steps;
    }
  }
  
  // Traducir detalles del gestor de usuarios
  if (document.querySelector('#project-detail-language-app')) {
    document.querySelector('#project-detail-language-app .project-title').textContent = translations[currentLanguage].projectDetails.users.title;
    document.querySelector('#project-detail-language-app .project-subtitle').textContent = translations[currentLanguage].projectDetails.users.subtitle;
    document.querySelector('#project-detail-language-app .project-description').textContent = translations[currentLanguage].projectDetails.users.description;
    
    // Características
    const userFeatures = document.querySelectorAll('#project-detail-language-app .feature-item');
    if (userFeatures.length >= 4) {
      userFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.users.features.management;
      userFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.users.features.authentication;
      userFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.users.features.registration;
      userFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.users.features.api;
    }
  }
  
  // Traducir detalles del organizador de tareas
  if (document.querySelector('#project-detail-blog-platform')) {
    document.querySelector('#project-detail-blog-platform .project-title').textContent = translations[currentLanguage].projectDetails.organizer.title;
    document.querySelector('#project-detail-blog-platform .project-subtitle').textContent = translations[currentLanguage].projectDetails.organizer.subtitle;
    document.querySelector('#project-detail-blog-platform .project-description').textContent = translations[currentLanguage].projectDetails.organizer.description;
    
    // Características
    const organizerFeatures = document.querySelectorAll('#project-detail-blog-platform .feature-item');
    if (organizerFeatures.length >= 3) {
      organizerFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.organizer.features.editor;
      organizerFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.organizer.features.tasks;
      organizerFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.organizer.features.admin;
    }
  }
  
  // Traducir detalles de la calculadora IMC
  if (document.querySelector('#project-detail-imc-calculator-app')) {
    document.querySelector('#project-detail-imc-calculator-app .project-title').textContent = translations[currentLanguage].projectDetails.imc.title;
    document.querySelector('#project-detail-imc-calculator-app .project-subtitle').textContent = translations[currentLanguage].projectDetails.imc.subtitle;
    document.querySelector('#project-detail-imc-calculator-app .project-description').textContent = translations[currentLanguage].projectDetails.imc.description;
    
    // Características
    const imcFeatures = document.querySelectorAll('#project-detail-imc-calculator-app .feature-item');
    if (imcFeatures.length >= 4) {
      imcFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.imc.features.calculator;
      imcFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.imc.features.history;
      imcFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.imc.features.graphs;
      imcFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.imc.features.recommendations;
    }
  }
  
  // Traducir detalles de Team Events
  if (document.querySelector('#project-detail-team-events-app')) {
    document.querySelector('#project-detail-team-events-app .project-title').textContent = translations[currentLanguage].projectDetails.team.title;
    document.querySelector('#project-detail-team-events-app .project-subtitle').textContent = translations[currentLanguage].projectDetails.team.subtitle;
    document.querySelector('#project-detail-team-events-app .project-description').textContent = translations[currentLanguage].projectDetails.team.description;
    
    // Características
    const teamFeatures = document.querySelectorAll('#project-detail-team-events-app .feature-item');
    if (teamFeatures.length >= 4) {
      teamFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.team.features.events;
      teamFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.team.features.members;
      teamFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.team.features.activities;
      teamFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.team.features.notifications;
    }
  }
  
  // Traducir detalles de la app de paginación
  if (document.querySelector('#project-detail-paginacion-app')) {
    document.querySelector('#project-detail-paginacion-app .project-title').textContent = translations[currentLanguage].projectDetails.paging.title;
    document.querySelector('#project-detail-paginacion-app .project-subtitle').textContent = translations[currentLanguage].projectDetails.paging.subtitle;
    document.querySelector('#project-detail-paginacion-app .project-description').textContent = translations[currentLanguage].projectDetails.paging.description;
    
    // Características
    const pagingFeatures = document.querySelectorAll('#project-detail-paginacion-app .feature-item');
    if (pagingFeatures.length >= 4) {
      pagingFeatures[0].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.paging.features.management;
      pagingFeatures[1].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.paging.features.integration;
      pagingFeatures[2].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.paging.features.caching;
      pagingFeatures[3].querySelector('.feature-label').textContent = translations[currentLanguage].projectDetails.paging.features.error;
    }
  }
  
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
