"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { BookOpen, Target, Trophy, Clock, BarChart3, User, Settings, Edit } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileSetupModal from "@/components/profile-setup-modal";

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

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) {
      router.push("/auth/login");
      return;
    }

    // Fetch user profile
    fetchUserProfile();
  }, [session, status, router]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/user/profile');
      if (response.ok) {
        const data = await response.json();
        setUserProfile(data.user);
        
        // Show profile setup modal if profile is incomplete
        if (!data.user.school || !data.user.grade) {
          setShowProfileModal(true);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const handleProfileSave = (profileData: any) => {
    // Refresh profile data
    fetchUserProfile();
    setShowProfileModal(false);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, label: "Tryout Dikerjakan", value: "12", color: "blue" },
    { icon: <Trophy className="w-6 h-6" />, label: "Skor Terbaik", value: "87.5", color: "green" },
    { icon: <Target className="w-6 h-6" />, label: "Target PTN", value: "UI", color: "purple" },
    { icon: <Clock className="w-6 h-6" />, label: "Waktu Belajar", value: "45h", color: "orange" },
  ];

  const recentTryouts = [
    { name: "Tryout UTBK #15", score: 87.5, date: "2024-01-15", status: "Selesai" },
    { name: "Tryout UTBK #14", score: 82.3, date: "2024-01-12", status: "Selesai" },
    { name: "Tryout UTBK #13", score: 85.1, date: "2024-01-10", status: "Selesai" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper className="mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {session.user?.image ? (
                    <img 
                      src={session.user.image} 
                      alt={session.user.name || "User"} 
                      className="w-16 h-16 rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      Selamat datang, {session.user?.name?.split(" ")[0]}! 👋
                    </h1>
                    <p className="text-gray-600">Mari lanjutkan persiapan UTBK Anda hari ini</p>
                    {userProfile && (
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        {userProfile.school && (
                          <span>🏫 {userProfile.school}</span>
                        )}
                        {userProfile.targetUniversity && (
                          <span>🎯 {userProfile.targetUniversity}</span>
                        )}
                        {userProfile.grade && (
                          <span>📚 Kelas {userProfile.grade}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Edit Profil</span>
                </button>
              </div>
            </div>
          </MotionWrapper>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Tryouts */}
            <MotionWrapper className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Tryout Terbaru</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Lihat Semua
                  </button>
                </div>
                <div className="space-y-4">
                  {recentTryouts.map((tryout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800">{tryout.name}</h3>
                        <p className="text-sm text-gray-600">{tryout.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">{tryout.score}</p>
                        <p className="text-sm text-green-600">{tryout.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Quick Actions */}
            <MotionWrapper delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Aksi Cepat</h2>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    Mulai Tryout
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-3">
                    <BarChart3 className="w-5 h-5" />
                    Lihat Analisis
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-3">
                    <Target className="w-5 h-5" />
                    Update Target
                  </button>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Progress Chart Placeholder */}
          <MotionWrapper delay={0.3} className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Progress Belajar</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Chart progress akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
      <Footer />
      
      {/* Profile Setup Modal */}
      <ProfileSetupModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onSave={handleProfileSave}
      />
    </>
  );
}