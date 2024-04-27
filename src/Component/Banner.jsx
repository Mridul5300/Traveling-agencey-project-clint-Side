import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Component/Slide style/Style.css'
import { Autoplay } from 'swiper/modules';


const Banner = () => {
     return (
          <div >
       <div className='mt-2 relative'>


<div  className="absolute inset-y-0 left-0 flex  items-center justify-center justify-evenly pl-52  pr-6 z-10">
  <div className="bg-blue-200 bg-opacity-50 backdrop-filter bg-none backdrop-sepia-0 backdrop-blur-none px-4 py-2 rounded-md text-black max-w-md backdrop-opacity-0 backdrop-invert bg-white/30 ">
    <h2 className="text-4xl font-bold">Discover Your Dream Home</h2>
    <p className="font-serif text-xl font-medium mt-2">Explore our curated selection of beautiful home Your New Home Today With Us.
      Finding the home, commercial, or office you will love to rent or buy just got easier.</p>
  </div>
  <div>
     <h2>Aita Logo Section</h2>
  </div>
</div>


<Swiper className="mySwipe  h-[500px] relative"
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
  <SwiperSlide><img src="https://i.ibb.co/ZgFxK10/webaliser-TPTXZd9m-Oo-unsplash.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/RbHr7R0/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/W5DbQh9/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/SQmnpTK/avi-werde-h-Hz4yrvxwl-A-unsplash.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/6YZykjz/2151264468.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/4N7KrWQ/2150799793.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/sgLpyyc/jared-rice-Ahi-Unolb7cg-unsplash.jpg" alt="" /> </SwiperSlide>
</Swiper>

</div>
          </div>
     );
};

export default Banner;



