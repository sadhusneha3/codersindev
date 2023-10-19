import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Card from './Card'; // Import your Card component

function CustomCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const cardData = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 4', content: 'This is the content of Card 4' },
    { title: 'Card 5', content: 'This is the content of Card 5' },
  ];

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{'>'}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 1000,
            lineHeight: 1,
            textAlign: 'center',
            width: 900,
          },
          children: <span>{'<'}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* Custom card components */}
        {cardData.map((card, index) => (
          <div className="carousel-item" key={index}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CustomCarousel;
