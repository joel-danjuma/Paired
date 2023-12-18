"use client"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { Divider } from "@nextui-org/react"

const menuItems = [
    {
        title: "Menu",
        list: [
            "Rooms",
            "Roommates",
            "Create Room Ad",
            "Create Roommate Ad",
            "Messages",
        ],
        links: [
            "ads/rooms",
            "ads/roommates",
            "createAd/rooms",
            "createAd/roommates",
            "messages",
        ],
    },
    {
        title: "Settings",
        list: ["User", "Help"],
    },
]

const Sidebar = () => {
    return (
        <div className="md:flex md:flex-shrink-0 h-[92%]">
            <div className="flex flex-col w-64">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
                    <div className="flex flex-col flex-shrink-0 px-4">
                        <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col flex-grow mt-5">
                        <nav className="flex-1 space-y-1 bg-white">
                            <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                                Analytics
                            </p>
                            <ul>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="aperture-outline"
                                        role="img"
                                        aria-label="aperture outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="trending-up-outline"
                                        role="img"
                                        aria-label="trending up outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">
                                            Performance
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                                Content
                            </p>
                            <ul>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="newspaper-outline"
                                        role="img"
                                        aria-label="newspaper outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">Guides</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="sync-outline"
                                        role="img"
                                        aria-label="sync outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">Hotspots</span>
                                        <span className="inline-flex ml-auto items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500">
                                            25
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="shield-checkmark-outline"
                                        role="img"
                                        aria-label="shield checkmark outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">Checklist</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                        href="#"
                                    >
                                        {/* <ion-icon
                                        className="w-4 h-4 md hydrated"
                                        name="thumbs-up-outline"
                                        role="img"
                                        aria-label="thumbs up outline"
                                    ></ion-icon> */}
                                        <span className="ml-4">TLD</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-shrink-0 p-4 px-4 bg-gray-50">
                        <div className="relative inline-flex items-center w-full">
                            <button className="inline-flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span>
                                    <span className="flex-shrink-0 block group">
                                        <div className="flex items-center">
                                            <div>
                                                {/* <Image
                                                className="inline-block object-cover rounded-full h-9 w-9"
                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                                                alt=""
                                            /> */}
                                            </div>
                                            <div className="ml-3 text-left">
                                                <p className="text-sm font-medium text-gray-500 group-hover:text-blue-500">
                                                    Mike Vega
                                                </p>
                                                <p className="text-xs font-medium text-gray-500 group-hover:text-blue-500">
                                                    Pro user
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline w-5 h-5 ml-4 text-black transition-transform duration-200 transform rotate-0"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div className="absolute bottom-0 z-50 w-full mx-auto mt-2 origin-bottom-right bg-white rounded-xl">
                                <div className="px-2 py-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <ul>
                                        <li>
                                            <a
                                                className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                className="w-4 h-4 md hydrated"
                                                name="body-outline"
                                                role="img"
                                                aria-label="body outline"
                                            ></ion-icon> */}
                                                <span className="ml-4">
                                                    Account
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                className="w-4 h-4 md hydrated"
                                                name="person-circle-outline"
                                                role="img"
                                                aria-label="person circle outline"
                                            ></ion-icon> */}
                                                <span className="ml-4">
                                                    Profile
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

// ${
//     listItem[0].toLowerCase() +
//     listItem.slice(1)
// } /
