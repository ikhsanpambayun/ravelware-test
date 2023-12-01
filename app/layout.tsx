import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravelware Test",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main className="bg-black p-3 h-screen max-h-screen overflow-hidden">
            <div className="relative h-full bg-background rounded-xl flex overflow-hidden">
              <div className="w-[19%]">
                <Sidebar />
              </div>
              <div className="flex flex-col w-[81%] h-full">
                <div className="flex-none">
                  <Navbar />
                </div>
                <div className="grow">{children}</div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
