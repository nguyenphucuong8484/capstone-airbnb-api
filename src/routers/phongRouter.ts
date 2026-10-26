import express from 'express';
import { 
  getPhong, 
  createPhong, 
  getPhongByViTri, 
  updatePhong, 
  deletePhong 
} from '../controllers/phongController';

const phongRouter = express.Router();

/**
 * @openapi
 * /api/phong-thue:
 *   get:
 *     summary: Lấy danh sách tất cả phòng thuê
 *     tags: [PhongThue]
 *     responses:
 *       200:
 *         description: Thành công
 *   post:
 *     summary: Tạo phòng thuê mới
 *     tags: [PhongThue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_phong:
 *                 type: string
 *                 example: "Penthouse View Biển Vũng Tàu"
 *               khach:
 *                 type: integer
 *                 example: 4
 *               phong_ngu:
 *                 type: integer
 *                 example: 2
 *               giuong:
 *                 type: integer
 *                 example: 2
 *               phong_tam:
 *                 type: integer
 *                 example: 2
 *               mo_ta:
 *                 type: string
 *                 example: "Phòng đẹp xuất sắc view ôm trọn bờ biển"
 *               gia_tien:
 *                 type: integer
 *                 example: 1500000
 *               may_giat:
 *                 type: boolean
 *                 example: true
 *               ban_ui:
 *                 type: boolean
 *                 example: true
 *               tivi:
 *                 type: boolean
 *                 example: true
 *               dieu_hoa:
 *                 type: boolean
 *                 example: true
 *               wifi:
 *                 type: boolean
 *                 example: true
 *               bep:
 *                 type: boolean
 *                 example: true
 *               do_xe:
 *                 type: boolean
 *                 example: true
 *               ho_boi:
 *                 type: boolean
 *                 example: true
 *               hinh_anh:
 *                 type: string
 *                 example: "https://example.com/phong.jpg"
 *               ma_vi_tri:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Tạo phòng thành công
 */
phongRouter.get('/', getPhong);
phongRouter.post('/', createPhong);

/**
 * @openapi
 * /api/phong-thue/lay-phong-theo-vi-tri:
 *   get:
 *     summary: Lấy danh sách phòng theo mã vị trí
 *     tags: [PhongThue]
 *     parameters:
 *       - in: query
 *         name: maViTri
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
phongRouter.get('/lay-phong-theo-vi-tri', getPhongByViTri);

/**
 * @openapi
 * /api/phong-thue/{id}:
 *   put:
 *     summary: Cập nhật thông tin phòng thuê
 *     tags: [PhongThue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *   delete:
 *     summary: Xóa phòng thuê
 *     tags: [PhongThue]
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
phongRouter.put('/:id', updatePhong);
phongRouter.delete('/:id', deletePhong);

export default phongRouter;