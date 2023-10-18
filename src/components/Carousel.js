import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          children: <span>{'>'}</span>,
        }}
        backwardBtnProps={{
          children: <span>{'<'}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* Custom slide components */}
        <div className="carousel-item">slide 0</div>
        <div className="carousel-item">slide 1</div>
        <div className="carousel-item">slide 2</div>
        <div className="carousel-item">slide 3</div>
        <div className="carousel-item">slide 4</div>
        <div className="carousel-item">slide 5</div>
        <div className="carousel-item">slide 6</div>
        <div className="carousel-item">slide 7</div>
        <div className="carousel-item">slide 8</div>
        <div className="carousel-item">slide 9</div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
