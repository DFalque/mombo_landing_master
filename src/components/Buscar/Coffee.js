import * as React from "react"

function SvgCoffee(props) {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 48 48"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M36 16h2a8 8 0 010 16h-2M4 16h32v18a8 8 0 01-8 8H12a8 8 0 01-8-8zM12 2v6M20 2v6M28 2v6" />
      </g>
    </svg>
  )
}

export default SvgCoffee
