import type { JSX } from "react";

export default function Hamburger({ fillColor }: { fillColor: string }): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className=""
            x="0"
            y="0"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill={fillColor}
        >
            <path d="M 21 6 H 3 V 5 h 18 v 1 Z m 0 5 H 3 v 1 h 18 v -1 Z m 0 6 H 3 v 1 h 18 v -1 Z" />
        </svg>
    )
}