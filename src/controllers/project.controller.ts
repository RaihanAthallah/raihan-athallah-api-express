import { Request, Response } from "express";
import { Project } from "../models/project.model";
import { projectService } from "../services";

const createProject = async (req: Request, res: Response) => {
  try {
    const project: Project = req.body;
    const newProject = await projectService.CreateProject(project);
    res.json(newProject);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};
const getProject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const project = await projectService.GetProjectById(id);
    res.json(project);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.GetAllProjects();
    res.json(projects);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

export default {
  createProject,
  getProject,
  getAllProjects,
};
