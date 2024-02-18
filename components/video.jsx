import { useState } from "react"
import Container from "./container"

const VideoSection = () => {
    const [playVideo, setPlayVideo] = useState(true)
    return (
        <section
            className={`container mx-auto aspect-video lg:p-0 p-4 bg-gradient-to-b from-gray-50 to-white shadow-inner`}
        >
            <div className="max-w-7xl overflow-hidden rounded-2xl h-full bg-gray-900 dark:bg-gradient-to-tr from-amber-300 via-orange-400 to-yellow-500 ">
                <div
                    onClick={() => setPlayVideo(!playVideo)}
                    className="relative cursor-pointer aspect-w-16 aspect-h-9 h-full"
                >
                    {!playVideo && (
                        <button className="absolute inset-auto dark:text-white text-orange-500 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-28 h-28"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="sr-only">Play Video</span>
                        </button>
                    )}
                    {playVideo && (
                        <>
                            <button
                                className="absolute top-4 right-4 rounded-full black_btn"
                                onClick={() => setPlayVideo(!playVideo)}
                            >
                                X
                            </button>
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
                                title="YouTube video player"
                                style={{ border: "none" }}
                                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default VideoSection
