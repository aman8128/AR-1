import React, { useRef } from "react";
import model from './models/3D-model.glb';

const SneakerAR = () => {
  const modelRef = useRef(null);

  const handleARClick = async () => {
    try {
      if (modelRef.current && typeof modelRef.current.enterAR === "function") {
        await modelRef.current.enterAR();
      } else {
        alert("AR not supported on this device/browser. 3D viewer will still work.");
      }
    } catch (err) {
      console.error("AR launch failed:", err);
      alert("AR could not start. Check console for details.");
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

      <model-viewer
        ref={modelRef}
        src={model}
        alt="White sneaker 3D model"
        ar
        ar-modes="scene-viewer quick-look webxr"
        environment-image="neutral"
        auto-rotate
        camera-controls
        exposure="1"
        style={{
          width: "100%",
          height: "420px",
          background: "#f6f6f6",
          borderRadius: "6px",
        }}
      ></model-viewer>

      <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
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
