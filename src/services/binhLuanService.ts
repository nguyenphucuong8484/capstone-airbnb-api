import prisma from '../config/prisma';

// 1. Lấy tất cả bình luận
export const getBinhLuanService = async () => {
  return await prisma.binhLuan.findMany();
};

// 2. Tạo bình luận mới
export const createBinhLuanService = async (data: any) => {
  return await prisma.binhLuan.create({
    data: {
      ma_phong: Number(data.ma_phong),
      ma_nguoi_binh_luan: Number(data.ma_nguoi_binh_luan),
      ngay_binh_luan: new Date(),
      noi_dung: data.noi_dung,
      sao_binh_luan: Number(data.sao_binh_luan),
    },
  });
};

// 3. Lấy bình luận theo mã phòng
export const getBinhLuanByPhongService = async (maPhong: number) => {
  return await prisma.binhLuan.findMany({
    where: { ma_phong: Number(maPhong) },
  });
};

// 4. Xóa bình luận
export const deleteBinhLuanService = async (id: number) => {
  return await prisma.binhLuan.delete({
    where: { id: Number(id) },
  });
};