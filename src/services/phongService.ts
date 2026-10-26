import prisma from '../config/prisma';

// 1. Lấy danh sách tất cả phòng
export const getPhongService = async () => {
  return await prisma.phong.findMany();
};

// 2. Tạo phòng mới
export const createPhongService = async (data: any) => {
  return await prisma.phong.create({
    data: {
      ten_phong: data.ten_phong,
      khach: Number(data.khach),
      phong_ngu: Number(data.phong_ngu),
      giuong: Number(data.giuong),
      phong_tam: Number(data.phong_tam),
      mo_ta: data.mo_ta,
      gia_tien: Number(data.gia_tien),
      may_giat: Boolean(data.may_giat),
      ban_ui: Boolean(data.ban_ui),
      tivi: Boolean(data.tivi),
      dieu_hoa: Boolean(data.dieu_hoa),
      wifi: Boolean(data.wifi),
      bep: Boolean(data.bep),
      do_xe: Boolean(data.do_xe),
      ho_boi: Boolean(data.ho_boi),
      hinh_anh: data.hinh_anh || '',
      ma_vi_tri: Number(data.ma_vi_tri),
    },
  });
};

// 3. Lấy danh sách phòng theo vị trí
export const getPhongByViTriService = async (maViTri: number) => {
  return await prisma.phong.findMany({
    where: { ma_vi_tri: Number(maViTri) },
  });
};

// 4. Cập nhật thông tin phòng
export const updatePhongService = async (id: number, data: any) => {
  return await prisma.phong.update({
    where: { id: Number(id) },
    data,
  });
};

// 5. Xóa phòng
export const deletePhongService = async (id: number) => {
  return await prisma.phong.delete({
    where: { id: Number(id) },
  });
};