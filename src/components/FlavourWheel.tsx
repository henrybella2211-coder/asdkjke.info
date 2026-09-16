type Segment = {
  label: string;
  colour: string;
};

const segments: Segment[] = [
  { label: "Fruit", colour: "#E8734A" },
  { label: "Menthol / Ice", colour: "#4FB6A8" },
  { label: "Dessert / Bakery", colour: "#C98A4B" },
  { label: "Tobacco", colour: "#7A4A2B" },
  { label: "Beverage", colour: "#C2478D" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeSlice(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x.toFixed(2)} ${end.y.toFixed(2)} Z`;
}

export default function FlavourWheel({
  className,
  showLabels = true,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  const cx = 110;
  const cy = 110;
  const r = 100;
  const step = 360 / segments.length;

  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="A wheel divided into five e-liquid flavour families: fruit, menthol and ice, dessert and bakery, tobacco, and beverage"
    >
      <title>
        The Vapour Notes flavour wheel: fruit, menthol and ice, dessert and
        bakery, tobacco, and beverage
      </title>
      {segments.map((segment, i) => {
        const startAngle = i * step;
        const endAngle = startAngle + step;
        const midAngle = startAngle + step / 2;
        const labelPos = polarToCartesian(cx, cy, r * 0.66, midAngle);
        return (
          <g key={segment.label}>
            <path
              d={describeSlice(cx, cy, r, startAngle, endAngle)}
              fill={segment.colour}
              stroke="#F6F0FA"
              strokeWidth="3"
            />
            {showLabels && (
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="700"
                fill="#F6F0FA"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {segment.label.split(" / ").map((word, idx) => (
                  <tspan
                    key={word}
                    x={labelPos.x}
                    dy={idx === 0 ? 0 : 12}
                  >
                    {word}
                  </tspan>
                ))}
              </text>
            )}
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={34} fill="#5B2A6E" stroke="#F6F0FA" strokeWidth="3" />
      <path
        d="M110 88C110 88 96 106 96 118.5C96 129.27 102.163 137 110 137C117.837 137 124 129.27 124 118.5C124 106 110 88 110 88Z"
        fill="#F2B705"
      />
    </svg>
  );
}
