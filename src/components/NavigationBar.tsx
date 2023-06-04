// import { useState } from "react"
import { Link, Outlet } from "react-router-dom";
// import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"
import logo from "../media/brown-logo.png";

export default function NavigationBar() {
  // const links = [
  //     {page: "Home", path: "/"},
  //     {page: "Events", path: "events"},
  //     {page: "Classes", path: "classes"},
  //     {page: "About BBDT", path: "about"},
  //     {page: "Contact Us", path: "contact"},
  // ]

  return (
    <>
      <div className="flex justify-between px-6 py-3">
        <Link to={"/"} className="flex flex-row items-center justify-between">
          <img
            className="h-10 w-auto "
            src={logo}
            alt="Brown University Logo"
          />
          <div className="ml-2 font-sans text-2xl font-bold text-gray-700">
            Brown Ballroom Dance
          </div>
        </Link>
        <div className="flex w-5/12 flex-row items-center justify-between">
          <Link
            className="font-medium text-gray-700 transition hover:text-red-700 active:text-red-800"
            to={"events"}
          >
            Upcoming Events
          </Link>
          <Link
            className="font-medium text-gray-700 transition hover:text-red-700 active:text-red-800"
            to={"classes"}
          >
            Classes
          </Link>
          <Link
            className="font-medium text-gray-700 transition hover:text-red-700 active:text-red-800"
            to={"about"}
          >
            About BBDT
          </Link>
          <Link
            className="font-medium text-gray-700 transition hover:text-red-700 active:text-red-800"
            to={"contact"}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
