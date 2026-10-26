import { Request, Response } from 'express';
import { 
  getDatPhongService, 
  createDatPhongService, 
  getDatPhongByNguoiDungService, 
  deleteDatPhongService 
} from '../services/datPhongService';

export const getDatPhong = async (req: Request, res: Response) => {
  try {
    const data = await getDatPhongService();
    return res.status(200).json({ message: "Lấy danh sách đặt phòng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const createDatPhong = async (req: Request, res: Response) => {
  try {
    const data = await createDatPhongService(req.body);
    return res.status(201).json({ message: "Đặt phòng thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const getDatPhongByNguoiDung = async (req: Request, res: Response) => {
  try {
    const { maNguoiDung } = req.params;
    const data = await getDatPhongByNguoiDungService(Number(maNguoiDung));
    return res.status(200).json({ message: "Lấy lịch sử đặt phòng thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};

export const deleteDatPhong = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteDatPhongService(Number(id));
    return res.status(200).json({ message: "Xóa đặt phòng thành công!", statusCode: 200 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
};