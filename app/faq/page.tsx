import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { HelpCircle, ChevronDown, BookOpen, CreditCard, Settings, Users, Award, Clock } from "lucide-react";
import FAQAccordion from "@/components/faq-accordion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "FAQ - Pejuang PTN | Pertanyaan Yang Sering Diajukan",
  description: "Temukan jawaban untuk pertanyaan yang sering diajukan tentang Pejuang PTN, platform tryout UTBK terdepan. Panduan lengkap untuk pengguna baru dan lama.",
  keywords: "faq pejuang ptn, pertanyaan sering diajukan, panduan tryout utbk, bantuan pengguna",
  openGraph: {
    title: "FAQ - Pejuang PTN",
    description: "Temukan jawaban untuk pertanyaan yang sering diajukan tentang platform tryout UTBK Pejuang PTN.",
    type: "website",
    locale: "id_ID",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Umum & Pendaftaran",
      description: "Pertanyaan dasar tentang platform dan cara mendaftar",
      color: "blue",
      questions: [
        {
          question: "Apa itu Pejuang PTN?",
          answer: "Pejuang PTN adalah platform tryout UTBK online terdepan yang menggunakan sistem penilaian Item Response Theory (IRT) seperti UTBK asli. Kami membantu siswa mempersiapkan diri menghadapi UTBK dengan menyediakan soal berkualitas, analisis mendalam, dan prediksi kelulusan yang akurat."
        },
        {
          question: "Bagaimana cara mendaftar akun?",
          answer: "Sangat mudah! Klik tombol 'Daftar Gratis' di halaman utama, isi data pribadi Anda (nama, email, nomor telepon), lalu verifikasi email. Akun Anda akan langsung aktif dan bisa mulai mengakses tryout gratis."
        },
        {
          question: "Apakah pendaftaran benar-benar gratis?",
          answer: "Ya, pendaftaran 100% gratis tanpa biaya tersembunyi. Anda juga mendapat akses ke beberapa tryout gratis setelah mendaftar. Untuk akses penuh ke semua fitur premium, tersedia paket berlangganan."
        },
        {
          question: "Siapa yang bisa menggunakan Pejuang PTN?",
          answer: "Platform kami diperuntukkan untuk siswa SMA/SMK kelas 12, alumni, atau siapa saja yang ingin mempersiapkan UTBK. Tidak ada batasan usia atau latar belakang pendidikan."
        }
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Tryout & Penilaian",
      description: "Cara kerja tryout dan sistem penilaian IRT",
      color: "green",
      questions: [
        {
          question: "Apa itu sistem penilaian IRT?",
          answer: "Item Response Theory (IRT) adalah metode penilaian canggih yang digunakan UTBK asli. Sistem ini tidak hanya menghitung jawaban benar/salah, tetapi juga mempertimbangkan tingkat kesulitan soal dan pola jawaban untuk menghasilkan skor yang lebih akurat."
        },
        {
          question: "Berapa lama waktu mengerjakan tryout?",
          answer: "Sama seperti UTBK asli: TPS (Tes Potensi Skolastik) 110 menit, TKA Saintek 105 menit, TKA Soshum 105 menit. Setiap sesi memiliki timer otomatis dan akan berakhir ketika waktu habis."
        },
        {
          question: "Bagaimana cara melihat hasil tryout?",
          answer: "Hasil akan otomatis muncul setelah Anda menyelesaikan semua soal. Anda akan mendapat skor IRT, ranking, analisis per mata pelajaran, dan prediksi kelulusan PTN. Hasil tersimpan permanen di dashboard Anda."
        },
        {
          question: "Bisakah mengulang tryout yang sama?",
          answer: "Pengguna premium bisa mengulang tryout hingga 3 kali untuk melihat peningkatan. Pengguna gratis bisa mengulang setelah 7 hari. Setiap percobaan akan merekam progress Anda."
        }
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Paket & Pembayaran",
      description: "Informasi tentang paket premium dan cara pembayaran",
      color: "purple",
      questions: [
        {
          question: "Apa perbedaan paket gratis dan premium?",
          answer: "Paket gratis: akses 5 tryout/bulan, pembahasan dasar, ranking terbatas. Paket premium: tryout unlimited, pembahasan video lengkap, analisis mendalam, prediksi PTN, konsultasi dengan mentor, dan fitur eksklusif lainnya."
        },
        {
          question: "Berapa harga paket premium?",
          answer: "Paket Premium: Rp 99.000/bulan, Paket Premium+ Rp 299.000/3 bulan (hemat 33%), Paket Premium Pro Rp 499.000/6 bulan (hemat 50%). Semua paket include akses penuh ke semua fitur."
        },
        {
          question: "Metode pembayaran apa saja yang tersedia?",
          answer: "Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, dan virtual account. Pembayaran aman dengan enkripsi SSL."
        },
        {
          question: "Bagaimana cara upgrade ke premium?",
          answer: "Masuk ke dashboard, klik 'Upgrade Premium', pilih paket yang diinginkan, lakukan pembayaran. Akun Anda akan otomatis upgrade setelah pembayaran berhasil dikonfirmasi."
        }
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Teknis & Troubleshooting",
      description: "Solusi masalah teknis dan pengaturan akun",
      color: "orange",
      questions: [
        {
          question: "Kenapa website lambat atau tidak bisa diakses?",
          answer: "Pastikan koneksi internet stabil (min. 2 Mbps). Coba refresh halaman, clear cache browser, atau gunakan browser lain (Chrome/Firefox recommended). Jika masih bermasalah, hubungi customer support."
        },
        {
          question: "Bagaimana cara reset password?",
          answer: "Klik 'Lupa Password' di halaman login, masukkan email terdaftar, cek inbox/spam untuk link reset password. Klik link tersebut dan buat password baru. Jika tidak menerima email, hubungi support."
        },
        {
          question: "Bisakah mengubah data profil?",
          answer: "Ya, masuk ke Settings > Profile untuk mengubah nama, foto, nomor telepon, sekolah, dan target PTN. Email tidak bisa diubah karena alasan keamanan. Jika perlu mengubah email, hubungi customer support."
        },
        {
          question: "Apakah data saya aman?",
          answer: "Sangat aman! Kami menggunakan enkripsi SSL 256-bit, server tersertifikasi ISO 27001, backup otomatis, dan mematuhi standar keamanan internasional. Data pribadi tidak akan dibagikan ke pihak ketiga."
        }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fitur & Analisis",
      description: "Cara menggunakan fitur analisis dan prediksi",
      color: "indigo",
      questions: [
        {
          question: "Bagaimana cara membaca analisis hasil?",
          answer: "Dashboard menampilkan skor IRT, percentile ranking, analisis per subtes, identifikasi kekuatan/kelemahan, rekomendasi belajar, dan prediksi PTN. Grafik progress menunjukkan perkembangan dari waktu ke waktu."
        },
        {
          question: "Seberapa akurat prediksi kelulusan PTN?",
          answer: "Akurasi prediksi kami mencapai 85-90% berdasarkan data historis ribuan siswa. Prediksi menggunakan algoritma machine learning yang mempertimbangkan skor, ranking, daya tampung, dan kompetisi PTN."
        },
        {
          question: "Apa itu fitur Study Plan?",
          answer: "Study Plan adalah jadwal belajar personal berdasarkan hasil analisis kelemahan Anda. Sistem akan merekomendasikan topik prioritas, alokasi waktu, dan target improvement untuk memaksimalkan skor UTBK."
        },
        {
          question: "Bagaimana cara menggunakan fitur konsultasi mentor?",
          answer: "Pengguna premium bisa book session dengan mentor berpengalaman. Pilih slot waktu yang tersedia, konsultasi via video call tentang strategi belajar, pemilihan jurusan, atau problem solving soal sulit."
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Waktu Optimal Tryout",
      description: "Kerjakan tryout saat pikiran fresh, biasanya pagi hari (08:00-11:00) untuk hasil maksimal"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Strategi Mengerjakan",
      description: "Kerjakan soal mudah dulu, jangan terpaku pada soal sulit. Manajemen waktu sangat penting"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Analisis Rutin",
      description: "Review hasil setiap tryout, identifikasi pola kesalahan, dan fokus perbaikan area lemah"
    }
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
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang Pejuang PTN. 
              Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk{" "}
              <a href="/contact" className="text-blue-600 hover:underline font-semibold">
                menghubungi kami
              </a>.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tips Cepat</h2>
            <p className="text-gray-600">Beberapa tips penting sebelum mulai menggunakan platform</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickTips.map((tip, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-blue-600">{tip.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kategori FAQ</h2>
            <p className="text-gray-600 text-lg">Pilih kategori sesuai dengan pertanyaan Anda</p>
          </MotionWrapper>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <MotionWrapper key={categoryIndex} delay={categoryIndex * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-blue-100">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-6">
                    <FAQAccordion questions={category.questions} />
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim customer support kami siap membantu Anda 24/7 melalui berbagai channel komunikasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Hubungi Customer Support
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                WhatsApp Support
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