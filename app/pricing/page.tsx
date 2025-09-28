import { Metadata } from "next";
import { MotionWrapper, StaggerContainer } from "@/components/animations/motion-wrapper";
import { Check, Star, Crown, Zap, Users, BookOpen, BarChart3, Headphones, X } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing - Pejuang PTN | Paket Berlangganan Tryout UTBK",
  description: "Pilih paket berlangganan Pejuang PTN yang sesuai kebutuhan Anda. Mulai dari paket gratis hingga premium dengan fitur lengkap untuk persiapan UTBK terbaik.",
  keywords: "harga pejuang ptn, paket premium, berlangganan tryout utbk, pricing plan",
  openGraph: {
    title: "Pricing - Pejuang PTN",
    description: "Paket berlangganan Pejuang PTN dengan berbagai pilihan sesuai kebutuhan persiapan UTBK Anda.",
    type: "website",
    locale: "id_ID",
  },
};

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "Mulai perjalanan UTBK Anda",
      price: "0",
      period: "Gratis selamanya",
      badge: null,
      color: "gray",
      features: [
        "5 Tryout per bulan",
        "Pembahasan dasar",
        "Ranking terbatas",
        "Akses forum diskusi",
        "Notifikasi pengumuman",
        "Dashboard basic"
      ],
      limitations: [
        "Tidak ada analisis mendalam",
        "Tidak ada prediksi PTN",
        "Tidak ada konsultasi mentor",
        "Tidak ada video pembahasan"
      ],
      cta: "Mulai Gratis",
      popular: false
    },
    {
      name: "Premium",
      description: "Untuk persiapan yang serius",
      price: "99.000",
      period: "per bulan",
      badge: "PALING POPULER",
      color: "blue",
      features: [
        "Tryout unlimited",
        "Video pembahasan lengkap",
        "Analisis mendalam + IRT",
        "Prediksi kelulusan PTN",
        "Ranking nasional real-time",
        "Study plan personal",
        "Bank soal premium",
        "Progress tracking detail",
        "Customer support prioritas"
      ],
      limitations: [],
      cta: "Pilih Premium",
      popular: true
    },
    {
      name: "Premium+",
      description: "Hemat 33% untuk komitmen 3 bulan",
      price: "299.000",
      period: "per 3 bulan",
      originalPrice: "297.000",
      badge: "HEMAT 33%",
      color: "purple",
      features: [
        "Semua fitur Premium",
        "3x Konsultasi mentor",
        "Simulasi UTBK intensif",
        "Analisis kompetitor PTN",
        "Rekomendasi jurusan AI",
        "Akses webinar eksklusif",
        "Modul materi lengkap",
        "Latihan soal adaptif"
      ],
      limitations: [],
      cta: "Pilih Premium+",
      popular: false
    },
    {
      name: "Premium Pro",
      description: "Solusi lengkap menuju PTN impian",
      price: "499.000",
      period: "per 6 bulan",
      originalPrice: "594.000",
      badge: "HEMAT 50%",
      color: "gold",
      features: [
        "Semua fitur Premium+",
        "Konsultasi mentor unlimited",
        "Private tutoring session",
        "Guaranteed score improvement",
        "Personal learning assistant",
        "Akses materi eksklusif",
        "Live class dengan expert",
        "Career guidance counseling",
        "Priority customer support",
        "Sertifikat completion"
      ],
      limitations: [],
      cta: "Pilih Pro",
      popular: false
    }
  ];

  const comparison = [
    {
      feature: "Jumlah Tryout",
      free: "5/bulan",
      premium: "Unlimited",
      premiumPlus: "Unlimited",
      pro: "Unlimited"
    },
    {
      feature: "Pembahasan Video",
      free: "❌",
      premium: "✅",
      premiumPlus: "✅",
      pro: "✅"
    },
    {
      feature: "Analisis IRT",
      free: "❌",
      premium: "✅",
      premiumPlus: "✅",
      pro: "✅"
    },
    {
      feature: "Prediksi PTN",
      free: "❌",
      premium: "✅",
      premiumPlus: "✅",
      pro: "✅"
    },
    {
      feature: "Konsultasi Mentor",
      free: "❌",
      premium: "❌",
      premiumPlus: "3x",
      pro: "Unlimited"
    },
    {
      feature: "Private Tutoring",
      free: "❌",
      premium: "❌",
      premiumPlus: "❌",
      pro: "✅"
    }
  ];

  const testimonials = [
    {
      name: "Sari Dewi K.",
      university: "Fakultas Kedokteran UI",
      score: "685",
      text: "Alhamdulillah berkat Pejuang PTN saya bisa lolos FK UI! Sistem IRT-nya benar-benar mirip UTBK asli.",
      avatar: "SD"
    },
    {
      name: "Muhammad Rizki A.",
      university: "Teknik Informatika ITB",
      score: "692",
      text: "Prediksi kelulusan sangat akurat, dan mentor sangat membantu dalam strategi belajar. Worth it!",
      avatar: "MR"
    },
    {
      name: "Aisyah Putri M.",
      university: "Psikologi UGM",
      score: "678",
      text: "Analisis kelemahannya detail banget, jadi tahu harus fokus belajar di mana. Recommended!",
      avatar: "AP"
    }
  ];

  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Akurasi Prediksi 90%+",
      description: "Algoritma machine learning dengan data historis ribuan siswa"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bank Soal 5000+",
      description: "Soal berkualitas tinggi dari tim ahli berpengalaman"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentor Berpengalaman",
      description: "Lulusan PTN top dengan pengalaman mengajar bertahun-tahun"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Customer support responsif siap membantu kapan saja"
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Pilih Paket Terbaik
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Investasi terbaik untuk masa depan pendidikan Anda. Pilih paket yang sesuai 
              dengan kebutuhan dan budget untuk persiapan UTBK yang optimal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-green-600 mr-2" />
                <span>30 hari money-back guarantee</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-green-600 mr-2" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-green-600 mr-2" />
                <span>Akses langsung setelah pembayaran</span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover={!plan.popular}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105 shadow-2xl' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${
                    plan.color === 'blue' ? 'bg-blue-600' : 
                    plan.color === 'purple' ? 'bg-purple-600' : 
                    plan.color === 'gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gray-600'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-800">Rp {plan.price}</span>
                        {plan.price !== "0" && <span className="text-gray-600 ml-1">/{plan.period.split(' ')[1]}</span>}
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          Rp {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-sm text-gray-600">{plan.period}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start opacity-60">
                        <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                        : plan.name === 'Free'
                        ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Perbandingan Detail</h2>
            <p className="text-gray-600 text-lg">Lihat perbandingan lengkap fitur setiap paket</p>
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Fitur</th>
                  <th className="px-6 py-4 text-center">Free</th>
                  <th className="px-6 py-4 text-center">Premium</th>
                  <th className="px-6 py-4 text-center">Premium+</th>
                  <th className="px-6 py-4 text-center">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.free}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.premium}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.premiumPlus}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MotionWrapper>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Pilih Pejuang PTN?</h2>
            <p className="text-gray-600 text-lg">Keunggulan yang membuat kami berbeda</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kata Mereka yang Berhasil</h2>
            <p className="text-gray-600 text-lg">Success stories dari pengguna Pejuang PTN</p>
          </MotionWrapper>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper
                key={index}
                stagger
                index={index}
                hover
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                    <p className="text-sm text-blue-600 font-semibold">Skor: {testimonial.score}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </MotionWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pertanyaan Tentang Pricing</h2>
          </MotionWrapper>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Apakah ada free trial untuk paket premium?",
                answer: "Ya! Semua pengguna baru mendapat akses gratis selama 7 hari untuk mencoba fitur premium. Tidak perlu kartu kredit untuk mendaftar."
              },
              {
                question: "Bagaimana cara upgrade atau downgrade paket?",
                answer: "Anda bisa upgrade/downgrade kapan saja di dashboard. Upgrade berlaku langsung, downgrade berlaku di periode berikutnya."
              },
              {
                question: "Apakah ada garansi uang kembali?",
                answer: "Ya, kami memberikan garansi 30 hari uang kembali tanpa pertanyaan jika Anda tidak puas dengan layanan kami."
              },
              {
                question: "Metode pembayaran apa saja yang diterima?",
                answer: "Kami menerima transfer bank, e-wallet (GoPay, OVO, DANA), kartu kredit/debit, dan virtual account semua bank."
              }
            ].map((faq, index) => (
              <MotionWrapper
                key={index}
                delay={index * 0.1}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Mulai Perjalanan Menuju PTN Impian
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan siswa yang telah mempercayai Pejuang PTN 
              untuk persiapan UTBK mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Mulai Free Trial 7 Hari
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Konsultasi Gratis
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