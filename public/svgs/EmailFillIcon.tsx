import { TConvertedSvgJsxProps } from "@/types/utils.types";

function EmailFillIcon({ fill, height, width }: TConvertedSvgJsxProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24px"}
      height={height || "24px"}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M665 4439 c-88 -10 -194 -46 -282 -94 -87 -49 -217 -178 -271 -270
-52 -90 -91 -199 -77 -220 9 -12 2488 -1529 2521 -1542 13 -5 2514 1520 2529
1542 7 11 3 35 -13 83 -37 108 -97 199 -191 292 -71 71 -102 94 -181 132 -186
91 18 82 -2095 84 -1029 1 -1902 -2 -1940 -7z"
        />
        <path
          d="M0 2368 c0 -1084 0 -1071 50 -1207 85 -227 296 -411 539 -468 72 -17
183 -18 1971 -18 1788 0 1899 1 1971 18 249 58 461 246 543 484 46 131 47 144
44 1200 l-3 1002 -1190 -725 c-655 -399 -1211 -736 -1237 -750 -68 -35 -149
-41 -218 -17 -31 11 -586 343 -1255 752 -660 404 -1203 735 -1207 738 -5 2 -8
-452 -8 -1009z"
        />
      </g>
    </svg>
  );
}

export default EmailFillIcon;
