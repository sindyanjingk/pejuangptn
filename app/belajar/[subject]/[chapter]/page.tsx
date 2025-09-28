"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Play, 
  BookOpen, 
  Clock, 
  Check,
  ChevronRight,
  PlayCircle,
  FileText,
  Download
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ChapterPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const chapterId = parseInt(params.chapter as string);

  // Mock data - same structure as subject detail page
  const subjectData = {
    "penalaran-umum": {
      title: "Penalaran Umum",
      color: "purple",
      chapters: [
        {
          id: 1,
          title: "Penalaran Logis",
          description: "Dasar-dasar logika dan penalaran deduktif-induktif",
          duration: "2 jam",
          videos: [
            { id: 1, title: "Pengantar Logika", duration: "15 menit", type: "video" },
            { id: 2, title: "Penalaran Deduktif", duration: "20 menit", type: "video" },
            { id: 3, title: "Penalaran Induktif", duration: "18 menit", type: "video" },
            { id: 4, title: "Latihan Soal Penalaran Logis", duration: "30 soal", type: "quiz" }
          ]
        }
      ]
    }
  };

  const colorClasses = {
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700"
    }
  };

  const subject = subjectData[subjectId as keyof typeof subjectData];
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  if (!subject || !chapter) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Chapter Tidak Ditemukan</h1>
            <Link href="/belajar">
              <Button>Kembali ke Daftar Mata Pelajaran</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const colors = colorClasses[subject.color as keyof typeof colorClasses];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`py-12 px-4 sm:px-6 lg:px-8 ${colors.bg}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-sm">
                <Link href="/belajar" className={`${colors.text} hover:underline`}>
                  Belajar
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href={`/belajar/${subjectId}`} className={`${colors.text} hover:underline`}>
                  {subject.title}
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{chapter.title}</span>
              </div>

              <div className="mb-6">
                <Link 
                  href={`/belajar/${subjectId}`}
                  className={`inline-flex items-center gap-2 ${colors.text} hover:underline`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke {subject.title}
                </Link>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {chapter.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    {chapter.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{chapter.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{chapter.videos.filter(v => v.type === 'video').length} Video</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{chapter.videos.filter(v => v.type === 'quiz').length} Quiz</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Progress Chapter</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Kemajuan</span>
                        <span>0/{chapter.videos.length}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${colors.button} h-2 rounded-full`} style={{ width: '0%' }}></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Mulai belajar untuk melihat kemajuan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Daftar Materi dan Quiz
                  </h2>

                  <div className="space-y-4">
                    {chapter.videos.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}>
                              {item.type === 'video' ? (
                                <PlayCircle className={`w-6 h-6 ${colors.text}`} />
                              ) : (
                                <FileText className={`w-6 h-6 ${colors.text}`} />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{item.title}</h3>
                              <p className="text-sm text-gray-500">{item.duration}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button className={colors.button}>
                              {item.type === 'video' ? 'Tonton' : 'Mulai Quiz'}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  {/* Quick Actions */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download Materi PDF
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Rangkuman Chapter
                      </Button>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Navigasi Chapter</h3>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-left">
                        <span className="text-sm">← Chapter Sebelumnya</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-left">
                        <span className="text-sm">Chapter Selanjutnya →</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}