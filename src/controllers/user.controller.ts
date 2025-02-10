import userService from "../services/user.service";
import { User } from "../models/user.model";
import { Login } from "../models/dto/user.dto";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const savedUser = await userService.CreateUser(user);
    res.json(savedUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const user: Login = req.body;
    const result = await userService.LoginUser(user.email, user.password);
    res.json({ token: result.token });
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export default {
  createUser,
  loginUser,
};
