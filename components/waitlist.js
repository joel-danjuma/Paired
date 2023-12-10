import Image from "next/image"

const Waitlist = () => {
    return (
        <section className="relative flex items-center w-full bg-white md:h-screen">
            <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
                <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                        <div className="relative items-center gap-12 m-auto lg:inline-flex">
                            <div className="max-w-xl text-center lg:text-left">
                                <div>
                                    <div>
                                        <span className="inline-flex items-center text-3xl font-semibold tracking-tighter text-black">
                                            <span className="ml-2">Paired</span>
                                        </span>
                                    </div>
                                    <div className="py-6"></div>
                                    <span className="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10">
                                        <span className="text-xs text-teal-500">
                                            Instantly transform your home -
                                            Coming soon
                                        </span>
                                    </span>
                                    <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
                                        Interior design. In your pocket
                                    </p>
                                    <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                                        Forget trying to imagine what a style
                                        would look like in your home - see what
                                        could be, instantly.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
                                    <form>
                                        <div className="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">
                                            <div className="min-w-0 shrink w-60">
                                                <input
                                                    aria-label="Email address"
                                                    autoComplete="email"
                                                    className="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm"
                                                    placeholder="Email address"
                                                    required=""
                                                    type="email"
                                                />
                                            </div>
                                            <button
                                                className="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2"
                                                type="submit"
                                            >
                                                <span className="inline">
                                                    Join the waitlist
                                                </span>
                                            </button>
                                        </div>
                                        <p className="mt-3 text-slate-500">
                                            Get notified when we launch!
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                            <Image
                                alt="hero"
                                className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                                // fill
                                width={48}
                                height={48}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Waitlist
