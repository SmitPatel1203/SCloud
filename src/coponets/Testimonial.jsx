import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?auto=format&fit=crop&w=150&q=80',
      content: 'DigitalCraft transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within the first quarter.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      content: 'The team\'s expertise in both web development and digital marketing is unmatched. They delivered exactly what we needed and more.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Local Bistro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      content: 'Working with DigitalCraft was a game-changer for our restaurant. Online orders increased by 250% after our website redesign.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'CTO, FinanceApp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      content: 'Professional, reliable, and results-driven. The DigitalCraft team exceeded our expectations on every level.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Owner, Fashion Boutique',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      content: 'Our e-commerce platform is now beautiful, fast, and user-friendly. Sales have increased significantly since the launch.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Director, Healthcare Plus',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
      content: 'The patient portal they built has streamlined our operations and improved patient satisfaction scores dramatically.',
      rating: 5
    }
  ];

  return (
    <section id='testimonial' className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
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
          ))}
        </div>

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
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="h-16 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;