import { Request, Response } from 'express';
import { 
  getBinhLuanService, 
  createBinhLuanService, 
  getBinhLuanByPhongService, 
  deleteBinhLuanService 
} from '../services/binhLuanService';

export const getBinhLuan = async (req: Request, res: Response) => {
  try {
    const data = await getBinhLuanService();
    return res.status(200).json({ message: "Lấy danh sách bình luận thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const createBinhLuan = async (req: Request, res: Response) => {
  try {
    const data = await createBinhLuanService(req.body);
    return res.status(201).json({ message: "Bình luận thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const getBinhLuanByPhong = async (req: Request, res: Response) => {
  try {
    const { maPhong } = req.params;
    const data = await getBinhLuanByPhongService(Number(maPhong));
    return res.status(200).json({ message: "Lấy bình luận theo phòng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const deleteBinhLuan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteBinhLuanService(Number(id));
    return res.status(200).json({ message: "Xóa bình luận thành công!", statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};