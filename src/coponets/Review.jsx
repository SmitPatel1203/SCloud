import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote } from 'lucide-react';

import Client1 from '../assets/Clients/Client1.jpg'
import Client2 from '../assets/Clients/Client2.jpg'
import Client3 from '../assets/Clients/Client3.jpg'
import Client4 from '../assets/Clients/Client4.jpg'
import Client5 from '../assets/Clients/Client5.jpg'
import Client6 from '../assets/Clients/Client6.jpg'
const testimonials = [
  {
    name: 'Dixit Patel',
    role: 'Co-Founder',
    image: Client6,
    content: 'SCloud did an amazing job optimizing my website. They greatly improved the speed, which has made a noticeable difference in user experience and search rankings.',
    rating: 5
  },
  {
    name: 'Harsh Patel',
    role: 'Owner of C.G.Fast Food',
    image: Client2,
    content: 'SCloud Meta Ads and organic strategies for Facebook and Instagram have been a game-changer for C.G. Fast Food!(Visnagar) We saw a massive increase in traffic...',
    rating: 5
  },
  {
    name: 'Nilesh Patel',
    role: 'Founder',
    image: Client1,
    content: 'A huge thank you to the team at S-Cloud for their exceptional work on our recent website redesign project. Their creativity, technical expertise, and attention to...',
    rating: 5
  },
  {
    name: 'Jayveer HealthCare',
    role: 'Co-Founder, Piyush Patel',
    image: Client3,
    content: 'Thank you, SCloud Digital Agency, for crafting a website that not only meets but exceeds my expectations! The speed and excellence of your service are truly commendable.',
    rating: 5
  },
  {
    name: 'Yash Patel',
    role: 'Owner, Photo Gallery',
    image: Client4,
    content: 'SCloud email marketing services significantly boosted my campaign performance with their expert strategies and professional execution. Highly recommend them for outstanding results and ongoing support!',
    rating: 5
  },
  {
    name: 'Bhoomi Joshi',
    role: 'Owner, SRK Education',
    image: Client5,
    content: 'We partnered with SCloud for our coaching class’s digital growth – including SEO, social media marketing, logo, and brand design. Their team delivered professional, well-thought-out solutions that truly elevated...',
    rating: 5
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="review" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-[5px]">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 mb-5">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mb-2" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            {/* <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div> */}
            {/* <div className="h-16 w-px bg-gray-200"></div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
