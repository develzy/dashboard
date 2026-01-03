
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Chart from 'chart.js/auto';
import { CountUp } from 'countup.js';
import Swal from 'sweetalert2';

// 1. Sidebar Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.navbar-vertical');
  const toggler = document.querySelector('.navbar-toggler-custom');

  // Create Overlay
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
      requestAnimationFrame(() => { // Force reflow
        overlay.style.opacity = '1';
        sidebar.classList.add('show');
      });
    } else {
      sidebar.classList.remove('show');
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.display = 'none'; }, 300);
    }
  };

  if (toggler) toggler.addEventListener('click', () => {
    const isShow = sidebar.classList.contains('show');
    toggleSidebar(!isShow);
  });

  overlay.addEventListener('click', () => toggleSidebar(false));

  // 2. Initialize CountUp Animations
  const stats = [
    { id: 'count-siswa', end: 850 },
    { id: 'count-kelas', end: 24 },
    { id: 'count-tingkat', end: 6 },
    { id: 'count-gtk', end: 42 }
  ];

  stats.forEach(stat => {
    const el = document.getElementById(stat.id);
    if (el) {
      const countUp = new CountUp(stat.id, stat.end, {
        duration: 2.5,
        separator: '.'
      });
      if (!countUp.error) countUp.start();
    }
  });

  // 3. Initialize Chart.js (Doughnut)
  const ctx = document.getElementById('chart-siswa');
  if (ctx) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Laki-laki', 'Perempuan'],
        datasets: [{
          label: 'Siswa',
          data: [450, 400],
          backgroundColor: [
            '#17c1e8', // Info (Blue-ish)
            '#cb0c9f'  // Primary/Purple-ish
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // 4. SweetAlert for Buttons
  document.querySelectorAll('.btn-outline-success, .btn-outline-info, .btn-outline-warning').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.currentTarget.innerText.trim();
      Swal.fire({
        title: action,
        text: 'Fitur ini akan segera tersedia!',
        icon: 'info',
        confirmButtonText: 'Oke',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    });
  });
});
