"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const japaneseLyrics = "「ワタリドリの様に今 旅に発つよ」";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before redirecting
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
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
            <p className="text-2xl md:text-3xl font-light tracking-wider">
              {japaneseLyrics}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
