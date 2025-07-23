import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
const Footer = () => {
    const footerLinks = {
        services: [
            'Web Development',
            'Mobile Development',
            'Digital Marketing',
            'SEO Optimization',
            'Social Media Marketing',
            'Brand Design'
        ],
        company: [
            'About Us',
            'Our Team',
            'Careers',
            'Portfolio',
            'Blog',
            'Contact'
        ],
        resources: [
            'Case Studies',
            'White Papers',
            'Free Tools',
            'Webinars',
            'Support',
            'Documentation'
        ]
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                               <img src='#'></img>
                            </div> */}
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                SCloud
                            </span>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Expert web development and digital marketing solutions that help businesses thrive in the digital world.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-300">infoscloud06@gmail.com</span>
                            </div>
                            {/* <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </div> */}
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-300">Jagatpur, Ahmedabad, Gujarat, India.</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a href="#"
                                        className="text-gray-300 hover:text-white transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#services"
                                        className="text-gray-300 hover:text-white transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                            <p className="text-gray-300">
                                Subscribe to our newsletter for the latest web development and marketing tips.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <input type="email" placeholder="Enter your email"className="flex-1 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"/>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 SCloud. All rights reserved.
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;