"use client"
import Image from "next/image"
import heroBg from "@/public/images/hero-bg.jpg"
import heroImg1 from "@/public/images/heroImg1.jpg"
import heroImg2 from "@/public/images/heroImg2.jpg"
import heroImg3 from "@/public/images/heroImg3.jpg"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"
import HeroSeacrh from "./heroSearch"

const features = [
    {
        headline: "30K +",
        subtitle: "Properties Available",
        image: heroImg1,
    },
    {
        headline: "300 + ",
        subtitle: "Daily Rentals",
        image: heroImg2,
    },
    {
        headline: "300 + ",
        subtitle: "Locations and Counting ...",
        image: heroImg3,
    },
]

const Hero = () => {
    return (
        <section>
            <div className="flex-col h-[100dvh] max-w-[1440px] justify-between p-4 space-y-8">
                <div className={`w-full h-[60%] rounded-xl`}>
                    <Card className="w-full h-full relative">
                        <div className="text-black max-w-[640px] flex justify-center items-start h-full space-y-4 p-2 ">
                            <h1 className="lg:text-[52px] md:text-[48px] text-[40px] text-start z-10 ">
                                Discover Your Perfect Room & Roommate Today
                            </h1>
                        </div>

                        <div className="w-full h-full absolute top-0 left-0 right-0 bg-white bg-opacity-70">
                            <Image
                                src={heroBg}
                                alt="img"
                                // width={heroBg.width}
                                // height={heroBg.height}
                                fill
                            ></Image>
                        </div>
                        <HeroSeacrh />
                    </Card>
                </div>

                <div className="w-full items-center flex">
                    <h2 className="font-bold lg:text-[32px] md:text-[24px] text-[20px]">
                        Featured Properties
                    </h2>
                </div>

                <div className="w-full h-[25%] lg:gap-[32px] gap-[16px] grid grid-cols-6 grid-rows-6 grid-flow-row ">
                    {features.map((feature, i) => {
                        return (
                            <Card
                                key={i}
                                className={
                                    i === 0
                                        ? `w-full h-full text-black flex-col space-y-4 row-span-full lg:row-span-full lg:col-span-2 md:col-span-2 col-span-4 relative bg-[url('../public/images/heroImg1.jpg')] bg-fit bg-no-repeat`
                                        : i === 1
                                        ? `w-full h-full text-black flex-col space-y-4 col-span-2 row-span-4 lg:row-span-full lg:col-span-2 relative md:col-span-2 md:row-span-full  bg-[url('../public/images/heroImg2.jpg')] bg-cover bg-no-repeat`
                                        : `w-full h-full text-black flex-col space-y-4 relative lg:row-span-full lg:col-span-2 md:col-span-2 md:row-span-full col-span-2 row-span-2 bg-[url('../public/images/heroImg3.jpg')] bg-cover bg-no-repeat`
                                }
                            >
                                <div>
                                    <div className="w-full h-full text-white p-4">
                                        <h3 className="font-bold lg:text-[32px] md:text-[24px] text-[20px] z-10  ">
                                            {feature.headline}
                                        </h3>
                                        <p className="lg:text-[20px] md:text-[12px] text-[8px] text-justify z-10 ">
                                            {feature.subtitle}
                                        </p>
                                    </div>

                                    {/* <Image
                                        className=""
                                        src={feature.image}
                                        alt="img"
                                        fill
                                    ></Image> */}
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero
