import { PrismaClient } from "@prisma/client";
import { User } from "../models/user.model";
import ApiError from "../utils/apiError";
import { comparePassword, hashPassword } from "../utils/account";
import { generateToken } from "../utils/jwt";
import { UserLoginData } from "../models/dto/user.dto";

const prisma = new PrismaClient();

const CreateUser = async (user: User) => {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email: user.email } });
    if (existingUser) {
      throw new ApiError("User already exists", 400);
    }

    const hashedPassword = await hashPassword(user.password);

    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        username: user.username,
        password: hashedPassword,
      },
    });
    return createdUser;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const LoginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new ApiError("Invalid credentials", 401);
    }
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      throw new ApiError("Invalid credentials", 401);
    }

    const UserLoginData: UserLoginData = {
      email: user.email,
      username: user.username,
      role: "Admin",
    };

    const token = await generateToken(UserLoginData);
    return { user, token };
  } catch (error) {
    throw new ApiError("Server Error", 500);
  }
};

export default {
  CreateUser,
  LoginUser,
};
