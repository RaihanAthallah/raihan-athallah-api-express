// Profile model
export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socials?: string; // You can parse this as JSON or leave it as string
  createdAt: Date;
  updatedAt: Date;
}
