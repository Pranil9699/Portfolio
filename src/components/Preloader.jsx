import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Preloader = ({ isLoading }) => {
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[#030611]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h1
            className="section-title text-3xl sm:text-5xl text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Pranil Portfolio
          </motion.h1>
          <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#4de2b1] to-[#6fb5ff]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
