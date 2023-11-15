import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleOpen() {
    setMenuOpen((open) => !open);
  }
  return (
    <div className="mx-auto flex  w-full items-center justify-between px-4 py-4 text-[#264653] bg-slate-300">
      <h1 className="w-full font-mono text-3xl font-bold text-[#264653] uppercase">
        Tours and Travels
      </h1>
      <ul className="  hidden  font-semibold md:flex ">
        <li className="p-4 uppercase hover:border-b ">
          <Link to={"/"}>home</Link>
        </li>
        <li className="p-4 uppercase hover:border-b">
          <Link to={"/about"}>about</Link>
        </li>
        <li className="p-4 uppercase hover:border-b">
          <Link to={"/package"}>Package</Link>
        </li>
        <li className="p-4 uppercase hover:border-b">
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
      <div onClick={handleOpen} className="block md:hidden">
        {!menuOpen ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0  h-full w-[80%] border-r bg-[#f4a261]  uppercase duration-500 ease-in-out "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-6 w-full font-mono text-3xl font-bold text-[#264653]">
          Tours and Travels
        </h1>
        <ul className="p-4">
          <li onClick={handleOpen} className="border-b border-gray-500 p-4">
            <Link to={"/"}>home</Link>
          </li>
          <li onClick={handleOpen} className="border-b border-gray-500 p-4">
            <Link to={"/about"}>about</Link>
          </li>
          <li onClick={handleOpen} className="border-b border-gray-500 p-4">
            {" "}
            <Link to={"/package"}>Package</Link>
          </li>
          <li onClick={handleOpen} className="border-b border-gray-500 p-4">
            {" "}
            <Link to={"/contact"}>contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
