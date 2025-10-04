import { useState } from 'react';
import { Github, Calendar, Tag, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import HelaImage from '../assets/images/logo2.png'; 
import LankaTech from '../assets/images/card3.png'; 
import Sound from '../assets/images/card2.png'; 
import bestway from '../assets/images/card1.png'; 

const Projects = () => {
  const allProjects = [
    {
      title: "Bestway Agriculture",
      description: "A modern agriculture-focused web platform designed for farmers and agents. It allows farmers to purchase seed varieties online and connect with agents directly for better collaboration. Built with a full-stack approach using React and MySQL, focusing on scalability and usability.",
      image: bestway,
      technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
      githubLink: "https://github.com",
      date: "2025",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "SoundWaves",
      description: "A modern web platform for renting sound equipment. Users can browse, rent, and manage sound items online, while admins can manage inventory and bookings. Built with a full-stack MERN approach focusing on usability and scalability.",
      image: Sound,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/sanjanaimesh/soundwaves-frontend",
      githubLink2: "https://github.com/sanjanaimesh/soundwaves-backend",
      date: "2025",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "LankaTech Innovation Website (Frontend)",
      description: "Contributed to the frontend development of LankaTech Innovation's corporate website using React. Implemented responsive UI components, optimized user experience, and ensured seamless integration with backend services.",
      image: LankaTech,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://lankatechinnovations.com/",
      date: "2024",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "HelaGPT UI",
      description: "Contributed to the UI development of HelaGPT website. Implemented responsive and user-friendly frontend components using React.",
      image: HelaImage,
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://helagpt.com/",
      date: "2023",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  
  const projects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-4">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">Portfolio Showcase</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating my skills in full-stack development, UI/UX design, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                
                
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay on Image */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2">
                      {project.liveLink && !project.githubLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-lg`}
                        >
                          <ExternalLink size={14} />
                          <span>Live Site</span>
                        </a>
                      )}

                      {project.githubLink && project.githubLink2 && (
                        <>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700"
                          >
                            <Github size={14} />
                            <span>Frontend</span>
                          </a>
                          <a
                            href={project.githubLink2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700"
                          >
                            <Github size={14} />
                            <span>Backend</span>
                          </a>
                        </>
                      )}

                      {project.githubLink && !project.githubLink2 && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700"
                        >
                          <Github size={14} />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className={`p-1.5 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                      <Calendar size={12} className="text-white" />
                    </div>
                    <span className="font-medium">{project.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-lg border border-gray-600/50 hover:border-gray-500 transition-colors duration-200"
                      >
                        <Tag size={10} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`p-2 bg-gradient-to-br ${project.gradient} rounded-lg shadow-lg`}>
                    <ArrowRight size={16} className="text-white transform -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              <span className="relative flex items-center gap-2">
                {showAll ? "See Less" : "View All Projects"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;