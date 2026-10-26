import { Request, Response } from 'express';
import { signUpService, signInService } from '../services/authService';

export const signUp = async (req: Request, res: Response) => {
  try {
    const data = await signUpService(req.body);
    return res.status(201).json({ message: "Đăng ký thành công!", content: data, statusCode: 201 });
  } catch (error: any) {
    return res.status(400).json({ message: error.message, statusCode: 400 });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const data = await signInService(req.body);
    return res.status(200).json({ message: "Đăng nhập thành công!", content: data, statusCode: 200 });
  } catch (error: any) {
    return res.status(400).json({ message: error.message, statusCode: 400 });
  }
};