import React from "react";
import BackButton from "../../components/BackButton";

const page = () => {
  return (
    <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center flex-col">
     <div className="w-[35%] h-[10%] flex items-center justify-center px-3">
      <div className="w-[20%] h-[100%] flex items-center justify-center">
        <BackButton Location="/data-table"/>
      </div>
      <div className="w-[80%] h-[100%] flex items-center justify-center flex-col">
      <h1 className="text-slate-700 font-bold text-3xl text-start w-full px-5">Create Data</h1>
      <h6 className="text-base font-semibold text-slate-500 text-start w-full px-5">Fill All Details & Create Data....</h6>
      </div>
     </div>
      <div className="w-[28%] h-[65%]   flex items-center justify-center">
        <form
          action=""
          className="w-[100%] h-[80%] flex items-center justify-around flex-col"
        >
          <input
            type="text"
            placeholder="Enter Name"
            aria-label="Name"
            className="w-[90%] h-[12%] px-2 py-0.6"
          />
           <input
            type="email"
            placeholder="Enter Email"
            aria-label="Email"
            className="w-[90%] h-[12%] px-2 py-0.6"
          />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            aria-label="Name"
            className="w-[90%] h-[12%] px-2 py-0.6"
          />
           <input
            type="number"
            placeholder="Enter Total Marks"
            aria-label="Name"
            className="w-[90%] h-[12%] px-2 py-0.6"
          />
          <input
            type="date"
            placeholder="Choose Date"
            aria-label="Date"
            className="w-[90%] h-[12%] px-2 py-0.6"
          />
          <textarea
            name=""
            id=""
            placeholder="Write Description..."
            aria-label="Description"
            className="w-[90%] h-[20%] px-2 py-0.62"
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
