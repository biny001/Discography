function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 75"
        width="150"
        height="75"
      >
        <path
          fill="none"
          stroke="#E0FAFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="150 192"
          strokeDashoffset="0"
          d="M137.5 37.5c0 15.5-13.5 25-25 25-29 0-46-50-75-50-14 0-25 11-25 25s11 25 25 25c29 0 46-50 75-50 12 0 25 9.5 25 25Z"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1" // Decreased duration to increase speed
            values="192;-192"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
      <p>Loading</p>
    </div>
  );
}

export default Loader;
