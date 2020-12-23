import * as React from "react"

function SvgCompass(props) {
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
        d="M24 4a20 20 0 100 40 20 20 0 000-40zm2 35.86V38a2 2 0 00-4 0v1.86A16 16 0 018.14 26H10a2 2 0 000-4H8.14A16 16 0 0122 8.14V10a2 2 0 004 0V8.14A16 16 0 0139.86 22H38a2 2 0 000 4h1.86A16 16 0 0126 39.86zm4.28-24.76l-10 4.24a2 2 0 00-1.04 1.04l-4.24 10a2 2 0 00.42 2.2 2 2 0 001.4.6c.277 0 .55-.061.8-.18l10-4.24a2 2 0 001.04-1.04l4.24-10a2 2 0 00-2.62-2.62zM25.3 25.3l-4.56 2 2-4.56 4.56-2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgCompass
