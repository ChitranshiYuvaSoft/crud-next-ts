"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {

  const router = useRouter();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      router.push('data-table')
    }else{
      router.push('/register');
    }
  },[token])

  return (
    <>
      <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center">
        <div className="w-[25%] h-[60%] flex items-center justify-center">
          <div className="w-full h-[80%]  flex items-center justify-center flex-col">
            <div className="w-full h-[10%]  flex items-center justify-center">
              <h3 className="text-center text-2xl font-bold text-slate-800">
                Register User
              </h3>
            </div>
            <div className="w-full h-[75%] 0 flex items-center justify-center">
              <form
                action=""
                className="w-[95%] h-[95%] flex items-center justify-around flex-col px-5  py-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Nnme"
                  className="w-full h-[20%] px-2 py-0.5"
                />
                <input
                  type="text"
                  placeholder="Email"
                  aria-label="email"
                  className="w-full h-[20%] px-2 py-0.5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  className="w-full h-[20%] px-2 py-0.5"
                />
                <button className="w-full  h-[20%] px-2 py-0.5 bg-slate-900 text-white">
                  Register
                </button>
              </form>
            </div>
            <div className="w-full h-[10%]  flex items-center justify-center flex-col">
              <span className="text-sm text-center">
                You have already Register, Please{" "}
              </span>
              <Link href={"/login"} className="text-sm font-semibold text-center text-blue-500 link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
