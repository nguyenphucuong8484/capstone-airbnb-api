import { Request, Response } from 'express';
import { 
  getPhongService, 
  createPhongService, 
  getPhongByViTriService, 
  updatePhongService, 
  deletePhongService 
} from '../services/phongService';

export const getPhong = async (req: Request, res: Response) => {
  try {
    const data = await getPhongService();
    return res.status(200).json({ message: "Lấy danh sách phòng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const createPhong = async (req: Request, res: Response) => {
  try {
    const data = await createPhongService(req.body);
    return res.status(201).json({ message: "Thêm phòng thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const getPhongByViTri = async (req: Request, res: Response) => {
  try {
    const { maViTri } = req.query;
    const data = await getPhongByViTriService(Number(maViTri));
    return res.status(200).json({ message: "Lấy danh sách phòng theo vị trí thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const updatePhong = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await updatePhongService(Number(id), req.body);
    return res.status(200).json({ message: "Cập nhật phòng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const deletePhong = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deletePhongService(Number(id));
    return res.status(200).json({ message: "Xóa phòng thành công!", statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};