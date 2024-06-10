import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Footer = () => {
  return (
    <div
      className="bg-black hidden w-full md:block md:w-auto"
      id="fotter-dropdown"
    >
      {" "}
      <div className="flex ">
        <img
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          className="rounded-full"
        ></img>
        <p className="pl-2  italic text-white">دليل المعلم الالكتروني</p>
      </div>
      <ul>
        <Link to="/">
          <li className="py-8 text-white">الصفحة الرئيسية</li>
        </Link>
        <Link to="/Videos">
          <li className="py-8  text-white">فيديواتي</li>
        </Link>
        <Link to="/Blogs">
          <li className="py-8  text-white">مدوناتي</li>
        </Link>
        <Link to="/ContactUs">
          <li className="py-8  text-white">تواصل معنا</li>
        </Link>
        <Link to="/WhoAreWe">
          <li className="py-8  text-white">من نحن؟</li>
        </Link>
      </ul>
    </div>
  );
};
export default Footer;
