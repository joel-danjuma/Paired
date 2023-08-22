import React from "react"
import Button from "./button"

const Hero = () => {
    return (
        <section className="w-full h-full">
            <div className="lg:mt-10 w-full flex flex-col justify-center items-center lg:space-y-4 space-y-2 p-2">
                <h1 className="head_text lg:text-6xl text-lg  text-center ">
                    Discover & Share Ads
                    <br />
                    <span className="orange_gradient lg:text-8xl 4xl text-center">
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
            </div>
        </section>
    )
}

export default Hero
