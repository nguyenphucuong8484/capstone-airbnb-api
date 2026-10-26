import { Request, Response } from 'express';
import { 
  getNguoiDungService, 
  createNguoiDungService, 
  updateNguoiDungService, 
  deleteNguoiDungService, 
  getNguoiDungPaginationService 
} from '../services/nguoiDungService';

export const getNguoiDung = async (req: Request, res: Response) => {
  try {
    const data = await getNguoiDungService();
    return res.status(200).json({ message: "Lấy danh sách người dùng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const createNguoiDung = async (req: Request, res: Response) => {
  try {
    const data = await createNguoiDungService(req.body);
    return res.status(201).json({ message: "Thêm người dùng thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const updateNguoiDung = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await updateNguoiDungService(Number(id), req.body);
    return res.status(200).json({ message: "Cập nhật thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const deleteNguoiDung = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteNguoiDungService(Number(id));
    return res.status(200).json({ message: "Xóa người dùng thành công!", statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const getNguoiDungPagination = async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, keyword = '' } = req.query;
    const data = await getNguoiDungPaginationService(Number(page), Number(pageSize), String(keyword));
    return res.status(200).json({ message: "Lấy danh sách phân trang thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};