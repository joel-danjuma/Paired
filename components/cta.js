import { Card } from "@nextui-org/react"
export default function Cta() {
    return (
        <div className="p-4">
            <Card className="flex flex-row items-center justify-between max-w-[1440px] gap-5 mx-auto dark:bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-gray-900 dark:text-black text-orange-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl">
                        Ready to Find your next Roommate?
                    </h2>
                    <p className="mt-2 font-medium text-opacity-90 lg:text-xl">
                        Connect with Renters Accross the Nation
                    </p>
                </div>
                <div className="flex-shrink-0 w-full text-center lg:w-auto">
                    <a
                        href="https://github.com/web3templates"
                        target="_blank"
                        rel="noopener"
                        className="inline-block py-3 mx-auto text-lg font-medium text-center dark:bg-orange-50  bg-slate-200 dark:text-black text-orange-500 hover:bg-orange-200 rounded-md px-7 lg:px-10 lg:py-5 "
                    >
                        Get Started Now
                    </a>
                </div>
            </Card>
        </div>
    )
}
