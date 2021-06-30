export default function SubscribeSection() {
    return (
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
    )
}