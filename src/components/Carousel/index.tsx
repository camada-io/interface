'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Card } from '../Card'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export const Carousel = () => {
  const slides = [
    {
      defaultImage: '/images/backgroundCardDefault.svg',
      letter: 'A',
      description: 'BLOCK A',
      progress: '40%',
      expectedRaise: '$11,549,430',
    },
    {
      defaultImage: '/images/backgroundCardDefault.svg',
      letter: 'B',
      description: 'BLOCK B',
      progress: '20%',
      expectedRaise: '$11,549,430',
    },
    {
      defaultImage: '/images/backgroundCardDefault.svg',
      letter: 'C',
      description: 'BLOCK C',
      progress: '80%',
      expectedRaise: '$11,549,430',
    },
    // {
    //   defaultImage: '/images/backgroundCardDefault.svg',
    //   letter: 'D',
    //   description: 'BLOCK D',
    //   progress: '80%',
    //   expectedRaise: '$11,549,430',
    // },
    // {
    //   defaultImage: '/images/backgroundCardDefault.svg',
    //   letter: 'D',
    //   description: 'BLOCK D',
    //   progress: '80%',
    //   expectedRaise: '$11,549,430',
    // },
    // {
    //   defaultImage: '/images/backgroundCardDefault.svg',
    //   letter: 'E',
    //   description: 'BLOCK E',
    //   progress: '80%',
    //   expectedRaise: '$11,549,430',
    // },
  ]

  const slidesPerViewConfig = slides.length <= 3 ? slides.length : 3
  const centeredSlidesConfig = slides.length < 3

  return (
    <div className="flex w-full justify-center items-center h-full">
      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerViewConfig}
        centeredSlides={centeredSlidesConfig}
        mousewheel={false}
        simulateTouch={false}
        preventClicks={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        scrollbar={false}
        className="w-full relative"
        modules={[Navigation, Pagination, FreeMode]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {slides.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              maxWidth: '398px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card defaultImage={card.defaultImage} />
          </SwiperSlide>
        ))}
        <RiArrowRightSLine size={24} className="swiper-button-next" />
        <RiArrowLeftSLine size={24} className="swiper-button-prev" />
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}
