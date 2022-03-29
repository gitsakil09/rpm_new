const ReadyIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-8"
      fill="none"
      viewBox="0 0 16 18"
      stroke={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12.1,4.6h1.2l0.6,13H1.4L2,4.6h1.2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4.5,4.6h6.3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M1.9,14h11.6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4.5,7.3V3.6c0-0.4,0.1-0.8,0.2-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.6-0.5,1-0.6c0.4-0.1,0.8-0.2,1.2-0.2h0.1
        c0.4,0,0.8,0.1,1.2,0.2c0.4,0.1,0.7,0.4,1,0.6c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.2,0.8,0.2,1.2v3.7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M3.6,7.3h1.8"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M9.9,7.3h1.8"
      />
    </svg>
  );
};
export default ReadyIcon;
