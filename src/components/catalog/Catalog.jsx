import React from 'react';
import './Catalog.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import sliderArrow1 from '../../assets/slider_arrow1.png';
import sliderArrow2 from '../../assets/slider_arrow2.png';
import Novelties1 from '../../assets/Novelties1.png';
import Novelties2 from '../../assets/Novelties2.png';
import Novelties3 from '../../assets/Novelties3.png';
import Novelties4 from '../../assets/Novelties4.png';
import Family1 from '../../assets/Family1.png';
import Family2 from '../../assets/Family2.png';
import Family3 from '../../assets/Family3.png';
import Family4 from '../../assets/Family4.png';
import Smart1 from '../../assets/Smart1.png';
import Smart2 from '../../assets/Smart2.png';
import Smart3 from '../../assets/Smart3.png';

const Catalog = () => {
  const sections = [
    {
      title: 'Новинки',
      images: [Novelties1, Novelties2, Novelties3, Novelties4, Novelties1]
    },
    {
      title: 'Для всей семьи',
      images: [Family1, Family2, Family3, Family4, Family1]
    },
    {
      title: 'Для самых умных',
      images: [Smart1, Smart2, Smart3, Smart1, Smart2]
    }
  ];

  const swiperRefs = Array.from({ length: sections.length }).map(
    React.createRef
  );

  const navigatePrev = (index) => {
    if (swiperRefs[index].current && swiperRefs[index].current.swiper) {
      swiperRefs[index].current.swiper.slidePrev();
    }
  };

  const navigateNext = (index) => {
    if (swiperRefs[index].current && swiperRefs[index].current.swiper) {
      swiperRefs[index].current.swiper.slideNext();
    }
  };

  return (
    <div className="Catalog">
      <div className="Catalogs_main">
        {sections.map((section, index) => (
          <div className="Catalog_main" key={index}>
            <div className="Catalog_title">
              <h2>{section.title}</h2>
              <div className="Arrows">
                <img
                  src={sliderArrow1}
                  className="sliderArrow1"
                  onClick={() => navigatePrev(index)}
                />
                <img
                  src={sliderArrow2}
                  className="sliderArrow2"
                  onClick={() => navigateNext(index)}
                />
              </div>
            </div>
            <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
              slidesPerView={4}
              navigation={{
                prevEl: `.sliderArrow1${index}`,
                nextEl: `.sliderArrow2${index}`
              }}
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              className="catalog_imgs"
              ref={swiperRefs[index]}
            >
              {section.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Image ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;