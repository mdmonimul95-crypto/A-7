# 🤝 KeenKeeper — Keep Your Friendships Alive

KeenKeeper helps you stay intentional about your relationships. Track your friends, log interactions, set contact goals, and never let important friendships fade.

## 🛠️ Technologies Used

- **Next.js 14** — App Router, server & client components
- **React 18** — UI library
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Component library with custom green theme
- **Recharts** — Friendship analytics pie chart
- **react-hot-toast** — Toast notifications
- **Lucide React** — Icon library

## ✨ Key Features

1. **Friend Dashboard** — View all friends in a responsive grid with status indicators (Overdue, Almost Due, On Track)
2. **Quick Check-In** — Log Call, Text, or Video interactions from friend detail pages with instant toast notifications
3. **Timeline & Analytics** — Filter your interaction history by type and visualize patterns in the Friendship Analytics page

## 📁 Project Structure

```
keenkeeper/
├── app/
│   ├── layout.jsx          # Root layout with providers
│   ├── page.jsx            # Home page
│   ├── loading.jsx         # Loading skeleton
│   ├── not-found.jsx       # 404 page
│   ├── friends/[id]/       # Dynamic friend detail page
│   ├── timeline/           # Timeline page
│   └── stats/              # Analytics page
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── FriendCard.jsx
├── context/
│   └── TimelineContext.jsx # Global timeline state
└── data/
    └── friends.json        # Friend profiles
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com) — just connect your GitHub repo and it works out of the box.
