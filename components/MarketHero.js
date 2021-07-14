/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import DarkNavBar from "./DarkNavBar";

export default function MarketHero() {
  return (
    <section className="dark:bg-gray-800 pb-0">
      
      {/* <section className="hero-bg">

      </section> */}
      <DarkNavBar/>
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
            Find a solar project of your choice.
            </p>
            <p className="font-normal dark:text-white mt-4 text-lg md:text-xl leading-8">
              We are here to help you find right the place for your energy
              investments.
            </p>
            <div></div>
          </section>
          {/* <section className="absolute hidden bg-white dark:bg-gray-800 border-blue-600 border shadow bottom-0 w-8/12 py-4 rounded md:flex justify-evenly">
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
          </section> */}
        </section>
      </section>
    </section>
  );
}
