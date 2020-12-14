import { useState, useRef } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import SliderItem from './SliderItem'
import Container from './Container'
import Gallery from './Gallery'

const Slider = ({ slides, docId }) => {
  const [galleryActive, setGalleryActive] = useState(false)
  const galleryRef = useRef()

  const params = {
    spaceBetween: 36,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000,
      invert: false
    },
    slideToClickedSlide: true,
    freeMode: true
  }

  if (slides[0].image.url) {
    return (
      <div>
        <div className='post-slider'>
          <Container>
            <Swiper {...params}>
              {slides.map((item, index) => (
                <SwiperSlide key={`slider_${docId}_${index}`}>
                  <SliderItem
                    item={item}
                    openGallery={() => {
                      setGalleryActive(true)
                      if (galleryRef.current && galleryRef.current.swiper) {
                        galleryRef.current.swiper.slideTo(index, 0)
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <Gallery
          docId={docId}
          slides={slides}
          isActive={galleryActive}
          closeGallery={() => { setGalleryActive(false) }}
          ref={galleryRef}
        />
      </div>
    )
  }

  return null
}

export default Slider
