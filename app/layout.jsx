import Link from "next/link";
import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-100 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Game of{" "}
          <a href="https://naver.com" target="_blank" className="text-orange-800 hover:underline">
            naver
          </a>
        </footer>
      </body>
    </html>
  );
}
