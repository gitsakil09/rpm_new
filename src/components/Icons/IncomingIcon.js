const IncomingIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-8 mt-1"
      fill="none"
      viewBox="0 0 20 24"
      stroke={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M3.1,14.2h11c0.5,0,1,0.4,1,1v0c0,0.5-0.4,1-1,1h-11c-0.5,0-1-0.4-1-1v0C2.1,14.6,2.6,14.2,3.1,14.2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M22.1,12.6c0-0.2,0-0.4,0-0.5c0,0-0.9-2-1.7-2.8c-1.2-1.2-2.6-1.7-4.2-2.1l-2-0.5h0l-3.7-5.2
        c-0.1-0.1-0.1-0.1-0.2-0.2l-1-0.4c-0.1,0-0.1,0-0.2,0C8.9,0.9,8.9,1,8.8,1c0,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2l1.5,4.3
        c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0L5.4,4.5l-0.1,0C4.4,4.2,3.6,3.6,3.1,2.8L1.9,0.9C1.9,0.8,1.8,0.7,1.7,0.7
        c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1C1,0.8,1,0.9,0.9,0.9c0,0.1-0.1,0.2-0.1,0.3L1,4.6c0,0.3,0.1,0.5,0.2,0.7
        c0.1,0.2,0.4,0.4,0.6,0.5l1.2,0.5l7.1,2.9l10,4.1C21.1,13.7,21.9,13.4,22.1,12.6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M11.4,10.6l-3-1.2l-2.1,1.3c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1s0,0.1,0.1,0.1l0.2,0.2
        c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.1,0.6,0L11.4,10.6z"
      />
    </svg>
  );
};
export default IncomingIcon;
