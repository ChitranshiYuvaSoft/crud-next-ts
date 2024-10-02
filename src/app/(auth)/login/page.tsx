import Link from "next/link";

const page = () => {
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
              >
                <input
                  type="text"
                  placeholder="Email"
                  aria-label="email"
                  className="w-full h-[25%] px-2 py-0.5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  className="w-full h-[25%] px-2 py-0.5"
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
