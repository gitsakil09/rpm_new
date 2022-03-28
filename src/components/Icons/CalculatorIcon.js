const CalculatorIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 26 30"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M8,1.3h9c3.7,0,6.8,3,6.8,6.8v9c0,3.7-3,6.8-6.8,6.8H8c-3.7,0-6.8-3-6.8-6.8V8C1.3,4.3,4.3,1.3,8,1.3z"
      />
      <line x1="11.4" y1="18.6" x2="17.3" y2="18.6" />
      <line x1="11.4" y1="15" x2="17.3" y2="15" />
      <line x1="5.1" y1="8.8" x2="11" y2="8.8" />
      <line x1="8" y1="5.8" x2="8" y2="11.7" />
    </svg>
  );
};
export default CalculatorIcon;
