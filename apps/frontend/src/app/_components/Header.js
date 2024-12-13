"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              MyApp
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {!token && (
                <>
                  <li>
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </li>
                </>
              )}
              {token && (
                <li>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
