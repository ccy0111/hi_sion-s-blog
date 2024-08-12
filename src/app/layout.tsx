import type { Metadata } from "next";
import "./globals.css";
import HeaderLayout from "./header/layout";

export const metadata: Metadata = {
  title: "hi_sion's blog"
};

// children 컴포넌트의 이름은 "Home"
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
          <div>app 레이아웃</div>
          {children}
      </body>
    </html>
  );
}
