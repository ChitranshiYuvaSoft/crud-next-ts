"use client";
import { loginUser } from "@/Redux/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface User {
  email: string;
  password: number | null;
}

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({
    email: "",
    password: null,
  });

  const { email, password } = user;

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const random = Math.random().toString(36).substr(2);
    if (email == "user@gmail.com" && password == 123456) {
      dispatch(
        loginUser({
          email: email,
          password: password,
          token: random + random + random + random + random,
        })
      );
      router.push("/data-table");
    } else {
      alert("Login Failure, Check Your Credential's.");
    }
    console.log("Login user");
  };

const token = localStorage.getItem('token');
  useEffect(() => {
    if(token){
      router.push('data-table')
    }else{
      router.push('/login');
    }
  },[token])

  console.log(user);
  return (
    <>
      <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center">
        <div className="w-[25%] h-[60%]  flex items-center justify-center ">
          <div className="w-full h-[70%]  flex items-center justify-center flex-col">
            <div className="w-full h-[10%] flex items-center justify-center">
              <h3 className="text-center text-2xl font-bold text-slate-800">
                Login User
              </h3>
            </div>
            <div className="w-full h-[80%]  flex items-center justify-center">
              <form
                action=""
                className="w-[95%] h-[100%] flex items-center justify-around flex-col px-5  py-4"
                onSubmit={handleLogin}
              >
                <input
                  type="text"
                  placeholder="Email"
                  aria-label="email"
                  className="w-full h-[25%] px-2 py-0.5"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  className="w-full h-[25%] px-2 py-0.5"
                  name="password"
                  value={password ?? ""}
                  onChange={handleChange}
                />
                <button className="w-full  h-[25%] px-2 py-0.5 bg-slate-900 text-white">
                  Login
                </button>
              </form>
            </div>
            <div className="w-full h-[10%] flex items-center justify-center flex-col">
              <span className="text-sm text-center">
                You have not account yet
              </span>
              <Link
                href={"/register"}
                className="text-sm font-semibold text-center text-blue-500 link"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
