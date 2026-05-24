"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Stylized "tooth" — a pearlescent crown with 4 cusps on top and 2 roots below.
 * Built from primitives so no GLTF asset is required (works on GitHub Pages).
 */
function Tooth() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={groupRef} scale={1.1}>
        {/* Crown body — squashed sphere, pearlescent white */}
        <mesh position={[0, 0.2, 0]} scale={[1.05, 0.95, 1.05]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.15}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            sheen={1}
            sheenColor="#ccfbf1"
            envMapIntensity={1.2}
          />
        </mesh>

        {/* 4 cusps */}
        {[
          [0.45, 0.95, 0.45],
          [-0.45, 0.95, 0.45],
          [0.45, 0.95, -0.45],
          [-0.45, 0.95, -0.45],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.18}
              clearcoat={1}
              sheen={1}
              sheenColor="#a5f3fc"
              envMapIntensity={1.2}
            />
          </mesh>
        ))}

        {/* 2 roots tapering down */}
        <mesh position={[0.35, -0.95, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.32, 1.1, 32]} />
          <meshPhysicalMaterial
            color="#fafafa"
            roughness={0.35}
            clearcoat={0.6}
          />
        </mesh>
        <mesh position={[-0.35, -0.95, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.32, 1.1, 32]} />
          <meshPhysicalMaterial
            color="#fafafa"
            roughness={0.35}
            clearcoat={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GlassOrb({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere position={position} args={[0.45 * scale, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Detect mobile / touch device on the client only (avoids SSR mismatch).
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

/**
 * Pause the canvas frameloop when the wrapping element scrolls off-screen.
 */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

export default function Scene3D() {
  const isMobile = useIsMobile();
  const { ref, inView } = useInView<HTMLDivElement>();

  // Don't even mount the canvas on small screens with reduced motion
  // — keeps initial paint fast.
  return (
    <div ref={ref} className="w-full h-full">
      <Canvas
        // Pause rendering when scrolled out of view to save battery + keep scroll smooth
        frameloop={inView ? "always" : "never"}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={!isMobile}
        camera={{ position: [0, 0, 5.5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 6, 4]} intensity={1.1} />
          <pointLight position={[-5, -5, -3]} intensity={0.4} color="#22d3ee" />
          <pointLight position={[3, -2, 4]} intensity={0.3} color="#14b8a6" />

          <Tooth />

          {!isMobile && (
            <>
              <GlassOrb position={[-2.8, 1.6, -1]} color="#14b8a6" scale={0.7} />
              <GlassOrb position={[2.6, -1.4, -1.5]} color="#06b6d4" scale={0.85} />
              <GlassOrb position={[2.2, 1.8, 1]} color="#67e8f9" scale={0.5} />
            </>
          )}

          <Particles count={isMobile ? 250 : 600} />

          {!isMobile && (
            <ContactShadows
              position={[0, -1.8, 0]}
              opacity={0.3}
              scale={8}
              blur={2.6}
              far={4}
            />
          )}

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
