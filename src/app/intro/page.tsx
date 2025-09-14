"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const japaneseLyrics = "「ワタリドリの様に今 旅に発つよ」";

  useEffect(() => {
    // Preload the home page to eliminate loading delay
    router.prefetch('/home');
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before redirecting
      setTimeout(() => {
        router.replace('/home'); // Use replace instead of push for smoother transition
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-light tracking-wider text-white px-4 text-center"
            style={{ color: '#fff', textAlign: 'center' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {japaneseLyrics}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
