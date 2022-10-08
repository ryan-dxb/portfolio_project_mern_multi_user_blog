import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const FormLeftSide = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 top-0 p-10 left-0 h-[480px] z-20 text-center">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
        exit={{ scale: 0, transition: { duration: 0.5 } }}
        className="font-extrabold text-3xl text-white"
      >
        Hey There!!
      </motion.h2>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.5, duration: 1 },
        }}
        exit={{ scale: 0, transition: { duration: 1 } }}
        className="my-4 text-base"
      >
        Enter your personal details and start your journey with us
      </motion.p>
      <Link href="signup">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 1 },
          }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 1 } }}
          className="text-xs font-bold uppercase py-3 px-11 text-white bg-transparent border-2 border-white rounded-3xl opacity-0"
        >
          Sign Up
        </motion.button>
      </Link>
    </div>
  );
};

export default FormLeftSide;
