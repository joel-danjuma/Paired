import { Button, Card, CardBody } from "@nextui-org/react"
import img from "@/public/images/heroImg1.jpg"
import Image from "next/image"

const array = [1, 2, 3, 4, 5, 6]

const RecentlyAdded = () => {
    return (
        <section className="flex-col max-w-[1440px] justify-between p-4 space-y-8 mt-4 ">
            <div className="w-full items-center flex">
                <h2 className="font-bold lg:text-[32px] md:text-[24px] text-[20px]">
                    Recently Added
                </h2>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 w-full h-[30%] gap-4">
                {array.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            className="flex flex-row lg:row-span-2 lg:col-span-2 md:row-span-1 md:col-span-1 row-span-full col-span-full"
                        >
                            <Card className="w-full h-full">
                                <Image src={img} alt="img" fill></Image>
                            </Card>
                            <CardBody className="flex-col">
                                <p></p>
                                <>
                                    <span>10 Bedroom</span>
                                    <span>2000 sqf</span>
                                    <span>{item} garages</span>
                                </>
                                <div className="w-full flex-row justify-between">
                                    <p>Posted By Joel</p>
                                    <span>
                                        {" "}
                                        <Button>$80,000</Button>
                                    </span>
                                </div>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default RecentlyAdded
