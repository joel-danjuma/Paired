import img from "../public/images/features.svg"
import Image from "next/image"

const listItems = [
    {
        title: `Students`,
        description: `Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum
    excepteur cillum consequat consectetur duis magna qui eu consequat occaecat.
    Deserunt nisi sit.`,
    },
    {
        title: `Corp Members`,
        description: `Pariatur consectetur laboris exercitation duis laboris.
    Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
    tempor tempor.`,
    },
    {
        title: `Young Proffesionals`,
        description: `Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
    dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
    Adipisicing.`,
    },
]

const ListSection = () => (
    <section className={`lg:py-10 lg:pt-0 pt-10 overflow-hidden z-10`}>
        <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`}>
            <div className={`mb-12 text-center space-y-4`}>
                <h2
                    className={`text-base text-orange-600 font-semibold tracking-wide uppercase`}
                >
                    Discover Your Roommate Match
                </h2>
                <p
                    className={`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}
                >
                    Find The Best Shared Flats In The Nation
                </p>
            </div>
            <div className={`flex flex-wrap -mx-8 items-center`}>
                <div className={`w-full lg:w-1/2 px-8`}>
                    <div
                        className={`lg:mb-12 mb-0 pb-12 lg:pb-0 mt-12 lg:mt-0 mx-6 lg:mx-0`}
                    >
                        <Image
                            src={img}
                            alt="feature-img"
                            width={521}
                            height={482}
                        ></Image>
                    </div>
                </div>
                <div className={`w-full lg:w-1/2 px-8`}>
                    <ul className={`space-y-12`}>
                        {listItems.map((item, index) => (
                            <li className={`flex -mx-4`} key={item.title}>
                                <div className={`px-4`}>
                                    <span
                                        className={`flex w-16 h-16 mx-auto items-center
                    justify-center text-2xl font-bold rounded-full
                    bg-orange-50 text-orange-500`}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                                <div className={`px-4`}>
                                    <h3
                                        className={`my-4 text-xl font-semibold`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`text-gray-500 leading-loose`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default ListSection
