"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface LoadingAnimationProps {
  lyrics: string;
  duration?: number; // in milliseconds
  redirectPath?: string; // where to redirect after animation
}

export default function LoadingAnimation({
  lyrics,
  duration = 3000,
  redirectPath = '/'
}: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before redirecting
      setTimeout(() => {
        router.push(redirectPath);
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, redirectPath, router]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#0B0F14] text-[#E6EDF3] z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-light tracking-wider mb-2">
              {lyrics}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
