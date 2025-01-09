"use client";

// const Intro = () => {
//   return (
//     <section className="h-full w-screen overflow-hidden ">
//       <div className="flex flex-col md:flex-row h-full w-full gap-16 px-8 pt-16">
//         <div className="relative flex w-full h-full">
//           <img
//             src="./images/Vilarnau x Palma Llopis-12.jpg"
//             className="object-cover w-full h-full"
//             alt="Imagen 1"
//           />
//         </div>
//         <div className="relative flex w-full h-full">
//           <img
//             src="./images/Vilarnau x Palma Llopis-7.jpg"
//             className="object-cover w-full h-full"
//             alt="Imagen 2"
//           />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <p className="text-xl md:text-4xl text-center text-white font-bold blur-[0.5px]">
//             a space where individuality<br/> and self-expression <br/>are not just embraced <br/>but celebrate</p>
//         </div>
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default Intro;

const Intro = () => {
  return (
    <section className="w-full h-full px-8 py-16">
      <div className="flex flex-col md:flex-row gap-16 h-full ">
        <div className="w-full w-full md:w-6/12 ">
          <img src='./images/Vilarnau x Palma Llopis-12.jpg'  className="w-full object-cover" />
        </div>
        <div className="w-full w-full md:w-6/12 relative"> 
          <img src='./images/Vilarnau x Palma Llopis-7.jpg'  className="w-full object-cover" />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <p className="text-xl md:text-4xl text-center text-white font-bold blur-[0.5px] opacity-70">
              a space where individuality<br/> and self-expression <br/>are not just embraced <br/>but celebrate
            </p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
