import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mplus",
});

export const metadata: Metadata = {
  title: "桃尻研究所 | ヒップアップ特化メディア",
  description: "女性のためのヒップアップ特化情報サイト。効果的なトレーニングから科学的な知識まで、美しい丸みのあるお尻を作るためのすべてをお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mPlusRounded.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
