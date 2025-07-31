import heroImage from "../assets/web-dev-digitalmarketing.png";
import Contact from '../components/Contact';

const Hero = () => {
    return (
        <section className="hero-section bg-gradient-to-br from-blue-50 to-purple-50" id="home">
            <div className="max-w-7xl mx-auto px-4 pt-35 pb-20 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="bg-yellow-400 text-blue-900 font-semibold px-4 py-1 rounded-full inline-block text-sm mb-4">Design. Develop. Dominate. — All in One Place</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-snug font-bold text-gray-900 mb-4 mt-3">
                        Your <b className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>All-in-One</b> Digital Partner - SCloud
                    </h1>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        At SCloud, we help startups, small businesses, and enterprises build powerful online brands through professional website development, advanced SEO strategies, social media marketing, logo & brand design, Google Ads, and content creation. We don’t just provide services — we deliver results that grow your traffic, leads, and revenue.
                    </p>
                    <div className="flex justify-center lg:justify-start items-center gap-4">
                        <a href="#contact" className=" bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-400 hover:text-white font-bold transition  duration-200">
                            Contact Now
                        </a>
                        {/* <a href="https://tispy.net/demo/" className="text-white font-medium hover:underline">
                            View Demo
                        </a> */}
                    </div>
                </div>

                {/* Right: Image or Illustration */}
                <div className="w-full lg:w-1/2">
                    <img src={heroImage} alt="Hero illustration" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;