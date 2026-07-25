import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import { Box3, Color, Mesh, MeshStandardMaterial, Vector3, type Group } from "three";

const LOGO_BLUE = "#2563EB";

function Model() {
  const { scene: sourceScene } = useGLTF("/logo.glb");
  const ref = useRef<Group>(null);

  // Clone the cached scene: useGLTF shares one instance across mounts,
  // which would otherwise break per-instance scaling
  const scene = useMemo(() => sourceScene.clone(true), [sourceScene]);

  // Normalize scale so the full model fits the viewport with margin,
  // and tint every mesh to the website blue
  const scale = useMemo(() => {
    scene.traverse((obj) => {
      if ((obj as Mesh).isMesh) {
        (obj as Mesh).material = new MeshStandardMaterial({
          color: new Color(LOGO_BLUE),
          metalness: 0.35,
          roughness: 0.3,
          emissive: new Color(LOGO_BLUE),
          emissiveIntensity: 0.2,
        });
      }
    });

    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return 1.8 / maxDim;
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={scale} />
    </Center>
  );
}

export function LogoModel({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <pointLight position={[-5, -2, -4]} intensity={8} color="#2563EB" />
        <pointLight position={[4, -3, 4]} intensity={5} color="#3b82f6" />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.4} floatIntensity={1.4}>
            <Model />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo.glb");
