import Head from "next/head";
import React from "react";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
