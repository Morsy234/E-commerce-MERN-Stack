// import React from 'react'
// import { assets } from '../assets/frontend_assets/assets'

// function Hero() {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//         {/* Left Side */}
//         <div className='w-full sm:w-1/2 flex  justify-center items-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:textbase'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='text-3xl sm:py lg:text-5xl leading relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base '>Shop Now</p>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

//                 </div>

//             </div>
    
//         </div>

//         {/* Right Side */}
//         <div className='w-full sm:w-1/2'>
//             <img src={assets.hero_img} alt=" "/>
//         </div>
      
//     </div>
//   )
// }

// export default Hero




import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {

  const slides = [
    {
      img: assets.hero_img,
      title: "Latest Drop",
      subtitle: "OUR BESTSELLERS"
    },
    {
      img: assets.hero_img2,
      title: "Summer Collection",
      subtitle: "NEW TREND"
    },
    {
      img: assets.hero_img3,
      title: "Exclusive Deals",
      subtitle: "LIMITED OFFER"
    },
    {
      img: assets.hero_img4,
      title: "Shop Your Style",
      subtitle: "TRENDING NOW"
    }
  ]

  // duplicate first slide for smooth loop
  const extendedSlides = [...slides, slides[0]]

  const [current, setCurrent] = useState(0)
  const [transition, setTransition] = useState(true)

  const startX = useRef(0)
  const isDragging = useRef(false)

  const nextSlide = () => {
    if (current < extendedSlides.length - 1) {
      setCurrent(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1)
    }
  }

  // smooth infinite reset
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false)
        setCurrent(0)
      }, 700)

      setTimeout(() => {
        setTransition(true)
      }, 750)
    }
  }, [current])

  // swipe / drag
  const handleStart = (e) => {
    isDragging.current = true
    startX.current = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  }

  const handleEnd = (e) => {
    if (!isDragging.current) return

    const endX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()

    isDragging.current = false
  }

  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-black"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >

      {/* Slider */}
      <div
        className={`flex ${transition ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            <img
              src={slide.img}
              className="block w-screen h-[600px] sm:h-[700px] lg:h-[800px] object-cover"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="text-white">

            <div className="flex items-center gap-2 mb-3">
              <p className="w-8 md:w-11 h-[2px] bg-white"></p>
              <p className="font-medium text-sm md:text-base">
                {slides[current % slides.length].subtitle}
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
              {slides[current % slides.length].title}
            </h1>

            <div className="flex items-center gap-2 cursor-pointer">
              <p className="font-semibold text-sm md:text-base">
                Shop Now
              </p>
              <p className="w-8 md:w-11 h-[2px] bg-white"></p>
            </div>

          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 hover:bg-black text-white p-4 rounded-full transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 hover:bg-black text-white p-4 rounded-full transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current % slides.length === index
                ? 'bg-white scale-125'
                : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

    </div>
  )
}

export default Hero