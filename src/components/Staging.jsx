import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";

const Staging = () => {
  return (
    <PresentationControls
      //   global={false}
      speed={1.5}
      global
      //   zoom={0.6}
      //   rotation={[0, 0, 0]}
      polar={[-0.3, Math.PI / 4]}
    >
      <Stage
        environment="city"
        adjustCamera
        intensity={0.6}
        contactShadow={false}
      >
        <mesh position={(0, 0, 0.5)}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Staging;
