import express from 'express';
import { 
  getNguoiDung, 
  createNguoiDung, 
  updateNguoiDung, 
  deleteNguoiDung, 
  getNguoiDungPagination 
} from '../controllers/nguoiDungController';

const nguoiDungRouter = express.Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Lấy danh sách tất cả người dùng
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Thành công
 *   post:
 *     summary: Tạo người dùng mới
 *     tags: [Users]
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
 *                 example: "cuong2@gmail.com"
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
 *               role:
 *                 type: string
 *                 example: "USER"
 *     responses:
 *       201:
 *         description: Tạo người dùng thành công
 */
nguoiDungRouter.get('/', getNguoiDung);
nguoiDungRouter.post('/', createNguoiDung);

/**
 * @openapi
 * /api/users/phan-trang-tim-kiem:
 *   get:
 *     summary: Lấy danh sách người dùng phân trang và tìm kiếm
 *     tags: [Users]
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
 *           default: 10
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */
nguoiDungRouter.get('/phan-trang-tim-kiem', getNguoiDungPagination);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     tags: [Users]
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
 *     summary: Xóa người dùng
 *     tags: [Users]
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
nguoiDungRouter.put('/:id', updateNguoiDung);
nguoiDungRouter.delete('/:id', deleteNguoiDung);

export default nguoiDungRouter;