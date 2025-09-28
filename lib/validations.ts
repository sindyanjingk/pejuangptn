import { z } from 'zod'

// User validation schemas
export const signUpSchema = z.object({
  firstName: z.string().min(2, 'Nama depan minimal 2 karakter'),
  lastName: z.string().min(2, 'Nama belakang minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
  school: z.string().optional(),
  grade: z.string().optional(),
  targetUniversity: z.string().optional(),
  targetMajor: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak cocok",
  path: ["confirmPassword"],
})

export const signInSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi'),
})

export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, 'Nama depan minimal 2 karakter'),
  lastName: z.string().min(2, 'Nama belakang minimal 2 karakter'),
  phone: z.string().optional(),
  school: z.string().optional(),
  grade: z.string().optional(),
  targetUniversity: z.string().optional(),
  targetMajor: z.string().optional(),
})

// Question validation schemas
export const questionSchema = z.object({
  content: z.string().min(10, 'Konten soal minimal 10 karakter'),
  type: z.enum(['MULTIPLE_CHOICE', 'FILL_IN_BLANK', 'ESSAY', 'TRUE_FALSE', 'MATCHING']),
  subject: z.enum(['MATEMATIKA', 'BAHASA_INDONESIA', 'BAHASA_INGGRIS', 'FISIKA', 'KIMIA', 'BIOLOGI', 'SEJARAH', 'GEOGRAFI', 'EKONOMI', 'SOSIOLOGI', 'TPS_PENALARAN_UMUM', 'TPS_PENGETAHUAN_KUANTITATIF', 'TPS_PENGETAHUAN_UMUM', 'TPS_PEMAHAMAN_BACAAN']),
  difficulty: z.enum(['VERY_EASY', 'EASY', 'MEDIUM', 'HARD', 'VERY_HARD']),
  options: z.array(z.string()).optional(),
  correctAnswer: z.string().min(1, 'Jawaban benar wajib diisi'),
  explanation: z.string().optional(),
  timeEstimate: z.number().min(30).max(600).optional(), // 30 seconds to 10 minutes
  tags: z.array(z.string()).optional(),
})

// Tryout validation schemas
export const tryoutSchema = z.object({
  title: z.string().min(5, 'Judul minimal 5 karakter'),
  description: z.string().optional(),
  type: z.enum(['FREE', 'PREMIUM', 'SPECIAL']),
  category: z.enum(['UTBK_SNBT', 'TKA_SAINTEK', 'TKA_SOSHUM', 'TPS', 'SIMULATION', 'PRACTICE']),
  duration: z.number().min(30).max(300), // 30 minutes to 5 hours
  totalQuestions: z.number().min(1).max(200),
  passingScore: z.number().min(0).max(100).optional(),
  maxAttempts: z.number().min(1).max(5),
  price: z.number().min(0).optional(),
  isPremium: z.boolean(),
  instructions: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
})

// Payment validation schemas
export const paymentSchema = z.object({
  amount: z.number().min(1000, 'Minimal pembayaran Rp 1.000'),
  paymentMethod: z.enum(['CREDIT_CARD', 'BANK_TRANSFER', 'E_WALLET', 'VIRTUAL_ACCOUNT', 'QRIS']),
  items: z.array(z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
  })),
})

// Study plan validation schemas
export const studyPlanSchema = z.object({
  title: z.string().min(5, 'Judul minimal 5 karakter'),
  description: z.string().optional(),
  targetDate: z.date().min(new Date(), 'Tanggal target harus di masa depan'),
  subjects: z.array(z.string()).min(1, 'Pilih minimal 1 mata pelajaran'),
  weeklyHours: z.number().min(1).max(168).optional(), // 1 hour to full week
})

export type SignUpInput = z.infer<typeof signUpSchema>
export type SignInInput = z.infer<typeof signInSchema>
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>
export type QuestionInput = z.infer<typeof questionSchema>
export type TryoutInput = z.infer<typeof tryoutSchema>
export type PaymentInput = z.infer<typeof paymentSchema>
export type StudyPlanInput = z.infer<typeof studyPlanSchema>