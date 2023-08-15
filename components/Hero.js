import React from "react"

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
                <p className="desc">Looking for amazing rooms in Nigeria ?</p>
                <p className="desc">
                    Need to Connect with Roommates accross the Nation?
                </p>
                <p className="desc">Sign Up today and get paired !!!</p>
            </div>
            <div className="flex flex-row justify-center items-center w-full space-x-4 pt-5">
                <button className="orange_btn p-4 text-xl">Sign Up Now</button>
            </div>
        </div>
    )
}

export default Hero
