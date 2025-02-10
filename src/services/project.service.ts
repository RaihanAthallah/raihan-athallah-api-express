import { PrismaClient } from "@prisma/client";
import { Project } from "../models/project.model";
import ApiError from "../utils/apiError";

const prisma = new PrismaClient();

const CreateProject = async (project: Project) => {
  try {
    const newProject = await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        projectUrl: project.projectUrl,
        techStacks: {
          connectOrCreate: project.techStacks.map((techStack) => ({
            where: { name: techStack }, // Ensure the `name` field is used as a unique constraint
            create: { name: techStack },
          })),
        },
      },
    });
    return newProject;
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    throw new ApiError("Internal Server Error", 500);
  }
};

const UpdateProject = async (id: string, project: Project) => {
  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        projectUrl: project.projectUrl,
        techStacks: {
          connectOrCreate: project.techStacks.map((techStack) => ({
            where: { name: techStack }, // Ensure the `name` field is used as a unique constraint
            create: { name: techStack },
          })),
        },
      },
    });
    return updatedProject;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const GetAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        techStacks: true, // Include the related achievements
      },
    });
    return projects;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

const GetProjectById = async (id: string) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });
    return project;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

export default {
  CreateProject,
  UpdateProject,
  GetAllProjects,
  GetProjectById,
};
