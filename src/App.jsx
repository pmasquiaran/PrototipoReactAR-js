import React, { useEffect } from "react";
import "aframe";
import './App.css'

function App() {
  useEffect(() => {
    // Carga dinámica del script de AR.js
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.7/aframe/build/aframe-ar.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        {/* Marcador tipo "hiro" (puedes imprimirlo o mostrarlo en otro dispositivo) */}
        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: red;"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App
