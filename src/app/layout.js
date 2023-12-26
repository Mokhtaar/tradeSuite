import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/HomePage/Footer";
import Navbar from "./Components/HomePage/Navbar";
import NextAuthProvider from "./NextAuthProvider";
import { ReduxProvider } from "./GlobalRedux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
