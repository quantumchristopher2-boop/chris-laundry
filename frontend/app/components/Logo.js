export default function Logo({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="55" fill="#00A99D" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Chris
      </text>
      <text
        x="50%"
        y="75%"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontFamily="Arial, sans-serif"
      >
        Laundry
      </text>
    </svg>
  );
}