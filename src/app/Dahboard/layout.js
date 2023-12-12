import { Inter } from "next/font/google";
import MyComponent from "../components/Menu";
import MyHeader from "../components/Header";
import UploadDocument from "../components/UploadDocument";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyComponent />

      <MyHeader />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
