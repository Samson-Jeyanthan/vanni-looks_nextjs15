import { TConvertedSvgJsxProps } from "@/types/utils.types";

function FacebookFillIcon({ fill, height, width }: TConvertedSvgJsxProps) {
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
          d="M2345 5033 c-828 -72 -1558 -547 -1962 -1278 -327 -591 -396 -1317
-187 -1977 121 -380 324 -710 619 -1004 292 -290 636 -492 1035 -608 115 -33
298 -75 328 -76 9 0 12 185 12 890 l0 890 -280 0 -280 0 0 350 0 350 279 0
279 0 5 353 c5 383 12 446 71 602 103 272 327 453 648 522 111 24 424 24 628
-1 80 -9 155 -20 168 -23 l22 -5 0 -303 0 -303 -272 -4 c-245 -4 -280 -7 -338
-26 -109 -36 -178 -111 -214 -231 -13 -44 -16 -105 -16 -318 l0 -263 365 0
c362 0 365 0 365 -21 0 -11 -22 -164 -50 -339 -27 -175 -50 -324 -50 -329 0
-8 -79 -11 -245 -11 l-245 0 0 -890 c0 -734 2 -890 13 -890 8 0 70 15 139 34
395 109 766 321 1067 611 424 408 675 903 758 1495 25 185 23 500 -6 688 -82
541 -318 1009 -701 1393 -410 411 -896 647 -1470 713 -121 14 -373 19 -485 9z"
        />
      </g>
    </svg>
  );
}

export default FacebookFillIcon;
