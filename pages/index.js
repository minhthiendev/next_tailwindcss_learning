import Head from "next/head";
import React from "react";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar";
import Modal from "../components/UI/Modal";
import SideBar from "./../components/common/SideBar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <SideBar />
          {/* <Navbar /> */}
        </div>

        <Modal></Modal>

        {/* <Footer /> */}
      </main>
    </div>
  );
}
