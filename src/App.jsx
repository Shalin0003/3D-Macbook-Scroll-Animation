import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica Neue']">
      <div className="navbar flex gap-10 py-10 absolute top-0 left-1/2 -translate-x-1/2">
        {["iPhoone", "iPad", "services", "IOS", "Mac", "Products"].map((e) => {
          <a href="" className="text-white font-[500] text-sm">
            {e}
          </a>
        })}
      </div>
      <div className="absolute flex flex-col items-center text-white top-20 left-1/2 -translate-x-1/2 font-['Helvetica Neue']">
        <h3 className="text-7xl masked tracking-normal font-[700]">macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className="text-center w-120">Agar Danish Bhai Zinda rehte na to Hum Logo ka Naam hi nahi rehta <br/> Matlab unhone Driving Karna Sikhaya hai Banto ko  </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -1, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
