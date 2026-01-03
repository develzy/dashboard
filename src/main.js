
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

// Easy access to bootstrap in global scope if needed (optional)
window.bootstrap = bootstrap;

// Sidebar Toggle Logic for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.navbar-vertical');
    const toggler = document.querySelector('.navbar-toggler-custom');
    const overlay = document.createElement('div');
    
    overlay.className = 'sidebar-overlay';
    // Style the overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '1029';
    overlay.style.display = 'none';
    overlay.style.transition = 'opacity 0.3s';
    overlay.style.opacity = '0';
    
    document.body.appendChild(overlay);

    if(toggler) {
        toggler.addEventListener('click', () => {
             const isShow = sidebar.classList.contains('show');
             if(isShow) {
                 sidebar.classList.remove('show');
                 overlay.style.opacity = '0';
                 setTimeout(() => { overlay.style.display = 'none'; }, 300);
             } else {
                 overlay.style.display = 'block';
                 // force reflow
                 overlay.offsetHeight; 
                 sidebar.classList.add('show');
                 overlay.style.opacity = '1';
             }
        });
    }

    // Close on overlay click
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 300);
    });
});
