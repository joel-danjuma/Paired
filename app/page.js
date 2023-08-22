"use client"
import Hero from "@/components/Hero"
import ListSection from "@/components/list-section"
// import Nav from "@/components/Nav"
export default function Home() {
    return (
        <section className="z-10">
            {/* <Nav /> */}
            <Hero />
            <ListSection />
        </section>
    )
}
