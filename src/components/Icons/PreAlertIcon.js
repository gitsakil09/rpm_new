const PreAlertIcon = ({ strokeWidth, stroke }) => {
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
        d="M19.6,16.7v-4.3c0-2-0.7-3.8-2.1-5.2c-1.3-1.4-3.1-2.2-5-2.2c-1.9,0-3.7,0.8-5,2.2c-1.3,1.4-2.1,3.3-2.1,5.2
        v4.5L2,24h21L19.6,16.7z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12.9,28.6c-0.8,0-1.5-0.4-2.1-1C10.3,26.9,10,26,10,25.1v-0.9h5.8v0.9c0,0.9-0.3,1.8-0.9,2.4
        C14.4,28.2,13.6,28.6,12.9,28.6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M23.4,3.8c0,0.6-0.2,1.2-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6c-0.6,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6
        s0.2-1.2,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6c0.6,0,1.2,0.2,1.6,0.6C23.2,2.6,23.4,3.2,23.4,3.8z"
      />
    </svg>
  );
};
export default PreAlertIcon;
