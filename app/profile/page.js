import {
    UserProfile,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/nextjs"

const profile = () => {
    return (
        <section className="flex justify-center">
            <SignedIn>
                <UserProfile />
            </SignedIn>
            <SignedOut afters>
                <RedirectToSignIn />
                {/* Log In to YOur Profile */}
            </SignedOut>
        </section>
    )
}

export default profile
