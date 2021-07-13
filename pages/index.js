/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Project from "../components/Project.tsx";
import Link from "next/link";
import SubscribeSection from "../components/SubscribeSection";
import { url, headers } from "../utils/APIlib";
import useSWR from "swr";
const fetcher = (url) =>
  fetch(url, {
    headers,
    method: "GET",
  }).then((res) => res.json());

  const scrollLeft = () => {
    //let id = catName.replace(" ", "-").toLowerCase().trim();
    let elm = document.querySelector("#partners-section");
    if (elm) {
      let scrollOffset = window.innerWidth;
      elm.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };
  
  const scrollRight = () => {
    
    let elm = document.querySelector("#partners-section");
    if (elm) {
      let scrollOffset = window.innerWidth;
      elm.scrollBy({
        top: 0,
        left: -scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const data = [
  ]
export default function Home() {
  //const { data, error } = useSWR(url, fetcher);
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

            <a
              href="/how_it_works"
              className="font-bold mt-6 flex text-blue-600"
            >
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
      <div className="px-2 md:px-28">
        <div className="w-full border-b border-blue-500"></div>
      </div>
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
              Select the project you would like to invest in, number of units of
              solar cells you would like to fund, then proceed to make payments
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
              SunVest. Once the solar is completed, the business starts to pay
              you back initial investment with interest which is your profit.
            </p>
          </section>
        </section>
      </section>
      <div className="px-2 md:px-28">
        <div className="w-full border-b border-blue-500"></div>
      </div>
      <section className="dark:bg-gray-800 px-2 md:px-10 py-12 flex items-center flex-col bg-[#f7f8fa]">
        <h1 className="text-blue-600 text-center mt-14 font-bold text-lg">
          Explore Our Top Selling Projects
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
          <section className="flex space-x-8">
            {data?.map((p, i) => {
              <div key={i} className="md:w-[20rem]">
                <Project project={p} />
              </div>;
            })}
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

        <Link passHref href="/market" className="">
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
        </Link>
      </section>
      <SubscribeSection />
      <div className="px-2 md:px-28">
        <div className="w-full border-b border-blue-500"></div>
      </div>
      <section className="md:p-8 p-2 py-12 dark:bg-gray-800 flex flex-col">
        <h1 className="font-semibold mt-12 text-blue-600 text-2xl text-center">
          Working with a diverse global partners
        </h1>
        <section id="partners-section" className="flex p-12 space-x-8 mt-10 overflow-x-auto">
          <figure className="flex-shrink-0 w-[270px] overflow-hidden bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img className="w-full h-full object-cover" alt="vmkfdmvkd" src="/images/partners/binance.jpg" />
          </figure>
          {/* <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img className="w-full h-full object-cover" alt="vmkfdmvkd" src="/images/partners/detail.png" />
          </figure> */}
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img className="w-full h-full object-cover" alt="vmkfdmvkd" src="/images/partners/fate.png" />
          </figure>
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img className="w-full h-full object-cover" alt="vmkfdmvkd" src="/images/partners/netherlands.jpg" />
          </figure>
          <figure className="flex-shrink-0 w-[270px] bg-[#f8f8f8] h-28 flex justify-center items-center">
            <img className="w-full h-full object-cover" alt="vmkfdmvkd" src="/images/partners/orange.png" />
          </figure>
        </section>
        <section className=" mt-8 flex justify-center space-x-2">
          <button onClick={e => {
            scrollRight()
            
          }} className="text-gray-300">
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
          <button onClick={e => {
            scrollLeft()
          }} className="text-blue-600">
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
