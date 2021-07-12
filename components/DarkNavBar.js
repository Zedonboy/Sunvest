/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function DarkNavBar() {
  let [dark, setDark] = useState(false);
  return (
    <>
      <Head>{dark ? <meta name="theme-color" content="#1f2937" /> : null}</Head>
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
                    <Link passHref href="/">
                      <a className="active" href="/home">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link passHref href="/how_it_works">
                      <a className="">How it works</a>
                    </Link>
                  </li>
                  <li>
                    <a className="" href="">
                      Solar Projects
                    </a>
                  </li>
                  <li>
                    <Link href="/market">MarketPlace</Link>
                  </li>
                  <li>
                    <Link passHref href="/contact">
                      <a className="" href="/home">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <Link passHref href="/signin">
                    <a className="bg-blue-600 rounded text-white px-4 py-2 text-sm uppercase">
                      Sign In
                    </a>
                  </Link>
                  <Link passHref href="/">
                    <a className="border rounded border-blue-600 dark:text-white text-sm uppercase px-4 py-2">
                      Sign Up
                    </a>
                  </Link>
                </ul>
              </Popover.Panel>
            </Transition>
            <nav className="flex p-2 md:px-32 py-4 max-h-[4.8rem] items-center justify-between">
              <Link passHref href="/">
                <a className="flex items-center space-x-3">
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
              </Link>

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
                  <Link passHref href="/">
                    <a>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link passHref href="/how_it_works">
                  <a className="" href="/home">
                    How it works
                  </a>
                  </Link>
                  
                </li>
                {/* <li>
                  <Link >
                  <a >
                    Solar Projects
                  </a>
                  </Link>
                  
                </li> */}
                <li>
                  <Link href="/market">MarketPlace</Link>
                </li>
                <li>
                  <Link passHref href="/contact">
                    <a className="" href="/home">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
              <section className="md:flex hidden space-x-2">
                <Link passHref href="/signin">
                  <a className="bg-blue-600 rounded text-white px-4 py-2 text-sm uppercase">
                    Sign In
                  </a>
                </Link>
                <Link passHref href="/">
                <a className="border rounded border-blue-600 dark:text-white text-sm uppercase px-4 py-2">
                  Sign Up
                </a>
                </Link>
                
              </section>
            </nav>
          </>
        )}
      </Popover>
    </>
  );
}
