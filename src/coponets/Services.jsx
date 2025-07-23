import {
  Code,
  TrendingUp,
  Search,
  Smartphone,
  BarChart3,
  Target,
  Palette,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Performance Optimization", "Custom Development"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
    features: ["Social Media Marketing", "Content Strategy", "Email Marketing"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and organic traffic with our proven SEO strategies.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO"]
  },
  {
    icon: Smartphone,
    title: "ASO (App Store Optimization)",
    description:
      "Optimize your mobile app's visibility and downloads in app stores with our ASO expertise.",
    features: ["App Store Ranking", "Conversion Optimization", "Keyword Optimization"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Google Tag Manager and Google Analytics setup for comprehensive data tracking and insights.",
    features: ["Goal Tracking", "Custom Events", "Performance Reports"]
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description:
      "Strategic Google Ads and Meta Ads campaigns that deliver measurable ROI and qualified leads.",
    features: ["Campaign Management", "A/B Testing", "ROI Optimization"]
  },
  {
    icon: Palette,
    title: "Logo & Graphic Design",
    description:
      "Creative design solutions that capture your brand's essence and resonate with your audience.",
    features: ["Brand Identity", "Logo Design", "Marketing Materials"]
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description:
      "Expert technical guidance and consulting to help you make informed decisions about your digital strategy.",
    features: ["Technology Strategy", "System Architecture", "Performance Audits"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-700 text-left">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
