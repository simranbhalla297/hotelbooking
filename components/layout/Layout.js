import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children, title = "book guest hotels " }) => {
  return (
    <div className="flex flex-col h-screen  ">
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
      </div>
      <main className="flex-1  overflow-y-auto  ">{children}</main>
      {/* <main style={{ flexGrow: "flex1" }}>{children}</main> */}
      <Footer />
    </div>
  );
};

export default Layout;
