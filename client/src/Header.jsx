import { SiAirbnb } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="py-3 flex justify-between">
        <a href="" className="flex items-center gap-1">
          <SiAirbnb className="w-8 h-8" />
          <span className="font-bold text-xl">Airbnb</span>
        </a>
        <div className="px-4 py-2 flex items-center gap-3  border border-gray-300 rounded-full shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="h-full border-l border-gray-300"></div>
          <div>Any Week</div>
          <div className="h-full border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary text-white p-[.5rem] rounded-full">
            <FaSearch />
          </button>
        </div>
        <Link
          to={"/login"}
          className="px-4 py-1 flex items-center gap-3 border border-gray-300 rounded-full"
        >
          <GiHamburgerMenu className="h-6 w-6" />
          <FaCircleUser className="h-6 w-6" />
        </Link>
      </header>
    </div>
  );
};

export default Header;
