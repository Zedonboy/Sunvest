/* eslint-disable @next/next/no-img-element */
import DarkNavBar from "../components/DarkNavBar";
import { Transition } from "@headlessui/react";
import Layout from "../components/Layout";
import { Fragment } from "react";
import SubSection from "../components/SubscribeSection"
export default function HowItWorks() {
  return (
    <Layout>
      <DarkNavBar />
      <section className="p-2 md:px-24 md:py-12">
        <section className="rounded-2xl shadow shapebg w-full h-32 md:h-64 bg-[#4834c4]">
          <section className="w-full h-full flex text-white items-center justify-center">
            <Transition
              as={Fragment}
              show={true}
              enter="delay-500 duration-1000"
              enterFrom="opacity-0 -translate-x-24"
              enterTo="opacity-100 translate-x-0"
            >
              <div>
                <p className="font-bold text-center text-xl md:text-4xl">
                  Learn More About Us & The Investments
                </p>
              </div>
            </Transition>
          </section>
          <section className="w-0 md:w-5/12"></section>
        </section>
      </section>
      <section className="flex flex-col">
        <section className="flex flex-wrap">
          <section className="w-full p-4 md:w-1/3 flex justify-center items-center">
            <p className="font-bold text-3xl">About Us</p>
          </section>
          <section className="w-full md:w-1/3 p-8">
            <p className="font-bold text-2xl">Who we are</p>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              lacinia gravida sed pulvinar imperdiet ultrices malesuada.
              Dictumst sem amet id malesuada sollicitudin lorem. Arcu ut in
              consequat cras ut. Tincidunt id scelerisque urna blandit lacus,
              pulvinar sollicitudin. Non integer in eget mauris. Diam porta sit
              id in pellentesque. Sit rhoncus in vel felis vitae sit.
            </p>
          </section>
          <section className="w-full md:w-1/3 p-8">
            <p className="font-bold text-2xl">What we do</p>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              lacinia gravida sed pulvinar imperdiet ultrices malesuada.
              Dictumst sem amet id malesuada sollicitudin lorem. Arcu ut in
              consequat cras ut. Tincidunt id scelerisque urna blandit lacus,
              pulvinar sollicitudin. Non integer in eget mauris. Diam porta sit
              id in pellentesque. Sit rhoncus in vel felis vitae sit.
            </p>
          </section>
        </section>
        <section className="py-12">
          <p className="text-center font-bold text-[#315EFB] text-4xl">
            The Easy Steps
          </p>
          <p className="text-center text-black font-semibold mt-4">
            Take this simple steps to becoming a millionaire
          </p>
        </section>
        <section className="text-left flex flex-wrap items-center">
          <div className="w-full md:w-2/4 flex flex-col p-4 md:p-24">
            <div className="relative">
              <p className=" text-8xl font-extrabold text-[#f5f7ff]">
                01
              </p>
              <h1 className="text-[#315EFB] text-center mt-6 font-bold text-3xl">
                Sign Up
              </h1>
              <p className="mt-6">
                Sign up with your details, choose a project from the market
                place, select the number of units you would like to fund and own
                a part of, then proceed to make payments with normal currency or
                cryptocurreny. You can invest from anywhere in the world !
              </p>
            </div>
          </div>
          <figure className="w-full md:w-2/4 p-16">
            <img alt="dvdfvfdv" src="/images/sitting_woman.png" />
          </figure>
        </section>
        <section className="text-left flex flex-row-reverse flex-wrap items-center">
          <div className="w-full md:w-2/4 flex flex-col p-4 md:p-24">
            <div className="relative">
              <p className="text-8xl text-right z-[-1] font-bold text-[#f5f7ff]">
                02
              </p>
              <h1 className="text-[#315EFB] text-center mt-6 font-bold text-3xl">
                Powering A Business
              </h1>
              <p className="mt-6">
                Your investments goes into developing solar power infrastructure
                for malls, small businesses, schools, hospotals, gasstations and
                industries. Without your investment, these businesses would be
                running on expensive generators and unreliable power supply from
                the National grid
              </p>
            </div>
          </div>
          <figure className="w-full md:w-2/4 p-16">
            <img alt="dvdfvfdv" src="/images/plant_man.png" />
          </figure>
        </section>
        <section className="text-left flex flex-wrap items-center">
          <div className="w-full md:w-2/4 flex flex-col p-4 md:p-24">
            <div className="relative">
              <p className=" text-8xl font-extrabold text-[#f5f7ff]">
                03
              </p>
              <h1 className="text-[#315EFB] text-center mt-6 font-bold text-3xl">
                Earning A Profit
              </h1>
              <p className="mt-6">
                You earn a guaranteed return on investment when you invest on
                SunVest. Upon solar project installation and commissioning, the
                project beneficiary ( e.g a mall, a school or a factory) pays
                back through electricity purchase through our Energy As A
                Service (EaaS) platform, or through the Lease to Own (LtO)
                model. You also get updates on the project development phases on
                a personalised dashboard via our web and mobile platforms.
              </p>
            </div>
          </div>
          <figure className="w-full md:w-2/4 p-16">
            <img alt="dvdfvfdv" src="/images/pushing_girl.png" />
          </figure>
        </section>
        <section className="flex justify-center p-4 md:px-24 relative items-center">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 px-12 p-12 h-[400px] rounded-l-3xl bg-[#F4F5F7]">
              <div className="w-full md:w-4/5">
                <h1 className="font-bold text-3xl">
                  Lets Get Started for free
                </h1>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                  aliquam porttitor odio natoque commodo semper.
                </p>
                <button className="px-8 mt-12 rounded py-2 bg-[#28BC00] text-white">Sign Up Now</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-col md:flex-row flex items-center justify-center">
            <p className=" text-8xl font-extrabold text-[#f5f7ff]">
                04
              </p>
                <p className="font-bold text-3xl">Get Started</p>
                
            </div>
          </div>
          <figure className="hidden md:block absolute w-[200px] h-[300px] overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" alt="vfdv" src="/images/market-image.png"></img>
          </figure>
        </section>
      </section>
      <SubSection/>
    </Layout>
  );
}
