import { PrismaClient, UserRole, TryoutType, TryoutCategory, TryoutStatus, QuestionType, DifficultyLevel, Subject } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create Super Admin User
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@tryoutplatform.com' },
    update: {},
    create: {
      email: 'admin@tryoutplatform.com',
      username: 'superadmin',
      firstName: 'Super',
      lastName: 'Admin',
      password: hashedPassword,
      role: UserRole.SUPER_ADMIN,
      status: 'ACTIVE',
      emailVerified: new Date(),
    },
  })

  // Create Writer User
  const writerPassword = await bcrypt.hash('writer123', 12)
  const writer = await prisma.user.upsert({
    where: { email: 'writer@tryoutplatform.com' },
    update: {},
    create: {
      email: 'writer@tryoutplatform.com',
      username: 'writer01',
      firstName: 'Content',
      lastName: 'Writer',
      password: writerPassword,
      role: UserRole.WRITER,
      status: 'ACTIVE',
      emailVerified: new Date(),
    },
  })

  // Create Demo User
  const userPassword = await bcrypt.hash('user123', 12)
  const demoUser = await prisma.user.upsert({
    where: { email: 'user@tryoutplatform.com' },
    update: {},
    create: {
      email: 'user@tryoutplatform.com',
      username: 'demouser',
      firstName: 'Demo',
      lastName: 'User',
      password: userPassword,
      role: UserRole.USER,
      status: 'ACTIVE',
      emailVerified: new Date(),
      school: 'SMA Negeri 1 Jakarta',
      grade: '12 IPA',
      targetUniversity: 'Universitas Indonesia',
      targetMajor: 'Teknik Informatika',
    },
  })

  // Create Premium User
  const premiumUser = await prisma.user.upsert({
    where: { email: 'premium@tryoutplatform.com' },
    update: {},
    create: {
      email: 'premium@tryoutplatform.com',
      username: 'premiumuser',
      firstName: 'Premium',
      lastName: 'User',
      password: userPassword,
      role: UserRole.PREMIUM_USER,
      status: 'ACTIVE',
      emailVerified: new Date(),
      isPremium: true,
      premiumExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      school: 'SMA Negeri 2 Bandung',
      grade: '12 IPA',
      targetUniversity: 'Institut Teknologi Bandung',
      targetMajor: 'Teknik Elektro',
    },
  })

  console.log('✅ Users created:', { superAdmin: superAdmin.email, writer: writer.email, demoUser: demoUser.email, premiumUser: premiumUser.email })

  // Create Tryout Series
  const utbkSeries = await prisma.tryoutSeries.upsert({
    where: { slug: 'utbk-snbt-2025' },
    update: {},
    create: {
      title: 'UTBK SNBT 2025',
      description: 'Simulasi Ujian Tulis Berbasis Komputer - Seleksi Nasional Berbasis Tes 2025',
      slug: 'utbk-snbt-2025',
      isActive: true,
      sortOrder: 1,
    },
  })

  const tkaSeries = await prisma.tryoutSeries.upsert({
    where: { slug: 'tka-saintek-2025' },
    update: {},
    create: {
      title: 'TKA Saintek 2025',
      description: 'Tes Kemampuan Akademik - Sains dan Teknologi 2025',
      slug: 'tka-saintek-2025',
      isActive: true,
      sortOrder: 2,
    },
  })

  console.log('✅ Tryout series created')

  // Create Sample Questions
  const mathQuestions = []
  const physicsQuestions = []

  // Math Questions
  for (let i = 1; i <= 10; i++) {
    const question = await prisma.question.create({
      data: {
        content: `Soal Matematika ${i}: Jika f(x) = x² + 2x - 3, maka nilai f(2) adalah...`,
        type: QuestionType.MULTIPLE_CHOICE,
        subject: Subject.MATEMATIKA,
        difficulty: i <= 3 ? DifficultyLevel.EASY : i <= 7 ? DifficultyLevel.MEDIUM : DifficultyLevel.HARD,
        options: JSON.stringify(['A. 5', 'B. 6', 'C. 7', 'D. 8', 'E. 9']),
        correctAnswer: 'A',
        explanation: `Substitusi x = 2 ke dalam f(x) = x² + 2x - 3:\nf(2) = (2)² + 2(2) - 3 = 4 + 4 - 3 = 5`,
        timeEstimate: 120, // 2 minutes
        authorId: writer.id,
        isActive: true,
        isVerified: true,
      },
    })
    mathQuestions.push(question)
  }

  // Physics Questions
  for (let i = 1; i <= 10; i++) {
    const question = await prisma.question.create({
      data: {
        content: `Soal Fisika ${i}: Sebuah benda bergerak dengan kecepatan konstan 10 m/s. Jarak yang ditempuh dalam waktu 5 detik adalah...`,
        type: QuestionType.MULTIPLE_CHOICE,
        subject: Subject.FISIKA,
        difficulty: i <= 3 ? DifficultyLevel.EASY : i <= 7 ? DifficultyLevel.MEDIUM : DifficultyLevel.HARD,
        options: JSON.stringify(['A. 25 m', 'B. 30 m', 'C. 40 m', 'D. 50 m', 'E. 60 m']),
        correctAnswer: 'D',
        explanation: `Menggunakan rumus: s = v × t\ns = 10 m/s × 5 s = 50 m`,
        timeEstimate: 90, // 1.5 minutes
        authorId: writer.id,
        isActive: true,
        isVerified: true,
      },
    })
    physicsQuestions.push(question)
  }

  console.log('✅ Sample questions created')

  // Create Free Tryout
  const freeTryout = await prisma.tryout.create({
    data: {
      title: 'UTBK SNBT Simulasi Gratis #1',
      description: 'Tryout gratis untuk mengenal format dan tingkat kesulitan UTBK SNBT',
      slug: 'utbk-snbt-simulasi-gratis-1',
      type: TryoutType.FREE,
      category: TryoutCategory.UTBK_SNBT,
      status: TryoutStatus.PUBLISHED,
      duration: 180, // 3 hours
      totalQuestions: 10,
      passingScore: 60.0,
      maxAttempts: 1,
      price: 0,
      isPremium: false,
      instructions: 'Kerjakan soal dengan teliti. Waktu pengerjaan 180 menit untuk 100 soal.',
      seriesId: utbkSeries.id,
      creatorId: writer.id,
    },
  })

  // Create Premium Tryout
  const premiumTryout = await prisma.tryout.create({
    data: {
      title: 'UTBK SNBT Premium #1',
      description: 'Tryout premium dengan pembahasan lengkap dan analisis mendalam',
      slug: 'utbk-snbt-premium-1',
      type: TryoutType.PREMIUM,
      category: TryoutCategory.UTBK_SNBT,
      status: TryoutStatus.PUBLISHED,
      duration: 180, // 3 hours
      totalQuestions: 10,
      passingScore: 60.0,
      maxAttempts: 3,
      price: 25000,
      isPremium: true,
      instructions: 'Tryout premium dengan fitur lengkap: pembahasan video, analisis hasil, dan rekomendasi belajar.',
      seriesId: utbkSeries.id,
      creatorId: writer.id,
    },
  })

  console.log('✅ Tryouts created')

  // Create Tryout Sections
  const mathSection = await prisma.tryoutSection.create({
    data: {
      tryoutId: freeTryout.id,
      title: 'Tes Kemampuan Kuantitatif - Matematika',
      description: 'Soal-soal matematika dasar dan lanjutan',
      duration: 90,
      sortOrder: 1,
    },
  })

  const physicsSection = await prisma.tryoutSection.create({
    data: {
      tryoutId: freeTryout.id,
      title: 'Tes Kemampuan Kuantitatif - Fisika',
      description: 'Soal-soal fisika dasar',
      duration: 90,
      sortOrder: 2,
    },
  })

  // Add questions to sections
  for (let i = 0; i < 5; i++) {
    await prisma.tryoutQuestion.create({
      data: {
        tryoutId: freeTryout.id,
        questionId: mathQuestions[i].id,
        sectionId: mathSection.id,
        sortOrder: i + 1,
        points: 1.0,
      },
    })
  }

  for (let i = 0; i < 5; i++) {
    await prisma.tryoutQuestion.create({
      data: {
        tryoutId: freeTryout.id,
        questionId: physicsQuestions[i].id,
        sectionId: physicsSection.id,
        sortOrder: i + 1,
        points: 1.0,
      },
    })
  }

  console.log('✅ Tryout sections and questions linked')

  // Create System Configuration
  const systemConfigs = [
    { key: 'site_name', value: 'Tryout Platform', type: 'string' },
    { key: 'site_description', value: 'Platform tryout terlengkap untuk persiapan UTBK', type: 'string' },
    { key: 'max_free_attempts', value: '3', type: 'number' },
    { key: 'premium_price_per_tryout', value: '25000', type: 'number' },
    { key: 'email_verification_required', value: 'true', type: 'boolean' },
    { key: 'maintenance_mode', value: 'false', type: 'boolean' },
  ]

  for (const config of systemConfigs) {
    await prisma.systemConfig.upsert({
      where: { key: config.key },
      update: { value: config.value },
      create: config,
    })
  }

  console.log('✅ System configuration created')

  // Create Email Templates
  const emailTemplates = [
    {
      name: 'welcome_email',
      subject: 'Selamat datang di Tryout Platform!',
      htmlBody: `
        <h1>Selamat datang, {{firstName}}!</h1>
        <p>Terima kasih telah bergabung dengan Tryout Platform.</p>
        <p>Klik link berikut untuk verifikasi email: <a href="{{verificationUrl}}">Verifikasi Email</a></p>
      `,
      textBody: 'Selamat datang, {{firstName}}! Verifikasi email Anda di {{verificationUrl}}',
      variables: JSON.stringify(['firstName', 'verificationUrl']),
    },
    {
      name: 'result_available',
      subject: 'Hasil Tryout Anda sudah tersedia!',
      htmlBody: `
        <h1>Hasil Tryout Tersedia</h1>
        <p>Hai {{firstName}}, hasil tryout "{{tryoutTitle}}" Anda sudah tersedia.</p>
        <p>Skor Anda: {{score}}</p>
        <p><a href="{{resultUrl}}">Lihat Hasil Lengkap</a></p>
      `,
      textBody: 'Hasil tryout Anda tersedia. Skor: {{score}}. Lihat di {{resultUrl}}',
      variables: JSON.stringify(['firstName', 'tryoutTitle', 'score', 'resultUrl']),
    },
  ]

  for (const template of emailTemplates) {
    await prisma.emailTemplate.upsert({
      where: { name: template.name },
      update: template,
      create: template,
    })
  }

  console.log('✅ Email templates created')

  // Create some user analytics
  await prisma.userAnalytics.create({
    data: {
      userId: demoUser.id,
      totalTryouts: 2,
      averageScore: 75.5,
      bestScore: 82.0,
      totalStudyTime: 180,
      totalQuestionsAnswered: 50,
      correctAnswers: 38,
      streakDays: 5,
      lastActivityAt: new Date(),
    },
  })

  await prisma.userAnalytics.create({
    data: {
      userId: premiumUser.id,
      totalTryouts: 5,
      averageScore: 85.2,
      bestScore: 92.5,
      totalStudyTime: 450,
      totalQuestionsAnswered: 150,
      correctAnswers: 127,
      streakDays: 12,
      lastActivityAt: new Date(),
    },
  })

  console.log('✅ User analytics created')

  console.log('🎉 Database seeding completed successfully!')
  console.log('\n📧 Login credentials:')
  console.log('Super Admin: admin@tryoutplatform.com / admin123')
  console.log('Writer: writer@tryoutplatform.com / writer123')
  console.log('Demo User: user@tryoutplatform.com / user123')
  console.log('Premium User: premium@tryoutplatform.com / user123')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error during seeding:', e)
    await prisma.$disconnect()
    process.exit(1)
  })