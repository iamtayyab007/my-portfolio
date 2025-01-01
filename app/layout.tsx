import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Load the Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: CSS variable for custom font styles
});

// Metadata for the app
export const metadata: Metadata = {
  title: "iamtayyab007 Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
