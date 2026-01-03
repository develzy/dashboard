
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Chart from 'chart.js/auto';
import { CountUp } from 'countup.js';
import Swal from 'sweetalert2';

// Components
import { renderSidebar } from './components/Sidebar.js';
import { renderYayasan, initYayasanCharts } from './pages/Yayasan.js';

// Expose Chart globally for sub-pages
window.Chart = Chart;

// --- ROUTER & APP STATE ---

const renderPage = async () => {
  const path = window.location.pathname;
  const sideNav = document.querySelector('.navbar-vertical');

  // Container untuk konten utama (Ganti isinya sesuai halaman)
  const mainContainer = document.querySelector('.container-fluid.py-4');

  if (path === '/yayasan') {
    // Render Sidebar Active State
    sideNav.outerHTML = renderSidebar('Yayasan');

    // Render Halaman Yayasan
    mainContainer.innerHTML = await renderYayasan();
    initYayasanCharts();

  } else {
    // Default: Beranda
    sideNav.outerHTML = renderSidebar('Beranda');

    // Karena kita belum memisahkan Halaman Beranda jadi komponen sendiri,
    // dan kontennya sudah ada di index.html statis,
    // kita hanya perlu memastikan jika user navigate back, kontennya muncul.
    // TAPI: Cara paling gampang sekarang adalah reload jika ke home, 
    // atau kita extract Home content ke function renderHome() nanti.

    if (path !== '/' && path !== '/index.html') {
      // Jika user klik 'Beranda' dari halaman lain, reload saja agar index.html asli termuat
      window.location.href = '/';
      return;
    }

    // Init Chart & CountUp untuk Beranda
    initHomeCharts();
  }

  // Initialize Sidebar Toggle (karena elemen sidebar baru di-render ulang)
  initSidebarToggle();
};


// --- INITIALIZATION HELPERS ---

function initHomeCharts() {
  // CountUp
  const stats = [
    { id: 'count-siswa', end: 850 },
    { id: 'count-kelas', end: 24 },
    { id: 'count-tingkat', end: 6 },
    { id: 'count-gtk', end: 42 }
  ];
  stats.forEach(stat => {
    const el = document.getElementById(stat.id);
    if (el) {
      const countUp = new CountUp(stat.id, stat.end, { duration: 2.5 });
      if (!countUp.error) countUp.start();
    }
  });

  // Chart Siswa Home
  const ctx = document.getElementById('chart-siswa');
  if (ctx) {
    const existingChart = Chart.getChart(ctx);
    if (existingChart) existingChart.destroy();

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Laki-laki', 'Perempuan'],
        datasets: [{
          data: [450, 400],
          backgroundColor: ['#17c1e8', '#cb0c9f'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: { legend: { display: false } }
      }
    });
  }

  // SweetAlert Events
  document.querySelectorAll('.btn-outline-success, .btn-outline-info, .btn-outline-warning').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.currentTarget.innerText.trim();
      Swal.fire({
        title: action,
        text: 'Fitur ini akan segera tersedia!',
        icon: 'info',
        confirmButtonText: 'Oke',
        customClass: { confirmButton: 'btn btn-primary' },
        buttonsStyling: false
      });
    });
  });
}

function initSidebarToggle() {
  const sidebar = document.querySelector('.navbar-vertical');
  const toggler = document.querySelector('.navbar-toggler-custom');

  // Cleanup old overlay
  const oldOverlay = document.querySelector('.sidebar-overlay');
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  Object.assign(overlay.style, {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1029, display: 'none',
    transition: 'opacity 0.3s', opacity: 0
  });
  document.body.appendChild(overlay);

  const toggleSidebar = (show) => {
    if (show) {
      overlay.style.display = 'block';
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        sidebar.classList.add('show');
      });
    } else {
      sidebar.classList.remove('show');
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.display = 'none'; }, 300);
    }
  };

  if (toggler) {
    // Clone button to ensure clean event listeners
    const newToggler = toggler.cloneNode(true);
    toggler.parentNode.replaceChild(newToggler, toggler);

    newToggler.addEventListener('click', () => {
      const isShow = sidebar.classList.contains('show');
      toggleSidebar(!isShow);
    });
  }

  overlay.addEventListener('click', () => toggleSidebar(false));

  // Attach Link Interceptors (agar tidak reload saat klik menu)
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      window.history.pushState(null, null, href);
      renderPage();
    });
  });
}


// --- BOOTSTRAP ---
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  window.addEventListener('popstate', renderPage);
});
