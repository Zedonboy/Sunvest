import Layout from "../components/Layout";
import MarketHero from "../components/MarketHero";
import SubscribeSection from "../components/SubscribeSection";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProjectList from "../components/ProjectList.tsx";
import Project from "../components/Project.tsx"
export default function Market() {
  let [showFilter, setShowFilter] = useState(false);
  return (
    <Layout>
      <MarketHero />
      <section className="flex md:hidden dark:bg-gray-800 flex-col items-center">
        <button
          onClick={(e) => {
            //   document.querySelector("#filter_box").classList.remove("h-0")
            //   document.querySelector("#filter_box").classList.add("h-auto")
            if (showFilter) setShowFilter(false);
            else setShowFilter(true);
          }}
          className="border-2 mb-4 flex text-blue-500 items-center border-blue-600 rounded px-4 py-2 space-x-2"
        >
          <p>Filter</p>
          {showFilter ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          )}
        </button>

        <Transition
          as={Fragment}
          show={showFilter}
          enter="duration-700 ease-in-out"
          enterFrom="h-0"
          enterTo="h-full"
          leave="duration-300 ease-in-out"
          leaveTo="h-0"
        >
          <section className="dark:bg-gray-800 overflow-hidden flex flex-col items-center space-y-2">
            <section className="flex px-2 space-x-2 text-gray-500 rounded bg-gray-100 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <select className="rounded-md bg-gray-100 border-transparent">
                <option value="" disabled selected>
                  All Projects
                </option>
              </select>
            </section>
            <section className="flex px-2 space-x-2 text-gray-500 rounded bg-gray-100 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <select className="rounded-md bg-gray-100 border-transparent">
                <option value="" disabled selected>
                  Type of Projects
                </option>
              </select>
            </section>
            <section className="flex px-2 space-x-2 text-gray-500 rounded bg-gray-100 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select className="rounded-md bg-gray-100 border-transparent">
                <option value="" disabled selected>
                  Location
                </option>
              </select>
            </section>
            <button className="bg-blue-600 text-white px-8 py-3 rounded">
              Search
            </button>
          </section>
        </Transition>
      </section>
      <section className="flex bg-[#f7f8fa] py-12 md:py-24 dark:bg-gray-800 flex-col px-2 md:px-8">
        <section className="flex justify-center">
          <section className="font-bold flex py-4 justify-between border-b w-full md:w-10/12">
            <h1 className="text-2xl dark:text-white">Top Selling</h1>
            <div className="flex space-x-2">
              <button className="md:hidden rounded-full w-8 h-8 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="rounded-full md:hidden dark:text-white dark:bg-gray-700 w-8 h-8 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </section>
        </section>

        <ProjectList />
      </section>
      <section className="flex bg-[#f7f8fa] dark:bg-gray-800 flex-col px-2 md:px-8">
        <section className="flex justify-center">
          <section className="font-bold flex py-4 justify-between border-b w-full md:w-10/12">
            <h1 className="text-2xl dark:text-white">Featured Projects</h1>
            <div className="flex space-x-2">
              <button className="md:hidden rounded-full w-8 h-8 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="rounded-full md:hidden dark:text-white dark:bg-gray-700 w-8 h-8 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </section>
        </section>

        <ProjectList />
      </section>

      {/* <section className="flex bg-[#f7f8fa] dark:bg-gray-800 flex-col px-2 md:px-8">
        <section className="flex justify-center">
          <section className="font-bold flex py-4 justify-between border-b w-full md:w-10/12">
            <h1 className="text-2xl dark:text-white">Other Projects</h1>
            <div className="flex space-x-2">
              <button className="md:hidden rounded-full w-8 h-8 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="rounded-full md:hidden dark:text-white dark:bg-gray-700 w-8 h-8 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </section>
        </section>

        <section className="flex flex-wrap justify-center p-2 md:px-24 pb-8">
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
          <div className="w-full p-4 md:w-1/3">
            <Project />
          </div>
         
        </section>
      </section> */}

      <SubscribeSection />
    </Layout>
  );
}
