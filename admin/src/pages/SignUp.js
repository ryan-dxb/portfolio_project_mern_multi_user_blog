import React from "react";
import SignUpForm from "../components/Auth/Signup/SignUpForm";
import { motion } from "framer-motion";
// import FormLeftSide from "../components/Auth/Shared/FormLeftSide";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import FormButton from "../components/Auth/Shared/form/FormButton";
import FormInput from "../components/Auth/Shared/form/FormInput";
import RememberMe from "../components/Auth/Shared/form/RememberMe";

const SignUp = () => {
  return (
    <div className="flex h-screen w-full bg-primary">
      <div className="hidden lg:flex w-1/2 bg-slate-200">
        {/* <FormLeftSide /> */}
      </div>
      <div className="w-full flex justify-center lg:w-1/2 bg-slate-400">
        <div className="flex flex-col h-full w-full md:w-2/4 lg:w-2/3 justify-center items-center">
          <h2 className="text-xl font-semibold mb-6">Sign Up Form</h2>
          <div className="form-control px-10 w-full">
            <FormInput
              name="Name"
              placeholder="Enter your Full Name"
              label="Name"
            />
            <FormInput
              name="Email"
              placeholder="Enter your Email"
              label="Email"
            />

            <RememberMe />

            <FormButton buttonText="Sign In" />

            <div className="flex items-center justify-end pt-1">
              <span className="text-sm mt-2">Forgot Password?</span>
            </div>

            <div className="divider">OR</div>

            <FormButton
              icon={<FaFacebookF />}
              buttonText="Sign in with Facebook"
            />

            <FormButton icon={<FaGoogle />} buttonText="Sign in with Google" />
          </div>

          <p className="mt-6 text-sm ">
            Already have an account?
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 1 } }}
              className="pl-2 text-sm  font-bold  text-black"
            >
              <a href="/signin">Sign In</a>
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
