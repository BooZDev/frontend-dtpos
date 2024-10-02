"use client";

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";
import { BsEyeSlash } from "react-icons/bs";
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { BsEye } from "react-icons/bs";

export default function LoginForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [passwordType, setPasswordType] = useState<HTMLInputTypeAttribute>("password");

  function changePasswordVisibility(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    if (inputRef.current) {
      if (inputRef.current.type === "password") {
        setPasswordType("text");
      } else {
        setPasswordType("password");
      }
    }
  }

  return (
    <div className="md:w-1/2 lg:w-1/3 h-1/2 flex justify-center items-center sm:w-full w-fullKu">
      <form className="w-full flex flex-col items-center md:p-12 sm:p-4 p-4">
        {/* header */}
        <div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={400}
              height={400}
              className="w-24 h-12"
            />
            <span className="text-[2.15rem] text-[#001529] leading-none align-middle font-semibold font-inter px-2">
              DTPOS
            </span>
          </div>
          <span className="text-xs align-middle font-normal text-black/65">
            Trang thống kê hoạt động triển khai DTPOS
          </span>
        </div>

        {/* form */}
        <div className="mt-12">
          <span className="text-[#001529] text-sm leading-none font-medium font-inter">
            Đăng nhập bằng tài khoản CPC1HN
          </span>
        </div>

        {/* User name input */}
        <div className="flex items-center border rounded-lg border-[#d2d4d9] w-full mt-6 max-w-80">
          <span className="px-2 py-2">
            <FaRegUser />
          </span>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className="w-full py-2 px-1 text-[#001529] text-sm leading-none border-none border-b-1 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="flex items-center border rounded-lg border-[#d2d4d9] w-full mt-3 max-w-80">
          <span className="px-2 py-2">
            <LuLock />
          </span>
          <input
            type={passwordType}
            placeholder="Tên đăng nhập"
            ref={inputRef}
            className="w-full py-2 px-1 text-[#001529] text-sm leading-none border-none border-b-1 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            className="px-2 py-2"
            onClick={changePasswordVisibility}
          >
            {passwordType === "text" ? <BsEye /> : <BsEyeSlash />}
          </button>
        </div>

        {/* submit button */}
        <div className="w-full mt-12 max-w-80">
          <button
            type="submit"
            className="w-full h-9 rounded-lg bg-[#1877F2] text-white text-sm font-medium font-inter px-6 py-2 focus:outline-none"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}
