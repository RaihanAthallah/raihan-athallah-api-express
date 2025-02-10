import { Request, Response } from "express";
import { Profile } from "../models/profile.model";
import { profileService } from "../services";

const createProfile = async (req: Request, res: Response) => {
  try {
    const profile: Profile = req.body;
    const newProfile = await profileService.createProfile(profile);
    res.json(newProfile);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const updateProfile = async (req: Request, res: Response) => {
  try {
    const profile: Profile = req.body;
    const updatedProfile = await profileService.updateProfile(profile);
    res.json(updatedProfile);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message, status: 500 });
  }
};

export default {
  createProfile,
  updateProfile,
};
