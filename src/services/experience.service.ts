// Import the Prisma client
import { PrismaClient } from "@prisma/client";
import { Experience } from "../models/experience.model";
import ApiError from "../utils/apiError";

const prisma = new PrismaClient();

// Function to create an experience
const CreateExperience = async (experience: Experience) => {
  try {
    // Use Prisma's create method to insert data into the database
    const newExperience = await prisma.experience.create({
      data: {
        position: experience.position,
        company: experience.company,
        description: experience.description,
        startDate: new Date(experience.startDate), // Convert to Date object
        endDate: experience.endDate ? new Date(experience.endDate) : null, // Handle optional endDate
        achievements: {
          create: experience.achievements.map((achievement) => ({
            description: achievement.description,
          })),
        },
      },
    });
    return newExperience;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const UpdateExperience = async (id: string, experience: Experience) => {
  try {
    const updatedExperience = await prisma.experience.create({
      data: {
        position: experience.position,
        company: experience.company,
        description: experience.description,
        startDate: experience.startDate,
        endDate: experience.endDate,
        updatedAt: new Date(),
        achievements: {
          create: experience.achievements.map((achievement) => ({
            description: achievement.description,
          })),
        },
      },
    });
    return updatedExperience;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const DeleteExperience = async (id: string) => {
  try {
    const deletedExperience = await prisma.experience.delete({
      where: { id },
    });
    return deletedExperience;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const GetExperienceById = async (id: string) => {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id },
    });
    return experience;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const GetExperiences = async () => {
  try {
    const experiences = await prisma.experience.findMany({
      include: {
        achievements: true, // Include the related achievements
      },
    });
    return experiences;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

// Export as default
export default {
  CreateExperience,
  UpdateExperience,
  DeleteExperience,
  GetExperienceById,
  GetExperiences,
};
