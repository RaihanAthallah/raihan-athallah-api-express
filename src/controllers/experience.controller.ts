import { Request, Response } from "express";
import { Experience } from "../models/experience.model";
import { experienceService } from "../services";

const createExperience = async (req: Request, res: Response) => {
  try {
    const experience: Experience = req.body;
    const newExperience = await experienceService.CreateExperience(experience);
    res.json(newExperience);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const updateExperience = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const experience: Experience = req.body;
    const updatedExperience = await experienceService.UpdateExperience(id, experience);
    res.json(updatedExperience);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const deleteExperience = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedExperience = await experienceService.DeleteExperience(id);
    res.json(deletedExperience);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const getExperienceById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const experience = await experienceService.GetExperienceById(id);
    res.json(experience);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const getExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await experienceService.GetExperiences();
    res.json(experiences);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const helloWorld = async (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
};

export default {
  createExperience,
  updateExperience,
  deleteExperience,
  getExperienceById,
  getExperiences,
  helloWorld,
};
