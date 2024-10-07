import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  //TODO: Too many divs?
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARACH BAR  */}
      <form
        role="search"
        className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-0.5"
      >
        {/* TODO: Finish alt text for all images */}
        <Image src="/search.png" alt="Search Icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w[200px] p2 bg-transparent outline-none"
        />
      </form>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20}></Image>
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20}></Image>
          <span className="rounded-full absolute -top-3 -right-3 w-5 h-5 text-xs flex items-center justify-center bg-purple-500 text-white">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="tex-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
