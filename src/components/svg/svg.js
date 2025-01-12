"use client";

const Svg = () => {
  return (
    <div className="svg-container flex items-center justify-center h-screen py-16">
      <svg viewBox="0 0 700 700" fill="none" className="w-[700px] h-[700px]">
        {/* <circle cx="250" cy="250" r="250" fill="#D9D9D9"/> */}
        <path
          id="mypath"
          fill="black"
          d="
            M 250 250
            m 125,0
            a 125,125 0 1,0 -250,0
            a 125,125 0 1,0 250,0
            "
        />
        <text className="uppercase text-gray-500 text-[5.5vh] tracking-widest">
          <textPath fill="white" href="#mypath">
            manteufelstr.55 · vilarnau ·
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Svg;
