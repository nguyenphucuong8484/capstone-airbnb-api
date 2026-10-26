import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

import viTriRouter from './routers/viTriRouter';
import authRouter from './routers/authRouter';
import nguoiDungRouter from './routers/nguoiDungRouter';
import phongRouter from './routers/phongRouter';
import datPhongRouter from './routers/datPhongRouter';
import binhLuanRouter from './routers/binhLuanRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Route Swagger UI Documentation
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routers
app.use('/api/auth', authRouter);
app.use('/api/vi-tri', viTriRouter);
app.use('/api/users', nguoiDungRouter);
app.use('/api/phong-thue', phongRouter);
app.use('/api/dat-phong', datPhongRouter);
app.use('/api/binh-luan', binhLuanRouter);

app.listen(port, () => {
  console.log(`🚀 Server Airbnb đang chạy tại http://localhost:${port}`);
  console.log(`📚 Tài liệu Swagger UI tại http://localhost:${port}/swagger`);
});