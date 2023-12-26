import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'; 
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import styles from './Slider.module.scss'

  const Slider = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.swiper__wrap}>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={styles.mySwiper}>
            {
                images && images.map((item, i) => (
                    <SwiperSlide key={i}>
                    <img src={item} />
                  </SwiperSlide>
                ))
            }
    
      </Swiper>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={styles.mySwiper2}>

             {
                images && images.map((item, i) => (
                    <SwiperSlide key={i}>
                    <img src={item} />
                  </SwiperSlide>
                ))
            }
      </Swiper>
    </div>
  );
}

export default Slider;