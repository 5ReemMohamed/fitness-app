import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
    <footer className="bg-white/5 text-white py-10 px-4">
  <div className=" p-4 mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
  
    <div>
      <h2 className="text-2xl font-bold mb-3 text-[#ff5e18]">FitNase</h2>
      <p className="text-white/60">
        Empowering your questions with clear answers. <br />We’ll get back to you within two days.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-3 text-[#ff5e18]">Quick Links</h3>
      <ul className="space-y-2 text-white/70 flex gap-8">
        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
        <li><Link href="/exercises" className="hover:text-white transition">Exercises</Link></li>
        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
      </ul>
    </div>

   
  </div>

  
  <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
    © {new Date().getFullYear()} FitNase. All rights reserved.
  </div>
</footer>

    </>
  )
}
