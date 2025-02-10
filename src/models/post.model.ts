import { User } from "./user.model";

// Post model
export interface Post {
  id: number;
  content: string;
  author?: User;
  authorId?: number;
  createdAt: Date;
}
