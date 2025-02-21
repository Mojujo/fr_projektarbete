import type { Route } from "./+types/about";
import { CustomHeader } from "./components/CustomHeader";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About page" },
        { name: "description", content: "Welcome to the about page" },
    ];
}

export default function About() {
    return (
        <>
            <CustomHeader />
            <main>
                <section className="chill-guy">
                    <h1 className="chill-text">Im just a really chill guy</h1>
                    <img className="chill-picture" src="pictures/chillguy-large.png" alt="really large chill guy" />
                </section>
            </main>
        </>
    )
}