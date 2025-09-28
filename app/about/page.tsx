import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { Users, Target, Award, Heart, Trophy, Shield, Clock, BookOpen } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tentang Kami - Pejuang PTN | Platform Tryout UTBK Terdepan",
  description: "Pelajari lebih lanjut tentang Pejuang PTN, platform tryout UTBK terdepan yang telah membantu ribuan siswa meraih impian masuk PTN favorit. Misi, visi, dan nilai-nilai kami.",
  keywords: "tentang pejuang ptn, platform tryout utbk, misi visi, tim edutech indonesia",
  openGraph: {
    title: "Tentang Kami - Pejuang PTN",
    description: "Platform tryout UTBK terdepan yang telah membantu ribuan siswa meraih impian masuk PTN favorit.",
    type: "website",
    locale: "id_ID",
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Ahmad Santoso, M.Ed",
      role: "Founder & CEO",
      experience: "15+ tahun di bidang pendidikan",
      description: "Mantan Dekan FKIP Universitas Indonesia dengan spesialisasi Educational Technology",
    },
    {
      name: "Prof. Siti Nurhaliza, Ph.D",
      role: "Head of Academics",
      experience: "20+ tahun mengajar dan riset pendidikan",
      description: "Profesor Matematika UI, ahli dalam pengembangan kurikulum UTBK",
    },
    {
      name: "Budi Prasetyo, M.T",
      role: "Chief Technology Officer",
      experience: "Ex-Google engineer, 12+ tahun EdTech",
      description: "Spesialis dalam AI dan Machine Learning untuk platform pendidikan",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Kualitas Terjamin",
      description: "Setiap soal dan materi telah melalui review ketat dari tim ahli berpengalaman puluhan tahun.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Student-Centered",
      description: "Segala fitur dan layanan dirancang dengan fokus pada kebutuhan dan kesuksesan siswa.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi menggunakan teknologi AI dan data analytics untuk hasil optimal.",
    },
  ];

  const achievements = [
    { number: "50,000+", label: "Siswa Terdaftar", icon: <Users className="w-8 h-8" /> },
    { number: "85%", label: "Tingkat Kelulusan PTN", icon: <Trophy className="w-8 h-8" /> },
    { number: "1,500+", label: "Soal Berkualitas", icon: <BookOpen className="w-8 h-8" /> },
    { number: "4.9/5", label: "Rating Pengguna", icon: <Award className="w-8 h-8" /> },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Didirikan",
      description: "Pejuang PTN didirikan dengan visi demokratisasi akses pendidikan berkualitas",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "10,000 Pengguna",
      description: "Mencapai 10,000 pengguna aktif dalam tahun pertama operasi",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Sistem IRT",
      description: "Mengimplementasikan Item Response Theory untuk penilaian yang akurat",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "AI Analytics",
      description: "Meluncurkan fitur AI untuk analisis mendalam dan rekomendasi personal",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "50K+ Users",
      description: "Menjadi platform tryout UTBK terpercaya dengan 50,000+ pengguna aktif",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Tentang Pejuang PTN
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Platform tryout UTBK terdepan yang telah membantu ribuan siswa meraih impian masuk PTN favorit. 
                Kami berkomitmen memberikan pengalaman belajar terbaik dengan teknologi terdepan dan pendekatan yang student-centered.
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <MotionWrapper direction="left" className="text-center md:text-left">
                <Target className="w-16 h-16 text-blue-600 mx-auto md:mx-0 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Misi Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Memberikan akses pendidikan berkualitas tinggi untuk semua siswa Indonesia, 
                  membantu mereka mempersiapkan diri menghadapi UTBK dengan percaya diri dan 
                  meraih impian masuk PTN favorit.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami percaya bahwa setiap siswa berhak mendapatkan kesempatan yang sama untuk 
                  meraih pendidikan terbaik, terlepas dari latar belakang ekonomi atau geografis.
                </p>
              </MotionWrapper>

              <MotionWrapper direction="right" delay={0.2} className="text-center md:text-left">
                <Award className="w-16 h-16 text-purple-600 mx-auto md:mx-0 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Menjadi platform edukasi #1 di Indonesia yang menggunakan teknologi AI 
                  dan data analytics untuk memberikan pengalaman belajar yang personal 
                  dan efektif bagi setiap siswa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami membayangkan masa depan dimana teknologi dapat membantu setiap siswa 
                  mencapai potensi terbaiknya dalam persiapan menuju jenjang pendidikan tinggi.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Nilai-Nilai Kami</h2>
              <p className="text-blue-100 text-lg">Prinsip yang memandu setiap langkah kami</p>
            </MotionWrapper>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <MotionWrapper key={index} stagger index={index} className="text-center text-white">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </MotionWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Perjalanan Kami</h2>
              <p className="text-gray-600 text-lg">Milestone penting dalam pengembangan Pejuang PTN</p>
            </MotionWrapper>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <MotionWrapper key={index} delay={index * 0.1} className="flex mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-2">
                      {milestone.icon}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Leadership Kami</h2>
              <p className="text-gray-600 text-lg">Profesional berpengalaman yang berdedikasi untuk kesuksesan Anda</p>
            </MotionWrapper>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <MotionWrapper
                  key={index}
                  stagger
                  index={index}
                  hover
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(" ")[0].charAt(0)}
                    {member.name.split(" ")[1]?.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2 text-center">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3 text-center">{member.experience}</p>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
                </MotionWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Pencapaian Kami</h2>
              <p className="text-gray-600 text-lg">Angka yang menunjukkan dampak positif kami</p>
            </MotionWrapper>

            <StaggerContainer className="grid md:grid-cols-4 gap-8">
              {achievements.map((stat, index) => (
                <MotionWrapper
                  key={index}
                  stagger
                  index={index}
                  hover
                  className="text-center bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex justify-center text-blue-600 mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </MotionWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergabunglah dengan Ribuan Pejuang PTN Lainnya
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Mulai persiapan UTBK Anda hari ini dan raih impian masuk PTN favorit bersama kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Daftar Gratis Sekarang
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}