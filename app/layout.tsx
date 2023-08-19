import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini E-commerce",
  description: "Developed by Tarequl Islam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{ className: "text-xl", duration: 600 }}
        />
      </body>
    </html>
  );
}
