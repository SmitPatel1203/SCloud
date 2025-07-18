import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img src={heroImage}
                    alt="Digital Agency Hero"
                    className="w-full h-full object-cover"/>
                <div className="absolute inset-0 hero-gradient opacity-75"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Transform Your
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                            Digital Presence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                        We're a full-service digital agency specializing in web development, digital marketing, and design.
                        Let us elevate your brand and drive measurable results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            className="flex items-center justify-center border border-white/30 text-white px-8 py-6 text-lg rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            Start Your Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>

                        {/* Outline Button */}
                        <button
                            className="flex items-center justify-center border border-white/30 text-white px-8 py-6 text-lg rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <Play className="mr-2 h-5 w-5" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                            <div className="text-white/80">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                            <div className="text-white/80">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                            <div className="text-white/80">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;