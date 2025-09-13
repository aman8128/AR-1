import React, { useRef } from "react";
import "@google/model-viewer";
import model from './models/3D-model.glb'

const SneakerAR = () => {
  const modelRef = useRef(null);

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h2>White Sneaker — AR Preview</h2>

      <model-viewer
        ref={modelRef}
        src={model}
        alt="White sneaker 3D model"
        ar
        // Order of fallback → try WebXR → if not supported → Scene Viewer (Android) → Quick Look (iOS)
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
          onClick={() => modelRef.current?.activateAR()}
        >
          Preview in AR
        </button>
      </div>
    </div>
  );
};

export default SneakerAR;
