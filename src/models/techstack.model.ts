import { Project } from "./project.model";

// TechStack model
export interface TechStack {
  id: string;
  name: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  project: Project;
}
