"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const auth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const publicRoutes = ["/login", "/register"];
    const router = useRouter();
    const pathname = usePathname();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        if (!publicRoutes.includes(pathname)) {
          router.push("/login");
        }
      } else {
        if (publicRoutes.includes(pathname)) {
          router.push("/data-table");
        } else {
          router.push(pathname);
        }
      }
    }, [token]);

    if (!token && !publicRoutes.includes(pathname)) {
      return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col py-8 bg-slate-300">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default auth;
