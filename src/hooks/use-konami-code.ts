"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[inputIndex]) {
        if (inputIndex === KONAMI_CODE.length - 1) {
          setSuccess(true);
          setInputIndex(0); // reset
        } else {
          setInputIndex((prev) => prev + 1);
        }
      } else {
        // Reset if they mess up the sequence
        setInputIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputIndex]);

  return success;
}
