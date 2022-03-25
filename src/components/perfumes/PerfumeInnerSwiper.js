import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination'; 

const PerfumeInnerSwiper = ({mainImg, images}) => {
console.log(images)
    return ( 
        images ?
        <Swiper 
        modules={[Pagination]} 
        spaceBetween={50} 
        slidesPerView={1} 
        pagination={{ 
            clickable: true,
            renderBullet: function (index, className) {
                return  `<div class="${className}">
                <img src="${images[index].urls.regular}" alt="perfume photo">
                </div>`

            },
         }}
        >
        <SwiperSlide><img src={mainImg} alt="perfume image" /></SwiperSlide>
        {
            images ? images.map((image, index)=> (
                <SwiperSlide key={index}><img src={image.urls.regular} alt="" /></SwiperSlide>
            )) : <h3 className="error-message">Cannot load images</h3>
        }
        </Swiper>
        :
        <h3 className="error-message">Error occured</h3>
    )
}
 
export default PerfumeInnerSwiper;