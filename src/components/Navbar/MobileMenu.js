import { forwardRef } from "react";
// import { IoIosClose } from "react-icons/io";


const MobileMenu = forwardRef(({ closeMenu, isVisible }, ref) => {
  return (
    <div
      ref={ref}
      className={`h-screen w-screen bg-transparent absolute top-0 left-0 z-20 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-1 text-3xl w-full h-full items-center justify-center">
        <li>en—de</li>
        <li>prices</li>
        <li>appointments</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      {/* <IoIosClose
        className="absolute text-2xl top-2 right-2 cursor-pointer"
        onClick={closeMenu}
      /> */}
      <div
        className="absolute text-xl top-2 right-3 cursor-pointer"
        // className="absolute text-xl top-3 right-3 cursor-pointer"
        onClick={closeMenu}
      >
        EXIT
      </div>
    </div>
  );
});

export default MobileMenu;
