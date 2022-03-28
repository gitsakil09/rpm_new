const DeliveredIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-8"
      fill="none"
      viewBox="0 0 18 20"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M12,2.1H5.3c-2.3,0-4.2,1.8-4.2,4v6.4c0,2.2,1.9,4,4.2,4H12c2.3,0,4.2-1.8,4.2-4V6.1C16.2,3.9,14.3,2.1,12,2.1z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M6.1,0.8V4"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M11.8,0.8V4"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M4.8,8.4h1.3"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M8.6,8.4h3.8"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M4.8,12.2h1.3"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M8.6,12.2h3.8"
      />
    </svg>
  );
};
export default DeliveredIcon;
