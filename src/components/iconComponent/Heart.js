import * as React from "react";

const SvgHeart = ({ title, titleId, ...props }) => (
  <svg

    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.57 18.444zm-10-11.836a5.179 5.179 0 0 1 9.414-2.976.714.714 0 0 0 1.168 0 5.179 5.179 0 0 1 9.419 2.976c0 5.146-8.154 10.654-10 11.836C9.723 17.266 1.568 11.758 1.568 6.608zM16.391 0a6.618 6.618 0 0 0-4.822 2.093A6.608 6.608 0 0 0 .14 6.608c0 6.579 10.612 13.036 11.073 13.29.226.136.51.136.736 0 .439-.254 11.05-6.711 11.05-13.29A6.615 6.615 0 0 0 16.393 0z"
      fill="#E46F2A"
    />
  </svg>
);

export default SvgHeart;
