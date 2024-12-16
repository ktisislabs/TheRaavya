import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

// Preload the model
useGLTF.preload("/the_smoking_room.glb");

// Component to load and display the GLB file with rotation
const Scene = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/the_smoking_room.glb");

  // Automatic rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0005; // Adjust speed of rotation
    }
  });

  // Adjust position and scale to fill the "room"
  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[10, 10, 10]} // Adjust scale for a bigger room effect
      position={[-10, -20, 30]} // Adjust Y and Z to position the model properly
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
        zIndex: -1, // Push canvas behind other content
      }}
    >
      <Canvas
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 30], fov: 75 }} // Adjust camera position and field of view
      >
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 20, 20]} intensity={1.5} />
        <directionalLight position={[-10, 10, 30]} intensity={1.5} />

        {/* 3D Scene */}
        
          <Scene />
    
      </Canvas>

      {/* Overlayed HTML content */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
          zIndex: 1,
        }}
      >
        <h1>Welcome to the Smoking Room</h1>
      </div>
    </div>
  );
};

export default HomePageScene;
