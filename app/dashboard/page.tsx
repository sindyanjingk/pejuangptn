import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import DashboardClient from "./dashboard-client";

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  school: string | null;
  grade: string | null;
  targetUniversity: string | null;
  targetMajor: string | null;
  createdAt: string;
}

async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        school: true,
        grade: true,
        targetUniversity: true,
        targetMajor: true,
        createdAt: true,
      },
    });

    if (!user) return null;

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/auth/login");
  }

  const userProfile = await getUserProfile(session.user.id);
  
  if (!userProfile) {
    redirect("/auth/login");
  }

  const showProfileModal = !userProfile.school || !userProfile.grade;

  return (
    <DashboardClient 
      session={session}
      userProfile={userProfile}
      showProfileModal={showProfileModal}
    />
  );
}