export interface Sx extends React.CSSProperties {
  strokeWidth?: number;
}
type SxPropType = {
  sx?: Sx;
};

function AvatarIcon({ sx }: SxPropType) {
  const width = sx?.strokeWidth;
  const strokeWidth = width && typeof width === "number" && width <= 0.5 ? width : 0;
  const stroke = sx?.stroke ? sx.stroke : strokeWidth ? sx?.fill : "";
  const style = {
    stroke: stroke,
    strokeWidth: `${strokeWidth}`,
    display: "inline",
    strokeLineJoin: "bevel",

    ...sx,
  };

  return (
    <svg
      width="5.8668289mm"
      height="5.6037903mm"
      viewBox="0 0 5.8668289 5.6037903"
      version="1.1"
      id="svg5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: sx?.width,
        position: "absolute",
        left: sx?.left,
        right: sx?.right,
        top: sx?.top,
        bottom: sx?.bottom,
      }}
    >
      <defs />
      <g transform="translate(-78.55076,-101.19383)">
        <g style={{ display: "inline" }} transform="translate(45.954818,113.14329)">
          <path
            style={style}
            d="m 35.529097,-11.949467 c -0.978655,0 -1.773018,0.79488 -1.773018,1.773535 0,0.6835956 0.387619,1.2775815 0.95498,1.5735478 -1.182619,0.075245 
         -2.115116,1.0547573 -2.115116,2.2567098 h 0.212907 c 0,-1.1364331 0.912016,-2.0489705 2.048454,-2.0489706 h 1.344104 c 1.136434,0 2.048453,0.9125376 
         2.048453,2.0489706 h 0.212907 c 0,-1.2017786 -0.932225,-2.1812139 -2.114599,-2.2567098 0.567869,-0.2959875 0.956531,-0.8900006 0.95653,-1.5735478 
         0,-0.978655 -0.796948,-1.773535 -1.775602,-1.773535 z m 0,0.212907 c 0.863108,0 1.560628,0.697519 1.560628,1.560628 0,0.8631089 -0.697519,1.5606287 
         -1.560628,1.5606287 -0.863109,0 -1.560111,-0.6975198 -1.560111,-1.5606287 0,-0.863109 0.697002,-1.560628 1.560111,-1.560628 z"
          />
        </g>
      </g>
    </svg>
  );
}

export default AvatarIcon;
