import * as React from "react"

function SvgDollarSign(props) {
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
        <path d="M24 2v44M34 10H19a7 7 0 100 14h10a7 7 0 110 14H12" />
      </g>
    </svg>
  )
}

export default SvgDollarSign
