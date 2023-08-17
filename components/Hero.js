import React from "react"
import Button from "./button"

const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center lg:space-y-4 space-y-2 lg:p-4 p-2">
            <h1 className="head_text lg:text-5xl text-lg  text-center ">
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
    )
}

export default Hero
