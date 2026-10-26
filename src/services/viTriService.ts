import prisma from '../config/prisma';

// 1. Lấy tất cả vị trí
export const getViTriService = async () => {
  return await prisma.viTri.findMany();
};

// 2. Thêm vị trí mới
export const createViTriService = async (data: { ten_vi_tri: string; tinh_thanh: string; quoc_gia: string; hinh_anh: string }) => {
  const newViTri = await prisma.viTri.create({
    data: {
      ten_vi_tri: data.ten_vi_tri,
      tinh_thanh: data.tinh_thanh,
      quoc_gia: data.quoc_gia,
      hinh_anh: data.hinh_anh,
    },
  });
  return newViTri;
};

// 3. Cập nhật vị trí theo ID
export const updateViTriService = async (id: number, data: any) => {
  const updated = await prisma.viTri.update({
    where: { id: Number(id) },
    data: {
      ten_vi_tri: data.ten_vi_tri,
      tinh_thanh: data.tinh_thanh,
      quoc_gia: data.quoc_gia,
      hinh_anh: data.hinh_anh,
    },
  });
  return updated;
};

// 4. Xóa vị trí theo ID
export const deleteViTriService = async (id: number) => {
  const deleted = await prisma.viTri.delete({
    where: { id: Number(id) },
  });
  return deleted;
};

// 5. Phân trang & Tìm kiếm vị trí
export const getViTriPaginationService = async (page: number, pageSize: number, keyword: string) => {
  const skip = (page - 1) * pageSize;
  
  const whereCondition = keyword ? {
    ten_vi_tri: {
      contains: keyword,
    }
  } : {};

  const totalItem = await prisma.viTri.count({ where: whereCondition });
  const data = await prisma.viTri.findMany({
    skip: skip,
    take: pageSize,
    where: whereCondition,
  });

  return {
    page,
    pageSize,
    totalItem,
    totalPage: Math.ceil(totalItem / pageSize),
    content: data,
  };
};