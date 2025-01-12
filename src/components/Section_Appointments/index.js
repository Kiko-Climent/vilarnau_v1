"use client";


const Appointments = () => {
  return(
    <section className="h-screen px-8 py-16">
      <div className="flex flex-row h-full overflow-y-hidden items-center justify-center gap-2 md:gap-8">
        <div className="flex w-1/3 h-full">
          <img src="./images/Vilarnau x Palma Llopis-11.jpg" className="object-cover w-full"/>
        </div>
        <div className="flex w-1/3 h-full relative">
          <img src="./images/Vilarnau x Palma Llopis-14.jpg" className="object-cover w-full"/>
          <div className="inset-0 absolute flex items-center justify-center">
            <p className="text-5xl text-white font-bold blur-[0.5px] opacity-60 hover:opacity-100 hover:transition-colors duration-300">appointments</p>
          </div>
        </div>
        <div className="flex w-1/3 h-full">
          <img src="./images/Vilarnau x Palma Llopis-21.jpg" className="object-cover w-full"/>
        </div>
      </div>
    </section>
  )
}

export default Appointments;