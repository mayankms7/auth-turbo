"use client";

import Image from "next/image";
import SignupForm from "../_components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Signup Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Create an account
          </h1>
          <SignupForm />
        </div>
      </div>

      {/* Illustration Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 items-center justify-center p-16">
        <div className="relative w-full h-full max-w-lg">
          <Image
            src="/signup-illustration.svg"
            alt="Signup Illustration"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
