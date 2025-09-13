import React from "react";
import model from "./models/3D-model.glb";

const SneakerAR = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h2>White Sneaker — AR Preview</h2>

      <model-viewer
        src={model}
        alt="White sneaker 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        style={{
          width: "100%",
          height: "420px",
          background: "#f6f6f6",
          borderRadius: "6px",
        }}
      >
      </model-viewer>

      <div style={{ marginTop: "12px" }}>
        <button
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#0b74de",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
          onClick={() =>
            document.querySelector("model-viewer")?.activateAR()
          }
        >
          Preview in AR
        </button>

        <button
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#eee",
            color: "#111",
            cursor: "pointer",
            fontWeight: "600",
          }}
          onClick={handle3DView}
        >
          Open 3D Preview
        </button>
      </div>
    </div>
  );
};

export default SneakerAR;
