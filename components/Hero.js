/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
//import SunVestAPI from "../utils/APIlib.ts";
import firebase from "firebase/app";
import { fireBaseConfig } from "../config";
require("firebase/auth");
require("firebase/firestore");

export default function Hero() {
  let router = useRouter();
  let [dark, setDark] = useState(false);
  let [registerContract, setRegisterContract] = useState({});
  let [loading, setLoading] = useState(false);
  let [validationError, setValidationError] = useState(null);
  let firestore = useRef(null);
  let cb = useCallback(
    (e) => {
      setRegisterContract({
        ...registerContract,
        [e.target.name]: e.target.value,
      });
    },
    [registerContract]
  );

  let submitCB = useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          registerContract.email,
          registerContract.password
        )
        .then((userCred) => {
          userCred.user.updateProfile({
            displayName: registerContract.firstName
          })
          firebase.firestore().collection("investors").add({
            firstName: registerContract.firstName,
            lastName: registerContract.lastName,
            email: registerContract.email,
            phone: registerContract.phone,
          }).then(d => {
            setLoading(false)
            let user = userCred.user
            router.push("/thank_you")
            // user.sendEmailVerification().then(e => {
              
            // })
            
          }); 
        }).catch(err => {
          setValidationError({general : err.message})
        });
     
    },
    [registerContract, router]
  );

  return (
    <section className="dark:bg-gray-800 bg-cpurple p-2 md:px-32 min-h-screen pb-24">
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
                className="transition-transform shadow-2xl transform dark:bg-gray-800 flex flex-col fixed h-screen top-0 left-0 bottom-0 bg-white w-10/12"
              >
                <section className="flex justify-end">
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
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link passHref href="/how_it_works">
                      <a>How it works</a>
                    </Link>
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
                    <Link passHref href="/contact">
                      <a className="" href="/home">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </Popover.Panel>
            </Transition>
            <nav className="flex py-4 justify-between">
              <a href="/" className="flex items-center space-x-3">
                <span>
                  <img
                    alt="fdnv"
                    className="h-12 w-12"
                    src="/images/logo.png"
                  />
                </span>
                <span className="logo-text">SunVest.energy</span>
              </a>
              <div className="flex md:hidden items-center space-x-2">
                <button
                  className="text-white"
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
                  <button className="text-white mr-4">
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

              <ul className="md:flex hidden menu space-x-6">
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
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="" href="/how_it_works">
                    How it works
                  </a>
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
                  <a className="" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </Popover>
      <section className="flex items-center flex-wrap min-h-[80vh]">
        <Transition
          as={Fragment}
          show={true}
          enter="transition-opacity duration-300 ease-in delay-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <section className=" flex p-8 flex-col w-full lg:w-1/2">
            <section className="text-white flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="font-light ml-1">
                Top energy investment company
              </span>
            </section>
            <h1 className="text-white font-bold text-2xl md:text-5xl leading-snug mt-2">
              Invest in Solar,
              <br /> Empower A Business,
              <br /> Earn A Profit
            </h1>
            <p className="text-white font-light mt-2">
              Join us in the revolution to help Nigerian businesses escape power
              problems and run more profitability
            </p>
            <a
              href="/how_it_works"
              className="flex text-white items-center space-x-4 font-bold mt-4"
            >
              <span>Learn More</span>
              <span className="rounded-full border-2 border-white">
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </section>
        </Transition>

        <section className="w-full lg:w-1/2 p-8">
          <Transition
            as={Fragment}
            show={true}
            enter="transition-transform transform duration-500 ease-in-out delay-700"
            enterFrom="scale-0"
            enterTo="scale-100"
          >
            <section className=" scal bg-white w-full md:w-10/12 flex rounded-3xl p-4">
              <section className="py-6 w-full pl-2 pr-6">
                <p className="font-extrabold text-2xl text-center">
                  Get started now
                </p>
                {validationError?.general ? (
                  <span className="bg-red-100 rounded-md p-4 text-sm text-red-500 border border-red-500">{validationError?.general}</span>
                ) : null}
                <span></span>
                <form
                  onSubmit={submitCB}
                  className="flex flex-col mt-8 space-y-5"
                >
                  {validationError?.firstName?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    required
                    name="firstName"
                    onChange={cb}
                    className="border-gray-300"
                    type="text"
                    placeholder="First Name"
                  />
                  {validationError?.lastName?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    name="lastName"
                    required
                    onChange={cb}
                    className="border-gray-300"
                    type="text"
                    placeholder="Last Name"
                  />
                  {validationError?.email?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    name="email"
                    required
                    onChange={cb}
                    className="border-gray-300"
                    type="email"
                    placeholder="Email"
                  />
                  {validationError?.phone?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    name="phone"
                    onChange={cb}
                    className="border-gray-300"
                    type="tel"
                    placeholder="Phone Number"
                  />
                  {validationError?.password?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    name="password"
                    className="border-gray-300"
                    type="password"
                    onChange={cb}
                    minLength={8}
                    required
                    placeholder="Password (Minimum of 8 characters)"
                  />
                  {validationError?.password_confirmation?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
                  <input
                    name="password_confirmation"
                    onChange={cb}
                    minLength={8}
                    required
                    className="border-gray-300"
                    type="password"
                    placeholder="Retype Password"
                  />
                  <div>
                    <button
                      disabled={loading}
                      type="submit"
                      className="bg-blue-600 disabled:bg-blue-200 text-white shadow-md font-semibold rounded-full px-4 py-2 w-[7.2rem]"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  <span className="text-gray-400">
                    Have an account?{" "}
                    <Link passHref href="/signin">
                      <a className="text-purple-600">Sign In</a>
                    </Link>
                  </span>
                </div>
              </section>
              <section className="w-0 md:w-20 rounded-full bg-[#bbbcef]"></section>
            </section>
          </Transition>
        </section>
      </section>
    </section>
  );
}
