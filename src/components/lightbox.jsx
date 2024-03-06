import React, { useCallback, useEffect, useState } from 'react';
import styles from './lightbox.module.css';

const Lightbox = ({ images, currentIndex, isOpen, onClose }) => {
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  const goToPrevious = useCallback(() => {
    const newIndex = (displayIndex === 0 ? images.length - 1 : displayIndex - 1);
    setDisplayIndex(newIndex);
  }, [displayIndex, images.length]);

  const goToNext = useCallback(() => {
    const newIndex = ((displayIndex + 1) % images.length);
    setDisplayIndex(newIndex);
  }, [displayIndex, images.length]);

  useEffect(() => {
    setDisplayIndex(currentIndex);
  }, [currentIndex]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div>
        {isOpen && (
          <div className={styles.overlay}>
            <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
              <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <button className={styles.prevButton} onClick={goToPrevious}>&lt;</button>
                <img src={images[displayIndex]} alt="Lightbox" className={styles.image} />
                <button className={styles.nextButton} onClick={goToNext}>&gt;</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Lightbox;
