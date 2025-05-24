import { useMotionValue, useSpring as useFramerSpring } from "framer-motion";

/**
 * A utility hook that abstracts the Framer Motion spring hook.
 * It creates a motion value and a spring, and returns the spring.
 *
 * @param initialValue - The initial value of the spring.
 * @param config - The spring configuration.
 * @returns The spring motion value.
 */
export function useSpring(initialValue, config = { stiffness: 100, damping: 30, mass: 1 }) {
  const motionValue = useMotionValue(initialValue);
  const spring = useFramerSpring(motionValue, config);
  return spring;
}