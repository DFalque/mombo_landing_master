import * as React from "react"

function SvgClock(props) {
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
        d="M22 4a20 20 0 100 40 20 20 0 000-40zm0 36a16 16 0 110-32 16 16 0 010 32zm0-28a2 2 0 00-2 2v8.84l-4.2 2.42a2 2 0 001 3.74 2 2 0 001-.26l5.2-3 .18-.18.32-.26c.078-.099.145-.206.2-.32a1.78 1.78 0 00.16-.34 1.3 1.3 0 00.1-.4L24 24V14a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgClock
