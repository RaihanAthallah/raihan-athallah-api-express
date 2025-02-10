import { Post } from "./post.model";

// User model
export interface User {
  id: number;
  email: string;
  username: string;
  name?: string;
  password: string;
  posts: Post[];
}
