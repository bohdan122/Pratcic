import React from 'react';
import { Howl } from 'howler';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ColorGrid({ colors }) {
    const sound = new Howl({ src: ['/sound.mp3'] });

  const handleColorClick = (color) => {
    sound.play();
  };

  return (
    <motion.div
    className="color-grid"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <Link to="/" className="back-button">Back</Link>
    {colors.map((color) => (
      <CopyToClipboard key={color.name} text={color.color}>
        <motion.div
          className="color-box"
          style={{ backgroundColor: color.color }}
          onClick={() => handleColorClick(color)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {color.color}
        </motion.div>
      </CopyToClipboard>
    ))}
  </motion.div>
  );
}

export default ColorGrid;
