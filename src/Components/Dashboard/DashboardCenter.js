import { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../Assets/img/Nike5.mov";
import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

export default function DashboardCenter() {
  
  return (
    <>
      <div className="bg-white">
        {/* Header */}

        <main>
          {/* Hero section */}
          <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
            <video
              autoPlay
              muted
              loop
              id="background-video"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            >
              <source src={Background} type="video/mp4" />
            </video>

            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                    Monitoring all the processes.{" "}
                    <a
                      href="/MainMonitoring"
                      className="font-semibold text-white"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Check more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Crafted footwear with confidence
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Our dedicated team of employees has consistently
                    demonstrated exemplary performance in driving our company
                    towards the realization of becoming a global leader in the
                    footwear industry.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6"></div>
                </div>
              </div>

              {/* Logo cloud */}
              <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {/*  <p className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">   </p>
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={NikeLogo}
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={JXMESLogo}
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={PratamaLogo}
                alt="SavvyCal"
                width={158}
                height={48}
              />
            <p className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">   </p> */}
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>

          {/* Feature section */}
         
        </main>
      </div>
    </>
  );
}
