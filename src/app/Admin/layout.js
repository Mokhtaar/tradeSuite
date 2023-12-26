import Example from "../components/AdminMenu";

import Table1 from "../components/UserTable";

export const metadata = {
  title: "TradeSuite",
  description: "Document Translation Hub",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Example />
      <Table1 />
    </>
  );
}
