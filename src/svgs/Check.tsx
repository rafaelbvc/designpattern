import type { IAirplaneProps } from "../interfaces/svgsInterface";

const Check = ({
  svgWidth = "100px",
  svgHeight = "100px",
  svgFillColor = "#ffffff",
}: IAirplaneProps) => {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12L10.5 13.5V13.5C10.7761 13.7761 11.2239 13.7761 11.5 13.5V13.5L15 10"
        stroke={svgFillColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Check;
