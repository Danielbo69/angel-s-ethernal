import "../styles/CarouselSlider.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

function CarouselSlider({ params }) {
  const [slidePerview, setSlidePerview] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(2);
      } else {
        setSlidePerview(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="CarouselContainer">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        slidesPerView={slidePerview}
        pagination={true}
        navigation
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {params.map((data) => (
          <SwiperSlide key={data.id}>
            <img src={data.image} alt={data.title} className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
