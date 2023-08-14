export interface Sx extends React.CSSProperties {
  strokeWidth?: number;
}
type SxPropType = {
  sx?: Sx;
};

function MenuIcon({ sx }: SxPropType) {
  const width = sx?.strokeWidth;
  const strokeWidth = width && typeof width === "number" && width <= 0.5 ? width : 0;
  const stroke = sx?.stroke ? sx.stroke : strokeWidth ? sx?.fill : "#333333";
  const style = {
    stroke: stroke,
    strokeWidth: `${strokeWidth}`,
    display: "inline",
    strokeLineJoin: "bevel",

    ...sx,
  };

  return (
    <svg
      width="2mm"
      height="3mm"
      viewBox="0 -0.1 1 2"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: sx?.width,
        position: "absolute",
        left: sx?.left,
        right: sx?.right,
        top: sx?.top,
        bottom: sx?.bottom,
        transform: `scale(${sx?.scale})`,
      }}
    >
      <defs />
      <g transform="translate(-158.60775,-121.54287)">
        <g style={{ display: "inline" }} transform="translate(45.954818,113.14329)">
          <g
            transform="translate(1.5546324,-0.05446887)"
            style={{ fill: "#000000", strokeWidth: 0, strokeDasharray: "none" }}
          >
            <circle
              style={{
                fill: "#000000",
                strokeLinejoin: "miter",
                strokeMiterlimit: 4.2,
                strokeDasharray: "none",
                ...style,
              }}
              cx="111.30668"
              cy="8.6624374"
              r="0.20838054"
            />
            <circle
              style={{
                fill: "#000000",
                strokeLinejoin: "miter",
                strokeMiterlimit: 4.2,
                strokeDasharray: "none",
                ...style,
              }}
              cx="111.30668"
              cy="9.228858"
              r="0.20838054"
            />
            <circle
              style={{
                fill: "#000000",
                strokeLinejoin: "miter",
                strokeMiterlimit: 4.2,
                strokeDasharray: "none",
                ...style,
              }}
              cx="111.30668"
              cy="9.7952785"
              r="0.20838054"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MenuIcon;
