# 🎯 Pejuang PTN - Tryout Platform

> Platform tryout online terlengkap untuk persiapan UTBK SNBT dan TKA, terinspirasi dari SainsIn dengan fitur yang lebih advanced.

## 🌟 Features

### 🎭 **Multi-Role System**
- **Super Admin**: Full system management
- **Admin**: Tryout & user management  
- **Writer**: Content creation & question authoring
- **User**: Free tryout access & basic analytics
- **Premium User**: Premium tryouts & advanced features

### 📝 **Tryout System**
- **Free Tryouts**: Basic practice dengan hasil sederhana
- **Premium Tryouts**: Analisis mendalam, pembahasan video, multiple attempts
- **IRT Scoring**: Sistem penilaian seperti UTBK asli
- **Multi-Category**: UTBK SNBT, TKA Saintek, TKA Soshum, TPS
- **Flexible Timing**: Pause/resume, time tracking

### 🎯 **Question Management**
- Multiple question types (Multiple Choice, Fill-in-blank, Essay)
- Multi-media support (images, videos, audio)
- Difficulty calibration with IRT parameters
- Subject categorization dan tagging
- Question bookmarking system

### 📊 **Advanced Analytics**
- IRT-based scaled scoring
- Subject-wise performance breakdown
- University admission predictions
- Learning progress tracking
- Comparative rankings

### 💳 **Payment & Subscription**
- Multiple payment methods (Credit Card, E-Wallet, Bank Transfer)
- Flexible subscription plans
- Usage quota management
- Payment history & invoicing

### 📚 **Study Management**
- Personalized study plans
- Progress tracking per subject
- Study time analytics
- Weakness identification & recommendations

### 🔔 **Communication System**
- Email notifications
- In-app messaging
- System announcements
- Result notifications

## 🏗️ Tech Stack

### **Backend**
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with JWT
- **API**: Next.js API Routes
- **File Storage**: AWS S3 / Local storage
- **Payment**: Midtrans integration
- **Caching**: Redis

### **Frontend**
- **Framework**: Next.js 14 with App Router
- **UI Components**: Radix UI + Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Animations**: Framer Motion

### **DevOps**
- **Deployment**: Vercel / Docker
- **Database**: Supabase / AWS RDS
- **Monitoring**: Sentry
- **Analytics**: Google Analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Redis (optional, for caching)

### Installation

1. **Clone Repository**
```bash
git clone https://github.com/yourusername/pejuangptn.git
cd pejuangptn
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env
# Edit .env with your database and service configurations
```

4. **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed
```

5. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### 🗄️ Database Management

```bash
# View database in browser
npm run db:studio

# Reset database (⚠️ WARNING: Deletes all data)
npm run db:reset

# Create new migration
npx prisma migrate dev --name your_migration_name
```

## 📋 Default Login Credentials

After running the seed script:

| Role | Email | Password |
|------|-------|----------|
| Super Admin | admin@tryoutplatform.com | admin123 |
| Writer | writer@tryoutplatform.com | writer123 |
| Demo User | user@tryoutplatform.com | user123 |
| Premium User | premium@tryoutplatform.com | user123 |

## 🎯 Key Features Implementation

### 1. **IRT Scoring System**
- Difficulty parameter calibration
- Discrimination parameter
- 3-parameter logistic model
- Scaled score calculation

### 2. **Multi-Attempt Support**
- Session state management
- Progress saving
- Resume functionality
- Attempt history tracking

### 3. **Advanced Analytics**
- Real-time performance tracking
- Subject-wise breakdown
- Comparative analysis
- Predictive modeling

### 4. **Payment Integration**
- Midtrans payment gateway
- Multiple payment methods
- Subscription management
- Revenue tracking

## 📊 Database Schema

### Core Models:
- **User**: Authentication, profiles, roles
- **Tryout**: Test configurations, pricing
- **Question**: Content, multimedia, IRT parameters
- **TryoutAttempt**: User sessions, timing, state
- **Result**: Scores, analytics, recommendations
- **Payment**: Transactions, subscriptions

📖 **Detailed Schema Documentation**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)

## 🛠️ Development Guide

### **Project Structure**
```
pejuangptn/
├── app/                    # Next.js App Router
├── components/             # Reusable UI components
├── lib/                   # Utilities & configurations
├── prisma/                # Database schema & migrations
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

### **Code Standards**
- TypeScript strict mode
- ESLint + Prettier
- Conventional commits
- Component-driven development

### **API Routes**
```
/api/auth/*               # Authentication endpoints
/api/users/*              # User management
/api/tryouts/*            # Tryout operations
/api/questions/*          # Question management
/api/results/*            # Results & analytics
/api/payments/*           # Payment processing
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 🚀 Deployment

### **Vercel Deployment**
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### **Docker Deployment**
```bash
# Build Docker image
docker build -t pejuangptn .

# Run container
docker run -p 3000:3000 pejuangptn
```

### **Production Checklist**
- [ ] Configure production database
- [ ] Set up Redis caching
- [ ] Configure AWS S3 for file uploads
- [ ] Set up payment gateway credentials
- [ ] Configure email service (SMTP)
- [ ] Set up monitoring & logging
- [ ] Configure domain & SSL

## 📈 Performance Optimization

### **Database**
- Proper indexing on frequently queried fields
- Connection pooling
- Query optimization
- Database sharding for scale

### **Frontend**
- Image optimization with Next.js
- Code splitting & lazy loading
- Static generation where possible
- CDN for static assets

### **Caching Strategy**
- Redis for session data
- Next.js ISR for static content
- Browser caching for assets
- API response caching

## 🔒 Security

### **Authentication & Authorization**
- JWT tokens with refresh mechanism
- Role-based access control (RBAC)
- Session management
- Rate limiting

### **Data Protection**
- Password hashing with bcrypt
- SQL injection prevention
- XSS protection
- CSRF protection
- Input validation & sanitization

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Contribution Guidelines**
- Follow code standards & conventions
- Write tests for new features
- Update documentation
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [SainsIn](https://sainsin.com/) - Great platform for UTBK preparation
- Built with [Next.js](https://nextjs.org/) - The React Framework for Production
- UI Components by [Radix UI](https://radix-ui.com/) - Low-level UI primitives
- Database ORM by [Prisma](https://prisma.io/) - Type-safe database access

## 📞 Support

- 📧 Email: support@pejuangptn.com
- 💬 Discord: [Join our community](https://discord.gg/pejuangptn)
- 📖 Documentation: [docs.pejuangptn.com](https://docs.pejuangptn.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/yourusername/pejuangptn/issues)

---

**Made with ❤️ for Indonesian students pursuing their dream universities**
