import * as React from "react";

const SvgSirdgela = ({ title, isFavorite, titleId, ...props }) => (
  <svg
    viewBox="0 0 340 291"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className={isFavorite ? "favorite" : ""}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
   
  
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M1.569 6.608c0 5.15 8.155 10.658 10.001 11.836 1.847-1.182 10.001-6.69 10.001-11.836a5.18 5.18 0 0 0-9.419-2.976.714.714 0 0 1-1.168 0 5.178 5.178 0 0 0-9.415 2.976Z" 
        fill= "none"
        stroke= "#E46F2A"
        strokeWidth= ".94px"
      transform="translate(-17.2 -15.067) scale(16.1657)"
    />
  </svg>
);

export default SvgSirdgela;
