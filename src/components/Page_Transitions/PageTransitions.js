"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur-[20px]" }}
        animate={{ opacity: 1,  filter: "blur-[0px]" }}
        exit={{ opacity: 0, filter: "blur-[20px]"}}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.7 }}
      >
        {children}
      </motion.div>

    </AnimatePresence>
  );
};

export default PageTransition;
