/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import ProjectList from "../../components/ProjectList";
import Layout from "../../components/Layout";
import SubscribeSection from "../../components/SubscribeSection";
import DarkNavBar from "../../components/DarkNavBar";
import { IProject } from "../../components/Project";
import sunvestAPI from "../../utils/APIlib";
import firebase from "firebase/app";
import "firebase/firestore";
export default function ProjectDetails({ project }) {
  let _project = project as IProject;
  return (
    <Layout>
      <section className="flex flex-col">
        <section className="dark:bg-gray-800 pb-0">
          <DarkNavBar />
          <section className="flex flex-col-reverse md:flex-row p-4 pt-12 md:px-32 md:pb-64 md:min-h-[70vh]">
            <section className="w-full md:w-7/12 mt-8 md:mt-0 pr-0 md:pr-12 flex flex-col">
              <div className="flex items-center space-x-3">
                <p className="text-blue-600  font-bold text-lg">
                  What more you need to know?
                </p>
                <span className="h-1 hidden md:block rounded-full w-12 bg-gradient-to-r via-blue-200 from-blue-600 to-blue-50"></span>
              </div>
              <h1 className="text-2xl mt-4 font-medium dark:text-white">
                {_project.name}
              </h1>
              <p className="font-light mt-8 dark:text-white">
                {_project.description}
              </p>
              <section className="flex mt-8">
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
                  <p className="mt-1 dark:text-white">{_project.profit}%</p>
                </div>
              </section>
              <section className="flex mt-4">
                <div className="w-1/2">
                  <p className="text-blue-600 font-semibold text-[14px]">
                    Cost per unit
                  </p>
                  <p className="mt-1 dark:text-white">
                    {_project.cost_per_cell}
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-blue-600 font-semibold text-[14px]">
                    Duration
                  </p>
                  <p className="mt-1 dark:text-white">
                    {(function () {
                      let startDate = new Date(_project.start_date);
                      let endData = new Date(_project.end_date);
                      let elapse = endData.getTime() - startDate.getTime();
                      let months = elapse * 0.00000000038;
                      return `${Math.round(months)} months`;
                    })()}
                  </p>
                </div>
              </section>
              <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mt-8 md:w-4/5">
                <button className="text-white py-2 px-8 rounded-md shadow-xl bg-blue-600">
                  Save Me Later
                </button>
                <button className="text-white py-2 px-8 rounded-md shadow-xl bg-[#28bc00]">
                  Invest Now
                </button>
              </section>
            </section>

            <section className="w-full h-[40vh] md:h-auto md:w-5/12">
              <figure className="relative w-full h-full">
                <div className="hidden md:flex items-center justify-center -ml-8 mt-8 bg-blue-600 absolute w-20 rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl h-20">
                  <img alt="ccvc" src="/images/deal.png" />
                </div>
                <div className="hidden md:flex items-center justify-center -mr-8 mb-8 bottom-0 right-0 bg-[#8fdc7a] absolute w-20 rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl h-20">
                  <img alt="ccvc" src="/images/house-key.png" />
                </div>
                <img
                  alt="project_img"
                  src="/images/market-image.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute mb-4 ml-4 bottom-0 left-0 flex">
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
            </section>
          </section>
        </section>

        <section className="flex flex-col bg-[#f7f8fa] dark:bg-gray-800 py-20 md:py-32 justify-center">
          <section className="flex  dark:bg-gray-800 flex-col px-2 md:px-8">
            <section className="flex justify-center">
              <h1 className="font-bold dark:text-white hidden md:block mt-8 text-2xl">
                Investments for you
              </h1>
              <section className="font-bold flex md:hidden py-4 px-4 justify-between border-b w-full md:w-10/12">
                <h1 className="text-base md:text-2xl dark:text-white">
                  Investments for you
                </h1>
                <div className="flex space-x-2">
                  <button className="md:hidden rounded-full w-8 h-8 dark:text-white dark:bg-gray-700 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button className="rounded-full md:hidden dark:text-white dark:bg-gray-700 w-8 h-8 text-gray-500 bg-[#dfe5f5] flex justify-center items-center">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </section>
            </section>

            <ProjectList projects={[]} />
          </section>
        </section>
        <SubscribeSection />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let slug = ctx.params.slug;
  let project;

  let db = firebase.firestore();
  let qs = await db
    .collection("projects")
    .where("slug", "==", slug)
    .limit(1)
    .get();
  
  if(qs.size > 0){
    project = qs.docs[0].data()
  } else return {
    notFound : true
  }
  // let resp = await sunvestAPI.getSingleProject(slug);

  // if (resp.ok) {
  //   let data = await resp.json();
  //   project = data.data;
  // }
  return {
    props: {
      project,
    },
  };
}
