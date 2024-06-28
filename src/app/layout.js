import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jon Tester | Lies",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-2xl mx-auto mt-1 bg-gray-200 px-2 2xl:px-0`}>{children}</body>
    </html>
  );
}
