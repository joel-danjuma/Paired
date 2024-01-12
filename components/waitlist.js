import cube from "@/public/images/cube.svg"
import Image from "next/image"
import Navbar from "@/app/dashboard/ui/navbar"
import Nav from "./nav"

export const Metadata = {
    title: "Paired: Find Compatible Roommates and Shared Flats - Roommate Search Service",
    description:
        "Discover ideal living spaces with Paired, the roommate and shared flats search service. Create profiles, explore roommate and room ads, and connect with compatible matches for a harmonious living experience.",
}

const feautures = [
    {
        title: "Smart Matching Algorithm",
        description:
            "Our advanced algorithm intelligently matches room seekers with compatible roommates and ideal living spaces based on preferences, interests, and lifestyle, ensuring a harmonious living experience.",
    },
    {
        title: "Customized Profiles",
        description:
            "Description: Created detailed profiles to showcase your personality, lifestyle, and preferences. Find the perfect roommate or room that aligns with your specific needs and interests.",
    },
    {
        title: "Verified Listings",
        description:
            "Rest assured with our vetted listings and verified users. All rooms and potential roommates undergo a verification process, guaranteeing a safe and trustworthy environment for your search.",
    },
    {
        title: "Seamless Communication",
        description:
            " Engage in hassle-free communication through our in-app messaging feature. Connect with potential roommates or landlords effortlessly to discuss details and arrange viewings.",
    },
    {
        title: "Neighborhood Insights",
        description:
            "Explore detailed neighborhood insights and information about the surroundings of listed rooms. Make informed decisions by understanding local amenities, transportation, and community ratings.",
    },

    {
        title: "Intuitive Interface",
        description:
            " Experience a user-friendly platform designed for easy navigation. Our sleek and intuitive interface simplifies your search, making finding a roommate or room a smooth process.",
    },
]

const benefits = [
    {
        title: "Effortless Roommate Matching",
        description:
            "Paired simplifies the process of finding compatible roommates, ensuring a stress-free experience in your shared living space. Create a profile, and let our smart algorithms connect you with the perfect match.",
    },
    {
        title: "Tailored Room and Flat Searches",
        description:
            "Enjoy personalized searches for your ideal living space. Paired allows you to filter through roommate and room ads based on your preferences, making it easy to discover shared flats that match your lifestyle and requirements.",
    },
    {
        title: "Seamless Connection with Matches",
        description:
            "Connect with potential roommates effortlessly using Paired. Our platform facilitates smooth communication, making it convenient for users to establish connections with compatible matches and embark on a harmonious shared living journey.",
    },
]

const Waitlist = () => {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Nav /> */}
            <section className="w-full h-full flex justify-center">
                <div className="h-full lg:p-10 p-8 max-w-7xl ">
                    <div className="text-center gap-2 relative">
                        {/* <Image
                            src={cube}
                            height={50}
                            width={50}
                            alt="img"
                            className="absolute grid place-items-center"
                        /> */}
                        <p className="text-4xl font-semibold leading-10 tracking-tighter text-gray-800 lg:text-7xl">
                            Find Your Perfect Match with Paired, <br />
                            <span className="text-blue-500 lg:block">
                                Your Ultimate Roommate and Room Search Companion
                            </span>
                        </p>
                        <p className="mt-4 text-base text-gray-500 ">
                            Discover Harmony in Shared Living Spaces <br />
                            <span className="lg:block">
                                {" "}
                                with Paireds Seamless Matchmaking
                            </span>
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 mt-10 md:flex-row">
                            <a
                                className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 md:w-auto"
                                href="/#features"
                            >
                                Learn more
                            </a>
                            <a
                                className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm text-blue-500 transition-all bg-white border border-gray-300 rounded-lg md:w-auto md:font-semibold hover:text-blue-400"
                                href="#cta"
                            >
                                Get Paired →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-mt-24" id="features">
                <div className="h-full px-8 py-4 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                            Discover Paired.
                        </h2>
                    </div>
                    <div className="grid gap-4 mt-12 md:grid-cols-3">
                        {feautures.map((feature, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50"
                            >
                                <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {feature.title}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="max-w-xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                                A quicker way to connect to renters.
                            </h2>
                            <p className="mt-4 text-base text-gray-500">
                                Reasons why we do what we do.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 mt-12">
                            {benefits.map((benefit, i) => (
                                <div key={i}>
                                    <p className="font-medium text-gray-900">
                                        {benefit.title}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta">
                <div className="h-full px-10 py-24 mx-auto  max-w-7xl">
                    <div className="p-8 text-center border lg:p-20 bg-gray-50 rounded-xl w-full">
                        <p className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-7xl">
                            We are about{" "}
                            <span className="md:block">to launch soon</span>
                        </p>
                        <p className="mt-4 text-base text-gray-500">
                            Be amongst the first set of users to experience our
                            service.
                            <span className="md:block">
                                Join the waitlist and get notified once we
                                launch! <br />
                                Get Paired.
                            </span>
                        </p>
                        <form className="max-w-sm mx-auto mt-8" action="">
                            <div className="flex flex-col gap-2 lg:flex-row">
                                <label className="sr-only" for="email-address">
                                    Email address
                                </label>
                                <input
                                    autocomplete="email"
                                    className="block w-full h-10 px-4 py-2 text-blue-500 placeholder-gray-300 duration-200 border border-gray-300 rounded-lg appearance-none bg-chalk focus:border-gray-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                                    id="email-address"
                                    name="email"
                                    placeholder="Enter your email"
                                    required=""
                                    type="email"
                                ></input>
                                <button
                                    className="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg shrink-0 hover:bg-blue-600"
                                    type="submit"
                                >
                                    Join the waitlist
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="pt-12 border-t border-gray-300 xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="text-black">
                            <div className="inline-flex items-center gap-3">
                                <p className="text-2xl font-bold uppercase">
                                    Paired
                                </p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 lg:w-4/5">
                                Discover Your Perfect Match and Ideal Living
                                Space with Paired <br />
                                Where Harmony Meets Home.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
                            <div>
                                <h3 className="text-black font-display">
                                    Information
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    <li>
                                        <a
                                            href="#_"
                                            className="text-sm text-gray-500 hover:text-black"
                                        >
                                            License
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-black font-display">
                                    Socials
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    <li>
                                        <a
                                            href="https://twitter.com/lexingtonthemes"
                                            className="text-sm text-gray-500 hover:text-black"
                                        >
                                            @getPaired
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/Mike_Andreuzza"
                                            className="text-sm text-gray-500 hover:text-black"
                                        >
                                            @Paired_Co
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between">
                        <p className="text-left">
                            <span className="mx-auto mt-2 text-sm text-gray-500 lg:mx-0">
                                © Biild.ltd @2023
                                <a
                                    className="text-blue-500 hover:text-blue-600"
                                    href="https://biild.vercel.app"
                                ></a>
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Waitlist
