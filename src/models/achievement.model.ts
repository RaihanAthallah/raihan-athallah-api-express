import { Experience } from "./experience.model";

// Achievement model
export interface Achievement {
  id: string;
  description: string;
  experienceId: string;
  createdAt: Date;
  updatedAt: Date;
  experience: Experience;
}
