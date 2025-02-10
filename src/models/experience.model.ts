import { Achievement } from './achievement.model';

// Experience model
export interface Experience {
  id: string;
  position: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  achievements: Achievement[];
}
