import { TConvertedSvgJsxProps } from "@/types/utils.types";

function YoutubeFillIcon({ fill, height, width }: TConvertedSvgJsxProps) {
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
          d="M2321 5110 c-868 -84 -1644 -610 -2037 -1382 -139 -273 -221 -536
-266 -853 -20 -140 -17 -504 6 -660 39 -278 121 -541 247 -794 249 -502 647
-900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579 482 771 788 74 116
184 342 234 478 51 138 110 376 131 531 23 157 26 521 6 660 -59 415 -191 769
-410 1099 -92 140 -185 254 -315 385 -399 403 -895 653 -1462 737 -122 18
-466 26 -594 14z m1210 -1606 c187 -55 325 -202 364 -389 21 -102 21 -1008 0
-1110 -39 -187 -178 -334 -364 -389 -48 -14 -161 -16 -971 -16 -810 0 -923 2
-971 16 -187 55 -325 202 -364 389 -21 102 -21 1008 0 1110 39 183 162 320
345 382 l65 22 921 1 c814 0 927 -2 975 -16z"
        />
        <path
          d="M2200 2561 c0 -226 2 -411 5 -411 10 0 705 405 705 410 -1 5 -681
402 -700 408 -7 2 -10 -142 -10 -407z"
        />
      </g>
    </svg>
  );
}

export default YoutubeFillIcon;
