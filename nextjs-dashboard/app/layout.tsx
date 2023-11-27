import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
// RootLayout은 모든 페이지에 공유된다. 필수 컴포넌트이다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
