import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Holo-Cards - Голографические карточки Marvel и Cars",
  description: "Уникальные голографические карточки Marvel и Cars. Оригинальная продукция, быстрая доставка по всей России.",
  keywords: "голографические карточки, Marvel, Cars, коллекционные карточки, хологрфия",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main className="pt-16">
          <ClientBody>{children}</ClientBody>
        </main>
      </body>
    </html>
  );
}
