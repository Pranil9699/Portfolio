import React from "react";

const ExtraCredits = () => {
  return (
    <>
      <div id="extraCredits">
        <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
        <h1 className="text-4xl text-center mb-8 text-white font-semibold">
          Extra Credits
        </h1>
        <div className="py-10 px-4 md:px-0 lg:w-[100%] lg:h-[210vh] text-white">
          <div className="flex justify-center mb-8">
            <img
              src="../../images/internship/completionletter/letter.jpg"
              alt="Internship Completion"
              className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-3xl text-center mb-8 text-white font-semibold">
            Internship Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-transparent rounded-sm p-4 shadow-sm">
              <img
                src={"../../images/internship/p-1/1.png"}
                alt={"Startup Registration Form"}
                className="w-full mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold mb-2">
                Startup Registration Form
              </p>
            </div>
            <div className="bg-transparent rounded-sm p-4 shadow-sm">
              <img
                src={"../../images/internship/p-2/1.png"}
                alt={"Startup ScoreCard Creation"}
                className="w-full mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold mb-2">
                Startup ScoreCard Creation
              </p>
            </div>
            <div className="bg-transparent rounded-sm p-4 shadow-sm">
              <img
                src={"../../images/internship/p-3/1.png"}
                alt={"Startup QuetionaryCreation"}
                className="w-full mb-4 rounded-lg"
              />
              <p className="text-lg font-semibold mb-2">
                Startup Quetionary Creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCredits;
