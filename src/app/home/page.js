'use client';

import { useEffect } from "react";
import Lenis from "lenis";

import Appointments from "@/components/Section_Appointments";
import Intro from "@/components/Section_Intro";
import Intro2_2 from "@/components/Section_Intro2/index2";
import Partner from "@/components/Section_Partner";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Section_Info";
import Intro2 from "@/components/Section_Intro2";
import Pedro from "@/components/Section_Pedro";
import Intro1_3 from "@/components/Section_Intro/index.3";
import Intro2_3 from "@/components/Section_Intro2/index3";


const page = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
  }, [])
  return (
      <main>
        <Intro1_3 />
        {/* <Intro2_2 /> */}
        <Intro2_3 />
        <Info />
        <Appointments />
        <Pedro />
        {/* <Svg /> */}
        {/* <Partner /> */}
        <Footer />
      </main>
  )
}

export default page;