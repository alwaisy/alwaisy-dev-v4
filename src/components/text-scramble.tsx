"use client";

import { AnimatePresence, motion, type MotionProps } from "motion/react"; // Assuming this should be "framer-motion"
import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

type CharacterSet = string[] | readonly string[];

interface TextScrambleProps extends MotionProps {
  /** The text content to be animated */
  children: string;
  /** Optional className for styling */
  className?: string;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Delay before animation starts in milliseconds */
  delay?: number;
  /** Component to render as - defaults to div */
  as?: React.ElementType;
  /** Whether to start animation when element comes into view */
  startOnView?: boolean;
  /** Custom character set for scramble effect. Defaults to uppercase alphabet */
  characterSet?: CharacterSet;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
);

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function TextScramble({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayText, setDisplayText] = useState<string[]>(children.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  // Trigger animation whenever children changes
  useEffect(() => {
    if (!startOnView && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, startOnView]);

  // Handle animation start based on view
  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isAnimating) {
          setTimeout(() => {
            iterationCount.current = 0;
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView, isAnimating]);

  // Handle scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const intervalDuration = duration / (children.length * 10);
    const maxIterations = children.length;

    const interval = setInterval(() => {
      if (iterationCount.current < maxIterations) {
        setDisplayText((currentText) =>
          currentText
            .map((letter, index) =>
              letter === " "
                ? letter
                : index <= iterationCount.current
                  ? children[index]
                  : (characterSet[getRandomInt(characterSet.length)] ?? ""),
            )
            .map((value) => value ?? ""),
        );

        iterationCount.current = iterationCount.current + 0.1;
      } else {
        setIsAnimating(false);
        setDisplayText(children.split("")); // Ensure final text matches children
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [children, duration, isAnimating, characterSet]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-4xl font-bold", className)}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            className={cn("font-mono", letter === " " ? "w-3" : "")}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
