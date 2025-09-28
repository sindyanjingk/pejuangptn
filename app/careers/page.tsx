import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { Users, Target, Award, Briefcase, Heart, Code } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Karir - Pejuang PTN | Bergabunglah dengan Tim Kami",
  description: "Bergabunglah dengan tim Pejuang PTN dan bantu ribuan siswa mencapai impian PTN mereka. Temukan kesempatan karir yang menarik di perusahaan EdTech terdepan.",
  keywords: "karir pejuang ptn, lowongan kerja, join tim, career opportunities edtech",
};

export default function CareersPage() {
  const positions = [
    {
      title: "Frontend Developer",
      department: "Technology",
      type: "Full-time",
      location: "Jakarta / Remote",
      icon: <Code className="w-8 h-8" />,
      description: "Mengembangkan interface pengguna yang intuitif dan responsif menggunakan React, Next.js, dan teknologi modern lainnya."
    },
    {
      title: "Content Creator",
      department: "Education",
      type: "Full-time",
      location: "Jakarta",
      icon: <Award className="w-8 h-8" />,
      description: "Membuat konten edukatif berkualitas tinggi termasuk soal, pembahasan, dan materi pembelajaran untuk UTBK."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      type: "Full-time",
      location: "Jakarta",
      icon: <Users className="w-8 h-8" />,
      description: "Memastikan kepuasan pengguna dan membantu mereka mencapai tujuan belajar melalui platform kami."
    }
  ];

  const benefits = [
    "Gaji kompetitif + bonus performa",
    "Asuransi kesehatan premium",
    "Work from home flexibility",
    "Learning & development budget",
    "Team building & company retreat",
    "Stock option program",
    "Unlimited paid time off",
    "Latest tech equipment"
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-20">
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Bergabung dengan Tim Kami
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bantu ribuan siswa Indonesia mencapai impian PTN mereka. Kami sedang mencari 
              talenta terbaik untuk bergabung dalam misi mulia ini.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Posisi yang Tersedia</h2>
            <p className="text-gray-600 text-lg">Temukan peran yang cocok dengan passion dan skill Anda</p>
          </MotionWrapper>

          <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <div className="text-blue-600">{position.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{position.description}</p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Bekerja di Pejuang PTN?</h2>
            <p className="text-gray-600 text-lg">Benefits dan budaya kerja yang mendukung growth Anda</p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <MotionWrapper
                key={index}
                delay={index * 0.1}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
              >
                <Heart className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Bergabung dengan Misi Kami?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kirim CV dan portfolio Anda, atau hubungi tim HR untuk informasi lebih lanjut
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@pejuangptn.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Kirim CV Anda
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Hubungi HR
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