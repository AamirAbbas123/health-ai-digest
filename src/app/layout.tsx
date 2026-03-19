import type { Metadata } from "next";
import "./globals.css";
import { ContentLevelProvider } from "@/context/ContentLevelContext";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Health AI Digest",
  description: "Your source for the latest in Health AI news, research, and innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen antialiased">
        <ContentLevelProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white !shadow-lg",
            }}
          />
        </ContentLevelProvider>
      </body>
    </html>
  );
}
