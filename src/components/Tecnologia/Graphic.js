import * as React from "react"

function SvgGraphic(props) {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 48 48"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 32a3 3 0 003-3c.01-.1.01-.2 0-.3l5.58-5.58h.92l3.22 3.22v.16a3 3 0 006 0v-.16L40 19a3 3 0 10-3-3c-.01.1-.01.2 0 .3l-7.22 7.22h-.32L26 20a3 3 0 00-6 0l-6 6a3 3 0 000 6zm27 8H7V6a2 2 0 10-4 0v36a2 2 0 002 2h36a2 2 0 000-4z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGraphic
