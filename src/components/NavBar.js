import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const NavBar = () => {
  return (
    <nav className=" flex flex-row-reverse justify-around gap-10 text-sm md:text-sm bg-[#34BB8E] text-white   ">
      <ul className="flex justify-start  flex-row-reverse gap-6  py-8">
        <li>
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="rounded-full"
          ></img>
        </li>
        <Link to="/">
          <li className="py-8">الصفحة الرئيسية</li>
        </Link>
        <Link to="/Videos">
          <li className="py-8">فيديواتي</li>
        </Link>
        <Link to="/Blogs">
          <li className="py-8">مدوناتي</li>
        </Link>
        <Link to="/ContactUs">
          <li className="py-8">تواصل معنا</li>
        </Link>
        <Link to="/WhoAreWe">
          <li className="py-8">من نحن؟</li>
        </Link>
      </ul>
      <div className=" flex justify-center items-center py-10  ">
        <button
          type="button"
          className=" bg-[#87e0c2] p-2  text-xs text-white border-1 border-solid rounded-full "
        >
          تسجيل دخول
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
