import Form from "@/_Components/Form/Form";
import React from "react";

export default function page() {
  return (
    <>
     <div className="py-16 px-4 bg-[#161616] text-white">
      <div className="container mx-auto max-w-6xl">
       
        <h2 className="text-4xl font-bold mb-6 text-center text-[#ff5e18]">Contact Us</h2>
        <p className="text-lg mb-12 text-gray-400 text-center max-w-[70%] mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is always ready to help you with any inquiries.
        </p>
        <Form />
      </div>
    </div>
   
    </>
  )
}
