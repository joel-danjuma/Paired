"use client"
import Image from "next/image"
import heroBg from "@/public/images/hero-bg.jpg"
import heroImg1 from "@/public/images/heroImg1.jpg"
import heroImg2 from "@/public/images/heroImg2.jpg"
import heroImg3 from "@/public/images/heroImg3.jpg"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"

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
            <div className="flex-col h-[100dvh] max-w-[1440px] justify-center p-4 lg:space-y-8 space-y-4 mt-4 ">
                <div className={`w-full h-[60%] rounded-xl`}>
                    <Card className="w-full h-full relative">
                        <div className="text-white max-w-[640px] flex justify-center items-start h-full space-y-4 p-2 ">
                            <h1 className="lg:text-[52px] md:text-[48px] text-[40px] text-start z-10 ">
                                Discover Your Perfect Room & Roommate Today
                            </h1>
                        </div>
                        <Image src={heroBg} alt="img" fill></Image>
                        <div className="w-full absolute bottom-8 flex justify-center">
                            <Card className="lg:max-w-[1000px] md:max-w-[640px] max-w-[320px] h-[100px] container items-center justify-center">
                                Hello
                            </Card>
                        </div>
                    </Card>
                </div>

                <div className="w-full h-[25%] lg:gap-[32px] gap-[16px] grid grid-cols-3 grid-rows-3 grid-flow-row ">
                    {features.map((feature, i) => {
                        return (
                            <Card
                                key={i}
                                className={
                                    i === 0
                                        ? `w-full h-full text-black flex-col space-y-4 row-span-full lg:row-span-full lg:col-span-1 md:col-span-1 col-span-2 relative`
                                        : i === 1
                                        ? `w-full h-full text-black flex-col space-y-4 col-span-1 row-span-2 lg:row-span-full relative md:col-span-1 md:row-span-full`
                                        : `w-full h-full text-black flex-col space-y-4 relative lg:row-span-full md:col-span-1 md:row-span-full`
                                }
                            >
                                <div>
                                    <div className="w-full h-full text-white z-10">
                                        <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[20px] z-10  ">
                                            {feature.headline}
                                        </h1>
                                        <p className="lg:text-[20px] md:text-[12px] text-[8px] text-justify z-10 ">
                                            {feature.subtitle}
                                        </p>
                                    </div>

                                    <Image
                                        src={feature.image}
                                        alt="img"
                                        fill
                                    ></Image>
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
