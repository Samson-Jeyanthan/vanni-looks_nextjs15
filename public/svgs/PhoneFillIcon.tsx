import { TConvertedSvgJsxProps } from "@/types/utils.types";

function PhoneFillIcon({ fill, height, width }: TConvertedSvgJsxProps) {
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
          d="M1169 4946 c-160 -61 -458 -355 -735 -723 -110 -147 -196 -279 -241
-373 l-37 -74 12 -101 c92 -795 754 -1834 1642 -2576 627 -523 1303 -862 1860
-930 92 -12 97 -11 155 12 236 97 794 545 1005 808 134 167 154 248 92 374
-42 86 -87 125 -325 285 -483 326 -829 502 -984 502 -115 0 -180 -48 -368
-269 -66 -77 -126 -141 -133 -141 -22 0 -184 66 -281 114 -343 173 -631 427
-843 746 -79 118 -191 339 -227 446 l-24 71 39 35 c21 19 86 75 144 125 179
152 221 211 228 321 3 46 -1 80 -18 133 -31 95 -139 315 -240 484 -114 192
-360 562 -416 624 -81 90 -221 139 -305 107z"
        />
      </g>
    </svg>
  );
}

export default PhoneFillIcon;
