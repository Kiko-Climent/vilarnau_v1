import { forwardRef } from "react";
import { IoIosClose } from "react-icons/io";

const MobileMenu = forwardRef(({ closeMenu, isVisible }, ref) => {
  return (
    <div
      ref={ref}
      className={`h-screen w-screen bg-transparent absolute top-0 left-0 z-20 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-2 w-full h-full items-center justify-center">
        <li>prices</li>
        <li>appointments</li>
        <li>about</li>
        <li>en—de</li>
      </ul>
      <IoIosClose
        className="absolute text-lg top-3 right-4 cursor-pointer"
        onClick={closeMenu}
      />
    </div>
  );
});

export default MobileMenu;
