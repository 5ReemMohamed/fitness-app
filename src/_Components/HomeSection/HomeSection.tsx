"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function HomeSection() {
  return (
    <>
    <section className="my-20 text-white">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="p-9">
      <p className="border border-[#ff5e18] inline-block py-2 px-6 rounded-full mb-10 text-lg">Group CrossFit Classes</p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-16">Get fit while having fun with our group CrossFit classes</h2>
      <ul className="flex flex-col gap-8">
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Just 30 minutes long</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Warm up & workout included</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Fun is guaranteed</p>
        </li>
      </ul>
    </div>
    <div>
      <Image
        src="/groupService.png"
        alt="group service"
        width={300}
        height={200}
        className="w-full h-[100vh] object-cover rounded-l-2xl"
      />
    </div>
  </motion.div>
</section>

<section className="my-20 text-white">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="order-2 md:order-1">
      <Image
        src="/services3.png"
        alt="group service"
        width={300}
        height={200}
        className="w-full h-[100vh] object-cover rounded-r-2xl"
      />
    </div>
    <div className="p-9 order-1 md:order-2">
      <p className="border border-[#ff5e18] inline-block py-2 px-6 rounded-full mb-10 text-lg">Strength Training</p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-16">Crush any strength program with our suite of strength equipment</h2>
      <ul className="flex flex-col gap-8">
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Fully fitted powerlifting and strongman section</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Olympic lifting platforms, weights, and bars</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Dumbells ranging 5lbs-250lbs</p>
        </li>
      </ul>
    </div>
  </motion.div>
</section>

<section className="my-20 text-white">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="p-9">
      <p className="border border-[#ff5e18] inline-block py-2 px-6 rounded-full mb-10 text-lg">Personal Training</p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-16">Be guided every step of the way with one of our world class coaches</h2>
      <p className="bg-white/30 p-4 mb-7 inline-block rounded-lg">We have coaches in each one of the following categories:</p>
      <ul className="flex flex-col gap-8">
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Weightloss</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Competitive CrossFit</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Powerlifting</p>
        </li>
      </ul>
    </div>
    <div>
      <Image
        src="/services2.png"
        alt="group service"
        width={300}
        height={200}
        className="w-full h-[100vh] object-cover rounded-l-2xl"
      />
    </div>
  </motion.div>
</section>

<section className="my-20 text-white">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="order-2 md:order-1">
      <Image
        src="/services1.png"
        alt="group service"
        width={300}
        height={200}
        className="w-full h-[100vh] object-cover rounded-r-2xl"
      />
    </div>
    <div className="p-9 order-1 md:order-2">
      <p className="border border-[#ff5e18] inline-block py-2 px-6 rounded-full mb-10 text-lg">Member Only Events</p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-16">Make new friends and get competitive with fun member events</h2>
      <ul className="flex flex-col gap-8">
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Friendly competitions</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Monthly challenges</p>
        </li>
        <li className="flex items-center gap-3">
          <FaRegCircleCheck className="text-3xl text-[#ff5e18]" />
          <p className="text-lg">Summer potlucks and games</p>
        </li>
      </ul>
    </div>
  </motion.div>
</section>

<section className="my-20 text-white p-10 mx-auto">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="p-5 bg-white/30 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-[#ff5e18]">
      <div className="flex gap-1 text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-center w-[60%]">6 months after joining I lost 15lbs and I am getting stronger.</p>
      <Image src="/testimonials1.png" alt="" width={70} height={70} className="object-cover rounded-full" />
    </div>
    <div className="p-5 bg-white/30 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-[#ff5e18]">
      <div className="flex gap-1 text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-center w-[60%]">I have gotten so much stronger after joining it is insane. My deadlift increased by 65lbs.</p>
      <Image src="/testimonials2.png" alt="" width={70} height={70} className="object-cover rounded-full" />
    </div>
    <div className="p-5 bg-white/30 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-[#ff5e18]">
      <div className="flex gap-1 text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-center w-[60%]">While I am passionate about health and fitness this gym is more like a community to me than anything!</p>
      <Image src="/testimonials3.png" alt="" width={70} height={70} className="object-cover rounded-full" />
    </div>
  </motion.div>
</section>
    </>
  )
}
