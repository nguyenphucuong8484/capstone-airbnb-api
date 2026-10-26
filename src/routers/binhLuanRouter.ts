import express from 'express';
import { 
  getBinhLuan, 
  createBinhLuan, 
  getBinhLuanByPhong, 
  deleteBinhLuan 
} from '../controllers/binhLuanController';

const binhLuanRouter = express.Router();

/**
 * @openapi
 * /api/binh-luan:
 *   get:
 *     summary: Lấy danh sách tất cả bình luận
 *     tags: [BinhLuan]
 *     responses:
 *       200:
 *         description: Thành công
 *   post:
 *     summary: Thêm bình luận mới
 *     tags: [BinhLuan]
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
 *               ma_nguoi_binh_luan:
 *                 type: integer
 *                 example: 1
 *               noi_dung:
 *                 type: string
 *                 example: "Phòng đẹp xuất sắc, view biển cực xịn!"
 *               sao_binh_luan:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Tạo bình luận thành công
 */
binhLuanRouter.get('/', getBinhLuan);
binhLuanRouter.post('/', createBinhLuan);

/**
 * @openapi
 * /api/binh-luan/lay-theo-phong/{maPhong}:
 *   get:
 *     summary: Lấy danh sách bình luận theo mã phòng
 *     tags: [BinhLuan]
 *     parameters:
 *       - in: path
 *         name: maPhong
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
binhLuanRouter.get('/lay-theo-phong/:maPhong', getBinhLuanByPhong);

/**
 * @openapi
 * /api/binh-luan/{id}:
 *   delete:
 *     summary: Xóa bình luận
 *     tags: [BinhLuan]
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
binhLuanRouter.delete('/:id', deleteBinhLuan);

export default binhLuanRouter;