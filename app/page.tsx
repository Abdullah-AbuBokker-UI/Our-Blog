import Navbar from "./components/header/Navbar";
import Center from "./ui/Center";
import Footer from "./ui/Footer";

export default function Error() {
  return (
    <>
      <Center>
        <Navbar />
        <div className="relative max-w-6xl px-4 mx-auto my-6">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-lg font-extrabold text-blue-500 dark:text-blue-400">
              Business
            </span>
            <h1 className="max-w-4xl mx-auto mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl dark:text-gray-300 ">
              Lorem ipsum dor amet ispuisus{" "}
            </h1>
            <p className="mt-6 text-xl font-medium leading-8 text-gray-500 dark:text-gray-400 ">
              Lorem ipsum dor amet ispuisus Lorem ipsum dor amet ispuisus
            </p>
            <div className="justify-center mt-6 mb-11 md:mb-20 sm:flex">
              <div className="">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-blue-600 border border-blue-600 rounded-md dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:bg-blue-200 dark:border-blue-200 bg-gray-50 hover:text-gray-100 hover:bg-blue-500 "
                >
                  Learn More
                </a>
              </div>
            </div>
            <img
              className="block object-cover w-full border-indigo-900 shadow-lg h-1/2 lg:h-5/6 border-3 rounded-2xl"
              src="https://i.postimg.cc/VkczV4mc/pexels-fox-1595385.jpg"
              alt=""
            />
          </div>
        </div>
        <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
          <div className="p-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                <div className="relative overflow-hidden h-72">
                  <span className="absolute px-3 py-1 text-xs text-white bg-blue-500 rounded bottom-3 right-3">
                    Gadgets
                  </span>
                  <img
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src="https://i.postimg.cc/25h4dvrd/pexels-karol-d-325153.jpg"
                    alt=""
                  />
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-20 h-20 mb-4 border-4 border-white rounded-full dark:border-gray-700"
                      src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                      alt=""
                    />
                    <div className="flex flex-col items-center ml-2">
                      <span className="block mt-3 mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                      </span>
                    </div>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur
                  </h2>
                  <p className="mb-4 text-base leading-7 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <a
                    className="flex items-center text-sm font-semibold"
                    href="#"
                  >
                    <div className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      More Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                <div className="relative overflow-hidden h-72">
                  <span className="absolute px-3 py-1 text-xs text-white bg-blue-500 rounded bottom-3 right-3">
                    Architect
                  </span>
                  <img
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg"
                    alt=""
                  />
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-20 h-20 mb-4 border-4 border-white rounded-full dark:border-gray-700"
                      src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                      alt=""
                    />
                    <div className="flex flex-col items-center ml-2">
                      <span className="block mt-3 mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                      </span>
                    </div>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur
                  </h2>
                  <p className="mb-4 text-base leading-7 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <a
                    className="flex items-center text-sm font-semibold"
                    href="#"
                  >
                    <div className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      More Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                <div className="relative overflow-hidden h-72">
                  <span className="absolute px-3 py-1 text-xs text-white bg-blue-500 rounded bottom-3 right-3">
                    Business
                  </span>
                  <img
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src="https://i.postimg.cc/rpbTSLyM/pexels-andrea-piacquadio-3760263.jpg"
                    alt=""
                  />
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-20 h-20 mb-4 border-4 border-white rounded-full dark:border-gray-700"
                      src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                      alt=""
                    />
                    <div className="flex flex-col items-center ml-2">
                      <span className="block mt-3 mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                      </span>
                    </div>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur
                  </h2>
                  <p className="mb-4 text-base leading-7 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <a
                    className="flex items-center text-sm font-semibold"
                    href="#"
                  >
                    <div className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      More Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="font-poppins">
          <div className="py-24 mb-10 text-center bg-blue-100 dark:bg-gray-700 lg:block">
            <div className="max-w-xl mx-auto mb-14">
              <h1 className="mb-4 text-3xl font-bold dark:text-white">
                {" "}
                Frequently Asked Questions{" "}
              </h1>
              <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                quae quam nostrum harum non in at eaque quibusdam eum ratione.
              </p>
            </div>
            <form className="flex items-center max-w-2xl px-6 mx-auto mb-14">
              <label htmlFor="" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border pr-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ask a question... "
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 bi bi-mic"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"></path>
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5  px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 -ml-1 bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                Search
              </button>
            </form>
          </div>

          <div className="max-w-xl mx-auto ">
            <div className="w-full p-4 rounded-md shadow-lg bg-stone-50 dark:bg-gray-800 -mt-36 lg:full">
              <div className="flex-1">
                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Are we living in reality or is it just a matrix?
                    </span>
                    <div className="p-2 bg-blue-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-500 dark:text-gray-300">
                      {" "}
                      Are we just puppets and is there a bigger power in play?{" "}
                    </span>
                    <div className="p-2 bg-blue-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 answer">
                    Components are pre made web structures which are used for
                    making a website faster and easier. It is a sort of a
                    boilerplate code which gives you an option to modify it
                    however you want
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      How far does universe actually extends?{" "}
                    </span>
                    <div className="p-2 bg-blue-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 bg-white rounded shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Is Time Travel possible?{" "}
                    </span>
                    <div className="p-2 bg-blue-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center bg-gray-100 font-poppins dark:bg-gray-900 ">
          <div className="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
            <div className="mx-auto max-w-7xl py-11">
              <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
                Our Gallery
              </h2>
              <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
              <div className="flex flex-wrap self-start gap-5">
                <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                  <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                    <img
                      src="https://i.postimg.cc/k4r6XTkN/pexels-aviv-perets-3274903.jpg"
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div>
                      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                        <a
                          href="#"
                          className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                        <a
                          href=""
                          className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                        >
                          Natural Scenery
                        </a>
                        <p className="mb-0 text-xs text-gray-300">
                          lorem ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-md shadow-md group">
                    <img
                      src="https://i.postimg.cc/MKXQ5fbQ/pexels-stein-egil-liland-3408744.jpg"
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div>
                      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                        <a
                          href="#"
                          className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                        <a
                          href=""
                          className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                        >
                          Natural Scenery
                        </a>
                        <p className="mb-0 text-xs text-gray-300">
                          lorem ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                  <div className="relative overflow-hidden rounded-md shadow-md group">
                    <img
                      src="https://i.postimg.cc/LXRP3yN9/pexels-michael-block-3225517.jpg "
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[625px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div>
                      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                        <a
                          href="#"
                          className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                        <a
                          href=""
                          className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                        >
                          Natural Scenery
                        </a>
                        <p className="mb-0 text-xs text-gray-300">
                          lorem ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                  <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                    <img
                      src="https://i.postimg.cc/C1V5Vzqm/pexels-jacob-colvin-1757363.jpg"
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div>
                      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                        <a
                          href="#"
                          className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                        <a
                          href=""
                          className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                        >
                          Natural Scenery
                        </a>
                        <p className="mb-0 text-xs text-gray-300">
                          lorem ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                    <img
                      src="https://i.postimg.cc/jqwg12hG/pexels-asad-photo-maldives-1591373.jpg "
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div>
                      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                        <a
                          href="#"
                          className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                        <a
                          href=""
                          className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                        >
                          Natural Scenery
                        </a>
                        <p className="mb-0 text-xs text-gray-300">
                          lorem ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Center>
    </>
  );
}
