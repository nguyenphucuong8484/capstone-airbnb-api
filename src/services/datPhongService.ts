import prisma from '../config/prisma';

// 1. Lấy danh sách tất cả đặt phòng
export const getDatPhongService = async () => {
  return await prisma.datPhong.findMany();
};

// 2. Tạo đơn đặt phòng mới
export const createDatPhongService = async (data: any) => {
  return await prisma.datPhong.create({
    data: {
      ma_phong: Number(data.ma_phong),
      ngay_den: new Date(data.ngay_den),
      ngay_di: new Date(data.ngay_di),
      so_luong_khach: Number(data.so_luong_khach),
      ma_nguoi_dat: Number(data.ma_nguoi_dat),
    },
  });
};

// 3. Lấy danh sách đặt phòng theo ID người dùng
export const getDatPhongByNguoiDungService = async (maNguoiDung: number) => {
  return await prisma.datPhong.findMany({
    where: { ma_nguoi_dat: Number(maNguoiDung) },
  });
};

// 4. Xóa đơn đặt phòng
export const deleteDatPhongService = async (id: number) => {
  return await prisma.datPhong.delete({
    where: { id: Number(id) },
  });
};