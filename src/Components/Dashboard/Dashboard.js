import React, { useState } from "react";
import axios from "axios";
import Logo from "../../Assets/img/logos.png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Background from "../../Assets/img/Nike5.mov";
import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const navigation = [
    {
      name: "Machine",
      href: "#",
      current: false,
      subItems: [
        { name: "Machine 1", href: "/Machine1", active: true },
        { name: "Machine 2", href: "/Machine2", active: true },
        { name: "Machine 3", href: "/Machine3", active: true },
        { name: "Machine 4", href: "/Machine4", active: true },
        { name: "Machine 5", href: "/Machine5", active: true },
        { name: "Machine 6", href: "/Machine6", active: true },
        { name: "Machine 7", href: "/Machine7", active: true },
        { name: "Machine 8", href: "/Machine8", active: true },
        { name: "Machine 9", href: "/Machine9", active: true },
        { name: "Machine 10", href: "/Machine10", active: true },
        { name: "Machine 11", href: "/Machine11", active: true },
        { name: "Machine 12", href: "/Machine12", active: true },
      ],
    },
  ];
  
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="sticky top-0 z-50 bg-gray-800">
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/Dashboard">
                      <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt="Your Company"
                        href="/Dashboard"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                        <DropdownItem
                          key={item.name}
                          item={item}
                          isOpen={openDropdownIndex === index}
                          onToggle={() => handleToggleDropdown(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                     
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DropdownItem
                  key={item.name}
                  item={item}
                  isOpen={openDropdownIndex === index}
                  onToggle={() => handleToggleDropdown(index)}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
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

function DropdownItem({ item, isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        {item.name}
      </button>
      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {item.subItems.map((subItem, index) => (
              <li key={index}>
                <a
                  href={subItem.href}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {subItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
