import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = () => {
    const [bannerImages, setBannerImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/bannerImage.json")
            .then((res) => res.json())
            .then((data) => {
                setBannerImages(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>;
    }

    return (
        <div className="w-full h-[400px] mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Navigation, Pagination, Autoplay]}
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
