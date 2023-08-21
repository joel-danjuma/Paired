import { UserProfile, SignedIn } from "@clerk/nextjs"
import { Fragment } from "react"
const profile = () => {
    return (
        <Fragment>
            <SignedIn>
                <UserProfile routing="path" path="/user" />
            </SignedIn>
        </Fragment>
    )
}

export default profile
