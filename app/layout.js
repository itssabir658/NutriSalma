import { Outfit, Karla } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "NutriSalma — The Balance Plate",
  description:
    "Personalized nutrition plans built around your goals, preferences and everyday routine — with a registered dietitian reviewing every step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${karla.variable}`}>
      <body>
        <ToastProvider>
          {children}
          <WhatsAppButton />
        </ToastProvider>
      </body>
    </html>
  );
}
