import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Pejuang PTN | Perlindungan Data Pengguna",
  description: "Kebijakan privasi lengkap Pejuang PTN. Pelajari bagaimana kami melindungi, mengumpulkan, dan menggunakan data pribadi Anda dengan aman dan transparan.",
  keywords: "kebijakan privasi, perlindungan data, gdpr compliance, keamanan data pejuang ptn",
  openGraph: {
    title: "Kebijakan Privasi - Pejuang PTN",
    description: "Kebijakan privasi lengkap dan transparan untuk melindungi data pribadi pengguna Pejuang PTN.",
    type: "website",
    locale: "id_ID",
  },
};

export default function PrivacyPage() {
  const dataTypes = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Data Identitas",
      description: "Nama lengkap, email, nomor telepon, dan informasi dasar lainnya yang Anda berikan saat registrasi",
      color: "blue",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Akademik",
      description: "Hasil tryout, progress belajar, preferensi jurusan, dan data akademik untuk personalisasi",
      color: "green",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Data Aktivitas",
      description: "Log aktivitas di platform, waktu akses, dan interaksi dengan fitur-fitur kami",
      color: "purple",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Teknis",
      description: "IP address, browser, device information untuk keamanan dan optimasi platform",
      color: "orange",
    },
  ];

  const protectionMeasures = [
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Enkripsi End-to-End",
      description: "Semua data sensitif dienkripsi menggunakan standar AES-256 saat transit dan penyimpanan",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Akses Terbatas",
      description: "Hanya tim yang berwenang dengan persetujuan khusus yang dapat mengakses data pribadi",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Server Aman",
      description: "Data disimpan di server dengan sertifikasi ISO 27001 dan backup rutin",
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: "Monitoring 24/7",
      description: "Sistem monitoring keamanan aktif 24 jam untuk mendeteksi ancaman",
    },
  ];

  const userRights = [
    "Hak untuk mengetahui data apa saja yang kami kumpulkan tentang Anda",
    "Hak untuk mengakses dan mendapatkan salinan data pribadi Anda",
    "Hak untuk memperbarui atau mengkoreksi data yang tidak akurat",
    "Hak untuk menghapus data pribadi Anda dari sistem kami",
    "Hak untuk membatasi atau menolak pemrosesan data tertentu",
    "Hak portabilitas data untuk memindahkan data ke platform lain",
    "Hak untuk mengajukan keluhan ke otoritas perlindungan data",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kami berkomitmen penuh untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan ini menjelaskan secara transparan bagaimana kami mengumpulkan, menggunakan, 
              dan melindungi informasi Anda.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Terakhir diperbarui: 15 September 2025
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ringkasan Kebijakan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Poin-poin penting yang perlu Anda ketahui tentang bagaimana kami menangani data Anda
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <MotionWrapper hover className="text-center p-6 bg-blue-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Data Minimal</h3>
              <p className="text-gray-600">Kami hanya mengumpulkan data yang benar-benar diperlukan untuk memberikan layanan terbaik</p>
            </MotionWrapper>

            <MotionWrapper hover delay={0.1} className="text-center p-6 bg-green-50 rounded-xl">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Keamanan Tinggi</h3>
              <p className="text-gray-600">Data Anda dilindungi dengan enkripsi kelas enterprise dan protokol keamanan terdepan</p>
            </MotionWrapper>

            <MotionWrapper hover delay={0.2} className="text-center p-6 bg-purple-50 rounded-xl">
              <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparansi Penuh</h3>
              <p className="text-gray-600">Anda selalu tahu data apa yang kami miliki dan bagaimana kami menggunakannya</p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Data yang Kami Kumpulkan</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Berikut adalah jenis data yang kami kumpulkan dan tujuan penggunaannya
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className={`w-16 h-16 bg-${dataType.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`text-${dataType.color}-600`}>{dataType.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dataType.title}</h3>
                <p className="text-gray-600 leading-relaxed">{dataType.description}</p>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Bagaimana Kami Menggunakan Data</h2>
          </MotionWrapper>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <MotionWrapper className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Penyediaan Layanan
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Memproses registrasi dan mengelola akun Anda</li>
                  <li>• Menyediakan akses ke tryout dan materi pembelajaran</li>
                  <li>• Menghitung skor dan memberikan analisis hasil</li>
                  <li>• Memberikan rekomendasi belajar yang dipersonalisasi</li>
                </ul>
              </MotionWrapper>

              <MotionWrapper delay={0.1} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-green-600 mr-3" />
                  Peningkatan Platform
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Menganalisis pola penggunaan untuk optimasi fitur</li>
                  <li>• Mengidentifikasi dan memperbaiki bug atau masalah teknis</li>
                  <li>• Mengembangkan fitur baru berdasarkan kebutuhan pengguna</li>
                  <li>• Meningkatkan akurasi algoritma penilaian IRT</li>
                </ul>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  Keamanan & Kepatuhan
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mencegah dan mendeteksi aktivitas penipuan atau penyalahgunaan</li>
                  <li>• Melindungi keamanan platform dan data pengguna</li>
                  <li>• Mematuhi kewajiban hukum dan regulasi yang berlaku</li>
                  <li>• Menanggapi permintaan dari otoritas yang berwenang</li>
                </ul>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Perlindungan Data</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Langkah-langkah keamanan yang kami terapkan untuk melindungi data pribadi Anda
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {protectionMeasures.map((measure, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                className="text-center text-white"
              >
                <div className="mb-6 flex justify-center">{measure.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{measure.title}</h3>
                <p className="text-blue-100 leading-relaxed">{measure.description}</p>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hak-Hak Anda</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sebagai pengguna, Anda memiliki berbagai hak terkait data pribadi Anda
            </p>
          </MotionWrapper>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {userRights.map((right, index) => (
                <MotionWrapper
                  key={index}
                  delay={index * 0.1}
                  className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{right}</p>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Penyimpanan Data</h2>
              <p className="text-gray-600 text-lg">
                Berapa lama kami menyimpan data Anda dan kapan data akan dihapus
              </p>
            </MotionWrapper>

            <div className="space-y-6">
              <MotionWrapper className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Data Akun Aktif</h3>
                <p className="text-gray-600 mb-4">
                  Data pribadi dan akademik Anda akan disimpan selama akun Anda aktif dan hingga 2 tahun 
                  setelah aktivitas terakhir untuk memberikan layanan yang optimal.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.1} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Data Setelah Penghapusan Akun</h3>
                <p className="text-gray-600 mb-4">
                  Setelah Anda menghapus akun, sebagian besar data akan dihapus dalam 30 hari. 
                  Beberapa data mungkin disimpan lebih lama untuk keperluan hukum atau keamanan.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Data Analitik</h3>
                <p className="text-gray-600 mb-4">
                  Data yang telah dianonimkan untuk keperluan analitik dan penelitian dapat disimpan 
                  lebih lama untuk membantu pengembangan platform.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Pertanyaan tentang Privasi?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tim Privacy Officer kami siap membantu Anda dengan pertanyaan atau permintaan 
              terkait data pribadi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center"
              >
                Hubungi Privacy Officer
              </a>
              <a
                href="mailto:privacy@pejuangptn.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                privacy@pejuangptn.com
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