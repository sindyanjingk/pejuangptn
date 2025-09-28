"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Play, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  Download,
  Share
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function SubjectDetailPage() {
  const params = useParams();
  const subjectId = params.subject as string;

  // Mock data - in real app this would come from API/database
  const subjectData = {
    "penalaran-umum": {
      title: "Penalaran Umum",
      description: "Pelajari kemampuan penalaran logis dan analitis yang dibutuhkan dalam UTBK",
      color: "purple",
      videoCount: 45,
      questionCount: 120,
      estimatedTime: "8 jam",
      difficulty: "Menengah",
      chapters: [
        {
          id: 1,
          title: "Penalaran Logis",
          description: "Dasar-dasar logika dan penalaran deduktif-induktif",
          duration: "2 jam",
          videos: 12,
          questions: 30,
          completed: false
        },
        {
          id: 2,
          title: "Analogi dan Pola",
          description: "Mengenali pola dan hubungan antar konsep",
          duration: "1.5 jam",
          videos: 8,
          questions: 25,
          completed: false
        },
        {
          id: 3,
          title: "Penalaran Verbal",
          description: "Kemampuan penalaran dalam bentuk verbal dan tekstual",
          duration: "2 jam",
          videos: 10,
          questions: 35,
          completed: false
        },
        {
          id: 4,
          title: "Penalaran Kuantitatif Dasar",
          description: "Penalaran menggunakan angka dan data sederhana",
          duration: "2.5 jam",
          videos: 15,
          questions: 30,
          completed: false
        }
      ]
    },
    "pengetahuan-umum": {
      title: "Pengetahuan dan Pemahaman Umum",
      description: "Materi pengetahuan umum yang sering muncul dalam UTBK",
      color: "blue",
      videoCount: 38,
      questionCount: 95,
      estimatedTime: "6 jam",
      difficulty: "Mudah",
      chapters: [
        {
          id: 1,
          title: "Sejarah Indonesia",
          description: "Peristiwa penting dalam sejarah Indonesia",
          duration: "1.5 jam",
          videos: 10,
          questions: 25,
          completed: false
        },
        {
          id: 2,
          title: "Geografi Indonesia",
          description: "Kondisi geografis dan demografis Indonesia",
          duration: "1.5 jam",
          videos: 9,
          questions: 20,
          completed: false
        },
        {
          id: 3,
          title: "Budaya dan Sosial",
          description: "Keanekaragaman budaya dan isu sosial terkini",
          duration: "1.5 jam",
          videos: 8,
          questions: 25,
          completed: false
        },
        {
          id: 4,
          title: "Ilmu Pengetahuan Dasar",
          description: "Konsep dasar sains yang perlu diketahui",
          duration: "1.5 jam",
          videos: 11,
          questions: 25,
          completed: false
        }
      ]
    },
    "kemampuan-memahami-bacaan": {
      title: "Kemampuan Memahami Bacaan dan Menulis",
      description: "Tingkatkan kemampuan memahami dan menganalisis teks serta menulis dengan baik",
      color: "green",
      videoCount: 32,
      questionCount: 85,
      estimatedTime: "5 jam",
      difficulty: "Mudah",
      chapters: [
        {
          id: 1,
          title: "Pemahaman Bacaan",
          description: "Teknik membaca cepat dan memahami isi teks",
          duration: "1.5 jam",
          videos: 8,
          questions: 20,
          completed: false
        },
        {
          id: 2,
          title: "Analisis Teks",
          description: "Menganalisis struktur dan makna dalam teks",
          duration: "1.5 jam",
          videos: 9,
          questions: 25,
          completed: false
        },
        {
          id: 3,
          title: "Teknik Menulis",
          description: "Dasar-dasar penulisan yang efektif",
          duration: "1 jam",
          videos: 7,
          questions: 20,
          completed: false
        },
        {
          id: 4,
          title: "Tata Bahasa",
          description: "Aturan tata bahasa Indonesia yang benar",
          duration: "1 jam",
          videos: 8,
          questions: 20,
          completed: false
        }
      ]
    },
    "pengetahuan-kuantitatif": {
      title: "Pengetahuan Kuantitatif",
      description: "Kuasai konsep matematika dasar dan penerapannya dalam soal UTBK",
      color: "red",
      videoCount: 52,
      questionCount: 140,
      estimatedTime: "10 jam",
      difficulty: "Sulit",
      chapters: [
        {
          id: 1,
          title: "Aljabar",
          description: "Persamaan, pertidaksamaan, dan fungsi",
          duration: "3 jam",
          videos: 15,
          questions: 40,
          completed: false
        },
        {
          id: 2,
          title: "Geometri",
          description: "Bangun datar dan bangun ruang",
          duration: "2.5 jam",
          videos: 12,
          questions: 35,
          completed: false
        },
        {
          id: 3,
          title: "Statistika dan Peluang",
          description: "Analisis data dan konsep peluang",
          duration: "2 jam",
          videos: 10,
          questions: 30,
          completed: false
        },
        {
          id: 4,
          title: "Trigonometri",
          description: "Fungsi trigonometri dan aplikasinya",
          duration: "2.5 jam",
          videos: 15,
          questions: 35,
          completed: false
        }
      ]
    },
    "literasi-bahasa-indonesia": {
      title: "Literasi dalam Bahasa Indonesia",
      description: "Perkuat kemampuan berbahasa Indonesia sesuai kaidah yang benar",
      color: "orange",
      videoCount: 28,
      questionCount: 75,
      estimatedTime: "4 jam",
      difficulty: "Mudah",
      chapters: [
        {
          id: 1,
          title: "Ejaan dan Tanda Baca",
          description: "Penguasaan EYD dan penggunaan tanda baca",
          duration: "1 jam",
          videos: 7,
          questions: 20,
          completed: false
        },
        {
          id: 2,
          title: "Kosakata dan Makna",
          description: "Pemahaman kosakata dan makna kata",
          duration: "1 jam",
          videos: 6,
          questions: 18,
          completed: false
        },
        {
          id: 3,
          title: "Struktur Kalimat",
          description: "Pola kalimat efektif dalam bahasa Indonesia",
          duration: "1 jam",
          videos: 7,
          questions: 17,
          completed: false
        },
        {
          id: 4,
          title: "Ragam Bahasa",
          description: "Penggunaan bahasa formal dan informal",
          duration: "1 jam",
          videos: 8,
          questions: 20,
          completed: false
        }
      ]
    },
    "literasi-bahasa-inggris": {
      title: "Literasi dalam Bahasa Inggris",
      description: "Tingkatkan kemampuan bahasa Inggris untuk kebutuhan akademik",
      color: "cyan",
      videoCount: 35,
      questionCount: 90,
      estimatedTime: "6 jam",
      difficulty: "Menengah",
      chapters: [
        {
          id: 1,
          title: "Reading Comprehension",
          description: "Pemahaman teks bahasa Inggris",
          duration: "2 jam",
          videos: 10,
          questions: 25,
          completed: false
        },
        {
          id: 2,
          title: "Grammar and Structure",
          description: "Tata bahasa dan struktur kalimat",
          duration: "1.5 jam",
          videos: 9,
          questions: 23,
          completed: false
        },
        {
          id: 3,
          title: "Vocabulary",
          description: "Penguasaan kosakata akademik",
          duration: "1.5 jam",
          videos: 8,
          questions: 22,
          completed: false
        },
        {
          id: 4,
          title: "Writing Skills",
          description: "Kemampuan menulis dalam bahasa Inggris",
          duration: "1 jam",
          videos: 8,
          questions: 20,
          completed: false
        }
      ]
    },
    "penalaran-matematika": {
      title: "Penalaran Matematika",
      description: "Asah kemampuan berpikir matematis dan pemecahan masalah",
      color: "indigo",
      videoCount: 48,
      questionCount: 125,
      estimatedTime: "9 jam",
      difficulty: "Sulit",
      chapters: [
        {
          id: 1,
          title: "Logika Matematika",
          description: "Penalaran deduktif dan induktif dalam matematika",
          duration: "2 jam",
          videos: 11,
          questions: 30,
          completed: false
        },
        {
          id: 2,
          title: "Pola dan Barisan",
          description: "Mengenali dan melanjutkan pola bilangan",
          duration: "2 jam",
          videos: 12,
          questions: 32,
          completed: false
        },
        {
          id: 3,
          title: "Pemecahan Masalah",
          description: "Strategi menyelesaikan soal cerita matematika",
          duration: "2.5 jam",
          videos: 13,
          questions: 33,
          completed: false
        },
        {
          id: 4,
          title: "Analisis Data",
          description: "Interpretasi grafik, tabel, dan diagram",
          duration: "2.5 jam",
          videos: 12,
          questions: 30,
          completed: false
        }
      ]
    }
  };

  const currentSubject = subjectData[subjectId as keyof typeof subjectData];

  if (!currentSubject) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Mata Pelajaran Tidak Ditemukan</h1>
            <Link href="/belajar">
              <Button>Kembali ke Daftar Mata Pelajaran</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const colorClasses = {
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700"
    },
    blue: {
      bg: "bg-blue-50", 
      border: "border-blue-200",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200", 
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700"
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-600", 
      button: "bg-red-600 hover:bg-red-700"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-600",
      button: "bg-orange-600 hover:bg-orange-700"
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-600",
      button: "bg-cyan-600 hover:bg-cyan-700"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-600",
      button: "bg-indigo-600 hover:bg-indigo-700"
    }
  };

  const colors = colorClasses[currentSubject.color as keyof typeof colorClasses];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${colors.bg}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link 
                  href="/belajar"
                  className={`inline-flex items-center gap-2 ${colors.text} hover:underline`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Daftar Mata Pelajaran
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {currentSubject.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    {currentSubject.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Play className={`w-6 h-6 mx-auto mb-2 ${colors.text}`} />
                      <div className="font-bold text-gray-900">{currentSubject.videoCount}</div>
                      <div className="text-sm text-gray-600">Video</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <BookOpen className={`w-6 h-6 mx-auto mb-2 ${colors.text}`} />
                      <div className="font-bold text-gray-900">{currentSubject.questionCount}</div>
                      <div className="text-sm text-gray-600">Soal</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Clock className={`w-6 h-6 mx-auto mb-2 ${colors.text}`} />
                      <div className="font-bold text-gray-900">{currentSubject.estimatedTime}</div>
                      <div className="text-sm text-gray-600">Durasi</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Star className={`w-6 h-6 mx-auto mb-2 ${colors.text}`} />
                      <div className="font-bold text-gray-900">{currentSubject.difficulty}</div>
                      <div className="text-sm text-gray-600">Tingkat</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className={`${colors.button} text-white`}>
                      Mulai Belajar Sekarang
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Materi
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Belajar</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Kemajuan</span>
                        <span>0/4 Bab</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${colors.button} h-2 rounded-full`} style={{ width: '0%' }}></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Belum ada progress. Mulai belajar untuk melihat kemajuan Anda!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chapters Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Daftar Materi
              </h2>

              <div className="space-y-6">
                {currentSubject.chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}>
                            <span className={`font-bold ${colors.text}`}>{chapter.id}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{chapter.title}</h3>
                            <p className="text-gray-600">{chapter.description}</p>
                          </div>
                        </div>

                        <div className="flex gap-6 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{chapter.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            <span>{chapter.videos} Video</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{chapter.questions} Soal</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {chapter.completed ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Selesai</span>
                          </div>
                        ) : (
                          <Button className={colors.button} asChild>
                            <Link href={`/belajar/${subjectId}/${chapter.id}`}>
                              Mulai Belajar
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Butuh Latihan Tryout?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Uji kemampuan Anda dengan tryout online yang mirip UTBK asli
              </p>
              
              <Button size="lg" asChild>
                <Link href="/tryouts">
                  Coba Tryout Gratis
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}