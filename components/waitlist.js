import Image from "next/image"
import Nav from "./nav"

const Waitlist = () => {
    return (
        // <section className="relative flex items-center w-full bg-white md:h-screen">
        //     <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
        //         <div className="relative flex-col items-start m-auto align-middle">
        //             <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
        //                 <div className="relative items-center gap-12 m-auto lg:inline-flex">
        //                     <div className="max-w-xl text-center lg:text-left">
        //                         <div>
        //                             <div>
        //                                 <span className="inline-flex items-center text-3xl font-semibold tracking-tighter text-black">
        //                                     <span className="ml-2">Paired</span>
        //                                 </span>
        //                             </div>
        //                             <div className="py-6"></div>
        //                             <span className="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10">
        //                                 <span className="text-xs text-teal-500">
        //                                     Instantly transform your home -
        //                                     Coming soon
        //                                 </span>
        //                             </span>
        //                             <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
        //                                 Interior design. In your pocket
        //                             </p>
        //                             <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
        //                                 Forget trying to imagine what a style
        //                                 would look like in your home - see what
        //                                 could be, instantly.
        //                             </p>
        //                         </div>
        //                         <div className="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
        //                             <form>
        //                                 <div className="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">
        //                                     <div className="min-w-0 shrink w-60">
        //                                         <input
        //                                             aria-label="Email address"
        //                                             autoComplete="email"
        //                                             className="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm"
        //                                             placeholder="Email address"
        //                                             required=""
        //                                             type="email"
        //                                         />
        //                                     </div>
        //                                     <button
        //                                         className="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2"
        //                                         type="submit"
        //                                     >
        //                                         <span className="inline">
        //                                             Join the waitlist
        //                                         </span>
        //                                     </button>
        //                                 </div>
        //                                 <p className="mt-3 text-slate-500">
        //                                     Get notified when we launch!
        //                                 </p>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
        //                     <Image
        //                         alt="hero"
        //                         className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
        //                         src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
        //                         // fill
        //                         width={48}
        //                         height={48}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <>
            <section>
                <Nav />
                <div className="h-full px-8 py-24 mx-auto lg:py-28 md:px-12 lg:px-28 max-w-7xl">
                    <div className="text-center">
                        <p className="text-4xl font-semibold leading-relaxed tracking-tighter text-gray-800 lg:text-7xl">
                            Find Your Perfect Match with Paired, <br />
                            <span className="text-blue-500 lg:block">
                                Your Ultimate Roommate and Room Search Companion
                            </span>
                        </p>
                        <p className="mt-4 text-base text-gray-500">
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
                                href="#_"
                            >
                                Get Paired →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-mt-24" id="features">
                <div className="h-full px-8 py-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                            Discover Paired.
                        </h2>
                    </div>
                    <div className="grid gap-4 mt-12 md:grid-cols-3">
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                1
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    Rule of Attribution
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    You must give appropriate credit to the
                                    original creator of the work. This typically
                                    includes providing the name of the author or
                                    licensor, a link to the original work, and
                                    indicating if changes were made.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                2
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">
                                    No additional restrictions
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    You may not impose any additional legal
                                    terms or technological measures on the work
                                    that restrict the freedoms granted by the CC
                                    BY 3.0 License. This means you cant add
                                    extra conditions or restrictions beyond what
                                    the license allows.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                3
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    Share alike (SA) absence
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    The CC BY 3.0 License does not include a
                                    Share Alike (SA) provision. Unlike some
                                    other Creative Commons licenses, it does not
                                    require you to license any derivative works
                                    under the same terms. You can create
                                    adaptations or derivatives and license them
                                    differently if you choose.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                4
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    Commercial use allowed
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    You are allowed to use the licensed work for
                                    both non-commercial and commercial purposes.
                                    There are no restrictions on using CC BY 3.0
                                    licensed content for commercial gain.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                5
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    Modification Freedom
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    You can adapt, remix, transform, and build
                                    upon the licensed work. However, you must
                                    still give proper attribution to the
                                    original creator and make it clear if you
                                    have made any modifications.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                            <div className="flex items-center justify-center w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                                6
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    No warranty disclaimer
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    The license comes with no warranties. The
                                    licensor provides the work as is, and users
                                    must use it at their own risk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    {/* <div>
                        <Image/>
                    </div> */}
                    <div className="max-w-xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                                A quicker way for awareness.
                            </h2>
                            <p className="mt-4 text-base text-gray-500">
                                Reasons why Saasify exists.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 mt-12">
                            <div>
                                <p className="font-medium text-gray-900">
                                    ⏤ Building exceptional products requires
                                    collaboration
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Achieving excellence in software development
                                    necessitates a collaborative effort, and
                                    Sassify unites your team to refine the
                                    actual product delivered to users.
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    ⏤ Streamline iteration, minimize meetings
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Sassify streamlines the iterative process
                                    for SaaS creators and stakeholders, reducing
                                    the dependency on prolonged meetings and
                                    extensive review cycles.
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">
                                    ⏤ Seamlessly integrated with contemporary
                                    development practices
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Sassify seamlessly integrates with the
                                    contemporary development workflow
                                    characterized by ephemeral environments and
                                    rapid iteration cycles, enhancing your
                                    development efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="p-8 text-center border lg:p-20 bg-gray-50 rounded-xl">
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
                                Paired.
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
                                    Saasify
                                </p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 lg:w-4/5">
                                Windstatic, basic and sturdy themes under the
                                creative commons license.
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
                                            @lexingtonthemes
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/Mike_Andreuzza"
                                            className="text-sm text-gray-500 hover:text-black"
                                        >
                                            @Mike_Andreuzza
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
