import AboutImg from '../assets/about-us.png'

import { Code, Layers, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: <Code className="h-6 w-6 text-white" />,
    title: "Industry Leader",
    desc: "Trusted by brands across pharma, real estate, food, and more.",
  },
  {
    icon: <Layers className="h-6 w-6 text-white" />,
    title: "Digital Services",
    desc: "Web, app, SEO, ads, and branding — all in one place.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Growth Focused",
    desc: "We turn clicks into customers with smart, result-driven strategies.",
  },
  {
    icon: <Headphones className="h-6 w-6 text-white" />,
    title: "24/7 Support",
    desc: "Fast response and expert help — whenever you need it.",
  },
];

const About = () => {
    return (
        <section id='about' className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 text-left lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        About SCloud
                    </h2>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        At SCloud, we’re a results-driven digital agency offering professional website development, mobile app development (Android & iOS), SEO, Google Ads, social media marketing, and branding services — all under one roof.
                    </p>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        We work with a wide range of industries including pharmaceutical companies, real estate developers, hospitals and clinics, visa consultants, coaching institutes, animal product suppliers, hotels and restaurants, food brands, and eCommerce businesses.
                    </p>
                    {/* <p className="text-gray-600 mb-6 text-base sm:text-lg">Our mission is simple — to help you grow your business online with practical strategies, clean design, and consistent support. Whether you need a dynamic website, a custom mobile app, better Google rankings, or more engagement on Instagram and Facebook, our experienced team delivers real results — without the fluff.</p>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">We believe in long-term partnerships, transparent work, and helping our clients succeed in a competitive digital world.</p> */}
                    <div className="grid md:grid-cols-2 gap-5">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow transition duration-300">
                                <div className="flex-shrink-0 w-[54px] h-[54px] rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mr-4 mt-1">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Image or Illustration */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src={AboutImg} alt="About SCloud Web Dev and Digital Marketing" className="w-[80%] h-auto "/>
                </div>
            </div>
        </section >
    )
}
export default About