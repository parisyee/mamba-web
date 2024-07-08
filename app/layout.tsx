import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./navigation";
import Link from 'next/link';
import { Button } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html className="h-full">
      <body className="h-full">
        <div className="min-h-full">
          <header className="shadow">
            <div className="mx-auto px-4 py-6 sm:px-8 lg:px-10">
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <Link href="/">
                    <h1 className="text-3xl font-bold tracking-tight">MAMBA</h1>
                  </Link>
                  <div className="ml-8">
                    <Navigation />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link href="#">
                    <Button variant="text">
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="mx-auto py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

