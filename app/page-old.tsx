"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Target, CheckCircle, Star, ArrowRight, Play, TrendingUp, Award, Clock, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/header";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y, opacity }}
        >
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-2000"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                🎯 #1 Platform Persiapan UTBK Indonesia
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                Raih Kampus{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Impianmu
                </motion.span>
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Bersama Kami
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Platform tryout online terlengkap dengan sistem penilaian IRT seperti UTBK asli. 
                Dapatkan analisis mendalam, pembahasan lengkap, dan prediksi kelulusan yang akurat 
                untuk meningkatkan peluang lolos PTN impianmu.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl shadow-blue-200" asChild>
                    <Link href="/auth/register" className="group">
                      <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Mulai Tryout Gratis
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-200 hover:border-purple-300 shadow-lg" asChild>
                    <Link href="/demo" className="group">
                      <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Lihat Demo
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sistem IRT Asli</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>10K+ Siswa Aktif</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Siswa-siswi sedang belajar persiapan UTBK - Pejuang PTN"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-blue-100"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Skor Tertinggi</div>
                    <div className="text-lg font-bold text-blue-600">98.5</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-purple-100"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Siswa Aktif</div>
                    <div className="text-lg font-bold text-purple-600">10K+</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-8 bg-white rounded-2xl shadow-lg p-3 border border-green-100"
                animate={{ 
                  x: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gray-800">Akurasi</div>
                  <div className="text-sm font-bold text-green-600">95%</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Animated Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: "10K+", label: "Siswa Aktif", color: "text-blue-600", icon: Users, bgColor: "bg-blue-50", borderColor: "border-blue-200" },
              { value: "95%", label: "Akurasi Prediksi", color: "text-purple-600", icon: Target, bgColor: "bg-purple-50", borderColor: "border-purple-200" },
              { value: "500+", label: "Soal Berkualitas", color: "text-green-600", icon: BookOpen, bgColor: "bg-green-50", borderColor: "border-green-200" },
              { value: "4.9", label: "Rating Pengguna", color: "text-orange-600", icon: Star, bgColor: "bg-orange-50", borderColor: "border-orange-200" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`text-center p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} shadow-lg`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.6 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                </motion.div>
                <motion.div 
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { value: "10K+", label: "Siswa Aktif", color: "text-blue-600", icon: Users },
              { value: "95%", label: "Akurasi Prediksi", color: "text-purple-600", icon: Target },
              { value: "500+", label: "Soal Berkualitas", color: "text-green-600", icon: BookOpen },
              { value: "4.9", label: "Rating Pengguna", color: "text-orange-600", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.4 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}

// Features Section Component
function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Sistem IRT Akurat",
      description: "Penilaian menggunakan Item Response Theory seperti UTBK asli untuk hasil yang presisi",
      color: "blue",
      delay: 0
    },
    {
      icon: BookOpen,
      title: "Pembahasan Lengkap",
      description: "Video dan teks pembahasan detail untuk setiap soal, membantu pemahaman mendalam",
      color: "purple",
      delay: 0.1
    },
    {
      icon: Trophy,
      title: "Prediksi Kelulusan",
      description: "Analisis peluang kelulusan berdasarkan performa dan rekomendasi jurusan alternatif",
      color: "green",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Ranking Real-time",
      description: "Lihat posisi kamu dibanding peserta lain dan target jurusan impian",
      color: "orange",
      delay: 0.3
    },
    {
      icon: CheckCircle,
      title: "Multi-Attempt",
      description: "Kesempatan mengulang tryout hingga 3x untuk pengguna premium",
      color: "pink",
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "Analytics Mendalam",
      description: "Analisis performa per mata pelajaran dan rekomendasi belajar personal",
      color: "indigo",
      delay: 0.5
    }
  ];

  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600"
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mengapa Memilih Pejuang PTN?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fitur-fitur unggulan yang akan membantu kamu mencapai target PTN impian
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: feature.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <motion.div 
                    className={`w-12 h-12 ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "01",
      title: "Daftar Gratis",
      description: "Buat akun dalam hitungan detik dan mulai journey-mu menuju PTN impian",
      icon: Users
    },
    {
      step: "02", 
      title: "Pilih Tryout",
      description: "Pilih dari berbagai paket tryout sesuai target kampus dan jurusan yang kamu inginkan",
      icon: BookOpen
    },
    {
      step: "03",
      title: "Kerjakan Soal",
      description: "Kerjakan soal dengan sistem yang mirip UTBK asli dalam waktu yang telah ditentukan",
      icon: Clock
    },
    {
      step: "04",
      title: "Analisis Hasil",
      description: "Dapatkan hasil detail dengan prediksi kelulusan dan rekomendasi belajar personal",
      icon: Award
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Cara Kerjanya?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proses sederhana dalam 4 langkah untuk memulai perjalanan menuju PTN impianmu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              )}

              <motion.div
                className="relative z-10 mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.step}
              </motion.div>

              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <step.icon className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%] animate-gradient-x">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Siap Menjadi Pejuang PTN?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bergabunglah dengan ribuan siswa yang telah berhasil masuk PTN impian mereka
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg" asChild>
              <Link href="/register" className="group">
                Daftar Sekarang - Gratis!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-blue-600 shadow-lg" asChild>
              <Link href="/pricing">
                Lihat Paket Premium
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Pejuang PTN</span>
            </div>
            <p className="text-gray-400">
              Platform tryout terlengkap untuk persiapan UTBK dan PTN impianmu.
            </p>
          </motion.div>
          
          {[
            {
              title: "Produk",
              links: [
                { name: "Tryout Gratis", href: "/tryouts" },
                { name: "Tryout Premium", href: "/premium" },
                { name: "Analytics", href: "/analytics" }
              ]
            },
            {
              title: "Perusahaan", 
              links: [
                { name: "Tentang Kami", href: "/about" },
                { name: "Kontak", href: "/contact" },
                { name: "Karir", href: "/careers" }
              ]
            },
            {
              title: "Bantuan",
              links: [
                { name: "FAQ", href: "/faq" },
                { name: "Dukungan", href: "/support" },
                { name: "Privasi", href: "/privacy" }
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Pejuang PTN. Made with ❤️ for Indonesian students.</p>
        </motion.div>
      </div>
    </footer>
  );
}
