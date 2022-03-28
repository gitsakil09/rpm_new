const CopyIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M9.2,3.4V2.2c0-0.2,0.1-0.3,0.1-0.5c0.1-0.1,0.2-0.3,0.3-0.4C9.7,1.3,9.9,1.2,10,1.1c0.2-0.1,0.3-0.1,0.5-0.1
        h10.1c0.4,0,0.7,0.1,0.9,0.4C21.8,1.7,22,2.1,22,2.4v16.2c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.2-0.6,0.4-0.9,0.4h-5"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M12.5,5.1H2.4C1.6,5.1,1,5.7,1,6.4v16.2c0,0.7,0.6,1.3,1.3,1.3h10.1c0.7,0,1.3-0.6,1.3-1.3V6.4
        C13.8,5.7,13.2,5.1,12.5,5.1z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M3.9,7.4v2.9"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M19.3,3.4v3.4"
      />
    </svg>
  );
};
export default CopyIcon;
