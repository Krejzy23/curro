import React from "react";
import bg from "../../assets/topography.svg";

const BackgroundLayout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
      className="bg-zinc-950"
    >
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
          backgroundPosition: "center",
          opacity: 0.03,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;