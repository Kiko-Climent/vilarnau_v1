'use client';

import Intro from "@/components/Section_Intro";
import Intro2 from "@/components/Section_Intro2";

const page = () => {
  return (
      <>
      <Intro />
      <div className="pt-16 md:pt-28">
        <Intro2 />
      </div>
      </>
  )
}

export default page;