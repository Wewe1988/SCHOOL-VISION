import { ANIMATION_TIMING } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const mainContent = document.querySelector('.main-content');
  const buttons = document.querySelectorAll('.section-button');
  const sections = document.querySelectorAll('.section-content');
  const defaultMessage = document.getElementById('default-message');
  const logo = document.querySelector('.logo');
  
  // Initialize animations
  setTimeout(() => {
    header.classList.add('loaded');
    mainContent.classList.add('loaded');
  }, ANIMATION_TIMING.LOAD_DELAY);
  
  // Add logo click effect
  if (logo) {
    logo.addEventListener('click', () => {
      logo.style.animation = 'none';
      setTimeout(() => {
        logo.style.animation = 'logoEntrance 1.2s ease-out forwards';
      }, 10);
    });
  }
  
  let activeSection = null;
  
  const showSection = (sectionId) => {
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    
    if (sectionId) {
      const targetSection = document.getElementById(sectionId);
      const targetButton = document.querySelector(`[data-section="${sectionId}"]`);
      
      if (defaultMessage) defaultMessage.classList.add('hidden');
      targetSection.classList.remove('hidden');
      targetButton.classList.add('active');
    } else {
      if (defaultMessage) defaultMessage.classList.remove('hidden');
    }
  };
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const sectionId = e.target.dataset.section;
      const isActive = e.target.classList.contains('active');
      
      if (isActive) {
        activeSection = null;
        showSection(null);
      } else {
        activeSection = sectionId;
        showSection(sectionId);
      }
    });
  });
});