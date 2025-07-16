import Link from "next/link";

export default function Navig() {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/shivgarjanapathakpunelogo.png" className="h-8" alt="shivgarjanapathakpunelogo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">शिवगर्जना</span>
                    </a>
                    <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            Marathi - मराठी
                        </button>
                        {/* <!-- Dropdown --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700" id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            English (US)
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            Marathi (मराठी)
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li>
                                <Link href={'/laurels'} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Laurels</Link>
                            </li>
                            <li>
                                <Link href={'/gallery'} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>
                            </li>
                            <li>
                                <Link href={'/socialService'} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Social Service</Link>
                            </li>
                            <li>
                                <Link href={'/contactUs'} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
                            </li>
                            <li>
                                <Link href={'/aboutUs'} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className="max-w-screen-xl flex items-center">लक्ष्मी रोड चा बुलंद आवाज </h1>
                </div>
            </nav>
        </>
    )
}