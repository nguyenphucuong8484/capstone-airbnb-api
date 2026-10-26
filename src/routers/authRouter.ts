import express from 'express';
import { signUp, signIn } from '../controllers/authController';

const authRouter = express.Router();

/**
 * @openapi
 * /api/auth/sign-up:
 *   post:
 *     summary: Đăng ký tài khoản người dùng mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nguyễn Phú Cường"
 *               email:
 *                 type: string
 *                 example: "cuong@gmail.com"
 *               pass_word:
 *                 type: string
 *                 example: "123456"
 *               phone:
 *                 type: string
 *                 example: "0909123456"
 *               birth_day:
 *                 type: string
 *                 example: "14/02/2006"
 *               gender:
 *                 type: string
 *                 example: "Nam"
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 */
authRouter.post('/sign-up', signUp);

/**
 * @openapi
 * /api/auth/sign-in:
 *   post:
 *     summary: Đăng nhập hệ thống
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "cuong@gmail.com"
 *               pass_word:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Đăng nhập thành công và trả về JWT token
 */
authRouter.post('/sign-in', signIn);

export default authRouter;