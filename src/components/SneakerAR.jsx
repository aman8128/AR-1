import React, { useRef } from "react";
import model from "./models/3D-model.glb";
import model1 from "./models/3D-model-ios.usdz";

const SneakerAR = () => {
  const modelRef = useRef(null);

  const handleARClick = () => {
    if (modelRef.current) {
      modelRef.current.activateAR(); // direct AR trigger
    } else {
      alert("Model not ready");
    }
  };

  const handle3DView = () => {
    if (modelRef.current) {
      if (!document.fullscreenElement) {
        modelRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h2>White Sneaker — AR Preview</h2>

      {/* Model Viewer */}
      <model-viewer
        ref={modelRef}
        src={model}
        ios-src={model1}  // iOS fallback
        alt="White sneaker 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{
          width: "100%",
          height: "420px",
          background: "#f6f6f6",
          borderRadius: "6px",
        }}
      >
      </model-viewer>

      {/* Buttons */}
      <div style={{ marginTop: "12px", display: "flex", gap: "12px" }}>
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
          onClick={handleARClick}
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
