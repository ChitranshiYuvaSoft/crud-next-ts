"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[60%] h-[80%] flex items-center justify-center flex-col">
        <div className="w-full h-[60%] flex items-center justify-center">
          <Image src={"/homepage.gif"} width={390} height={100} alt="noData" />
        </div>
        <div className="w-[70%] h-[20%] flex items-center justify-around">
          <h2 className="text-center font-semibold">WELCOME TO NEXT CURD TAILWIND</h2>
        </div>
        <div className="w-[70%] h-[20%] flex items-center justify-around">
          <button className="bg-slate-900 text-white font-semibold py-2 px-12 text-lg" onClick={() => router.push('/login')}>
            Login User
          </button>
          <button className="bg-slate-900 text-white font-semibold py-2 px-12 text-lg" onClick={() => router.push('/register')}>
            Register User
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
