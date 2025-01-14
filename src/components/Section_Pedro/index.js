"use client";

// const Pedro = () => {
//   return (
//     <section className="h-screen px-8 py-24">
//       <div className="flex flex-col md:flex-row-reverse md:justify-between items-center h-full gap-8 md:gap-16">
//         {/* Contenedor del texto */}
//         <div className="flex w-full md:w-6/12">
//           <div className="text-right w-full md:text-right text-3xl md:text-5xl font-bold text-gray-800 blur-[0.5px]">
//             Because you are<br />
//             more authentic<br />
//             the more you resemble<br />
//             what you've dreamed<br />
//             you are.
//           </div>
//         </div>
//         {/* Contenedor de la imagen */}
//         <div className="flex items-start w-full md:w-6/12 h-full justify-start md:justify-start">
//           <img
//             src="./images/Vilarnau_analog_05.jpg"
//             className="object-cover h-[100%] w-[85%] md:w-full self-center"
//             alt="Vilarnau"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pedro;

const Pedro = () => {
  return (
    <section className="w-full h-full px-8 py-16">
      <div className="flex flex-col md:flex-row-reverse gap-16 h-full ">
        <div className="w-full w-full md:w-6/12 ">
          <img src='./images/Vilarnau x Palma Llopis-1.jpg'  className="w-full object-cover" />
        </div>
        <div className="w-full w-full md:w-6/12 relative"> 
          <img src='./images/Vilarnau_analog_05.jpg'  className="w-full object-cover" />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <p className="text-xl md:text-5xl text-center text-white font-bold blur-[0.5px] opacity-80">
              because you are more authentic <br/>the more you resemble <br/>what you've dreamed you are.
            </p>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Pedro;
