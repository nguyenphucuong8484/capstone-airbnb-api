-- 1. Tạo bảng NguoiDung
CREATE TABLE IF NOT EXISTS `NguoiDung` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `pass_word` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20),
  `birth_day` VARCHAR(50),
  `gender` VARCHAR(10),
  `role` VARCHAR(50) DEFAULT 'USER',
  `avatar` VARCHAR(255)
);

-- 2. Tạo bảng ViTri
CREATE TABLE IF NOT EXISTS `ViTri` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ten_vi_tri` VARCHAR(255) NOT NULL,
  `tinh_thanh` VARCHAR(255) NOT NULL,
  `quoc_gia` VARCHAR(255) DEFAULT 'Việt Nam',
  `hinh_anh` VARCHAR(255)
);

-- 3. Tạo bảng Phong
CREATE TABLE IF NOT EXISTS `Phong` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ten_phong` VARCHAR(255) NOT NULL,
  `khach` INT DEFAULT 1,
  `phong_ngu` INT DEFAULT 1,
  `giuong` INT DEFAULT 1,
  `phong_tam` INT DEFAULT 1,
  `mo_ta` TEXT,
  `gia_tien` INT NOT NULL,
  `may_giat` BOOLEAN DEFAULT FALSE,
  `ban_la` BOOLEAN DEFAULT FALSE,
  `tivi` BOOLEAN DEFAULT FALSE,
  `dieu_hoa` BOOLEAN DEFAULT FALSE,
  `wifi` BOOLEAN DEFAULT FALSE,
  `bep` BOOLEAN DEFAULT FALSE,
  `do_xe` BOOLEAN DEFAULT FALSE,
  `ho_boi` BOOLEAN DEFAULT FALSE,
  `ban_ui` BOOLEAN DEFAULT FALSE,
  `hinh_anh` VARCHAR(255),
  `ma_vi_tri` INT,
  FOREIGN KEY (`ma_vi_tri`) REFERENCES `ViTri`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 4. Tạo bảng DatPhong
CREATE TABLE IF NOT EXISTS `DatPhong` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ma_phong` INT NOT NULL,
  `ngay_den` DATETIME NOT NULL,
  `ngay_di` DATETIME NOT NULL,
  `so_luong_khach` INT DEFAULT 1,
  `ma_nguoi_dat` INT NOT NULL,
  FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`ma_nguoi_dat`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 5. Tạo bảng BinhLuan
CREATE TABLE IF NOT EXISTS `BinhLuan` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ma_phong` INT NOT NULL,
  `ma_nguoi_binh_luan` INT NOT NULL,
  `ngay_binh_luan` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `noi_dung` TEXT NOT NULL,
  `sao_binh_luan` INT DEFAULT 5,
  FOREIGN KEY (`ma_phong`) REFERENCES `Phong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);