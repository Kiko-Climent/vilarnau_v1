"use client";

const Intro2_2 = () => {
  return(
    <section className="w-screen h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-16 px-8 overflow-x-hidden">
        <div className="flex w-6/12 text-right">
          <p className="text-6xl w-full h-full font-bold text-gray-500">Located in the heart of Kreuzberg, Vilarnau has been elevating the kraft of hairstyling since 2019</p>
        </div>
        <div className="flex w-6/12 h-full">
          <img src="./images/Vilarnau x Palma Llopis-13.jpg"
              className="object-cover w-[85%] h-[85%]"/>
        </div>
      </div>
    </section>
  )
}

export default Intro2_2;