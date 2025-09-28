"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Globe, 
  Calculator, 
  BookOpen, 
  PenTool,
  Languages,
  BarChart3,
  ArrowRight,
  Play,
  Clock,
  Users,
  Star
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function BelajarPage() {
  const subjects = [
    {
      id: "penalaran-umum",
      title: "Penalaran Umum",
      description: "Video dan Latihan Soal",
      icon: Brain,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      videoCount: 45,
      questionCount: 120
    },
    {
      id: "pengetahuan-umum",
      title: "Pengetahuan dan Pemahaman Umum",
      description: "Video dan Latihan Soal",
      icon: Globe,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200", 
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      videoCount: 38,
      questionCount: 95
    },
    {
      id: "kemampuan-memahami-bacaan",
      title: "Kemampuan Memahami Bacaan dan Menulis",
      description: "Video dan Latihan Soal",
      icon: PenTool,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100", 
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      videoCount: 32,
      questionCount: 85
    },
    {
      id: "pengetahuan-kuantitatif",
      title: "Pengetahuan Kuantitatif",
      description: "Video dan Latihan Soal",
      icon: BarChart3,
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600", 
      buttonColor: "bg-red-600 hover:bg-red-700",
      videoCount: 52,
      questionCount: 140
    },
    {
      id: "literasi-bahasa-indonesia",
      title: "Literasi dalam Bahasa Indonesia",
      description: "Video dan Latihan Soal",
      icon: BookOpen,
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      videoCount: 28,
      questionCount: 75
    },
    {
      id: "literasi-bahasa-inggris", 
      title: "Literasi dalam Bahasa Inggris",
      description: "Video dan Latihan Soal",
      icon: Languages,
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      videoCount: 35,
      questionCount: 90
    },
    {
      id: "penalaran-matematika",
      title: "Penalaran Matematika", 
      description: "Video dan Latihan Soal",
      icon: Calculator,
      color: "pink",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      videoCount: 48,
      questionCount: 125
    }
  ];

  const stats = [
    { label: "Total Video", value: "278", icon: Play },
    { label: "Total Soal", value: "730", icon: BookOpen },
    { label: "Siswa Belajar", value: "10K+", icon: Users },
    { label: "Rating", value: "4.9", icon: Star }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Animation */}
          <motion.div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Subjek{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  UTBK
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pilih mata pelajaran yang ingin kamu pelajari. Akses gratis untuk semua materi dan latihan soal.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className={`relative p-8 rounded-2xl border-2 ${subject.bgColor} ${subject.borderColor} hover:shadow-xl transition-all duration-300`}>
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${subject.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <subject.icon className={`w-8 h-8 ${subject.iconColor}`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700">
                      {subject.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{subject.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        <span>{subject.videoCount} Video</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{subject.questionCount} Soal</span>
                      </div>
                    </div>

                    {/* Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full ${subject.buttonColor} text-white shadow-lg group`}
                        asChild
                      >
                        <Link href={`/belajar/${subject.id}`}>
                          Mulai Belajar
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>

                    {/* Decorative element */}
                    <div className={`absolute top-4 right-4 w-2 h-2 ${subject.buttonColor.split(' ')[0]} rounded-full opacity-60`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Menghadapi UTBK?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Daftar sekarang untuk akses lengkap tryout, analisis mendalam, dan prediksi kelulusan
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl" 
                  asChild
                >
                  <Link href="/auth/register">
                    Daftar Gratis Sekarang
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}