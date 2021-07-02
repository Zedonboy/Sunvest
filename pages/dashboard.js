import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import dynamic from "next/dynamic"

const PieComponent = dynamic(() => import("../components/Pie"), {
  ssr: false
})
/* eslint-disable @next/next/no-img-element */
export default function DashboardPage() {
  return (
    <main className="flex">
      <aside className="w-1/5 bg-[#f5f5f5] border-[#eeeeff] border-r-2 h-screen overflow-auto md:flex flex-col hidden">
        <section className="py-12 px-6">
          <img alt="logo" src="/images/logo-dark.png" />
        </section>
        <ul className="dbside-nav">
          <li className="active">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p>Dashboard</p>
          </li>

          <li>
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p>MarketPlace</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <p>Profile</p>
          </li>
          <li>
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <p>Log out</p>
          </li>
        </ul>
      </aside>
      <section className="w-full bg-[#f5f5f5] px-2 md:px-12 md:w-4/5 flex flex-col h-screen overflow-auto">
        {/* Navigation */}
        <section className="flex flex-col md:flex-row py-4 justify-between">
          <section className="flex items-center space-x-3 rounded-full w-full md:w-5/12 p-3 bg-[#eeeeff] text-gray-500">
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
            <input
              placeholder="Search"
              className=" bg-transparent w-full p-0 outline-none"
            />
          </section>

          <section className="flex mt-2 md:mt-0 justify-center w-full md:w-auto space-x-3">
            <button className="md:hidden w-12 h-12 text-blue-600 rounded-full relative flex items-center justify-center bg-[#eeeeff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
            <button className="w-12 h-12 text-blue-600 rounded-full relative flex items-center justify-center bg-[#eeeeff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="absolute h-2 w-2 bg-red-600 top-0 right-0 mt-2 mr-2 rounded-full"></span>
            </button>
            <button className="w-12 h-12 text-blue-600 rounded-full relative flex items-center justify-center bg-[#eeeeff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="absolute h-2 w-2 bg-red-600 top-0 right-0 mt-2 mr-2 rounded-full"></span>
            </button>
            <figure className="w-12 h-12 bg-[#eeeeff] rounded-full">
              <img
                alt="user_img"
                src="/images/profile.png"
                className="object-cover w-full h-full"
              />
            </figure>
          </section>
        </section>

        {/* Main  */}
        <section className="py-16">
          <section className="rounded-2xl shadow shapebg w-full h-32 md:h-64 bg-[#4834c4]">
            <section className="w-full md:w-7/12 h-full flex text-white items-center justify-center">
              <Transition
                as={Fragment}
                show={true}
                enter="delay-500 duration-1000"
                enterFrom="opacity-0 -translate-x-24"
                enterTo="opacity-100 translate-x-0"
              >
                <div>
                  <p className="font-bold text-2xl md:text-4xl">
                    Welcome, Temilade{" "}
                  </p>
                  <p className="text-white mt-2 text-base md:text-xl">
                    Good morning, trust you’re fine.
                  </p>
                </div>
              </Transition>
            </section>
            <section className="w-0 md:w-5/12"></section>
          </section>
          <section className="flex flex-wrap">
            <section className="w-full p-4 md:w-7/12 ">
              <section className="bg-white shadow flex flex-col rounded-2xl px-4 md:px-12 py-8">
                <h1>My Investments</h1>
                <section className="flex flex-wrap">
                  <section className="w-full h-full md:w-1/2">
                  <PieComponent/>
                  </section>
                  <section className="w-full md:w-1/2 flex space-y-6 flex-col">
                    <div className="flex space-x-2">
                      <span className="h-1 w-6 mt-2 bg-[#4834c4] rounded-full"></span>
                      <div>
                        <p>Total Investments</p>
                        <strong>N500,000</strong>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span className="h-1 w-6 mt-2 bg-[#bbbcef] rounded-full"></span>
                      <div>
                        <p>Total Returns</p>
                        <strong>N12,000</strong>
                      </div>
                    </div>
                    <div>
                      <button className="rounded-full py-3 px-5 text-white bg-blue-600">
                        Cash Out
                      </button>
                    </div>
                  </section>
                </section>
              </section>
            </section>
            <section className="w-full p-4 md:w-5/12 ">
              <section className="bg-white shadow h-full flex flex-wrap rounded-2xl px-10 py-8">
                <section className="w-full md:w-1/2 flex justify-center items-center">
                  <img alt="wallet" src="/images/wallet.png" />
                </section>
                <section className="w-full md:w-1/2 flex flex-col justify-between items-center">
                  <div className="flex flex-col items-center">
                    <h1>Wallet balance</h1>
                    <strong className="text-blue-600 text-2xl">N10,000</strong>
                  </div>
                  <div className="flex flex-col mt-4 items-center">
                    <h1>Crypto balance</h1>
                    <strong className="text-blue-600 text-2xl">
                      0.0004BTC
                    </strong>
                  </div>
                  <div>
                    <button className="rounded-full py-3 px-5 text-white bg-blue-600">
                      Fund Wallet
                    </button>
                  </div>
                </section>
              </section>
            </section>
          </section>

          <section className="flex flex-col mt-16 bg-white rounded-xl shadow p-8">
            <strong className="text-2xl ml-4">
              My Solar Power Plant (Total)
            </strong>
            <section className="flex mt-8 flex-wrap">
              <section className="w-full md:w-1/3 p-2">
                <section className="h-40 text-white bg-[#315efb] p-6 flex flex-col justify-between md:p-12 shapebg rounded-2xl">
                  <p className="font-medium text-lg">+4.132Kwh</p>
                  <p>Total Energy Consumed</p>
                </section>
              </section>
              <section className="w-full md:w-1/3 p-2">
                <section className="h-40 bg-[#38d39f] text-white p-6 shapebg flex flex-col justify-between md:p-12 rounded-2xl">
                  <p className="font-medium text-lg">+4.132Kwh</p>
                  <p>Total Energy Consumed</p>
                </section>
              </section>
              <section className="w-full md:w-1/3 p-2">
                <section className="h-40 bg-[#ff9b21] text-white p-6 shapebg flex flex-col justify-between md:p-12 rounded-2xl">
                  <p className="font-medium text-lg">+4.132Kwh</p>
                  <p>Total Energy Consumed</p>
                </section>
              </section>
            </section>
          </section>

          <section className="flex flex-col mt-16">
            <strong className="text-2xl">My Solar Cell Per Project</strong>
            <section className="overflow-auto mt-10 py-4 space-x-8 flex">
              <div className="w-full flex-wrap md:w-3/5 flex-shrink-0 flex bg-white shadow rounded-lg px-12 py-6">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img alt="idea" src="/images/idea.png" />
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-1/2 flex flex-col justify-between">
                  <p>ICN Mall/ 250 kwh / Lagos, Nigeria</p>
                  <div className="flex mt-4 text-blue-600 justify-between">
                    <p>+4.689kwh</p>
                    <p>+4.689Co2</p>
                  </div>
                  <div className="flex mt-4 items-center justify-between">
                    <p>Status:</p>
                    <span className="py-1 px-3 rounded bg-blue-600 text-white">
                      Operating Normally
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex-wrap md:w-3/5 flex-shrink-0 flex bg-white shadow rounded-lg px-12 py-6">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img alt="idea" src="/images/idea.png" />
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-1/2 flex flex-col justify-between">
                  <p>ICN Mall/ 250 kwh / Lagos, Nigeria</p>
                  <div className="flex mt-4 text-blue-600 justify-between">
                    <p>+4.689kwh</p>
                    <p>+4.689Co2</p>
                  </div>
                  <div className="flex mt-4 items-center justify-between">
                    <p>Status:</p>
                    <span className="py-1 px-3 rounded bg-blue-600 text-white">
                      Operating Normally
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex mt-8 justify-center">
              <div className="flex space-x-1">
                <button className="border flex items-center justify-center text-blue-600 border-blue-600 bg-white h-10 w-10 rounded-full">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="border flex items-center justify-center border-blue-600 bg-blue-600 text-white h-10 w-10 rounded-full">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </section>
        </section>
      </section>
      <nav className="fixed bottom-0 md:hidden bg-white shadow right-0 left-0 flex justify-evenly py-4 px-6">
        <div>
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div>
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </main>
  );
}
