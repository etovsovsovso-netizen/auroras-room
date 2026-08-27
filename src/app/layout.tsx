import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "./components/scroll-reveal";

export const metadata: Metadata = {
  title: {
    default: "Aurora’s room — Таро, ритуалы и возвращение к себе",
    template: "%s — Aurora’s room",
  },
  description: "Аврора — таролог с 5-летней практикой. Расклады, ритуалы, закрытое пространство и индивидуальное обучение Таро.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body><ScrollReveal />{children}</body>
    </html>
  );
}
