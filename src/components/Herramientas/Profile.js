import * as React from "react"

function SvgProfile(props) {
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
        <path d="M40 42v-4a8 8 0 00-8-8H16a8 8 0 00-8 8v4M24 22a8 8 0 100-16 8 8 0 000 16z" />
      </g>
    </svg>
  )
}

export default SvgProfile
