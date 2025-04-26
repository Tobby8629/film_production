"use client"
import "./globals.css";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import { Poppins, Montserrat, Open_Sans,} from 'next/font/google';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'], // or whatever weights you need
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-sans',
});

const queryClient = new QueryClient()

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
      <QueryClientProvider client={queryClient}>
        <NavBar/>
        {children}
        <Footer />
      </QueryClientProvider>
      </body>
    </html>
  );
}
