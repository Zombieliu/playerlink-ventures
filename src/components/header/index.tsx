import { Dialog, Disclosure, Listbox, Popover, Tab, Transition } from '@headlessui/react';
import Link from "next/link";
import { Switch } from '@headlessui/react'
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React, {Fragment, useEffect, useState} from "react";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { id:1 ,name: 'Learn', href: '' },
    { id:2 ,name: 'Ventures', href: '' },
    { id:3 ,name: 'Contact', href: '' },
    { id:4 ,name: 'Team', href: '/team' },

]
const Header = () =>{

    const [language,setLanguage] = useState(false)

    function languageChange() {
        setLanguage(!language);
    }
    return (
        <header>
            <Popover className="relative   ">
                <div className="flex  fixed z-20 inset-x-0  bg-black bg-opacity-80    transition duration-700 mb-10 pl-5 mb-5 justify-between items-center  p-3 md:p-3 sm:px-6  md:space-x-10 lg:px-10 xl:px-20 items-center ">

                    <div className=" flex  justify-between lg:justify-start">
                        <div className="flex justify-start  ">
                            <Link  href="/">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className=" w-48 "
                                        src="/Pl venters 页面LOGO.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/*导航*/}
                    <Tab.Group as="nav" className="hidden  lg:flex  space-x-8  text-white ">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link  href={item.href}>
                                    <a  className=" ">
                                        <div  className='w-20 py-2.5 text-sm leading-5 text-center  rounded-lg text-sm font-medium text-white '>
                                            {item.name}
                                        </div>

                                    </a>
                                </Link>
                            </div>
                        ))}
                    </Tab.Group>
                    {/*切换*/}

                    <button className="hidden lg:flex  justify-end  px-5 text-white bg-gray-400 rounded-2xl">
                        English
                    </button>
                    {/*手机版*/}
                    <div className="-mr-2  my-0.5 lg:hidden">
                        <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>

                <div className="fixed z-20 inset-x-0">
                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white   transition duration-700 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className=" w-48"
                                                src="/Pl venters 页面LOGO.png"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="py-6 ">
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center ">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href}>
                                                <a
                                                    className="text-base font-medium text-gray-900    transition duration-700 "
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>

                    </Transition>
                </div>
            </Popover>
        </header>
    )
}

export default Header
