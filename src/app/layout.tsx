import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { OrderProvider } from "@/context/OrderContext";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vita Nova Care",
    default: "Vita Nova Care | Premium Organic Groceries",
  },
  description: "Experience the finest organic groceries for a revitalized life. Sustainably sourced, premium quality from farm to table.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vita Nova Care",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <ToastProvider>
          <WishlistProvider>
            <OrderProvider>
              <CartProvider>
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </CartProvider>
            </OrderProvider>
          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
