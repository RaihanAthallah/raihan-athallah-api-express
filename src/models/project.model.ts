import { TechStack } from "./techstack.model";

// Project model
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  techStacks: string[];
}
