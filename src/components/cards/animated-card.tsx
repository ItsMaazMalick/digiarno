"use client";
import {
  variant1,
  variant2,
  variant3,
  variant4,
  variant5,
  variant6,
  variant7,
  variant8,
  variant9,
  variant10,
} from "@/constants/animation-variants";
import { inView, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
export function AnimatedCard({
  children,
  option,
}: {
  children: React.ReactNode;
  option: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={
        option === 1
          ? variant1
          : option === 2
          ? variant2
          : option === 3
          ? variant3
          : option === 4
          ? variant4
          : option === 5
          ? variant5
          : option === 6
          ? variant6
          : option === 7
          ? variant7
          : option === 8
          ? variant8
          : option === 9
          ? variant9
          : variant10
      }
    >
      {children}
    </motion.div>
  );
}
