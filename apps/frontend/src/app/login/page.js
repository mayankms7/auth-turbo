import Image from "next/image";
import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Welcome back
          </h1>
          <LoginForm />
        </div>
      </div>

      {/* Illustration Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 items-center justify-center p-16">
        <div className="relative w-full h-full max-w-lg">
          <Image
            src="/login-illustration.svg"
            alt="Login Illustration"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
