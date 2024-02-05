"use client";
import React, { useState } from "react";
import Center from "../ui/Center";
import Navbar from "../components/header/Navbar";
import Footer from "../ui/Footer";
import { data } from "../ui/data";
import Input from "../ui/Input";

const page = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <Center>
        <input
          type="text"
          name=""
          id=""
          className="px-4 py-3 border w-full outline-none rounded-md my-4"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="relative overflow-x-auto max-h-[600px]  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item.Name.toLocaleLowerCase().includes(search);
                })
                .map((item) => (
                  <tr
                    key={item.ID}
                    className="odd:bg-white  even:bg-gray-50  border-b "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.Name}
                    </th>
                    <td className="px-6 py-4">{item.Age}</td>
                    <td className="px-6 py-4">{item.City}</td>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="flex justify-center items-center"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Center>
      <Footer />
    </>
  );
};

export default page;
