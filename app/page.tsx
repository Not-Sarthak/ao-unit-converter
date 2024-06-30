"use client";
import { useState } from "react";
import Nav from "@/app/_components/nav";
import Footer from "./_components/footer";

const UnitConverter = () => {
  const [aoValue, setAoValue] = useState("");
  const [armstrongValue, setarmstrongValue] = useState("");

  const handleAoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAoValue(value);
    if (isValidNumber(value)) {
      const ao = parseFloat(value);
      setarmstrongValue(
        (ao * 1_000_000_000).toLocaleString("en-US", {
          maximumFractionDigits: 20,
        })
      );
    } else {
      setarmstrongValue("");
    }
  };

  const handleArmstrongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setarmstrongValue(value);
    if (isValidNumber(value)) {
      const armstrong = parseFloat(value);
      setAoValue(
        (armstrong / 1_000_000_000).toLocaleString("en-US", {
          maximumFractionDigits: 20,
        })
      );
    } else {
      setAoValue("");
    }
  };

  const isValidNumber = (value: string) => {
    const number = parseFloat(value);
    return !isNaN(number) && isFinite(number);
  };

  return (
    <div className="">
      <Nav />
      <div className="flex flex-col p-10 gap-y-20 items-center h-screen justify-center bg-[#0e0e11]">
        <div className="text-white flex flex-col items-center justify-center max-w-xl gap-y-10">
          <div className="text-white font-manrope text-2xl lg:text-4xl font-bold text-center">
            Simple AO Unit Converter
          </div>
          <div className="text-center text-[#828892]">
            Convert effortlessly between Ao and Armstrong units. No need to
            count zeroes—just copy and paste your converted value from here!
          </div>
        </div>
        <form className="w-full max-w-xl bg-[#18191d] p-6 lg:p-8 rounded-md lg:rounded-2xl border-[1px] border-[#24252a] shadow">
          <div className="mb-4">
            <label
              className="block ml-0.5 mb-2 text-white text-base lg:text-2xl font-semibold font-manrope"
              htmlFor="ao"
            >
              Ao
            </label>
            <input
              type="text"
              id="ao"
              value={aoValue}
              onChange={handleAoChange}
              className="shadow appearance-none border border-[#27272a] bg-[#0d0d10] rounded-lg w-full py-2 px-3 text-[#f5f5f5] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ao"
            />
          </div>
          <div className="mb-4">
            <label
              className="block ml-0.5 mb-2 text-white text-base lg:text-2xl font-semibold font-manrope"
              htmlFor="armstrong"
            >
              Armstrong
            </label>
            <input
              type="text"
              id="armstrong"
              value={armstrongValue}
              onChange={handleArmstrongChange}
              className="shadow appearance-none border border-[#27272a] bg-[#0d0d10] rounded-lg w-full py-2 px-3 text-[#f5f5f5] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Armstrong"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UnitConverter;
