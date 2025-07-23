import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactLogo from '../assets/logos/react.svg';

const StatsSlider = () => {
    const stats = [
        { src: reactLogo, name: 'react' },
        { src: reactLogo, name: 'react' },
        { src: reactLogo, name: 'react' },
        { src: reactLogo, name: 'react' },
        { src: reactLogo, name: 'react' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-gray-50 py-20 bg-gray-50 relative ">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <Slider {...settings}>
                    {stats.map((item, index) => (
                        <div key={index} className="px-3">
                            <div className="bg-white rounded-xl shadow text-center py-6 px-2 h-full">
                                {/* <h3 className="text-3xl font-extrabold text-blue-600">{item.number}</h3>
                <p className="mt-2 font-medium text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p> */}
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="w-[30%] object-contain rounded-[10px]" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default StatsSlider;

// const NextArrow = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute -right-6 lg:-right-12 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-20 cursor-pointer hover:bg-blue-700 transition">
//         &gt;
//     </div>
// );

// const PrevArrow = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute -left-6 lg:-left-12 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-20 cursor-pointer hover:bg-blue-700 transition">
//         &lt;
//     </div>
// );
