
import { Inter } from "next/font/google";
import Example from '../components/AdminMenu';
const inter = Inter({ subsets: ["latin"] });
import Table1 from '../components/UserTable';

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
  );
}