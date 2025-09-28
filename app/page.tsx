"use client";

import Link from "next/link";
import Image from "next/image";
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
        {/* Enhanced Hero Section */}
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
                {/* Main Illustration */}
                <motion.div
                  className="relative z-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Hero Image - Students studying for UTBK */}
                    <div className="relative">
                      <Image 
                        src="/images/pejuangptn-hero.png" 
                        alt="Siswa-siswi sedang belajar persiapan UTBK - Pejuang PTN"
                        width={600}
                        height={400}
                        className="w-full h-96 object-cover rounded-2xl"
                        priority
                      />
                      {/* Overlay gradient for better text readability on floating elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-blue-100 z-20"
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
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-purple-100 z-20"
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
                  className="absolute top-1/2 -left-8 bg-white rounded-2xl shadow-lg p-3 border border-green-100 z-20"
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
      description: "Algoritma canggih untuk memprediksi peluang lolos PTN berdasarkan performa tryout",
      color: "green",
      delay: 0.2
    },
    {
      icon: BarChart3,
      title: "Analisis Mendalam",
      description: "Laporan detail kemampuan per mata pelajaran dan rekomendasi belajar personal",
      color: "orange",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Komunitas Belajar",
      description: "Bergabung dengan ribuan pejuang PTN lainnya, sharing tips dan motivasi",
      color: "pink",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Fleksibel 24/7",
      description: "Akses tryout kapan saja, dimana saja dengan sistem yang selalu tersedia",
      color: "indigo",
      delay: 0.5
    }
  ];

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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Pejuang PTN?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Platform komprehensif yang dirancang khusus untuk membantu siswa meraih kampus impian
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-${feature.color}-100 to-${feature.color}-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </CardTitle>
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

// How It Works Section Component
function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Daftar Gratis",
      description: "Buat akun dengan mudah dan mulai akses ke semua fitur platform",
      icon: "🚀"
    },
    {
      number: "02", 
      title: "Pilih Tryout",
      description: "Pilih dari berbagai paket tryout sesuai kebutuhan dan tingkat kesulitan",
      icon: "📋"
    },
    {
      number: "03",
      title: "Kerjakan Soal",
      description: "Kerjakan soal-soal berkualitas dengan sistem timing seperti UTBK asli",
      icon: "✍️"
    },
    {
      number: "04",
      title: "Analisis Hasil",
      description: "Dapatkan analisis mendalam dan rekomendasi untuk meningkatkan performa",
      icon: "📊"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bagaimana Cara{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Kerjanya?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empat langkah mudah untuk memulai perjalanan menuju PTN impian
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="text-center relative"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white font-bold shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Siap Menjadi Pejuang PTN Sejati?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bergabunglah dengan ribuan siswa yang telah berhasil meraih kampus impian mereka
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl" 
              asChild
            >
              <Link href="/auth/register" className="group">
                <Trophy className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Mulai Perjalanan Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pejuang PTN
            </h3>
            <p className="text-gray-400 mb-4">
              Platform tryout online terdepan untuk persiapan UTBK dengan sistem IRT yang akurat.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tryouts" className="hover:text-white transition-colors">Tryout Online</Link></li>
              <li><Link href="/pembahasan" className="hover:text-white transition-colors">Pembahasan</Link></li>
              <li><Link href="/analisis" className="hover:text-white transition-colors">Analisis</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Dukungan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/bantuan" className="hover:text-white transition-colors">Bantuan</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/karir" className="hover:text-white transition-colors">Karir</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pejuang PTN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}