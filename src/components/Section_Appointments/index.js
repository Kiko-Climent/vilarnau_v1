"use client";


const Appointments = () => {

  return(
    <section className="w-screen h-full py-16 px-8">
      <div className="relative w-full h-full flex">
        <img
            src="/images/Vilarnau x Palma Llopis-2.jpg"
            className="w-full h-full object-contain md:object-cover"/>

        {/* <img ref={imageRef4}
            src="/images/Vilarnau x Palma Llopis-3.jpg"
            className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"/> */}
        <div className="absolute inset-0 flex items-center justify-center uppercase text-3xl">
          <h1 className="text-white uppercase font-bold text-2xl md:text-5xl tracking-wide blur-[0.5px] opacity-90 hover:blur-[1.5px]">
            appointments &#8599;
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Appointments;