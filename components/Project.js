/* eslint-disable @next/next/no-img-element */
export default function Project() {
  return (
    <section className="bg-white dark:bg-gray-700 md:w-[20rem] rounded-2xl p-6">
      <figure className="relative h-48">
        <span className="absolute rounded top-0 right-0 mt-6 mr-6 bg-yellow-600 font-bold px-4 py-1 text-xs">
          33% Sold
        </span>
        <img
        src="/images/project-img.png"
          alt="vjfvjfd"
          className="rounded-xl object-cover h-full w-full"
        />
      </figure>
      <p className="text-[14px] mt-3 dark:text-white font-bold text-center">
        Aqua Safari Resort - 0.4MW | GRID TIED
      </p>
      <div className="flex mt-2 text-gray-600 dark:text-white space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <p>Gwarimpa Abuja</p>
      </div>
      <section className="flex mt-4">
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">
            Unit Available
          </p>
          <p className="mt-1 dark:text-white">60,000</p>
        </div>
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">
            Expected Profit
          </p>
          <p className="mt-1 dark:text-white">15%</p>
        </div>
      </section>
      <section className="flex mt-4">
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">
            Cost per unit
          </p>
          <p className="mt-1 dark:text-white">0.00063BTC</p>
        </div>
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">Duration</p>
          <p className="mt-1 dark:text-white">12 Months</p>
        </div>
      </section>
      <section className="flex mt-6 justify-center">
        <button className="bg-blue-600 font-semibold rounded text-white text-[18px] px-6 py-2">
          Details
        </button>
      </section>
    </section>
  );
}
