"use client"
// import Hero from "@/components/hero"
import Hero from "../components/new-hero"
// import ListSection from "@/components/list-section"
// import Video from "@/components/video"
// import SectionTitle from "@/components/section-title"
// import Testimonials from "@/components/testimonials"
// import Nav from "../components/nav"
import Cta from "../components/cta"
import Footer from "../components/footer"
import RecentlyAdded from "../components/recentlyAdded"
// import Waitlist from "../components/waitlist"

// import Nav from "@/components/Nav"

export default function Home() {
    return (
        <section>
            {/* <Nav /> */}
            <Hero />
            <RecentlyAdded />
            <Cta />
            <Footer />

            {/* <Waitlist /> */}
        </section>
    )
}

// <section className="z-10">
//     <Hero />
//     <SectionTitle pretitle="Watch a video" title="See how Paired works">
//         Looking for the ideal roommate or the best room for your budget?
//         Look no further! Our mission is to simplify your roommate and
//         room search experience.
//     </SectionTitle>
//     <Video />
//     <ListSection />
//     <SectionTitle
//         pretitle="Testimonials"
//         title="See what sets us apart"
//     >
//         Hear from other renters how Paired has simplified their room and
//         roommate search experience
//     </SectionTitle>
//     <Testimonials />
//     <Cta />
//     <Footer />
// </section>
