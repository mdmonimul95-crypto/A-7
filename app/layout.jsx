import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description: "Never lose touch with the people who matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="keenkeeper">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-base-100 font-sans">
        <TimelineProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1a3a2a",
                color: "#e8f5e9",
                border: "1px solid #2d6a4f",
                borderRadius: "12px",
                fontFamily: "'DM Sans', sans-serif",
              },
            }}
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}
