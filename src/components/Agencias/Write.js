import * as React from "react"

function SvgWrite(props) {
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
        d="M42 24a2 2 0 00-2 2v12a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2h12a2 2 0 000-4H10a6 6 0 00-6 6v28a6 6 0 006 6h28a6 6 0 006-6V26a2 2 0 00-2-2zm-30 1.52V34a2 2 0 002 2h8.48a2 2 0 001.42-.58l13.84-13.86L43.42 16a2 2 0 000-2.84l-8.48-8.58a2 2 0 00-2.84 0l-5.64 5.66L12.58 24.1a1.999 1.999 0 00-.58 1.42zm21.52-16.7l5.66 5.66-2.84 2.84-5.66-5.66zM16 26.34l11.86-11.86 5.66 5.66L21.66 32H16z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgWrite
