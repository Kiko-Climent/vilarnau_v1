"use client";

const Intro2 = () => {
  return(
    <section className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full px-8 gap-16 flex flex-col-reverse md:flex-row-reverse justify-evenly items-center">
        <div className="flex  w-full md:w-1/3 h-3/4 shrink-0">
          <img src="./images/Vilarnau x Palma Llopis-13.jpg"
              className="object-cover w-full h-full"/>
        </div>
        <div className="flex border-b-[3px] border-t-[3px] border-gray-600">
          
            <p className="flex text-center items-center text-gray-600 font-bold text-4xl h-36 w-full">elevating <br/>the kraft of hairstyling<br/> since 2018</p>
          
        </div>
      </div>
    </section>
  )
}

export default Intro2;

// const Intro2 = () => {
//   return(
//     <section className="w-screen h-screen px-8">
//       <div className="w-full h-full gap-16 flex flex-col-reverse md:flex-row-reverse justify-evenly items-center">
//         <div className="flex  w-full md:w-1/3 h-3/4 shrink-0">
//           <img src="./images/Vilarnau x Palma Llopis-13.jpg"
//               className="object-cover w-full h-full"/>
//         </div>
//         <div className="flex border-b-[3px] border-t-[3px] border-gray-600">
          
//             <p className="flex text-center items-center text-gray-600 font-bold text-4xl h-36 w-full">elevating <br/>the kraft of hairstyling<br/> since 2018</p>
          
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Intro2;