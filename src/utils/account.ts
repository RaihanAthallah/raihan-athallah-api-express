import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (plainText: string, hashedPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainText, hashedPassword);
  } catch (err) {
    console.error("Error comparing password:", err);
    return false;
  }
};
