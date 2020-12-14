import { forwardRef, useState } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CgCompressRight, CgArrowRight, CgArrowLeft } from 'react-icons/cg'
import ReactPlayer from 'react-player'

SwiperCore.use([Mousewheel])

import ResponsiveImage from './ResponsiveImage'
import Container from './Container'

const Gallery = forwardRef((props, ref) => {
  const { docId, slides, isActive, closeGallery } = props

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  let captions = []

  const params = {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    mousewheel: {
      forceToAxis: true,
      invert: false,
      sensitivity: .01
    },
    slideToClickedSlide: true
  }

  return (
    <div className={'gallery fixed bg-white inset-0 z-40 flex items-center transition-opacity' + (isActive ? '' : ' opacity-0 pointer-events-none')}>
      <Swiper
        {...params}
        ref={ref}
        onSlideChange={(swiper) => {
          setIsEnd(swiper.isEnd)
          setIsBeginning(swiper.isBeginning)
          setActiveIndex(swiper.activeIndex)
        }}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={`gallery_${docId}_slide_${index}`}>
              {item.video ? (
                <ReactPlayer
                  url={item.video}
                  playing={activeIndex === index && isActive}
                  width='60vw'
                  height={((60 / 16) * 9) + 'vw'}
                />
              ) : (
                <ResponsiveImage
                  image={item.image}
                  sizes={{
                    mobile: 'w=353',
                    md: 'w=474',
                    xl: 'w=538',
                    full: 'w=688'
                  }}
                  pictureClass='w-full px-24'
                  imgClass='w-full h-full object-contain mx-auto'
                />
              )}

            </SwiperSlide>
          )
        })}
      </Swiper>

      <div onClick={() => {
        if (ref.current && ref.current.swiper) {
          ref.current.swiper.slidePrev()
        }
      }} className={'hidden absolute top-0 left-0 bottom-0 z-30 w-1/3 text-6xl fill-black p-12 justify-start items-center bg-transparent cursor-pointer opacity-0' + (isBeginning ? '' : ' sm:flex hover:opacity-100')}><CgArrowLeft /></div>

      <div onClick={() => {
        if (ref.current && ref.current.swiper) {
          ref.current.swiper.slideNext()
        }
      }} className={'hidden absolute top-0 right-0 bottom-0 z-30 w-1/3 text-6xl fill-black p-12 justify-end items-center bg-transparent cursor-pointer opacity-0' + (isEnd ? '' : ' sm:flex hover:opacity-100')}><CgArrowRight /></div>

      <div className='absolute top-0 right-0 p-4 m-4 cursor-pointer z-50 text-4xl fill-gray-dark' onClick={() => {
        closeGallery()
      }}><CgCompressRight /></div>
    </div>
  )
})

export default Gallery
