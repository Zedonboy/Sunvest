import Project from "./Project";
export default function ProjectList() {
  return (
    <section className="flex flex-col mt-12 md:flex-row">
      <div className="hidden md:flex items-center pr-6">
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
      <section className="flex overflow-auto px-4 pb-16 space-x-8">
        <div className="w-full md:w-[20rem] flex-shrink-0">
           
          <Project />
        </div>
        <div className="w-full md:w-[20rem] flex-shrink-0">
           
          <Project />
        </div>
         <div className="w-full md:w-[20rem] flex-shrink-0">
           
          <Project />
        </div>
        
        
      </section>
      <div className="hidden md:flex items-center pl-6">
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
  );
}
