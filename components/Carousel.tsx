
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// ...existing code...
export default function Carousel({ images }: { images?: string[] }) {
  const defaultImages = [
    '/images/IMG_9258.jpg',
    '/images/IMG_9259.jpg',
    '/images/IMG_9260.jpg',
    '/images/proyecto1.jpg',
    '/images/proyecto2.png',
  ];
  const imgs = images && images.length > 0 ? images : defaultImages;
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop
// ...existing code...
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
    >
      {imgs.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`slide-${idx}`} className="w-full h-[400px] object-cover rounded-lg transition-all duration-[2000ms]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
