const Intro3 = () => {
  return (
    <section className="w-full h-full px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8 h-full ">
        <div className="w-full md:w-1/2 ">
          <img src='./images/Vilarnau x Palma Llopis-12.jpg'  className="w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 relative"> 
          <img src='./images/Vilarnau x Palma Llopis-7.jpg'  className="w-full object-cover" />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <p className="text-xl md:text-4xl text-center text-white font-bold blur-[0.5px]">
              a space where individuality<br/> and self-expression <br/>are not just embraced <br/>but celebrate
            </p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Intro3;