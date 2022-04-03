const RPMAddressIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 26 30"
      stroke={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M26.7,15.3c-0.6-0.5-4.9-4.8-4.9-4.8c0.8-1,1.3-2.2,1.3-3.5c0-3-2.5-5.5-5.5-5.5c-3,0-5.5,2.5-5.5,5.5
        c0,3,2.5,5.5,5.5,5.5c1.4,0,2.7-0.5,3.6-1.4c0,0,3.9,4.2,4.7,4.9C26.7,16.8,27.3,15.9,26.7,15.3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M8.8,8.7H6c-0.7,0-1.3-0.6-1.3-1.3S5.3,6.2,6,6.2h2.8c0.7,0,1.3,0.6,1.3,1.3S9.5,8.7,8.8,8.7z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M11.3,18.1H6c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h5.3c0.7,0,1.3,0.6,1.3,1.3S12,18.1,11.3,18.1z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M10,3.1c0,0-5.8,0-6.5,0S2.3,3.3,2.3,4.7s0,12.3,0,13.4s0.2,2.5,1.7,2.5s11.5,0,12.5,0s2.4-0.4,2.4-1.9
        s0-2.4,0-2.4"
      />
    </svg>
  );
};
export default RPMAddressIcon;
