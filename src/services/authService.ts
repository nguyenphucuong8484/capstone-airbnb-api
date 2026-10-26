import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// 1. Đăng ký người dùng
export const signUpService = async (data: any) => {
  // Kiểm tra email đã tồn tại chưa
  const existingUser = await prisma.nguoiDung.findFirst({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("Email đã tồn tại trong hệ thống!");
  }

  // Mã hóa mật khẩu an toàn
  const hashedPassword = bcrypt.hashSync(data.pass_word, 10);

  // Tạo người dùng mới trong database
  const newUser = await prisma.nguoiDung.create({
    data: {
      name: data.name,
      email: data.email,
      pass_word: hashedPassword,
      phone: data.phone,
      birth_day: data.birth_day,
      gender: data.gender,
      role: data.role || "USER",
      avatar: data.avatar || "",
    },
  });

  return newUser;
};

// 2. Đăng nhập người dùng
export const signInService = async (data: any) => {
  // Tìm người dùng theo email
  const user = await prisma.nguoiDung.findFirst({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error("Email không tồn tại trong hệ thống!");
  }

  // Kiểm tra mật khẩu
  const isPasswordValid = bcrypt.compareSync(data.pass_word, user.pass_word);
  if (!isPasswordValid) {
    throw new Error("Mật khẩu không chính xác!");
  }

  // Tạo JWT token (Secret key có thể đưa vào file .env sau)
  const token = jwt.sign(
    { data: { id: user.id, email: user.email, role: user.role } },
    "AIRBNB_SECRET_KEY_CYBERSOFT",
    { expiresIn: "7d" }
  );

  return { token, user };
};