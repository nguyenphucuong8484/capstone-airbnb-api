import express from 'express';
import { 
  getDatPhong, 
  createDatPhong, 
  getDatPhongByNguoiDung, 
  deleteDatPhong 
} from '../controllers/datPhongController';

const datPhongRouter = express.Router();

/**
 * @openapi
 * /api/dat-phong:
 *   get:
 *     summary: Lấy danh sách tất cả đơn đặt phòng
 *     tags: [DatPhong]
 *     responses:
 *       200:
 *         description: Thành công
 *   post:
 *     summary: Tạo đơn đặt phòng mới
 *     tags: [DatPhong]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_phong:
 *                 type: integer
 *                 example: 1
 *               ngay_den:
 *                 type: string
 *                 example: "2026-11-01T00:00:00.000Z"
 *               ngay_di:
 *                 type: string
 *                 example: "2026-11-05T00:00:00.000Z"
 *               so_luong_khach:
 *                 type: integer
 *                 example: 2
 *               ma_nguoi_dat:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Đặt phòng thành công
 */
datPhongRouter.get('/', getDatPhong);
datPhongRouter.post('/', createDatPhong);

/**
 * @openapi
 * /api/dat-phong/lay-theo-nguoi-dung/{maNguoiDung}:
 *   get:
 *     summary: Lấy lịch sử đặt phòng theo mã người dùng
 *     tags: [DatPhong]
 *     parameters:
 *       - in: path
 *         name: maNguoiDung
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
datPhongRouter.get('/lay-theo-nguoi-dung/:maNguoiDung', getDatPhongByNguoiDung);

/**
 * @openapi
 * /api/dat-phong/{id}:
 *   delete:
 *     summary: Xóa đơn đặt phòng
 *     tags: [DatPhong]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa thành công
 */
datPhongRouter.delete('/:id', deleteDatPhong);

export default datPhongRouter;