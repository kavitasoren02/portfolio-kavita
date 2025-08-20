import React, { useState, useRef, Suspense} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Points as ThreePoints } from "three";
import { type StarProps, starProps } from "../../constants/index";
import SectionWrapper from "../../hoc/SectionWrapper";

const Star: React.FC<StarProps> = ({
  color = starProps.color,
  count,
  radius = starProps.radius,
  ...props
}) => {
  const ref = useRef<ThreePoints>(null);

  const safeCount = count ?? starProps.count!;

  // Generate random points in a sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(safeCount * 3), { radius })
  );

  // Animate rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
return(
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{position:[0,0,1]}} >
      <Suspense fallback={null}>
        <Star/>
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
)
}
export default StarsCanvas;
