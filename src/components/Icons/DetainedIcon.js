const DetainedIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-8"
      fill="none"
      viewBox="0 0 18 20"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M3,14.3h4.4"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M3,12.3h5.9"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M11.3,5.9l-1.5-1l-1,1l-1-1l-1.5,1V1h4.9V5.9z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M15.4,17.3c2.7,0,5-2.2,5-5c0-2.7-2.2-5-5-5s-5,2.2-5,5C10.5,15,12.7,17.3,15.4,17.3z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M10.5,12.3c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.3,1.4-1.7c0.6-0.5,1.3-0.8,2.1-0.9s1.5-0.1,2.3,0.1V1.8
        c0-0.2-0.1-0.4-0.2-0.6C16.3,1.1,16.1,1,15.9,1H1.8C1.7,1,1.6,1,1.5,1.1c-0.1,0-0.2,0.1-0.3,0.2S1.1,1.4,1.1,1.5C1,1.6,1,1.7,1,1.8
        v13.2c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.3,0.1h10.1
        C10.9,14.8,10.4,13.6,10.5,12.3L10.5,12.3z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M17.8,11.8H13c-0.4,0-0.6,0.3-0.6,0.6c0,0.4,0.3,0.6,0.6,0.6h4.8c0.4,0,0.6-0.3,0.6-0.6
        C18.5,12.1,18.2,11.8,17.8,11.8z"
      />
    </svg>
  );
};
export default DetainedIcon;
