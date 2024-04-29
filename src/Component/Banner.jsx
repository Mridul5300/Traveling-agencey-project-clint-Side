import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Component/Slide style/Style.css'
import { Autoplay } from 'swiper/modules';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

  // const {text} = useTypewriter({
  //   word : [],
  //   loop:{},
  //   typeSpeed:120,
  //   deleteSpeed:50
  // })
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

     return (
          <div >
       <div className='mt-2 relative'>


<div  className="absolute inset-y-0 left-0 flex  items-center justify-center  pl-52  pr-6 z-10">
  <div className="bg-blue-200 bg-opacity-50 backdrop-filter bg-none backdrop-sepia-0 backdrop-blur-none px-4 py-2 rounded-md text-black max-w-md backdrop-opacity-0 backdrop-invert bg-white/30 ">
    <h2 className="text-4xl font-bold"></h2>
    <Typewriter
            words={["Explore"," our", "curated ","selection", "of"," beautiful", "home Your New Home" ,"Today With Us.",
              "Finding the home", "commercial", "or office you will love to rent or buy just got easier"]}
            loop={5}
cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            // onType={handleType}
          />
          {/* <h2 className="text-4xl font-bold">{text}</h2> */}
    <p className="font-serif text-xl font-medium mt-2">Explore our curated selection of beautiful home Your New Home Today With Us.
      Finding the home, commercial, or office you will love to rent or buy just got easier.</p>
  </div>
  <div>
     <h2>Aita Logo Section</h2>
  </div>
</div>


<Swiper className="mySwipe  h-[500px] relative rounded-md"
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay]}
>
  <SwiperSlide><img src="https://i.ibb.co/7Gx6LgX/pexels-n-voitkevich-7235893.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/jMm7F1P/pexels-n-voitkevich-7235808.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/WPHggY1/pexels-n-voitkevich-7235904.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/mNhNjN4/pexels-ekrulila-2305765.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/FhrRxD2/vacation-trip-adventure-holiday-concept.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/ZxVTHDD/pexels-n-voitkevich-7235894.jpg" alt="" /></SwiperSlide>
</Swiper>

</div>
          </div>
     );
};

export default Banner;