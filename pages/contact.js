/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ProjectList from "../components/ProjectList";
import SubscribeSection from "../components/SubscribeSection";

export default function Contact() {
  let [dark, setDark] = useState(false);
  return (
    <Layout>
      <section className="dark:bg-gray-800 pb-0">
        <Head>
          {dark ? <meta name="theme-color" content="#1f2937" /> : null}
        </Head>
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
                        let html = document
                          .getElementsByTagName("html")
                          .item(0);
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
                    <Link href="/market">MarketPlace</Link>
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
        <section className="flex justify-center py-16 md:min-h-[70vh]">
          <section className="w-full md:w-3/5 p-12 flex flex-col items-center bg-white shadow rounded-md">
            <h1 className="border-b-4 px-2 font-bold text-xl text-blue-600 border-blue-500 py-2">
              Get In touch
            </h1>
            <section className="w-full mt-8 flex-wrap flex">
              <section className="w-full flex flex-col px-8 md:w-1/2">
                <section>
                  <p className="font-bold">Leave Us a Message</p>
                </section>
                <form className="flex space-y-8 mt-4 flex-col">
                  <input id="name" type="text" placeholder="Name" />
                  <input id="name" type="email" placeholder="Email" />
                  <textarea
                    cols={5}
                    id="name"
                    type="text"
                    placeholder="Your Message"
                  />
                  <button className="bg-blue-600 py-2 text-white rounded">
                    Submit
                  </button>
                </form>
              </section>
              <section className="w-full flex flex-col space-y-8 px-8 md:w-1/2">
                <div className="flex text-blue-600 space-x-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>
                    No 13, Abike Jokogbola Street, <br/>Sholebo Estate, Ikorodu,
                    Lagos.
                  </p>
                </div>
                <div className="flex text-blue-600 space-x-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p>+234 816 276 2228</p>
                </div>
                <div className="flex text-blue-600 space-x-4">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p>info@sunvest.energy</p>
                </div>
                <section className="flex mt-8 space-x-4 text-blue-600">
                  <a className="text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="text-2xl ">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="text-2xl ">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-2xl">
                    <i className="far fa-envelope"></i>
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </Layout>
  );
}
