import React from "react";
import { AppButton } from "components/Button/AppButton";
import { motion } from "framer-motion";
import ASSETS from "assets/";
import { MainImageLoading } from "components/MainImageLoading/MainImageLoading";
import { useEffect } from "react";

export const MainContent = () => {
    return (
        <div className="relative text-center content-center bg-fixed w-full max-h-screen max-w-none md:mb-10">
            <div className="flex-shrink-0">
                <MainImageLoading
                    src={ASSETS.main_img}
                    placeholderSrc={ASSETS.main_img_small}
                    className="rounded-md min-h-screen lg:max-h-screen md:max-h-screen w-full object-cover"
                />
            </div>
            <motion.div className="absolute right-0 top-[15%] text-3xl left-0 text-center lg:text-5xl md:text-4xl text-white">
                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.05 }}
                >
                    We Provide the Tools,
                </motion.p>

                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.45 }}
                    className={'mt-2 md:mt-4 italic'}
                >
                    You Build the Community
                </motion.p>

                {/*<motion.p*/}
                {/*    initial={{ y: 0, opacity: 0 }}*/}
                {/*    animate={{ y: 0, opacity: 1 }}*/}
                {/*    transition={{ duration: 1, delay: 0.95 }}*/}
                {/*</motion.p>*/}
            </motion.div>
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.25, delay: 1.5 }}
            >
                <AppButton className="absolute w-4/5 md:w-1/3 lg:w-1/3 xl:w-1/5 h-9 text-sm bottom-[15%] lg:bottom-[5%] left-[50%] text-center -translate-x-1/2 text-purpleColor border-purpleColor
                hover:bg-purpleColor hover:text-white bg-bgColor rounded-lg" />
            </motion.div>
        </div>
    );
};
