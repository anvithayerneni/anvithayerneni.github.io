import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anvitha Yerneni | Software Engineer | AI Engineer",
  description: "Portfolio of Anvitha Yerneni — Software Engineer specializing in scalable backend systems, generative AI architectures, lakehouse data engineering, and real-time distributed platforms.",
  keywords: [
    "Anvitha Yerneni",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Engineer",
    "Data Engineer",
    "Python",
    "FastAPI",
    "Java",
    "Spring Boot",
    "PySpark",
    "DuckDB",
    "LangGraph",
    "Azure OpenAI",
    "Azure AI Search",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "Docker",
    "AWS",
    "Clemson University"
  ],
  authors: [{ name: "Anvitha Yerneni" }],
  creator: "Anvitha Yerneni",
  metadataBase: new URL("https://anvithayerneni.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anvithayerneni.github.io",
    title: "Anvitha Yerneni | Software Engineer | AI Engineer",
    description: "Portfolio of Anvitha Yerneni — Software Engineer specializing in scalable backend systems, generative AI architectures, lakehouse data engineering, and real-time distributed platforms.",
    siteName: "Anvitha Yerneni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvitha Yerneni | Software Engineer | AI Engineer",
    description: "Portfolio of Anvitha Yerneni — Software Engineer specializing in scalable backend systems, generative AI architectures, lakehouse data engineering, and real-time distributed platforms.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
