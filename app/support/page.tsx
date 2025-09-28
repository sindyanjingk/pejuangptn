import { Metadata } from "next";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { Headphones, MessageCircle, Mail, Phone } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Support - Pejuang PTN | Bantuan dan Dukungan Teknis",
  description: "Dapatkan bantuan dan dukungan teknis dari tim Pejuang PTN. Kami siap membantu Anda mengatasi masalah dan pertanyaan seputar platform.",
  keywords: "support pejuang ptn, bantuan teknis, customer service, help desk",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-20">
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Dukungan & Bantuan
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Tim support kami siap membantu Anda 24/7. Untuk bantuan lebih lengkap, 
              silakan kunjungi halaman Contact atau FAQ kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Hubungi Kami
              </a>
              <a
                href="/faq"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Lihat FAQ
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MotionWrapper className="text-center p-6 bg-blue-50 rounded-xl">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Telepon Support</h3>
              <p className="text-gray-600 mb-4">Hubungi kami langsung untuk bantuan cepat</p>
              <a href="tel:+622112345678" className="text-blue-600 font-semibold text-lg">
                +62 21 1234 5678
              </a>
            </MotionWrapper>

            <MotionWrapper delay={0.1} className="text-center p-6 bg-green-50 rounded-xl">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Kirim email untuk pertanyaan detail</p>
              <a href="mailto:support@pejuangptn.com" className="text-green-600 font-semibold text-lg">
                support@pejuangptn.com
              </a>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}