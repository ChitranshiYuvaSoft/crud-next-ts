"use client";

import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { deleteData, editUserData } from "@/Redux/slice/dataSlice";
import { useRouter } from "next/navigation";

interface UserData {
  name: string;
  email: string;
  phone: number;
  isVerified: boolean;
  date: Date;
  description: string;
}

const page = () => {
  // Hooks
  const dispatch = useDispatch();
  const router = useRouter();

  const { allUserData } = useSelector((state: RootState) => state.data);
  console.log(allUserData);

  // Delete Data
  const handleDelete = (index: number) => {
    dispatch(deleteData(index));
  };

  const handleEdit = (userData: UserData, index: number) => {
    console.log(userData);
    dispatch(editUserData(userData));
    router.push(`/data-table/${index}`);
  };

  const Logout = () => {
    localStorage.clear();
  };
  return (
    <div className="w-full h-[100vh]  bg-blue-300 flex items-center justify-between flex-col ">
      <div className="w-full h-[10%] pr-7 flex items-center justify-end">
        <button
          className="px-6 py-2 text-sm font-bold border border-slate-800"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
      <h1 className="text-center pt-3 font-bold text-2xl h-[6%]">Data Show</h1>
      <div className="w-[80%] h-[10%] flex items-center justify-end mt-3">
        <h2 className="text-slate-900 text-lg font-bold">
          ADD DATA &nbsp;{" "}
          <Link href={"/data-create"}>
            <span className="text-2xl border border-slate-800 rounded p-1 px-2">
              +
            </span>
          </Link>
        </h2>
      </div>
      <table className="w-[80%] h-[76%] mb-5">
        <thead className="w-[100%] h-[3rem] bg-slate-900">
          <tr className="w-[100%] text-white">
            <th className="w-[10%] text-center">Name</th>
            <th className="w-[10%] text-center">Email</th>
            <th className="w-[20%] text-center">Phone Number</th>
            <th className="w-[100%] h-[100%] text-center flex flex-wrap flex-col items-center justify-center">Description</th>
            <th className="w-[15%] text-center">Action</th>
          </tr>
        </thead>
        <tbody className="w-[100%]  bg-slate-200 ">
          {allUserData.map((userValue, index) => (
            <tr key={index}>
              <td className="text-center">{userValue.name}</td>
              <td className="text-center">{userValue.email}</td>
              <td className="text-center">{userValue.phone}</td>
              <td className="text-justify">{userValue.description}</td>
              <td className="text-center">
                <button
                  className="py-1 px-6 text-sm bg-yellow-600 text-slate-100 mx-1"
                  onClick={() => handleEdit(userValue, index)}
                >
                  <FaRegEdit className="text-xl" />
                </button>
                <button
                  className="py-1 px-6 text-sm bg-red-800 text-slate-100 mx-1"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
