import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Headphones, Bug, HelpCircle } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hubungi Kami - Pejuang PTN | Customer Support 24/7",
  description: "Hubungi tim customer support Pejuang PTN untuk bantuan, pertanyaan, atau saran. Layanan 24/7 melalui berbagai channel komunikasi.",
  keywords: "hubungi kami, customer support, bantuan pejuang ptn, kontak cs, layanan pelanggan",
  openGraph: {
    title: "Hubungi Kami - Pejuang PTN",
    description: "Tim customer support kami siap membantu Anda 24/7. Hubungi kami untuk bantuan, pertanyaan, atau saran.",
    type: "website",
    locale: "id_ID",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telepon",
      content: "+62 21 1234 5678",
      subtitle: "Senin - Jumat: 08:00 - 22:00 WIB",
      href: "tel:+622112345678",
      color: "blue",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      content: "support@pejuangptn.com",
      subtitle: "Respon dalam 2-4 jam",
      href: "mailto:support@pejuangptn.com",
      color: "green",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      content: "+62 812 3456 7890",
      subtitle: "24/7 Customer Support",
      href: "https://wa.me/6281234567890",
      color: "green",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Alamat Kantor",
      content: "Jl. Sudirman No. 123, Jakarta Pusat",
      subtitle: "Kunjungi kami: Senin-Jumat 09:00-17:00",
      href: "https://goo.gl/maps/example",
      color: "purple",
    },
  ];

  const supportCategories = [
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: "Bantuan Umum",
      description: "Pertanyaan umum tentang platform, fitur, dan cara menggunakan Pejuang PTN",
      examples: ["Cara mendaftar akun", "Mengakses tryout", "Melihat hasil"],
      color: "blue",
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Support Teknis",
      description: "Masalah teknis, error, atau kesulitan mengakses platform",
      examples: ["Login bermasalah", "Tryout tidak bisa dibuka", "Website lambat"],
      color: "purple",
    },
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Laporkan Bug",
      description: "Laporkan bug atau error yang Anda temukan untuk membantu kami memperbaiki platform",
      examples: ["Skor tidak muncul", "Halaman error", "Fitur tidak berfungsi"],
      color: "red",
    },
  ];

  const faqQuestions = [
    {
      question: "Bagaimana cara mendaftar akun di Pejuang PTN?",
      answer: "Klik tombol 'Daftar Gratis' di halaman utama, isi data pribadi Anda, dan verifikasi email. Akun Anda akan langsung aktif setelah verifikasi.",
    },
    {
      question: "Apakah tryout gratis tersedia?",
      answer: "Ya! Kami menyediakan beberapa tryout gratis untuk semua pengguna. Anda juga bisa upgrade ke Premium untuk akses tak terbatas.",
    },
    {
      question: "Berapa lama hasil tryout keluar?",
      answer: "Hasil tryout akan langsung tersedia setelah Anda menyelesaikan semua soal. Analisis mendalam tersedia dalam 1-2 menit.",
    },
    {
      question: "Bagaimana sistem penilaian IRT bekerja?",
      answer: "Sistem IRT (Item Response Theory) menilai kemampuan berdasarkan tingkat kesulitan soal dan pola jawaban, mirip dengan UTBK asli.",
    },
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
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tim customer support profesional kami siap membantu Anda 24/7. 
              Hubungi kami melalui berbagai channel komunikasi yang tersedia untuk 
              mendapatkan bantuan, menjawab pertanyaan, atau memberikan saran.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cara Menghubungi Kami</h2>
            <p className="text-gray-600 text-lg">Pilih channel komunikasi yang paling nyaman untuk Anda</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={method.href} className="block">
                  <div className={`w-16 h-16 bg-${method.color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <div className={`text-${method.color}-600`}>{method.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-700 font-semibold mb-1">{method.content}</p>
                  <p className="text-gray-500 text-sm">{method.subtitle}</p>
                </a>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kategori Bantuan</h2>
            <p className="text-gray-600 text-lg">Pilih kategori yang sesuai dengan kebutuhan Anda</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`text-${category.color}-600`}>{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Contoh:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Kirim Pesan</h2>
              <p className="text-gray-600 text-lg">
                Atau kirim pesan langsung melalui form di bawah ini. Kami akan merespon dalam 2-4 jam.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <ContactForm />
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 text-lg">
              Mungkin pertanyaan Anda sudah terjawab di sini
            </p>
          </MotionWrapper>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqQuestions.map((faq, index) => (
              <MotionWrapper
                key={index}
                delay={index * 0.1}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper delay={0.5} className="text-center mt-12">
            <p className="text-gray-600 mb-6">Tidak menemukan jawaban yang Anda cari?</p>
            <a
              href="/faq"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center"
            >
              Lihat FAQ Lengkap
              <Send className="ml-2 w-5 h-5" />
            </a>
          </MotionWrapper>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Jam Operasional</h2>
            </MotionWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              <MotionWrapper className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Customer Support</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 22:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="font-semibold">09:00 - 21:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp Support</span>
                    <span className="font-semibold text-green-600">24/7</span>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.1} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Kunjungan Kantor</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="font-semibold text-red-600">Tutup</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    *Harap buat janji temu terlebih dahulu
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}