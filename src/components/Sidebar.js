
export function renderSidebar(activePage = 'Beranda') {
    return `
    <aside class="navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
        <div class="sidenav-header text-center pt-3">
            <i class="bi bi-grid-1x2-fill text-primary fs-2"></i>
            <span class="ms-1 font-weight-bold">Soft Dashboard</span>
        </div>
        <hr class="horizontal dark mt-0">
        <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'Beranda' ? 'active' : ''}" href="/" data-link>
                        <div class="icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="bi bi-house-door-fill text-dark"></i>
                        </div>
                        <span class="nav-link-text ms-1">Beranda</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'Yayasan' ? 'active' : ''}" href="/yayasan" data-link>
                        <div class="icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="bi bi-building text-dark"></i>
                        </div>
                        <span class="nav-link-text ms-1">Yayasan</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'Kelas' ? 'active' : ''}" href="#" data-link>
                        <div class="icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="bi bi-easel text-dark"></i>
                        </div>
                        <span class="nav-link-text ms-1">Kelas</span>
                    </a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link ${activePage === 'Siswa' ? 'active' : ''}" href="#" data-link>
                        <div class="icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="bi bi-people text-dark"></i>
                        </div>
                        <span class="nav-link-text ms-1">Siswa</span>
                    </a>
                </li>
                <li class="nav-item mt-3">
                    <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Laporan</h6>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">
                        <div class="icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="bi bi-calendar-check text-dark"></i>
                        </div>
                        <span class="nav-link-text ms-1">Tahun Ajaran</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
    `;
}
