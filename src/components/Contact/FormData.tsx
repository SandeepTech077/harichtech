/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { sendEmailMessage } from "@/api/base";
interface FormDataProps {
  data: {
    name: string;
    email: string;
    phone: string;
    countru: string;
    budget: string;
    describation: string;
    btnText: string;
    rightSideImage: StaticImageData;
  };
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  budget: string;
  customBudget: string;
  description: string;
}

export default function FormData({ data }: FormDataProps) {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    country: '',
    budget: '',
    customBudget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null); 



   const errors: Record<string, string> = {};
  if (!/^[0-9]{10}$/.test(formState.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    errors.email = "Enter a valid email address";
  }

  if (Object.keys(errors).length > 0) {
    setMessage({ type: "error", text: Object.values(errors).join(", ") });
    return;
  
   }
  
    try {
      const { ok, result } = await sendEmailMessage(formState);

      if (ok) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        setFormState({
          name: "",
          email: "",
          phone: "",
          country: "",
          budget: "",
          customBudget: "",
          description: "",
        });

        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({
          type: "error",
          text: result.msg || "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Server error, please try again later.",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder={data.name}
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white "
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className={`border p-2 bg-white  rounded w-full ${
                    message?.text.includes("email")
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
              </div>
              {/* phone Field */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Moblie No."
                  value={formState.phone}
                  onChange={(e) => {
                    if (/^[0-9]{0,10}$/.test(e.target.value)) {
                      setFormState({ ...formState, phone: e.target.value });
                    }
                  }}
                  className={`border p-2 bg-white  rounded w-full ${
                    message?.text.includes("Phone")
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
              </div>

              {/* Country Field */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="country"
                  placeholder={data.countru}
                  value={formState.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white "
                />
              </div>

              {/* Budget Field */}
              <div className="space-y-2">
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                >
                  <option value="" disabled className="text-gray-500">
                    {data.budget}
                  </option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>

              {/* Custom Budget Field */}
              {formState.budget === "custom" && (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="customBudget"
                    placeholder="Enter your custom budget (e.g., $15,000)"
                    value={formState.customBudget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>
              )}

              {/* Description Field */}
              <div className="space-y-2">
                <textarea
                  name="description"
                  placeholder={data.describation}
                  value={formState.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white  resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg  transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{isSubmitting ? "Sending..." : data.btnText}</span>
                  {!isSubmitting && (
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {/* Success / Error Message */}
              {message && (
                <p
                  className={`text-sm ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform -rotate-1"></div>

              <div className="relative h-full w-full bg-white rounded-2xl overflow-hidden">
                <Image
                  src={data.rightSideImage}
                  alt="Contact illustration"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
