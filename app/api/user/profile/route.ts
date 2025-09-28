import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { 
      school,
      province,
      city,
      grade,
      targetUniversity,
      targetMajor
    } = body;

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        school: school || null,
        grade: grade || null,
        targetUniversity: targetUniversity || null,
        targetMajor: targetMajor || null,
        // You can add province and city fields to the User model if needed
      }
    });

    return NextResponse.json(
      { 
        message: "Profil berhasil diperbarui",
        user: {
          id: updatedUser.id,
          school: updatedUser.school,
          grade: updatedUser.grade,
          targetUniversity: updatedUser.targetUniversity,
          targetMajor: updatedUser.targetMajor,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
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
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}