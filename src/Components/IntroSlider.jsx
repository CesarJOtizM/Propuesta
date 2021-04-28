import React, { useState } from 'react';
import IntroStep from './IntroStep';
import styles from '../Assets/Styles/Components/IntroSlider.module.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const IntroSlider = ({ data }) => {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  function WhatImustDo() {
    // Put a mensage in the console
    if (touchEndX < touchStartX) {
      return 'left';
    }
    if (touchEndX > touchStartX) {
      return 'right';
    }
    if (touchEndY < touchStartY) {
      return 'down';
    }
    if (touchEndY > touchStartY) {
      return 'up';
    }
    if (touchEndY === touchStartY && touchEndX === touchStartX) {
      return 'tap';
    }
  }

  const [current, setCurrent] = useState(0);

  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <section
        className={styles.IntroSlider}
        onTouchStart={(e) => {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }}
        onTouchEnd={(e) => {
          touchEndX = e.changedTouches[0].screenX;
          touchEndY = e.changedTouches[0].screenY;
          const direction = WhatImustDo();
          if (direction === 'left') {
            nextSlide();
          }
          if (direction === 'right') {
            prevSlide();
          }
        }}>
        <FaChevronRight className={styles.leftArrow} onClick={nextSlide} />
        <FaChevronLeft className={styles.RightArrow} onClick={prevSlide} />

        {data.map((step, index) => (
          <IntroStep
            index={index}
            key={index}
            current={current}
            imageUrl={step.imageUrl}
            title={step.title}
            data={data}
          />
        ))}
      </section>
    </>
  );
};

export default IntroSlider;
