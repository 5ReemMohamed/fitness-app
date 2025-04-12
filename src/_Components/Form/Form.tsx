"use client";
import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  contactMethod: string;
  subscribe: boolean;
}

export default function ContactForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactMethod: "email",
      subscribe: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number is not valid")
        .required("Phone number is required"),
      subject: Yup.string()
        .min(3, "Subject must be at least 3 characters")
        .required("Subject is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        console.log("Form submitted:", values);
        toast.success("Message Sent Successfully!");
        resetForm();
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
            style: {
            background: "#161616",
            color: "white",
            border: "1px solid #ff5e18",
            },
            success: {
            iconTheme: {
                primary: "#ff5e18",
                secondary: "white",
            },
            },
            error: {
            iconTheme: {
                primary: "#ff5e18",
                secondary: "white",
            },
            },
        }}
/>

      <motion.form
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       viewport={{ once: true, amount: 0.5 }}
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center py-10 px-4"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl tracking-wide mb-2 font-bold text-white">
            Send Us Your <span className="italic text-[#ff5e18]">Questions!</span>
          </h2>
          <p className="text-white/60">We’ll get back to you within two days.</p>
        </div>

        <div className="flex flex-col gap-5 w-full max-w-2xl">
          <div className="flex flex-col md:flex-row gap-5">
            
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-white font-medium">Full Name:</label>
              <input
                id="name"
                type="text"
                className={`p-3 rounded border transition-all duration-200 outline-0 focus:border-[#ff5e18] text-white ${
                  formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

           
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-white font-medium">Email Address:</label>
              <input
                id="email"
                type="email"
                className={`p-3 rounded border transition-all duration-200 outline-0 focus:border-[#ff5e18] text-white ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
           
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone" className="text-white font-medium">Phone Number:</label>
              <input
                id="phone"
                type="tel"
                className={`p-3 rounded border transition-all duration-200 outline-0 focus:border-[#ff5e18] text-white ${
                  formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>

          
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="subject" className="text-white font-medium">Subject:</label>
              <input
                id="subject"
                type="text"
                className={`p-3 rounded border transition-all duration-200 outline-0 focus:border-[#ff5e18] text-white ${
                  formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm">{formik.errors.subject}</p>
              )}
            </div>
          </div>

          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white font-medium">Message:</label>
            <textarea
              id="message"
              className={`p-3 h-40 rounded border transition-all duration-200 outline-0 focus:border-[#ff5e18] text-white ${
                formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

       
          <div className="flex flex-col gap-2">
            <label htmlFor="contactMethod" className="text-white font-medium">Preferred Contact Method:</label>
            <select
              id="contactMethod"
              className="p-3 rounded border border-gray-300 focus:border-[#ff5e18] outline-0 text-white "
              {...formik.getFieldProps("contactMethod")}
            >
              <option className="text-black"  value="email">Email</option>
              <option className="text-black" value="phone">Phone</option>
            </select>
          </div>

         
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="subscribe"
              className="accent-[#ff5e18] w-5 h-5"
              {...formik.getFieldProps("subscribe")}
              checked={formik.values.subscribe}
            />
            <label htmlFor="subscribe" className="text-white">
              Subscribe to our newsletter
            </label>
          </div>

         
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={`py-3 px-16 rounded tracking-wider font-bold text-white shadow-lg transition-colors duration-300
                ${formik.isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff5e18] hover:bg-[#e64d00]"}`}
            >
              {formik.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </motion.form>
    </>
  );
}
