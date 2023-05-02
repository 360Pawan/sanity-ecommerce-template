import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { type NextPage } from "next";

import Logo from "@/assets/images/logo/logo.svg";

import { Fragment } from "react";
import { Disclosure, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menuitems } from "./MenuItems";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const Header: NextPage = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-between">
                <Link
                  className="-mt-1 inline-flex w-auto focus:outline-none"
                  href="/"
                >
                  <Image alt="BoroBazar" src={Logo} width={131} height={30} />
                </Link>
                <div className="hidden items-center sm:flex">
                  {Menuitems?.map((item) => {
                    if (item?.subMenu) {
                      return (
                        <Popover key={item?.id} className="relative">
                          <>
                            <Popover.Button className="group inline-flex items-center rounded-md px-3 py-2 text-base hover:text-[#02B290] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                              <span>{item?.title}</span>
                              <ChevronDownIcon
                                className="ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative bg-white p-4">
                                    {item?.subMenu?.map((el) => (
                                      <Link
                                        key={el?.id}
                                        href={el?.href}
                                        className="flex items-center rounded-lg p-2 text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-[#02B290] focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                                      >
                                        <p className="text-sm">{el?.title}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        </Popover>
                      );
                    } else if (!item?.subMenu) {
                      return (
                        <Link
                          key={item?.id}
                          href={item?.href}
                          className="text-gray-90 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-[#02B290] focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                        >
                          <p className="text-md font-normal0">{item?.title}</p>
                        </Link>
                      );
                    }
                  })}

                  {/* <Popover className="relative">
                    <>
                      <Popover.Button className="group inline-flex items-center rounded-md px-3 py-2 text-base hover:text-[#02B290] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Categories</span>
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 transform px-4 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative bg-white p-4">
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-[#02B290] focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm">Fresh Vegetables</p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Diet Nutrition
                                </p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Healthy Foods
                                </p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Grocery Items
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  </Popover>
                  <Popover className="relative">
                    <>
                      <Popover.Button className="group inline-flex items-center rounded-md px-3 py-2 text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Dietary</span>
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 transform px-4 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative bg-white p-4">
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Vegetarian
                                </p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Kakogenic
                                </p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">
                                  Mediterranean
                                </p>
                              </Link>
                              <Link
                                href="/"
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                              >
                                <p className="text-sm text-gray-900">Organic</p>
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  </Popover>
                  <Link
                    href="/"
                    className="text-gray-90 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-[#02B290] focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-50"
                  >
                    <p className="text-md font-normal0">Search</p>
                  </Link> */}
                </div>
                <div className="-mx-2.5 flex shrink-0 xl:-mx-3.5">
                  <button
                    className="mx-2.5 flex h-auto shrink-0 transform items-center justify-center gap-1 focus:outline-none lg:flex xl:mx-3.5"
                    aria-label="cart-button"
                  >
                    <div className="relative flex items-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-opacity-40"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.1"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="22" height="22" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="absolute -top-3.5 right-0 flex min-h-[16px] min-w-[16px] items-center justify-center rounded-[20px] bg-[#02B290] p-0.5 text-sm font-bold text-white">
                        0
                      </span>
                    </div>
                    <span className="lg:text-15px text-brand-dark text-sm font-normal ltr:ml-2 rtl:mr-2">
                      Cart
                    </span>
                  </button>
                  <button
                    className="mx-2.5 flex h-auto shrink-0 transform items-center justify-center gap-1 focus:outline-none lg:flex xl:mx-3.5"
                    aria-label="cart-button"
                  >
                    <div className="relative flex items-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-opacity-40"
                      >
                        <path
                          d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.2"
                        ></path>
                        <path
                          d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.2"
                        ></path>
                      </svg>
                    </div>
                    <span className="lg:text-15px text-brand-dark text-sm font-normal ltr:ml-2 rtl:mr-2">
                      Sign In
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
