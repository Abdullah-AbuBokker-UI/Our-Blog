import React from "react";
import Center from "../ui/Center";
import Navbar from "../components/header/Navbar";
import Footer from "../ui/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Center>
        <section className="flex items-center py-10 bg-gray-100 lg:py-24 font-poppins dark:bg-gray-800 ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 ">
            <div className="mb-10 text-center">
              <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                Our blog
              </span>
              <h1 className="text-3xl font-bold capitalize dark:text-white">
                {" "}
                Blog List
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]  gap-x-6 gap-y-4 mb-6">
                <img
                  className="object-cover w-full rounded-md lg:w-96 h-96"
                  src="https://i.postimg.cc/0jcRHbdr/pexels-pixabay-40751.jpg "
                  alt=" "
                />
                <div className="flex items-center ">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-3 text-xs font-semibold text-blue-500 uppercase hover:text-blue-600 dark:text-blue-400 md:text-sm"
                    >
                      Celebrity
                    </a>
                    <a href="#">
                      <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:hover:text-blue-400 dark:text-gray-300 hover:text-blue-600 lg:leading-7 lg:text-2xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h2>
                    </a>
                    <p className="hidden mt-3 text-base leading-7 text-gray-700 dark:text-gray-400 md:block lg:text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                      <span className="text-xs font-semibold text-gray-700 uppercase dark:text-gray-500 lg:text-base ">
                        <span className="font-medium">BY </span> Kios Kripkror
                      </span>
                      <span className="text-xs text-gray-700 lg:text-base dark:text-gray-500">
                        |&nbsp; Dec 6, 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]   gap-x-6 gap-y-4  mb-6">
                <img
                  className="object-cover w-full rounded-md lg:w-96 h-96"
                  src="https://i.postimg.cc/rpbTSLyM/pexels-andrea-piacquadio-3760263.jpg "
                  alt=" "
                />
                <div className="flex items-center ">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-3 text-xs font-semibold text-blue-500 uppercase hover:text-blue-600 dark:text-blue-400 md:text-sm"
                    >
                      Lifestyle
                    </a>
                    <a href="#">
                      <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:hover:text-blue-400 dark:text-gray-300 hover:text-blue-600 lg:leading-7 lg:text-2xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h2>
                    </a>
                    <p className="hidden mt-3 text-base leading-7 text-gray-700 dark:text-gray-400 md:block lg:text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                      <span className="text-xs font-semibold text-gray-700 uppercase dark:text-gray-500 lg:text-base ">
                        <span className="font-medium">BY </span> Kios Kripkror
                      </span>
                      <span className="text-xs text-gray-700 lg:text-base dark:text-gray-500">
                        |&nbsp; Dec 6, 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]   gap-x-6 gap-y-4  mb-6">
                <img
                  className="object-cover w-full rounded-md lg:w-96 h-96"
                  src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
                  alt=" "
                />
                <div className="flex items-center ">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-3 text-xs font-semibold text-blue-500 uppercase hover:text-blue-600 dark:text-blue-400 md:text-sm"
                    >
                      Beauty
                    </a>
                    <a href="#">
                      <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:hover:text-blue-400 dark:text-gray-300 hover:text-blue-600 lg:leading-7 lg:text-2xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h2>
                    </a>
                    <p className="hidden mt-3 text-base leading-7 text-gray-700 dark:text-gray-400 md:block lg:text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                      <span className="text-xs font-semibold text-gray-700 uppercase dark:text-gray-500 lg:text-base ">
                        <span className="font-medium">BY </span> Kios Kripkror
                      </span>
                      <span className="text-xs text-gray-700 lg:text-base dark:text-gray-500">
                        |&nbsp; Dec 6, 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]   gap-x-6 gap-y-4  mb-6">
                <img
                  className="object-cover w-full rounded-md lg:w-96 h-96"
                  src="https://i.postimg.cc/fbT9FYhB/pexels-stijn-dijkstra-2583852.jpg"
                  alt=" "
                />
                <div className="flex items-center ">
                  <div>
                    <a
                      href="# "
                      className="inline-block mt-3 text-xs font-semibold text-blue-500 uppercase hover:text-blue-600 dark:text-blue-400 md:text-sm"
                    >
                      Money
                    </a>
                    <a href="#">
                      <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:hover:text-blue-400 dark:text-gray-300 hover:text-blue-600 lg:leading-7 lg:text-2xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h2>
                    </a>
                    <p className="hidden mt-3 text-base leading-7 text-gray-700 dark:text-gray-400 md:block lg:text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                      <span className="text-xs font-semibold text-gray-700 uppercase dark:text-gray-500 lg:text-base ">
                        <span className="font-medium">BY </span> Kios Kripkror
                      </span>
                      <span className="text-xs text-gray-700 lg:text-base dark:text-gray-500">
                        |&nbsp; Dec 6, 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Center>
      <Footer />
    </>
  );
};

export default page;
