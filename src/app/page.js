'use client';


import { useLayoutEffect, useState } from "react";

// import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

// import Loader from "@/components/Loader";



export default function Home() {

  // const [loaderFinished, setLoaderFinished] = useState(false);
  // const [timeline, setTimeline] = useState(null);

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       onComplete: () => setLoaderFinished(true)
  //     });

  //     setTimeline(tl);
  //   })

  //   return () => context.revert()
  // }, [])


  return (
    <>
      <h1 className="text-9xl">Home</h1>
    </>
  );
}
