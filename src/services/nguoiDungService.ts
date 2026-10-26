import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

// 1. Lấy danh sách người dùng
export const getNguoiDungService = async () => {
  return await prisma.nguoiDung.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth_day: true,
      gender: true,
      role: true,
      avatar: true,
    }
  });
};

// 2. Tạo người dùng mới (Admin tạo)
export const createNguoiDungService = async (data: any) => {
  const hashedPassword = bcrypt.hashSync(data.pass_word || '123456', 10);
  return await prisma.nguoiDung.create({
    data: {
      ...data,
      pass_word: hashedPassword,
    }
  });
};

// 3. Cập nhật thông tin người dùng
export const updateNguoiDungService = async (id: number, data: any) => {
  if (data.pass_word) {
    data.pass_word = bcrypt.hashSync(data.pass_word, 10);
  }
  return await prisma.nguoiDung.update({
    where: { id: Number(id) },
    data,
  });
};

// 4. Xóa người dùng
export const deleteNguoiDungService = async (id: number) => {
  return await prisma.nguoiDung.delete({
    where: { id: Number(id) },
  });
};

// 5. Phân trang & Tìm kiếm người dùng
export const getNguoiDungPaginationService = async (page: number, pageSize: number, keyword: string) => {
  const skip = (page - 1) * pageSize;
  const whereCondition = keyword ? {
    OR: [
      { name: { contains: keyword } },
      { email: { contains: keyword } },
    ]
  } : {};

  const totalItem = await prisma.nguoiDung.count({ where: whereCondition });
  const data = await prisma.nguoiDung.findMany({
    skip,
    take: pageSize,
    where: whereCondition,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth_day: true,
      gender: true,
      role: true,
      avatar: true,
    }
  });

  return {
    page,
    pageSize,
    totalItem,
    totalPage: Math.ceil(totalItem / pageSize),
    content: data,
  };
};