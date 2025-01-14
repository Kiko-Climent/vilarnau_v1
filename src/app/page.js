'use client';

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Hero from "@/components/Hero";

import Loader from "@/components/Loader";
// import Intro from "@/components/Section_Intro";
// import Intro2 from "@/components/Section_Intro2";
// import Appointments from "@/components/Section_Appointments";



export default function Home() {

  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true)
      });

      setTimeline(tl);
    })

    return () => context.revert()
  }, [])


  return (
    
    <>
      {loaderFinished ? <Hero /> : <Loader timeline={timeline} />}
      {/* <Hero /> */}
    </>
  );
}
