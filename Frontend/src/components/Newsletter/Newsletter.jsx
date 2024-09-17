import React from "react";
import "./Newsletter.css";
import { motion } from "framer-motion";
import World from "../GlobeComponent/World";
import LampContainer from "../LampEffect/LampContainer";
function Newsletter() {
  return (
    <div className="outerContainer">
      <div className="innerContainer flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          >
            <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
              RealReel
            </h2>
            <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              This globe is interactive and customizable. Have fun with it, and
              don&apos;t forget to share it. :)
            </p>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
            <World />
          </div>
        </div>
      </div>
      {/* <div className="innerContainer"> */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="innerContainer mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
    </div>
    // </div>
  );
}
export default Newsletter;
