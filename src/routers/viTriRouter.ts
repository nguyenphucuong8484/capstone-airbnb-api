import express from 'express';
import { 
  getViTri, 
  createViTri, 
  updateViTri, 
  deleteViTri, 
  getViTriPagination 
} from '../controllers/viTriController';

const viTriRouter = express.Router();

/**
 * @openapi
 * /api/vi-tri/get-vi-tri:
 *   get:
 *     summary: Lấy danh sách tất cả vị trí
 *     tags: [ViTri]
 *     responses:
 *       200:
 *         description: Thành công
 */
viTriRouter.get('/get-vi-tri', getViTri);

/**
 * @openapi
 * /api/vi-tri:
 *   post:
 *     summary: Tạo vị trí mới
 *     tags: [ViTri]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_vi_tri:
 *                 type: string
 *                 example: "Quận 1"
 *               tinh_thanh:
 *                 type: string
 *                 example: "Hồ Chí Minh"
 *               quoc_gia:
 *                 type: string
 *                 example: "Việt Nam"
 *               hinh_anh:
 *                 type: string
 *                 example: "https://example.com/hinh-quan-1.jpg"
 *     responses:
 *       201:
 *         description: Tạo vị trí thành công
 */
viTriRouter.post('/', createViTri);

/**
 * @openapi
 * /api/vi-tri/phan-trang-tim-kiem:
 *   get:
 *     summary: Lấy danh sách vị trí phân trang và tìm kiếm
 *     tags: [ViTri]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 5
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */
viTriRouter.get('/phan-trang-tim-kiem', getViTriPagination);

/**
 * @openapi
 * /api/vi-tri/{id}:
 *   put:
 *     summary: Cập nhật thông tin vị trí
 *     tags: [ViTri]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_vi_tri:
 *                 type: string
 *               tinh_thanh:
 *                 type: string
 *               quoc_gia:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *   delete:
 *     summary: Xóa vị trí
 *     tags: [ViTri]
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
viTriRouter.put('/:id', updateViTri);
viTriRouter.delete('/:id', deleteViTri);

export default viTriRouter;