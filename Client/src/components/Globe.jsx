"use client";

import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useSpring } from "@/hooks/use-spring";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  phi: 0,
  theta: 0.3,
  dark: 0, // 0 for light mode, 1 for dark mode
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.9, 0.9, 0.9], // Light greyish globe
  markerColor: [230 / 255, 57 / 255, 70 / 255], // Example: Deepnex primary color (reddish)
  glowColor: [0.9, 0.9, 0.9],
  markers: [
    { location: [37.78, -122.412], size: 0.05 }, // San Francisco
    { location: [51.50, -0.12], size: 0.05 },    // London
    { location: [35.676, 139.65], size: 0.05 }, // Tokyo
    { location: [19.07, 72.87], size: 0.05 },   // Mumbai
    { location: [-33.86, 151.20], size: 0.05 }, // Sydney
    { location: [28.61, 77.20], size: 0.05 }, // New Delhi (India)
    { location: [40.71, -74.00], size: 0.05 }, // New York
    { location: [48.85, 2.35], size: 0.05 },   // Paris
    { location: [55.75, 37.61], size: 0.05 },  // Moscow
    { location: [-22.90, -43.17], size: 0.05 } // Rio de Janeiro
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
  // }: {
  //   className?: string;
  //   config?: typeof GLOBE_CONFIG;
}) {
  let phi = useSpring(config.phi ?? 0);
  let theta = useSpring(config.theta ?? 0.3);
  let width = 0;
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const pointerInteractionMovement = useRef(0);
  const pointerInteracting = useRef(null);
  const rotationSpeed = 0.10; // Adjust for speed, lower is slower

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      phi: phi.get(),
      theta: theta.get(),
      onRender: (state) => {
        state.phi = phi.get();
        state.theta = theta.get();
        state.width = width * 2;
        state.height = width * 2;
        if (config.onRender) {
          config.onRender(state);
        }
      },
    });

    setTimeout(() => {
      if(canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 500); // Delay to allow canvas to render
    setMounted(true);
    let animationFrameId;

    const animate = () => {
      if (!pointerInteracting.current) {
        phi.set(phi.get() + rotationSpeed);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // Start the animation

    return () => {
      globe.destroy();
      cancelAnimationFrame(animationFrameId); // Clean up animation frame
    };
  }, [config, phi, theta, rotationSpeed]);

  const onPointerDown = useCallback(
    (e) => {
      if (!mounted) return;
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
      if(canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    },
    [mounted],
  );

  const onPointerUp = useCallback(() => {
    if (!mounted) return;
    pointerInteracting.current = null;
    if(canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, [mounted]);

  const onPointerOut = useCallback(() => {
    if (!mounted) return;
    pointerInteracting.current = null;
    if(canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, [mounted]);

  const onMouseMove = useCallback(
    (e) => {
      if (!mounted || pointerInteracting.current === null) return;
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      phi.set(phi.get() - delta / 200);
    },
    [mounted, phi],
  );

  const onTouchMove = useCallback(
    (e) => {
      if (!mounted || pointerInteracting.current === null || !e.touches[0]) return;
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      phi.set(phi.get() - delta / 200);
    },
    [mounted, phi],
  );

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <motion.canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-1000 ease-out [contain:layout_paint_strict]",
        )}
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerOut}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        style={{
          cursor: "grab",
        }}
      />
    </div>
  );
}