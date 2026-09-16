export default function FlavourDropIcon({
  className,
  fill = "#F2B705",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 1C12 1 3 13.5 3 20.5C3 26.85 7.925 31 12 31C16.075 31 21 26.85 21 20.5C21 13.5 12 1 12 1Z"
        fill={fill}
      />
      <path
        d="M8.5 22.5C8.5 24.98 10.24 27 12 27"
        stroke="#F6F0FA"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
