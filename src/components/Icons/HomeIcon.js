const HomeIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 26 28"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M12.2,2.7l-8.9,7.7c-0.4,0.4-0.8,0.8-1,1.3C2.1,12.2,2,12.7,2,13.3v6.3c0,0.7,0.1,1.4,0.4,2.1
        c0.3,0.7,0.7,1.2,1.2,1.7c0.5,0.5,1.1,0.9,1.8,1.2C6,24.9,6.7,25,7.4,25h2v-8.1c0-0.2,0.1-0.4,0.2-0.6c0.1-0.1,0.4-0.2,0.6-0.2h7.5
        c0.2,0,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.3,0.2,0.6V25h2c1.4,0,2.8-0.6,3.8-1.6c1-1,1.6-2.4,1.6-3.8v-6.3c0-0.6-0.1-1.1-0.3-1.6
        c-0.2-0.5-0.6-1-1-1.3l-8.9-7.7C15.3,2.3,14.6,2,14,2C13.3,2,12.7,2.3,12.2,2.7z"
      />
    </svg>
  );
};
export default HomeIcon;
