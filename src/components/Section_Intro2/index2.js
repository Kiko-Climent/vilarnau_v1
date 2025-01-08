"use client";

// // const Intro2_2 = () => {
// //   return(
// //     <section className="w-screen h-screen">
// //       <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-16 px-8 overflow-x-hidden">
// //         <div className="flex w-6/12 text-right">
// //           <p className="text-6xl w-full h-full font-bold text-gray-500">Located in the heart of Kreuzberg, Vilarnau has been elevating the kraft of hairstyling since 2019</p>
// //         </div>
// //         <div className="flex w-6/12 h-full">
// //           <img src="./images/Vilarnau x Palma Llopis-13.jpg"
// //               className="object-cover w-[85%] h-[85%]"/>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// export default Intro2_2;

const Intro2_2 = () => {
  return (
    <section className="h-screen px-8 py-16">
      <div className="flex flex-col md:flex-row md:justify-between items-center h-full gap-8 md:gap-16">
        {/* Contenedor del texto */}
        <div className="flex w-full md:w-6/12">
          <p className="text-right md:text-left text-3xl md:text-5xl font-bold text-gray-400">
            Located in the heart of Kreuzberg,<br />
            Vilarnau has been elevating<br />
            the kraft of hairstyling<br />
            since 2019
          </p>
        </div>
        {/* Contenedor de la imagen */}
        <div className="flex items-center w-full md:w-6/12 h-full">
          <img
            src="./images/Vilarnau x Palma Llopis-13.jpg"
            className="object-cover h-[90%] w-[85%] self-center"
            alt="Vilarnau"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro2_2;
