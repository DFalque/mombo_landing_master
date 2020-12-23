import * as React from "react"
function SvgApp(props) {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 351 719"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <pattern
        id="app_svg__a"
        height={1}
        patternContentUnits="objectBoundingBox"
        width={1}
      >
        <image
          height={2000}
          transform="matrix(.00114 0 0 .00055 -.79 -.082)"
          width={2240}
        />
      </pattern>
      <path d="M0 0h351v719H0z" fill="url(#app_svg__a)" />
    </svg>
  )
}
export default SvgApp