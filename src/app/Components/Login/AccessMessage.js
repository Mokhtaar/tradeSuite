"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AccessMessage = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/Login");
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
      }}
      className="bg-black h-screen flex items-center justify-center"
    >
      <p className="text-2xl text-white">
        Access denied - You&apos;re not authorized to view this page!
        Redirecting in {seconds} seconds...
      </p>
    </div>
  );
};

export default AccessMessage;
