/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="md:px-32 px-2 dark:bg-gray-800 sectionbg">
        <section className="py-32 items-center flex flex-wrap">
          <section className="w-full md:w-1/2 pr-4 flex justify-center items-center">
            <figure>
              <img alt="djvs" src="/images/bitcoin.png" />
            </figure>
          </section>
          <section className="w-full px-6 md:w-1/2 flex flex-col">
            <p className="text-blue-600 mt-4 text-center md:text-left md:mt-0 font-semibold text-3xl">
              SunVest
            </p>
            <p className="w-full dark:text-white text-center md:text-left font-light mt-4">
              SunVest is a digital crowdfunding web and mobile platform that
              provides distributed finance for commercial and industrial (C&I)
              scale projects development and ownership.
            </p>

            <a className="font-bold mt-6 flex text-blue-600">
              Learn more
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </section>
        </section>
      </section>
      <div className="px-2 md:px-28"><div className="w-full border-b border-gray-200"></div></div>
      <section className="flex flex-col md:px-32 px-2 dark:bg-gray-800 sectionbg">
        <h1 className="text-blue-500 mt-10 font-bold text-4xl text-center">
          How it Works
        </h1>
        <section className="flex items-center flex-wrap mt-20 pb-24">
          <section className="w-full pb-12 flex flex-col md:w-1/3 px-12">
            <figure className="flex justify-center">
              <img alt="sign_up" src="/images/sign_up.png" />
            </figure>
            <p className="font-extrabold text-2xl mt-2 dark:text-white text-center">
              Sign Up
            </p>
            <p className="text-center mt-2 font-medium text-[#222222] dark:text-white">
              Sign up with your details, choose a project from the market place,
              select the number of units you would like to fund and own a part
              of, then proceed to make payments.
            </p>
          </section>
          <section className="pb-12 px-12 w-full flex flex-col items-center md:w-1/3 bg-blue-600 rounded-3xl">
            <figure className="flex justify-center">
              <img alt="sign_up" src="/images/pb.png" />
            </figure>
            <p className="font-extrabold text-2xl mt-2 text-white text-center">
              Power A Business
            </p>
            <p className="mt-2 text-center font-medium text-white">
              Your investments goes into developing solar power infrastructure
              for malls, small businesses, schools, hospotals, gas stations and
              industries.
            </p>
          </section>
          <section className="pb-12 px-12 w-full flex flex-col items-center md:w-1/3">
            <figure className="flex justify-center">
              <img alt="sign_up" src="/images/ep.png" />
            </figure>
            <p className="font-extrabold text-2xl -mt-2 dark:text-white text-center">
              Earn A Profit
            </p>
            <p className="mt-2 text-center font-medium text-[#222222] dark:text-white">
              You earn a guaranteed return on investment when you invest on
              SunVest. Upon solar project installation and commissioning, the
              project beneficiary..
            </p>
          </section>
          
        </section>
      </section>
      <div className="px-2 md:px-28"><div className="w-full border-b border-gray-200"></div></div>
      <section className="dark:bg-gray-800 px-2 md:px-10 py-12 flex items-center flex-col bg-[#f7f8fa]">
        <h1 className="text-blue-600 text-center mt-14 font-bold text-lg">
          Let&apos;s explore the Investments that are top-selling
        </h1>
        <ul className="hidden lg:flex space-x-16 mt-12 overflow-auto market-cat">
          <li>
            <button>Commercial Projects</button>
          </li>
          <li>
            <button>Capital Projects</button>
          </li>
          <li>
            <button>Industrial Projects</button>
          </li>
          <li>
            <button>Electrification Projects</button>
          </li>
        </ul>
        <section className="hidden lg:flex mt-8">
          <div className="flex items-center pr-6">
            <button className="rounded-full w-16 h-16 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <section className="w-full flex space-x-8">
            <Project />
            <Project />
            <Project />
          </section>
          <div className="flex items-center pl-6">
            <button className="rounded-full dark:text-white dark:bg-gray-700 w-16 h-16 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        <a className="flex mt-10 text-blue-600 font-medium">
          Go to Marketplace&nbsp;
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </section>
      <section className="p-12 md:h-[60vh] dark:bg-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-blue-600 text-center font-bold text-4xl">
          Working with us are the path to success
        </h1>
        <p className="text-center dark:text-white mt-4">
          Get updated and news on all the new investments for Free and enjoy our
          platform
          <br /> with the support of our professional onboarding team.
        </p>
        <section className="flex flex-col md:flex-row md:space-x-6 mt-4">
          <input
            type="email"
            className="w-full md:w-56 bg-gray-200"
            placeholder="Email"
          />
          <button className="w-full md:w-auto text-white font-bold text-sm bg-blue-600 rounded-md px-6 py-2">
            Subscribe
          </button>
        </section>
      </section>
      <section className="md:p-8 p-2 py-12 dark:bg-gray-800 flex flex-col">
        <h1 className="font-semibold mt-12 text-blue-600 text-2xl text-center">
          Working with a diverse global partners
        </h1>
        <section className="flex space-x-8 mt-10 overflow-auto">
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img alt="vmkfdmvkd" src="/images/binance.png" />
          </figure>
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img alt="vmkfdmvkd" src="/images/sterlin.png" />
          </figure>
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img alt="vmkfdmvkd" src="/images/leadway.png" />
          </figure>
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img alt="vmkfdmvkd" src="/images/paystack.png" />
          </figure>
        </section>
        <section className=" mt-8 flex justify-center space-x-2">
          <button className="text-gray-300">
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
          <p>1/2</p>
          <button className="text-blue-600">
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
          
        </section>
      </section>
    </Layout>
  );
}
