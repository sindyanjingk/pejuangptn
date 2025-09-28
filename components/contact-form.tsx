"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const categories = [
    "Bantuan Umum",
    "Support Teknis",
    "Laporkan Bug",
    "Pertanyaan Billing",
    "Feedback & Saran",
    "Kerjasama & Partnership",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData);
      
      setStatus({
        type: "success",
        message: "Pesan Anda telah berhasil dikirim! Kami akan merespon dalam 2-4 jam.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <MotionWrapper>
            <Label htmlFor="name" className="text-gray-700 font-semibold">
              Nama Lengkap *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap Anda"
              className="mt-2"
              required
            />
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="nama@example.com"
              className="mt-2"
              required
            />
          </MotionWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MotionWrapper delay={0.2}>
            <Label htmlFor="category" className="text-gray-700 font-semibold">
              Kategori
            </Label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Pilih kategori</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <Label htmlFor="subject" className="text-gray-700 font-semibold">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Ringkasan singkat topik Anda"
              className="mt-2"
              required
            />
          </MotionWrapper>
        </div>

        <MotionWrapper delay={0.4}>
          <Label htmlFor="message" className="text-gray-700 font-semibold">
            Pesan *
          </Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Jelaskan pertanyaan atau masalah Anda secara detail..."
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] resize-vertical"
            required
          />
        </MotionWrapper>

        {/* Status Messages */}
        {status.type === "success" && (
          <MotionWrapper className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
            <p className="text-green-700">{status.message}</p>
          </MotionWrapper>
        )}

        {status.type === "error" && (
          <MotionWrapper className="flex items-center p-4 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
            <p className="text-red-700">{status.message}</p>
          </MotionWrapper>
        )}

        <MotionWrapper delay={0.5}>
          <Button
            type="submit"
            disabled={!isFormValid || status.type === "loading"}
            className="w-full md:w-auto px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Mengirim...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </>
            )}
          </Button>
        </MotionWrapper>

        <div className="text-sm text-gray-500 mt-4">
          <p>
            * Field wajib diisi. Dengan mengirim pesan ini, Anda menyetujui{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Kebijakan Privasi
            </a>{" "}
            kami.
          </p>
        </div>
      </form>
    </div>
  );
}