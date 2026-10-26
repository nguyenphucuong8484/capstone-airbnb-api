import { Request, Response } from 'express';
import { 
  getViTriService, 
  createViTriService, 
  updateViTriService, 
  deleteViTriService, 
  getViTriPaginationService 
} from '../services/viTriService';

// Lấy danh sách
export const getViTri = async (req: Request, res: Response) => {
  try {
    const data = await getViTriService();
    return res.status(200).json({ message: "Lấy danh sách vị trí thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

// Thêm mới
export const createViTri = async (req: Request, res: Response) => {
  try {
    const data = await createViTriService(req.body);
    return res.status(201).json({ message: "Thêm vị trí thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

// Cập nhật
export const updateViTri = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await updateViTriService(Number(id), req.body);
    return res.status(200).json({ message: "Cập nhật vị trí thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

// Xóa
export const deleteViTri = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteViTriService(Number(id));
    return res.status(200).json({ message: "Xóa vị trí thành công!", statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

// Phân trang & Tìm kiếm
export const getViTriPagination = async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, keyword = '' } = req.query;
    const data = await getViTriPaginationService(Number(page), Number(pageSize), String(keyword));
    return res.status(200).json({ message: "Lấy danh sách phân trang thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};