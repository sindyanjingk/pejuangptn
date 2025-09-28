import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { BookOpen, Clock, Users, Award, Target, TrendingUp } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tryout UTBK - Pejuang PTN | Simulasi Ujian Masuk PTN",
  description: "Ikuti tryout UTBK dengan sistem penilaian IRT seperti ujian asli. Tersedia tryout gratis dan premium dengan analisis mendalam dan prediksi kelulusan PTN.",
  keywords: "tryout utbk, simulasi utbk, tes masuk ptn, tryout online gratis, latihan soal utbk",
};

export default function TryoutsPage() {
  const tryoutTypes = [
    {
      title: "Tryout Gratis",
      description: "Coba platform kami dengan tryout gratis berkualitas tinggi",
      icon: <BookOpen className="w-12 h-12" />,
      color: "blue",
      features: ["5 tryout per bulan", "Pembahasan dasar", "Ranking terbatas", "Forum diskusi"],
      price: "Gratis",
      cta: "Mulai Sekarang"
    },
    {
      title: "Tryout Premium",
      description: "Akses penuh ke semua fitur untuk persiapan optimal",
      icon: <Award className="w-12 h-12" />,
      color: "purple",
      features: ["Tryout unlimited", "Video pembahasan", "Analisis IRT", "Prediksi PTN"],
      price: "Rp 99.000/bulan",
      cta: "Upgrade Premium"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timer Realistis",
      description: "Waktu yang sama dengan UTBK asli untuk simulasi yang akurat"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sistem IRT",
      description: "Penilaian menggunakan Item Response Theory seperti UTBK"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analisis Mendalam",
      description: "Laporan detail tentang kekuatan dan kelemahan Anda"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ranking Nasional",
      description: "Lihat posisi Anda dibanding peserta lain se-Indonesia"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-20">
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Tryout UTBK Online
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Simulasi UTBK dengan sistem penilaian IRT yang akurat. Persiapkan diri Anda 
              dengan tryout berkualitas tinggi dan analisis mendalam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Mulai Tryout Gratis
              </a>
              <a
                href="/pricing"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Lihat Semua Paket
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Tryout Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pilihan Tryout</h2>
            <p className="text-gray-600 text-lg">Pilih jenis tryout sesuai kebutuhan Anda</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tryoutTypes.map((type, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-300"
              >
                <div className={`w-20 h-20 bg-${type.color}-100 rounded-xl mx-auto mb-6 flex items-center justify-center`}>
                  <div className={`text-${type.color}-600`}>{type.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{type.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-4">{type.price}</div>
                  <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                    index === 0 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  }`}>
                    {type.cta}
                  </button>
                </div>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fitur Unggulan</h2>
            <p className="text-gray-600 text-lg">Pengalaman tryout yang mendekati UTBK asli</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Menghadapi UTBK?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Mulai persiapan Anda hari ini dengan tryout berkualitas tinggi dari Pejuang PTN
            </p>
            <a
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Daftar dan Mulai Tryout
            </a>
          </MotionWrapper>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}