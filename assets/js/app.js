/**
 * Main JavaScript file for Axinite starter theme
 */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Dropdown menus
  const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');
  
  dropdownButtons.forEach(button => {
    const targetId = button.getAttribute('data-dropdown-toggle');
    const target = document.getElementById(targetId);
    
    if (target) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        target.classList.toggle('hidden');
      });
      
      // Close when clicking outside
      document.addEventListener('click', () => {
        if (!target.classList.contains('hidden')) {
          target.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Prevent closing when clicking inside dropdown
      target.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  });
  
  // Tabs
  const tabGroups = document.querySelectorAll('[role="tablist"]');
  
  tabGroups.forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('[role="tab"]');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate all tabs
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.setAttribute('tabindex', '-1');
          t.classList.remove('border-aesthetic-blue', 'text-aesthetic-blue');
          t.classList.add('border-transparent', 'text-gray-500');
        });
        
        // Activate clicked tab
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        tab.classList.remove('border-transparent', 'text-gray-500');
        tab.classList.add('border-aesthetic-blue', 'text-aesthetic-blue');
        
        // Hide all panels
        const tabPanels = document.querySelectorAll(`[role="tabpanel"]`);
        tabPanels.forEach(panel => {
          panel.classList.add('hidden');
        });
        
        // Show selected panel
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (panel) {
          panel.classList.remove('hidden');
        }
      });
    });
  });
});