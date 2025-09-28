"use client";

import { useState } from "react";
import { Session } from "next-auth";
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

interface DashboardClientProps {
  session: Session;
  userProfile: UserProfile;
  showProfileModal: boolean;
}

export default function DashboardClient({ 
  session, 
  userProfile, 
  showProfileModal: initialShowModal 
}: DashboardClientProps) {
  const [showProfileModal, setShowProfileModal] = useState(initialShowModal);
  const [currentProfile, setCurrentProfile] = useState(userProfile);

  const handleProfileSave = async (profileData: any) => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        setCurrentProfile(updatedProfile.user);
        setShowProfileModal(false);
        // Refresh the page to get updated server-side data
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, label: "Tryout Dikerjakan", value: "12", color: "blue" },
    { icon: <Trophy className="w-6 h-6" />, label: "Skor Terbaik", value: "87.5", color: "green" },
    { icon: <Target className="w-6 h-6" />, label: "Target PTN", value: currentProfile.targetUniversity || "Belum diset", color: "purple" },
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      Selamat datang, {currentProfile.firstName}!
                    </h1>
                    <p className="text-gray-600">
                      Mari lanjutkan persiapan UTBK Anda hari ini
                    </p>
                    {currentProfile.school && (
                      <p className="text-sm text-blue-600 mt-1">
                        {currentProfile.school} - Kelas {currentProfile.grade}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profil
                </button>
              </div>
            </div>
          </MotionWrapper>

          {/* Stats Grid */}
          <MotionWrapper delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
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
            ))}
          </MotionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <MotionWrapper delay={0.2} className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Aksi Cepat
                </h2>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors">
                    Mulai Tryout Baru
                  </button>
                  <button className="w-full bg-green-100 text-green-700 py-3 px-4 rounded-lg font-medium hover:bg-green-200 transition-colors">
                    Lihat Pembahasan
                  </button>
                  <button className="w-full bg-orange-100 text-orange-700 py-3 px-4 rounded-lg font-medium hover:bg-orange-200 transition-colors">
                    Analisis Performa
                  </button>
                </div>
              </div>
            </MotionWrapper>

            {/* Recent Tryouts */}
            <MotionWrapper delay={0.3} className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Tryout Terbaru
                </h2>
                <div className="space-y-4">
                  {recentTryouts.map((tryout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-800">{tryout.name}</h3>
                        <p className="text-sm text-gray-600">{tryout.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{tryout.score}</p>
                        <p className="text-sm text-gray-600">{tryout.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Progress Chart */}
          <MotionWrapper delay={0.4} className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Perkembangan Skor
              </h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-600">Chart akan ditampilkan di sini</p>
                <p className="text-sm text-gray-500 mt-2">Grafik perkembangan skor tryout Anda</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Profile Setup Modal */}
      {showProfileModal && (
        <ProfileSetupModal
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onSave={handleProfileSave}

        />
      )}
      
      <Footer />
    </>
  );
}