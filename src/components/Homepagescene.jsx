import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Preload the model
useGLTF.preload("/the_smoking_room.glb");

// Component to load and display the GLB file
const Scene = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/the_smoking_room.glb");

  // Adjust position and scale to fill the "room"
  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[10, 10, 15]} // Adjust scale to fit the scene as in the screenshot
      position={[-5, -20, 30]}  // Fine-tuned position to match the screenshot
    />
  );
};

// Main component
const HomePageScene = () => {
  return (
    <div
      id="home-section-1-container"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // Ensure it's behind other content
      }}
    >
      <Canvas
        style={{ background: "transparent", position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 30], fov: 50 }} // Adjust camera position and field of view
      >
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 20, 20]} intensity={1.5} />
        <directionalLight position={[-10, 10, 30]} intensity={1.5} />

        {/* 3D Scene */}
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 3 + 0.01} // Slightly above the horizon
          minPolarAngle={Math.PI / 2 - 0.1} // Slightly below the horizon
          minAzimuthAngle={-Math.PI / 96} // Very limited left rotation
          maxAzimuthAngle={Math.PI / 56}  // Very limited right rotation
        />

        <Scene />
      </Canvas>

      {/* Overlayed HTML content */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
          zIndex: 2, // Ensure it is on top of the canvas
        }}
      ></div>
    </div>
  );
};

export default HomePageScene;
