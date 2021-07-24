/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Form from "components/Form.js";
import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;
      

export default function Index() {

  const handleScroll = () => {
      scroll.scrollMore(550);
  }

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                AIRLAB 
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Fetch data from 
                {" "}
                <a
                  href="https://docs.getodk.org/central-intro/"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  ODK Central API
                </a>
                  {" "} and store it for data analysis and visualization
              </p>
              <div className="mt-12">
                <a
                  href="#"
                  onClick={handleScroll}
                 // target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://docs.getodk.org/central-intro/"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  ODK Central
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>

      <Form />

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                ABOUT MAKERERE AI LAB
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                The {" "}
                <a
                  href="https://air.ug/#about_us"
                  className="text-blueGray-300"
                  target="_blank"
                >
                 AI and data science research
                </a>{" "}
                  group at Makerere University specialises in the application of artificial intelligence and data science -including, for example, methods from machine learning, computer vision and predictive analytics-to problems in the developing world.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Applications: natural language processing for under-resourced languages, automated diagnosis of both crop and human diseases, auction design for mobile commodity markets, analysis of traffic patterns in African cities, and of telecoms and remote sensing data for anticipating the spread of infectious diseases

              </p>
              <a
                href="https://air.ug"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
               check out
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
