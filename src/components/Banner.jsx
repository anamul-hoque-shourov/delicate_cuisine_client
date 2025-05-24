import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

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
        return (
            <div className="text-center mt-10">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="w-full h-[400px] md:h-[500px] mx-auto mb-10 relative">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="h-full rounded-lg"
            >
                {bannerImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="relative w-full h-full">
                            <img
                                src={image.image}
                                alt={`Banner ${image.id}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-center items-center text-white text-center p-4">
                                <Fade cascade damping={0.2}>
                                    <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-2">
                                        Welcome to the <br />
                                        <span className="text-orange-400">
                                            <Typewriter
                                                words={["Food Festival 2025!", "Taste the Culture!", "Celebrate with Flavor!"]}
                                                loop={0}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={60}
                                                deleteSpeed={40}
                                                delaySpeed={2000}
                                            />
                                        </span>
                                    </h2>
                                    <p className="text-sm md:text-lg drop-shadow-md">
                                        Join us for a celebration of flavors, fun, and festivity.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
