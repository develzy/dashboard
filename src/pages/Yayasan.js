
export async function renderYayasan() {
    // Simulasi fetch data (Nanti diganti fetch real ke Worker URL)
    // const res = await fetch('http://localhost:8787/api/yayasan');
    // const data = await res.json();

    // Mock Data sementara agar UI tampil dulu tanpa backend jalan
    const data = {
        nama: 'KHOLIFATUL MUNAWWARAH',
        kode: 'TPQ Al Munawwarah',
        detail: 80,
        profil: 100,
        dokumen: 50
    };

    return `
    <div class="row">
        <div class="col-12 mb-4">
           <div class="d-flex align-items-center mb-3">
                <button class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <h6 class="mb-0 text-white">Beranda / Yayasan</h6>
           </div>
           
           <h3 class="font-weight-bolder text-white mb-0">${data.nama}</h3>
           <p class="text-white opacity-8">${data.kode}</p>
        </div>
    </div>

    <!-- Progress Cards -->
    <div class="row">
        <div class="col-12 mb-3">
            <div class="card p-4">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative" style="width: 80px; height: 80px;">
                        <canvas id="chart-detail" width="80" height="80"></canvas>
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold text-dark font-weight-bold" style="font-size: 0.8rem">${data.detail}%</span>
                    </div>
                    <div class="flex-grow-1 ms-4">
                        <h5 class="mb-1 font-weight-bold">Detail Yayasan</h5>
                        <p class="text-sm text-secondary mb-0">Seluruh Data Digital tentang yayasan Anda.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6 mb-3">
             <div class="card p-4 h-100">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative" style="width: 70px; height: 70px;">
                         <canvas id="chart-profil" width="70" height="70"></canvas>
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold text-dark" style="font-size: 0.8rem">${data.profil}%</span>
                    </div>
                     <div class="flex-grow-1 ms-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="mb-1 font-weight-bold">Profil</h5>
                             <button class="btn btn-icon-only btn-rounded btn-success btn-sm mb-0">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                        <p class="text-xs text-secondary mb-0">Data yayasan, nomor telepon, lokasi dsb.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6 mb-3">
             <div class="card p-4 h-100">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative" style="width: 70px; height: 70px;">
                         <canvas id="chart-dokumen" width="70" height="70"></canvas>
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold text-dark" style="font-size: 0.8rem">${data.dokumen}%</span>
                    </div>
                     <div class="flex-grow-1 ms-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="mb-1 font-weight-bold">Dokumentasi</h5>
                             <button class="btn btn-icon-only btn-rounded btn-success btn-sm mb-0">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                        <p class="text-xs text-secondary mb-0">Data Organisasi pemilik yayasan, serta dokumentasi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Helper to init charts after render
export function initYayasanCharts() {
    // Kita perlu import Chart JS di main, lalu pass ke sini, atau assume global
    // Asumsi global Chart
    const createDoughnut = (id, value, color) => {
        const ctx = document.getElementById(id);
        if (ctx) {
            new window.Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [value, 100 - value],
                        backgroundColor: [color, '#e9ecef'],
                        borderWidth: 0,
                        cutout: '85%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    events: [],
                    plugins: { legend: { display: false }, tooltip: { enabled: false } }
                }
            });
        }
    };

    createDoughnut('chart-detail', 80, '#17c1e8'); // Info blue
    createDoughnut('chart-profil', 100, '#2dce89'); // Valid Green
    createDoughnut('chart-dokumen', 50, '#fb6340'); // Orange
}
