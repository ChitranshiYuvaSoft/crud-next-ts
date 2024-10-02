import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const page = () => {
  return (
    <div className="w-full h-[100vh]  bg-blue-300 flex items-center justify-between flex-col py-8">
      <h1 className="text-center pt-3 font-bold text-2xl h-[6%]">Data Show</h1>
      <div className="w-[90%] h-[10%] flex items-center justify-end mt-3">
        <h2 className="text-slate-900 text-lg font-bold">
          ADD DATA &nbsp;{" "}
          <Link href={"/data-create"}>
            <span className="text-2xl border border-slate-800 rounded p-1 px-2">
              +
            </span>
          </Link>
        </h2>
      </div>
      <table className="w-[90%] h-[76%] mb-5">
        <thead className="w-[100%] h-[3rem] bg-slate-900">
          <tr className="w-[100%] text-white">
            <th className="w-[10%] text-center">Name</th>
            <th className="w-[20%] text-center">Email</th>
            <th className="w-[20%] text-center">Phone Number</th>
            <th className="w-[10%] text-center">Marks</th>
            <th className="w-[10%] text-center">Date</th>
            <th className="w-[15%] text-center">Description</th>
            <th className="w-[15%] text-center">Action</th>
          </tr>
        </thead>
        <tbody className="w-[100%]  bg-slate-200">
          <tr>
            <td className="text-center">Name</td>
            <td className="text-center">Email</td>
            <td className="text-center">Phone Number</td>
            <td className="text-center">Marks</td>
            <td className="text-center">Date</td>
            <td className="text-center">Description</td>
            <td className="text-center">
            {/* <button className="py-1 px-6 text-sm bg-green-700 text-slate-100 mx-1">
                View 
              </button> */}
              <button className="py-1 px-6 text-sm bg-yellow-600 text-slate-100 mx-1">
              <FaRegEdit className="text-xl" />
              </button>
              <button className="py-1 px-6 text-sm bg-red-800 text-slate-100 mx-1">
              <MdDelete className="text-xl"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
