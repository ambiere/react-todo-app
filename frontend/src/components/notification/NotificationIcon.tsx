function NotificationIcon({ sx }: SxPropType) {
  const width = sx?.strokeWidth;
  const strokeWidth = width && typeof width === "number" && width <= 0.5 ? width : 0;
  const stroke = sx?.stroke ? sx.stroke : strokeWidth ? sx?.fill : "";
  const fill = sx?.fill != "none" ? sx?.fill : "white";
  const style = {
    stroke: stroke,
    strokeWidth: `${strokeWidth}`,
    display: "inline",
    strokeLineJoin: "bevel",
    ...sx,
  };

  return (
    <svg
      width="4.9477577mm"
      height="6.0534821mm"
      viewBox="0 0 4.9477577 6.0534821"
      version="1.1"
      id="svg5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: sx?.width,
        position: sx?.position ? sx.position : "absolute",
        left: sx?.left,
        right: sx?.right,
        top: sx?.top,
        bottom: sx?.bottom,
      }}
    >
      <defs />
      <g transform="translate(-28.726746,-90.089696)">
        <g id="g2043">
          <path
            style={style}
            d="m 28.786606,95.033962 c 0,0 0.786439,-0.399034 0.753462,-2.83354 -0.02802,-2.068263 1.660383,-1.977129 1.660383,-1.977129 0,0 1.683735,-0.122409 1.660382,1.977129 -0.02708,2.434579 0.753462,2.83354 0.753462,2.83354 H 31.20045 Z"
            className="notification-icon"
          />
          <path
            style={{ ...style, stroke: "none", fill: fill }}
            className="notification-icon2"
            d="m 32.128721,95.463873 c 0,0.375168 -0.415522,0.679302 -0.928095,0.679302 -0.512573,0 -0.928096,-0.304134 -0.928096,-0.679302"
          />
        </g>
      </g>
    </svg>
  );
}

export default NotificationIcon;
