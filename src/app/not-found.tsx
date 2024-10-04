"use client"
import { useRouter } from "next/navigation";
import React from "react";

const notfound = () => {
    const router = useRouter();
  return (
    <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center">
      <div className="w-[60%] h-[130%] flex items-center justify-center flex-col">
        <h3 className="text-5xl font-bold text-red-700 text-center">404 - PAGE NOT FOUND</h3>
        <button onClick={() => router.push('/data-table')} className="px-4 py-2 text-sm font-bold bg-yellow-200 mt-5 shadow-xl shadow-slate-200" >Data Show</button>
      </div>
    </div>
  );
};

export default notfound;
