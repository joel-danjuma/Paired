import { Button, Card, CardBody } from "@nextui-org/react"
import img from "../public/images/heroImg1.jpg"
import Image from "next/image"
import PageTitle from "./pageTitle"

const array = [1, 2, 3, 4]

const RecentlyAdded = () => {
    return (
        <section className="flex-col max-w-[1440px] p-4 pt-0">
            <PageTitle>Newest Rooms</PageTitle>

            <div className="grid lg:grid-cols-4 grid-rows-2 grid-cols-2 grid-flow-row w-full h-[30%] gap-4">
                {array.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            className="flex flex-row lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2"
                        >
                            <Card className="w-full h-full rounded-r-none">
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
            <PageTitle>Newest Roommates</PageTitle>
            <div className="grid lg:grid-cols-4  grid-rows-2 grid-cols-2 grid-flow-row w-full h-[30%] gap-4">
                {array.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            className="flex flex-row lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2"
                        >
                            <Card className="w-full h-full rounded-r-none">
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
