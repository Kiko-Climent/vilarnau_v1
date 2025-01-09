'use client';

import { useEffect } from "react";
import Lenis from "lenis";

import Appointments from "@/components/Section_Appointments";
import Info from "@/components/Section_Prices";
import Intro from "@/components/Section_Intro";
import Description from "@/components/Section_Prices/description";
import Intro2 from "@/components/Section_Intro2";
import Intro2_2 from "@/components/Section_Intro2/index2";
import Partner from "@/components/Section_Partner";

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
        <Intro />
        {/* <Intro2 /> */}
        <Intro2_2 />
        {/* <div className="pt-16 md:pt-28">
          <Intro2 />
        </div>
        <Info />
        <Description />*/}
        <Appointments />
        <Partner />
      </main>
  )
}

export default page;