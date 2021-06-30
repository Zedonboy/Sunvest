/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function MarketHero() {
  let [dark, setDark] = useState(false);
  return (
    <section className="dark:bg-gray-800 pb-0">
      <Head>{dark ? <meta name="theme-color" content="#1f2937" /> : null}</Head>
      {/* <section className="hero-bg">

      </section> */}
      <Popover>
        {({ open }) => (
          <>
            <Transition
              enter="duration-300 ease-in-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="duration-200 ease-linear"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
              show={open}
              as={Fragment}
            >
              <Popover.Panel
                static
                className="transition-transform z-10 shadow-2xl transform dark:bg-gray-800 flex flex-col fixed h-screen top-0 left-0 bottom-0 bg-white w-10/12"
              >
                <section className="flex dark:bg-gray-800 bg-white justify-end">
                  <Popover.Button className="mt-4 dark:text-white mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
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
                  </Popover.Button>
                </section>
                <Link passHref href="/" className="flex justify-center">
                  <img alt="logo" src="/images/logo-dark.png" />
                </Link>
                <ul className="flex side-nav flex-col items-center space-y-4">
                  <li>
                    <a className="active" href="/home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="" href="/home">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a className="" href="/home">
                      Solar Projects
                    </a>
                  </li>
                  <li>
                    <Link href="/market">MarketPlace</Link>
                  </li>
                  <li>
                    <a className="" href="/home">
                      Contact Us
                    </a>
                  </li>
                  <button className="bg-blue-600 rounded text-white px-4 py-2 text-sm uppercase">
                    Sign In
                  </button>
                  <button className="border rounded border-blue-600 dark:text-white text-sm uppercase px-4 py-2">
                    Sign Up
                  </button>
                </ul>
              </Popover.Panel>
            </Transition>
            <nav className="flex p-2 md:px-32 py-4 max-h-[4.8rem] items-center justify-between">
              <a passHref href="/" className="flex items-center space-x-3">
                <span>
                  {dark ? (
                    <img
                      alt="fdnv"
                      className="h-12 w-12"
                      src="/images/logo.png"
                    />
                  ) : (
                    <img
                      alt="fdnv"
                      className="h-12 w-12"
                      src="/images/logo-s-dark.png"
                    />
                  )}
                </span>
                <span className="logo-text-alt">SunVest.energy</span>
              </a>
              <div className="flex md:hidden items-center space-x-2">
                <button
                  className="dark:text-white"
                  onClick={(e) => {
                    let html = document.getElementsByTagName("html").item(0);
                    if (dark) {
                      html.classList.remove("dark");
                      setDark(false);
                    } else {
                      html.classList.add("dark");
                      setDark(true);
                    }
                  }}
                >
                  {dark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>

                <Popover.Button>
                  <button className="mr-4 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </button>
                </Popover.Button>
              </div>

              <ul className="md:flex hidden menu-alt space-x-6">
                <li>
                  <button
                    onClick={(e) => {
                      let html = document.getElementsByTagName("html").item(0);
                      if (dark) {
                        html.classList.remove("dark");
                        setDark(false);
                      } else {
                        html.classList.add("dark");
                        setDark(true);
                      }
                    }}
                  >
                    {dark ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </button>
                </li>
                <li>
                  <a className="active" href="/home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="" href="/home">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="" href="/home">
                    Solar Projects
                  </a>
                </li>
                <li>
                  <Link href="/market">
                    MarketPlace
                  </Link>
                </li>
                <li>
                  <a className="" href="/home">
                    Contact Us
                  </a>
                </li>
              </ul>
              <section className="md:flex hidden space-x-2">
                <button className="bg-blue-600 rounded text-white px-4 py-2 text-sm uppercase">
                  Sign In
                </button>
                <button className="border rounded border-blue-600 dark:text-white text-sm uppercase px-4 py-2">
                  Sign Up
                </button>
              </section>
            </nav>
          </>
        )}
      </Popover>
      <section className="flex items-center flex-wrap py-12 md:p-0 h-auto md:h-[70vh]">
        <section className="w-full h-full relative flex justify-center">
          <figure className="relative hidden md:block md:w-1/2 h-full">
            <img
              alt="fjb"
              className="object-cover w-full h-full"
              src="/images/market-image.png"
            />
            <div className="absolute mt-4 ml-4 top-0 left-0 flex">
              <button className="px-4 rounded-l bg-white shadow text-blue-600 py-2">
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <button className="px-4 rounded-r bg-white shadow text-blue-600 py-2">
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </figure>
          <section className="w-full p-4 md:p-12 md:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-blue-600 font-bold text-4xl md:text-6xl">
              Marketplace
            </h1>
            <p className="font-medium mt-2 text-2xl md:text-4xl leading-10 dark:text-white">
              Let’s find a solar project that’s perfect for you.
            </p>
            <p className="font-normal dark:text-white mt-4 text-lg md:text-xl leading-8">
              We are here to help you find right the place for your energy
              investments.
            </p>
            <div></div>
          </section>
          <section className="absolute hidden bg-white dark:bg-gray-800 border-blue-600 border shadow bottom-0 w-8/12 py-4 rounded md:flex justify-evenly">
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
        </section>
      </section>
    </section>
  );
}
