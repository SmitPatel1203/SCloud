import Steps from "../assets/Just in 3 steps.png";

const ThreeSteps = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-200 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Why SCloud
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Get All Digital Services In <br /> Just 3 Steps
          </h2>

          {/* Circular Images */}
          <div className="flex gap-6 mt-10">
            <img src= {Steps} alt="Start With SCloud in Just 3 Steps" className="object-cover" />
          </div>
        </div>

        {/* Right Steps */}
        <div className="relative flex flex-col gap-12 px-4">

          {/* Step 1 */}
          <div className="relative bg-white rounded-xl shadow-lg p-6">
            <div className="absolute -top-5 -left-5 bg-yellow-400 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
              01
            </div>
            <p className="text-gray-800 font-semibold mt-4">
              Call Us, or fill the form below
            </p>
          </div>

          {/* Arrow 1 */}
          {/* <div className="absolute top-[90px] left-[-40px] hidden md:block">
            <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-gray-400">
              <path
                d="M100,0 C50,50 50,50 0,100"
                strokeDasharray="5,5"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div> */}

          {/* Step 2 */}
          <div className="relative bg-white rounded-xl shadow-lg p-6">
            <div className="absolute -top-5 -left-5 bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
              02
            </div>
            <p className="text-gray-800 font-semibold mt-4">
              Create a plan for your website or App or Software, <br /> Develop it or optimize it
            </p>
          </div>

          {/* Arrow 2 */}
          {/* <div className="absolute top-[200px] left-[-40px] hidden md:block">
            <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-gray-400">
              <path
                d="M100,0 C50,50 50,50 0,100"
                strokeDasharray="5,5"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div> */}

          {/* Step 3 */}
          <div className="relative bg-white rounded-xl shadow-lg p-6">
            <div className="absolute -top-5 -left-5 bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
              03
            </div>
            <p className="text-gray-800 font-semibold mt-4">
              Reporting & Managing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
