import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import sunvestAPI from "../utils/APIlib";
import Project from "./Project";
export default function ProjectList({projects}) {
  const [page, setPage] = useState(1)
  //const [projects, setProjects] = useState([])
  // useEffect(() => {
  //   let fetch = async () => {
  //     let resp = await sunvestAPI.getProjects(page)
  //     if(resp.ok){
  //       let data = await resp.json()
  //       setProjects(data.data)
  //     }
  //   }

  //   fetch()
    
  // }, [page])
  return (
    <section className="flex flex-col mt-12 md:flex-row">
      <div className="hidden md:flex items-center pr-6">
        <button onClick={e => {
          if(page === 1)return
          else{
            setPage(page - 1)
          }
        }} className="rounded-full w-16 h-16 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
        {projects.map((v, i) => (
          <div key={i} className="w-full bg-white dark:bg-gray-700 rounded-2xl p-6 md:w-[20rem] flex-shrink-0">
          
          <Project project={v} />
        </div>
        ))}
        
        
      </section>
      <div className="hidden md:flex items-center pl-6">
        <button onClick={e => {
          setPage(page+1)
        }} className="rounded-full dark:text-white dark:bg-gray-700 w-16 h-16 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
