import React from "react";
import { FaLinkedinIn, FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FormInput from "../Shared/form/FormInput";
import FormButton from "../Shared/form/FormButton";

const SignUpForm = () => {
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      exit={{ x: 400, opacity: 0, transition: { duration: 1 } }}
      className="h-full"
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-6">
        {/* Form Title */}
        <h2 className="font-extrabold text-3xl ">Sign up</h2>

        {/* Social Icons */}
        <div className="flex my-5 space-x-2">
          <button className="btn btn-circle btn-outline">
            <FaFacebookF className="h-4 w-4" />
          </button>
          <button className="btn btn-circle btn-outline">
            <FaGooglePlusG className="h-4 w-4" />
          </button>
          <button className="btn btn-circle btn-outline">
            <FaLinkedinIn className="h-4 w-4" />
          </button>
        </div>

        {/* Sign Up Form */}
        <div className="form-control w-full  px-4 ">
          {/* <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          /> */}

          <FormInput />

          <FormInput />

          <FormButton />
        </div>
      </div>

      <p className="md:hidden mt-2 text-sm">
        Already have an account?
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 1 },
          }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 1 } }}
          className="pl-2 text-sm font-bold  text-black"
        >
          <Link href="/signin">Sign In</Link>
        </motion.span>
      </p>
    </motion.div>
  );
};

export default SignUpForm;
