const NotFound = () => {
    return (
        <>
            <main className="flex items-center justify-center h-screen daek:bg-black light:bg-white">
                <div className="px-4 py-16 mx-auto text-center lg:px-8 lg:py-48 max-w-7xl sm:px-6 sm:py-24">
                    <div className="justify-center w-full text-center lg:p-10 max-auto">
                        <div className="justify-center w-full mx-auto">
                            <p className="text-5xl tracking-tight daek:text-white light:text-dark  lg:text-9xl">
                                404
                            </p>
                            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
                                Please check the URL in the address bar and try
                                again.
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10">
                            <a
                                className="items-center justify-center w-full px-6 py-2.5 text-center dark:text-white light:text-dark duration-200 light:bg-black dark:bg-white border-2 dark:border-black light:border-white rounded-full nline-flex hover:bg-transparent focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                href="#"
                            >
                                Button
                            </a>
                            <a
                                className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900"
                                href="#"
                            >
                                <span> Learn more </span>
                                &nbsp; →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFound
