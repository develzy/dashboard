
DROP TABLE IF EXISTS yayasan;
CREATE TABLE IF NOT EXISTS yayasan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    kode_idn TEXT,
    kelurahan TEXT,
    npsn TEXT,
    detail_progress INTEGER DEFAULT 80,
    profil_progress INTEGER DEFAULT 100,
    dokumen_progress INTEGER DEFAULT 50
);

INSERT INTO yayasan (nama, kode_idn, kelurahan, npsn, detail_progress, profil_progress, dokumen_progress) 
VALUES ('KHOLIFATUL MUNAWWARAH', '216148', 'Kalisalak', 'Tidak Terdata', 80, 100, 50);
