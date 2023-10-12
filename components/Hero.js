import React from "react"
import Button from "./button"
import Image from "next/image"
import img from "@/public/images/hero.svg"
import img2 from "@/public/images/hero2.svg"

const Hero = () => {
    return (
        <section className="w-full h-full lg:mb-32">
            <div className="w-full flex flex-col justify-center items-center lg:space-y-4 space-y-2 p-2 relative">
                <h1 className="head_text lg:text-6xl text-lg  text-center ">
                    Discover & Share Ads
                    <br />
                    <span className="orange_gradient lg:text-8xl 4xl text-center bg-clip-text text-transparent">
                        Find the Perfect Room and Roommate
                    </span>
                </h1>
                <div className="mt-5">
                    <p className="desc">
                        Need to Connect with Roommates accross the Nation?
                    </p>
                    <p className="desc">
                        Looking for amazing shared flats in Nigeria ?
                    </p>

                    <p className="desc">Sign Up today and get paired !!!</p>
                </div>
                <div
                    className={`pt-5 flex justify-center items-center w-full mx-auto`}
                >
                    <Button primary>Get started</Button>
                    <span className="mx-2">or</span>
                    <Button>Contact us</Button>
                </div>
                <Image
                    src={img}
                    alt="hero-img-1"
                    width={421}
                    height={382}
                    className="absolute left-4 -bottom-40 lg:flex hidden"
                ></Image>
                <Image
                    src={img2}
                    alt="hero-img-2"
                    width={421}
                    height={382}
                    className="absolute right-4 -bottom-40 lg:flex hidden"
                ></Image>

                {/* <div className="w-full relative lg:flex hidden pt-40">
                    <Image
                        src={featureImg}
                        alt="hero-img-1"
                        width={421}
                        height={382}
                        className="absolute left-4 bottom-0"
                    ></Image>
                    <Image
                        src={featureImg2}
                        alt="hero-img-2"
                        width={421}
                        height={382}
                        className="absolute right-4 bottom-0"
                    ></Image>
                </div> */}
            </div>
        </section>
    )
}

export default Hero
