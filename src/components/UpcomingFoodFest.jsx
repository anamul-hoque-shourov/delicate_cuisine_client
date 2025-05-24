import React from 'react';

const UpcomingFoodFest = () => {
    const foodFestData = [
        {
            id: 1,
            image: "https://i.ibb.co/99pc392z/1.jpg",
            title: "Street Food Carnival",
            date: "June 15, 2025",
            location: "Dhaka, Bangladesh",
            description: "Experience a variety of street food from across the country!"
        },
        {
            id: 2,
            image: "https://i.ibb.co/9HvWC9ph/2.jpg",
            title: "International Cuisine Fiesta",
            date: "July 2, 2025",
            location: "Chattogram Convention Center",
            description: "A taste of world cuisines — from sushi to shawarma!"
        },
        {
            id: 3,
            image: "https://i.ibb.co/NnxBY7Th/3.jpg",
            title: "Summer BBQ Fest",
            date: "July 20, 2025",
            location: "Sylhet Riverside Park",
            description: "Grilled perfection, music, and good vibes all around."
        },
        {
            id: 4,
            image: "https://i.ibb.co/nNxP4v2c/4.jpg",
            title: "Dessert Delights Week",
            date: "August 5–10, 2025",
            location: "Rajshahi City Hall",
            description: "Indulge in sweets, pastries, and desserts from top chefs."
        },
        {
            id: 5,
            image: "https://i.ibb.co/SXmKYPF7/5.jpg",
            title: "Spice Street Festival",
            date: "September 12, 2025",
            location: "Khulna Food Plaza",
            description: "Hot and spicy dishes that will fire up your taste buds!"
        },
        {
            id: 6,
            image: "https://i.ibb.co/7ddfx0Vq/6.jpg",
            title: "Vegan Food Celebration",
            date: "October 3, 2025",
            location: "Barisal Green Grounds",
            description: "Celebrate healthy, sustainable and plant-based cuisine."
        }
    ];

    return (
        <div className="py-10 px-4 max-w-7xl mx-auto mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-500">Upcoming Food Festivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foodFestData.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {item.date}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> {item.location}</p>
                            <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingFoodFest;
