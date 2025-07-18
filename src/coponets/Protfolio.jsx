import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'blue'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Design & Development',
      description: 'Modern restaurant website with online ordering and reservation system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Tailwind', 'Firebase', 'PWA'],
      color: 'purple'
    },
    {
      title: 'SaaS Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategy that increased leads by 400%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      tags: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics'],
      color: 'green'
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'Patient management system with appointment scheduling and medical records.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'HIPAA'],
      color: 'red'
    },
    {
      title: 'Brand Redesign',
      category: 'Branding & Marketing',
      description: 'Complete brand overhaul including logo, website, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
      tags: ['Branding', 'UI/UX', 'Social Media', 'Content'],
      color: 'indigo'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'Property listing platform with advanced search and virtual tours.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Maps API', 'Virtual Tours'],
      color: 'pink'
    }
  ];

//   const getCategoryColor = (color: string) => {
   
//     const colors = {
//       blue: 'bg-blue-100 text-blue-800',
//       purple: 'bg-purple-100 text-purple-800',
//       green: 'bg-green-100 text-green-800',
//       red: 'bg-red-100 text-red-800',
//       indigo: 'bg-indigo-100 text-indigo-800',
//       pink: 'bg-pink-100 text-pink-800'
//     };
//     return colors[color as keyof typeof colors] || colors.blue;
//   };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink className="h-4 w-4 text-gray-700" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <Github className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className={"inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 "}>
                  {project.category}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;