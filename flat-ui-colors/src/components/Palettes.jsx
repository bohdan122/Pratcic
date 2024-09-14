import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Palettes({ palettes }) {
  return (
    <motion.div
      className="palettes"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`} key={palette.id} className="palette-link">
          <motion.div
            className="palette"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h2>{palette.paletteName} {palette.emoji}</h2>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}

export default Palettes;
