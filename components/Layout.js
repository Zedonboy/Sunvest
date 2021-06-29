/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import { useEffect } from "react";
/* eslint-disable @next/next/no-img-element */
export default function Layout({ children }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', {scope: './'})
      .then((reg) => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch((error) => {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fontawesome/css/regular.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/brands.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/fontawesome.min.css" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Invest to help business grow" />
        <meta name="keywords" content="SunVest" />
        <title>SunVest</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/logo.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/logo.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#4834c4" />
      </Head>
      {children}
      <footer className="bg-[#4834c4] dark:bg-gray-800 p-4 md:py-24 flex flex-wrap justify-between md:px-36">
        <section className="w-full md:w-2/6">
          <figure>
            <img alt="kdnk" src="/images/footer-logo.png" />
          </figure>
          <p className="text-white mt-4">
            Join us in the revolution to help Nigerian
            <br /> businesses escape power problems and run
            <br /> more profitably.
          </p>
          <section className="flex mt-8 space-x-4 text-white">
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

        <section className="w-full md:w-1/6 mt-8 md:mt-0 flex flex-col space-y-3 text-white">
          <h1 className="font-bold text-2xl">Main Menu</h1>
          <a>Home</a>
          <a>About</a>
          <a>Contact Us</a>
          <a>Sign In</a>
          <a>Sign Up</a>
        </section>

        <section className="w-full md:w-2/6 mt-8 md:mt-0 flex flex-col space-y-3 text-white">
          <h1 className="font-bold text-2xl">Contact Us</h1>
          <div>
            <p className="font-semibold">Address</p>
            <p>
              No 13, Abike Jokogbola Street, Sholebo Estate, Ikorodu, Lagos.
            </p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>info@sunvest.energy</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>+234 816 276 2228</p>
          </div>
        </section>
      </footer>
    </>
  );
}
