import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = () => {
    const [bannerImages, setBannerImages] = useState([]);

    useEffect(() => {
        fetch("/bannerImage.json")
            .then((res) => res.json())
            .then((data) => setBannerImages(data))
            .catch((err) => console.error("Error loading banner images:", err));
    }, []);

    return (
        <div className="w-full h-[400px] mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="h-full"
            >
                {bannerImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.image}
                            alt={`Banner ${image.id}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
