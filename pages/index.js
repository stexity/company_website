import { useState } from "react";
import Head from "next/head";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Technologies from "../components/technologies/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stexity PVT Ltd.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

        <Navbar />
      <main>

        <Banner />
        <Services />
        <Technologies />
        <Portfolio />

        <div style={{ height: "100vh" }}></div>
      </main>
    </div>
  );
}
