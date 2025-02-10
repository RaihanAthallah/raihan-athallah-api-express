import { PrismaClient } from "@prisma/client";
import { Profile } from "../models/profile.model";
import ApiError from "../utils/apiError";

const prisma = new PrismaClient();

// Function to create profile using `const`
const createProfile = async (profile: Profile) => {
  try {
    const newProfile = await prisma.profile.create({
      data: {
        name: profile.name,
        title: profile.title,
        bio: profile.bio,
        avatarUrl: profile.avatarUrl,
        resumeUrl: profile.resumeUrl,
        socials: profile.socials,
      },
    });
    return newProfile;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

// Function to update profile using `const`
const updateProfile = async (profile: Profile) => {
  try {
    const updatedProfile = await prisma.profile.update({
      where: { id: profile.id },
      data: {
        name: profile.name,
        title: profile.title,
        bio: profile.bio,
        avatarUrl: profile.avatarUrl,
        resumeUrl: profile.resumeUrl,
        socials: profile.socials,
        updatedAt: new Date(),
      },
    });
    return updatedProfile;
  } catch (error) {
    throw new ApiError("Internal Server Error", 500);
  }
};

export default {
  createProfile,
  updateProfile,
};
