"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ContentMainPageWeb = () => {
  return (
    <div className="bg-black  text-slate-200 mb-[200px]">
      <div className="flex relative">
        <motion.div
          whileInView={{ opacity: [0, 1], width: ["0px", "200px"] }}
          className="absolute w-[150px] h-[200px] right-[200px] top-[200px]"
        ></motion.div>

        <h1 className="text-[80px] font-bold mt-[200px] ">
          <div className="Benzin uppercase leading-[100px] flex flex-col items-center cursor-default">
            <motion.div className="">Building a website for selling</motion.div>
            <div className="relative w-full h-[300px]">
              <Image
                alt=""
                src={"/images/tech-1.jpg"}
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
          </div>
          <motion.div className="absolute w-[250px] left-[50%] translate-x-[-50%] bottom-[-100px] h-[70px]">
            <Image
              alt=""
              fill
              style={{ objectFit: "cover" }}
              src={"/images/productcolor.png"}
            />
          </motion.div>
        </h1>
      </div>
    </div>
  );
};

export default ContentMainPageWeb;
