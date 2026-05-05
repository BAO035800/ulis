"use client";

import { motion } from "framer-motion";

export default function HeroScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full lg:w-[130%] lg:-mr-[30%]"
    >
      <div
        className="w-full overflow-hidden rounded-3xl shadow-2xl"
        style={{ aspectRatio: "2504 / 1080" }}
      >
        <iframe
          src="https://drive.google.com/file/d/1TSoFM-4yoHtB-KnGUf65WVP9MdN_9dWu/preview"
          allow="autoplay"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </motion.div>
  );
}
