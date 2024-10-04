import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
const BackButton = ({ Location } : any) => {
  return (
    <Link href={Location}>
      <button className="py-2 px-5 bg-slate-300 text-slate-800 font-bold">
        <FaArrowLeftLong />
      </button>
    </Link>
  );
};

export default BackButton;
