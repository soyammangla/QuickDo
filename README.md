# QuizSphere

**Where Knowledge Meets Victory** — a Next.js app for building and taking multiple-choice quizzes, with Google sign-in.

🔗 **Live demo:** https://quiz-sphere-nine.vercel.app/

---

## ✨ Features

- 🔐 **Google Sign-In** via NextAuth.js — secure OAuth flow, no passwords to manage
- 📝 **Quiz Builder** — create quizzes with a title, description, category, difficulty, and any number of multiple-choice questions
- 👀 **Live Preview** — review a quiz before saving it
- 📊 **Dashboard** — see all your saved quizzes, take them, or delete them
- ✅ **Instant Scoring** — take a quiz and get your score immediately after the last question
- 🌗 **Dark / Light Mode** — toggle theme across the app
- 📱 **Responsive UI** — built with Tailwind CSS, works on mobile and desktop

## 🧱 Tech Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Auth | [NextAuth.js](https://next-auth.js.org/) (Google provider) |
| Database / ORM | [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Deployment | [Vercel](https://vercel.com/) |

## 📂 Project Structure

```
app/
├── api/auth/[...nextauth]/   # NextAuth route handler (sign-in, callback, session)
├── createquiz/               # Quiz builder form
├── finalquiz/                # Preview a quiz before saving
├── quiz/                     # Dashboard — list of saved quizzes
├── quiz/[id]/                # Take a quiz + see your score
├── signin/                   # Google sign-in page
├── about/ · privacy/ · terms/
components/
├── auth/                     # Sign-in button, user menu, avatar
├── ui/                       # Reusable UI primitives (button, dropdown, avatar)
├── Hero.tsx · Feature.tsx · FAQ.tsx · Footer.tsx · navbar.tsx
lib/
├── authoptions.ts            # NextAuth configuration + callbacks
├── db.ts                     # Prisma client singleton
prisma/
└── schema.prisma             # Database schema (User model)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database (e.g. [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or local Postgres)
- A [Google OAuth Client ID/Secret](https://console.cloud.google.com/apis/credentials) (Web application type, with `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI for local dev)

### 1. Clone and install

```bash
git clone https://github.com/soyammangla/QuizSphere.git
cd QuizSphere
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"
```

Generate a strong `NEXTAUTH_SECRET` with:

```bash
openssl rand -base64 32
```

### 3. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

Currently, the database stores user accounts only:

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  image     String
  createdAt DateTime @default(now())
  provider  Provider
}

enum Provider {
  Google
}
```

## ⚠️ Known Limitations

This project is a work in progress. A few things to know before relying on it:

- **Quiz data is stored in the browser (`localStorage`), not in the database.** Quizzes you create won't sync across devices or browsers, and clearing your browser data will delete them. Only your account (sign-in) is persisted server-side.
- **No payment or subscription system** is implemented.
- **Route protection is partial** — the dashboard (`/quiz`) checks your sign-in status, but `/createquiz`, `/finalquiz`, and `/quiz/[id]` are currently reachable without being signed in.
- **Scoring happens entirely client-side**, so it isn't suitable for anything that needs tamper-proof results (e.g. a graded test).

### Roadmap

- [ ] Move `Quiz`/`Question`/`Attempt` models into Postgres via Prisma
- [ ] Build real API routes for creating, reading, updating, and deleting quizzes
- [ ] Score quizzes server-side
- [ ] Add `middleware.ts` to protect all quiz-related routes consistently
- [ ] Add quiz sharing between users
- [ ] Add input validation (Zod) on both client and server

## 🧪 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Generate Prisma client + build for production
npm run start    # Start production server
```

## 🤝 Contributing

Issues and pull requests are welcome. If you're picking up one of the roadmap items above, feel free to open an issue first to discuss the approach.

## 📄 License

ISC

---

Built with ❤️ using Next.js.
