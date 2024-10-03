"use client";
import React, { FormEvent, useState } from "react";
import BackButton from "../../components/BackButton";
import { useDispatch } from "react-redux";
import { createData } from "@/Redux/slice/dataSlice";
import { useRouter } from "next/navigation";

interface UserInfo {
  name: string;
  email: string;
  phone: number | null;
  description: string;
}

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: null,
    description: "",
  });

  const { name, email, phone, description } = userInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("All Data Set");
    dispatch(createData(userInfo));
    setUserInfo({
      name: "",
      email: "",
      phone: null,
      description: "",
    });
    router.push("/data-table");
  };

  console.log(userInfo, "Data Create");
  return (
    <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center flex-col">
      <div className="w-[35%] h-[10%] flex items-center justify-center px-3">
        <div className="w-[20%] h-[100%] flex items-center justify-center">
          <BackButton Location="/data-table" />
        </div>
        <div className="w-[80%] h-[100%] flex items-center justify-center flex-col">
          <h1 className="text-slate-700 font-bold text-3xl text-start w-full px-5">
            Create Data
          </h1>
          <h6 className="text-base font-semibold text-slate-500 text-start w-full px-5">
            Fill All Details & Create Data....
          </h6>
        </div>
      </div>
      <div className="w-[28%] h-[65%]   flex items-center justify-center">
        <form
          action=""
          className="w-[100%] h-[80%] flex items-center justify-around flex-col"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter Name"
            className="w-[90%] h-[12%] px-2 py-0.6"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-[90%] h-[12%] px-2 py-0.6"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-[90%] h-[12%] px-2 py-0.6"
            name="phone"
            value={phone ?? ""}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Write Description..."
            aria-label="Description"
            className="w-[90%] h-[20%] px-2 py-0.62"
            name="description"
            value={description}
            onChange={handleChange}
            required
          ></textarea>
          <button className="w-[90%] h-[13%] px-2 py-0.6 text-white bg-blue-950">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
