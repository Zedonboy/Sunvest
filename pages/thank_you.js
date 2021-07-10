import DarkNavBar from "../components/DarkNavBar";
import Link from "next/link"
export default function ThankYou() {
  return (
    <main className="flex h-screen flex-col bg-purple-100">
      <DarkNavBar />
      <section className="h-[75vh] space-y-4 flex flex-col justify-center items-center">
        <h1 className="text-cpurple font-bold text-3xl">Thank you for registering</h1>
        <div className="h-24 w-24 rounded-full border border-green-400 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-green-400 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>
        <p className="text-cpurple font-light text-lg">Check Your Email for Verification</p>
        <Link passHref href="/signin">
        <a className="shadow rounded mt-2 px-5 py-2 text-white bg-cpurple">Sign In</a>
        </Link>
      </section>
    </main>
  );
}
