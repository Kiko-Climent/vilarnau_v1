"use client";

const About = () => {
  return(
    <section className="bg-orange-600">
      <div className="h-screen border-8 border-white grid grid-cols-[400px_500px_150px_] grid-rows-[150px_300px_200px_] gap-x-2 gap-y-4 justify-center place-content-evenly">
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl self-start">ITEM 1</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-7xl self-end"></div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl self-center">ITEM 3</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 4</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 5</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 6</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 7</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 8</div>
        <div className="bg-orange-500 text-white px-8 py-6 text-2xl">ITEM 9</div>
      </div>
    </section>
  )
}

export default About;