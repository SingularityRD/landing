'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';

// Premium "Empty State" Component with Event Horizon Concept
const Hero = ({ reset }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative flex min-h-[90vh] grow flex-col justify-center overflow-hidden bg-black-pure text-white">
      {/* Dynamic Background: The Void */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black-pure to-black-pure"
      />

      <Container className="relative z-10 flex flex-col items-center text-center" size="md">

        {/* The Singularity / Event Horizon Animation */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Outer accretion disk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"
          />
          {/* Inner ring */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-64 w-64 rounded-full border border-white/10"
          />
          {/* Core - The Singularity */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex h-32 w-32 items-center justify-center rounded-full bg-black ring-1 ring-white/20 backdrop-blur-md"
          >
            <span className="font-mono text-xs text-white/50 tracking-[0.2em]">404</span>
          </motion.div>
        </div>

        {/* Minimalist Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="font-title text-5xl font-light tracking-tight text-white xl:text-4xl">
            Uncharted Territory
          </h1>

          <div className="mt-6 flex flex-col items-center gap-2 font-mono text-sm text-gray-500">
            <p>Signal lost at coordinates <span className="text-white/80 border-b border-white/20 pb-0.5">{pathname}</span></p>
            <p>The existence of this page is purely theoretical.</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex items-center gap-6"
        >
          <Button
            size="sm"
            theme="white"
            onClick={reset}
            className="!rounded-full !px-8 !font-medium transition-transform hover:scale-105"
          >
            Retry Connection
          </Button>
          <Link
            className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            to="/"
          >
            Return to Simulation
            <span className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
};

Hero.propTypes = {
  reset: PropTypes.func,
};

export default Hero;
