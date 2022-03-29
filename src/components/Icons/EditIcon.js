const EditIcon = ({ strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 20 24"
      stroke={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M3.6,16.1l-0.9,0.2l-0.7-0.7l0.2-0.9c0.3-1.3,0.9-2.5,1.8-3.4l9.7-9.7c0.2-0.2,0.4-0.4,0.7-0.5
        C14.6,1.1,14.8,1,15.1,1c0.3,0,0.6,0.1,0.8,0.2c0.3,0.1,0.5,0.3,0.7,0.5l0,0C17,2,17.2,2.6,17.2,3.1c0,0.6-0.2,1.1-0.6,1.5L7,14.3
        C6,15.2,4.8,15.9,3.6,16.1z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M13.1,2.2l3,3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M7.8,7.5l3,3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M14.2,7l1.2-1.2c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3l0,0c0.1,0.1,0.2,0.2,0.2,0.4
        c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.2,0.4l-4.6,4.6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M2.3,16L1,17.3"
      />
    </svg>
  );
};
export default EditIcon;
