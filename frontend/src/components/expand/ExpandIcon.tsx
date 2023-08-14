export interface Sx extends React.CSSProperties {
  strokeWidth?: number;
}
type SxPropType = {
  sx?: Sx;
};

function ExpandIcon({ sx }: SxPropType) {
  const width = sx?.strokeWidth;
  const strokeWidth = width && typeof width === "number" && width <= 0.5 ? width : 0;
  const stroke = sx?.stroke ? sx.stroke : strokeWidth ? sx?.fill : "";
  const style = {
    stroke: stroke,
    strokeWidth: `${strokeWidth}`,
    display: "inline",
    ...sx,
  };
  return (
    <svg
      width="5.010025mm"
      height="5.010025mm"
      viewBox="0 0 5.010025 5.010025"
      version="1.1"
      style={{
        width: sx?.width,
        position: "absolute",
        left: sx?.left,
        right: sx?.right,
        top: sx?.top,
        bottom: sx?.bottom,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <g style={{ display: "inline" }} transform="translate(-128.14257,-211.21656)">
        <path
          style={style}
          d="m 130.70898,211.34375 h 2.31641 v 2.32617 H 132.75 v -1.85351 l -1.65234,1.65039 
          -0.19532,-0.19532 1.65039,-1.65234 h -1.84375 z m -2.43945,2.42969 h 0.27539 v 1.85351 
          l 1.6582,-1.65625 0.19532,0.19532 -1.65625,1.6582 h 1.85742 v 0.27539 h -2.33008 z"
        />
      </g>
    </svg>
  );
}

export default ExpandIcon;
