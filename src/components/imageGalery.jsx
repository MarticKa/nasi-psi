import { useRef, useState } from 'react';
import styles from './imageGalery.module.css';
import { animated, useScroll } from '@react-spring/web';
import Lightbox from './lightbox';

const X_LINES = 40

const INITIAL_WIDTH = 20


const ImageGalery = ({images}) => {
  const sliderRef = useRef(null);
  const barContainerRef = (null);

  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const { scrollXProgress } = useScroll({
    container: sliderRef,
    default: {
      immediate: true,
    },
  })

  const handleImageClick = (index) => {
    openLightbox(index);
  }

  return (
    <>
      <div className={styles.imageGaleryContainer}>
        <div className={styles.imagesContainer} ref={sliderRef}>
          {images.map((image, index) => {
            const bottomMargin = scrollXProgress.to(scrollP => {
              const percentilePosition = (index + 1) / images.length;
              return images.length  + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 64;
            });

            // const scale = scrollXProgress.to(scrollP => {
            //   const percentilePosition = (index + 1) / images.length;
            //   return Math.max(1, 1.1 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32);
            // });

            return (
              <animated.img
                className={styles.image}
                alt="sliderImage"
                key={`${image}_${index}`}
                src={image}
                style={{
                  bottom: bottomMargin,
                  // scale: scale,
                }}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
        <animated.div ref={barContainerRef} className={styles.barContainer}>
            {Array.from({ length: X_LINES }).map((_, i) => (
              <animated.div
                key={i}
                className={styles.bar}
                style={{
                  height: scrollXProgress.to(scrollP => {
                    const percentilePosition = (i + 1) / X_LINES

                    return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                  }),
                }}
              />
            ))}
          </animated.div>
      </div>
      <Lightbox 
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}

export default ImageGalery;