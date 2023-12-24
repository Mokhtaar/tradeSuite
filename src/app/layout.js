
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./NextAuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
        <body className={inter.className}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      {/* </Provider> */}
    </html>
  );
}
