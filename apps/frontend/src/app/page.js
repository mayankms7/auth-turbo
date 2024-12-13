"use client";
import Header from "./_components/Header";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [userName, setUserName] = useState("MyApp");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        if (userData.name) {
          setUserName(userData.name);
        }
        if (userData.email) {
          setUserEmail(userData.email);
        }
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome {userName}
          </h1>
          {userEmail && (
            <p className="text-xl text-gray-600 mb-4">{userEmail}</p>
          )}
          <p className="text-xl text-gray-600">
            We&apos;re excited to have you here. Explore our features and start
            your journey with us today!
          </p>
        </div>
      </main>
    </div>
  );
}
