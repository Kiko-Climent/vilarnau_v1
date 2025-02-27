'use client';

import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

import Hero from "@/components/Hero";

import Loader from "@/components/Loader";
// import Intro from "@/components/Section_Intro";
// import Intro2 from "@/components/Section_Intro2";
// import Appointments from "@/components/Section_Appointments";



export default function Home() {

  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true)
      });

      setTimeline(tl);
    })

    return () => context.revert()
  }, [])

  useEffect(() => {
    if (loaderFinished) {
      const handleInteraction = () => router.push("/home")

      document.addEventListener("click", handleInteraction);
      document.addEventListener("keydown", handleInteraction);

      return () => {
        document.removeEventListener("click", handleInteraction);
        document.removeEventListener("keydown", handleInteraction);
      }
    }
  },[loaderFinished, router])


  return (
    
    <>
      {loaderFinished ? <Hero /> : <Loader timeline={timeline} />}
      {/* <Hero /> */}
    </>
  );
}
