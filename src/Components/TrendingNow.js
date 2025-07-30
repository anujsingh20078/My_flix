import React, { useRef } from 'react';
import './TrendingNow.css';

const TrendingNow = () => {
  const scrollRef = useRef();

  const trendingData = [
    { id: 1, image: 'squidgame.png' },
    { id: 2, image: 'Kapils.png' },
    { id: 3, image: 'Raid2.png' },
    { id: 4, image: 'Aapjaisa.png' },
    { id: 5, image: 'mandala.png' },
    { id: 6, image: 'Hit.png' },
    { id: 7, image: 'thuglife.png' },
    { id: 8, image: 'jaat.png' },
    { id: 9, image: 'chhaava.png' },
    { id: 10, image: 'sexlife.png' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="trending-section">
      <h2>Trending Now</h2>

      <div className="trending-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>
          &#9664;
        </button>

        <div className="trending-list" ref={scrollRef}>
          {trendingData.map((item) => (
            <div className="trending-item" key={item.id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                alt={`Trending ${item.id}`}
              />
              <span className="trending-number">{item.id}</span>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TrendingNow;
