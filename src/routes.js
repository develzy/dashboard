/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import DataSantri from "layouts/data-santri";
import Kelas from "layouts/kelas";
import Placeholder from "layouts/placeholder";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },

  // Administrasi Umum
  { type: "title", title: "Administrasi Umum", key: "adm-umum" },
  {
    type: "collapse",
    name: "Data Santri",
    key: "data-santri",
    icon: <Office size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "santri-tpq",
        route: "/administrasi/data-santri/tpq",
        component: <DataSantri />,
      },
      {
        name: "RTQ",
        key: "santri-rtq",
        route: "/administrasi/data-santri/rtq",
        component: <Placeholder title="Data Santri RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "santri-majlis",
        route: "/administrasi/data-santri/majlis",
        component: <Placeholder title="Data Santri Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Kelas",
    key: "kelas",
    icon: <Cube size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "kelas-tpq",
        route: "/administrasi/kelas/tpq",
        component: <Kelas />,
      },
      {
        name: "RTQ",
        key: "kelas-rtq",
        route: "/administrasi/kelas/rtq",
        component: <Placeholder title="Kelas RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "kelas-majlis",
        route: "/administrasi/kelas/majlis",
        component: <Placeholder title="Kelas Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Pengurus",
    key: "pengurus",
    icon: <CustomerSupport size="12px" />,
    collapse: [
      {
        name: "Yayasan",
        key: "pengurus-yayasan",
        route: "/administrasi/pengurus/yayasan",
        component: <Placeholder title="Pengurus Yayasan" />,
      },
      {
        name: "TPQ",
        key: "pengurus-tpq",
        route: "/administrasi/pengurus/tpq",
        component: <Placeholder title="Pengurus TPQ" />,
      },
      {
        name: "RTQ",
        key: "pengurus-rtq",
        route: "/administrasi/pengurus/rtq",
        component: <Placeholder title="Pengurus RTQ" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Pengajar",
    key: "pengajar",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "pengajar-tpq",
        route: "/administrasi/pengajar/tpq",
        component: <Placeholder title="Pengajar TPQ" />,
      },
      {
        name: "RTQ",
        key: "pengajar-rtq",
        route: "/administrasi/pengajar/rtq",
        component: <Placeholder title="Pengajar RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "pengajar-majlis",
        route: "/administrasi/pengajar/majlis",
        component: <Placeholder title="Pengajar Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Arsip & Dokumen",
    key: "arsip",
    route: "/administrasi/arsip",
    icon: <Settings size="12px" />,
    component: <Placeholder title="Arsip & Dokumen" />,
    noCollapse: true,
  },

  // Kesiswaan
  { type: "title", title: "Kesiswaan", key: "kesiswaan" },
  {
    type: "collapse",
    name: "Absensi Siswa",
    key: "absensi",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "absensi-tpq",
        route: "/kesiswaan/absensi/tpq",
        component: <Placeholder title="Absensi TPQ" />,
      },
      {
        name: "RTQ",
        key: "absensi-rtq",
        route: "/kesiswaan/absensi/rtq",
        component: <Placeholder title="Absensi RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "absensi-majlis",
        route: "/kesiswaan/absensi/majlis",
        component: <Placeholder title="Absensi Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Nilai Siswa",
    key: "nilai",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "nilai-tpq",
        route: "/kesiswaan/nilai/tpq",
        component: <Placeholder title="Nilai TPQ" />,
      },
      {
        name: "RTQ",
        key: "nilai-rtq",
        route: "/kesiswaan/nilai/rtq",
        component: <Placeholder title="Nilai RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "nilai-majlis",
        route: "/kesiswaan/nilai/majlis",
        component: <Placeholder title="Nilai Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Alumni",
    key: "alumni",
    icon: <CustomerSupport size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "alumni-tpq",
        route: "/kesiswaan/alumni/tpq",
        component: <Placeholder title="Alumni TPQ" />,
      },
      {
        name: "RTQ",
        key: "alumni-rtq",
        route: "/kesiswaan/alumni/rtq",
        component: <Placeholder title="Alumni RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "alumni-majlis",
        route: "/kesiswaan/alumni/majlis",
        component: <Placeholder title="Alumni Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Mutasi Santri",
    key: "mutasi",
    route: "/kesiswaan/mutasi",
    icon: <Settings size="12px" />,
    component: <Placeholder title="Mutasi Santri" />,
    noCollapse: true,
  },

  // Keuangan
  { type: "title", title: "Keuangan", key: "keuangan" },
  {
    type: "collapse",
    name: "Pembayaran Santri",
    key: "pembayaran",
    icon: <CreditCard size="12px" />,
    collapse: [
      {
        name: "TPQ",
        key: "pembayaran-tpq",
        route: "/keuangan/pembayaran/tpq",
        component: <Placeholder title="Pembayaran TPQ" />,
      },
      {
        name: "RTQ",
        key: "pembayaran-rtq",
        route: "/keuangan/pembayaran/rtq",
        component: <Placeholder title="Pembayaran RTQ" />,
      },
      {
        name: "Majlis Ta’lim",
        key: "pembayaran-majlis",
        route: "/keuangan/pembayaran/majlis",
        component: <Placeholder title="Pembayaran Majlis Ta’lim" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Pengeluaran",
    key: "pengeluaran",
    route: "/keuangan/pengeluaran",
    icon: <CreditCard size="12px" />,
    component: <Placeholder title="Pengeluaran" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Pemasukan Lain",
    key: "pemasukan",
    route: "/keuangan/pemasukan",
    icon: <CreditCard size="12px" />,
    component: <Placeholder title="Pemasukan Lain" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Rekap & Laporan",
    key: "rekap",
    route: "/keuangan/rekap",
    icon: <Document size="12px" />,
    component: <Placeholder title="Rekap & Laporan" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Pengaturan Tarif",
    key: "tarif",
    route: "/keuangan/tarif",
    icon: <Settings size="12px" />,
    component: <Placeholder title="Pengaturan Tarif" />,
    noCollapse: true,
  },
];

export default routes;
