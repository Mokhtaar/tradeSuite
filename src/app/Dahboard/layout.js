import { Inter } from "next/font/google";
import MyComponent from '../components/Menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <MyComponent />
      <body className={inter.className}>{children}</body>
     
    </html>
  );
}
