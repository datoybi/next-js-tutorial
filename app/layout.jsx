import Link from "next/link";
import "./globals.css";
import NavBar from "../components/NavBar";
import { orbitron, exo2 } from "./fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "only the best indie games, reviewed for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-100 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Game of{" "}
          <a href="https://naver.com" target="_blank" className="text-orange-800 hover:underline">
            naver
          </a>
        </footer>
      </body>
    </html>
  );
}
