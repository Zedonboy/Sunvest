/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
export interface IProject {
  id: number;
  name: string;
  slug: string;
  description: string;
  total_cells: number;
  taken_cells: string;
  cost_per_cell: number;
  profit: number;
  maturity_period: number;
  start_date: string;
  end_date: string;
  ad_due_date: string;
  is_active: boolean | null;
  created_at: string;
}

export default function Project({project}) {
  let _project = project as IProject
  return (
    
    <a
      href={`/project/${_project.slug}`}
      className="bg-white dark:bg-gray-700 w-full rounded-2xl p-6"
    >
      <figure className="relative h-48">
        <span className="absolute rounded top-0 right-0 mt-6 mr-6 bg-yellow-600 font-bold px-4 py-1 text-xs">
          33% Sold
        </span>
        <img
          src="/images/project-img.png"
          alt="vjfvjfd"
          className="rounded-xl object-cover w-full h-full"
        />
      </figure>
      <p className="text-[14px] mt-3 dark:text-white font-bold text-center">
       {_project.name}
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
          <p className="mt-1 dark:text-white">{_project.profit}%</p>
        </div>
      </section>
      <section className="flex mt-4">
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">
            Cost per unit
          </p>
          <p className="mt-1 dark:text-white">{_project.cost_per_cell}</p>
        </div>
        <div className="w-1/2">
          <p className="text-blue-600 font-semibold text-[14px]">Duration</p>
          <p className="mt-1 dark:text-white">{function(){
            let startDate = new Date(_project.start_date)
            let endData = new Date(_project.end_date)
            let elapse = endData.getTime() - startDate.getTime()
            let months = elapse * 0.00000000038
            return `${Math.round(months)} months`
          }()}</p>
        </div>
      </section>
      <section className="flex mt-6 justify-center">
        <button className="bg-blue-600 font-semibold rounded text-white text-[18px] px-6 py-2">
          Details
        </button>
      </section>
    </a>
  );
}
