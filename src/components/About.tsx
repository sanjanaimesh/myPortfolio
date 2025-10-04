
import { Code, Coffee, Globe, Users, Sparkles, Award, Zap } from 'lucide-react';

const About = () => {
  

  const highlights = [
    {
      icon: <Code size={28} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Globe size={28} />,
      title: "Full-Stack",
      description: "End-to-end development from database to user interface",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Users size={28} />,
      title: "Collaborative",
      description: "Strong team player with excellent communication skills",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Coffee size={28} />,
      title: "Passionate",
      description: "Always learning new technologies and best practices",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const stats = [
    {
      icon: <Award size={20} />,
      label: "Projects Completed",
      value: "2",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Zap size={20} />,
      label: "Open Source",
      value: "Contributor",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden py-20">
      {/* Enhanced Animated Background - More prominent for About section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - Extra Special */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-4 shadow-lg shadow-blue-500/20">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">Get To Know Me</span>
            </div>
            
            <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              About Me
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content with enhanced styling */}
            <div className="space-y-8">
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full blur-2xl"></div>
                
                <div className="relative space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Turning Ideas Into Digital Reality
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p className="relative pl-4 border-l-2 border-blue-500/50">
                      I'm an undergraduate student pursuing a BICT degree, passionate about software engineering and creative problem-solving. I enjoy building modern, user-friendly applications using technologies like React, Node.js, TypeScript, and Flutter.
                    </p>
                    <p className="relative pl-4 border-l-2 border-purple-500/50">
                      Beyond academics, I'm constantly learning new tools, experimenting with projects, and exploring how technology can create meaningful impact.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-4 sm:p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative space-y-2 sm:space-y-3">
                      <div className={`inline-flex p-2.5 bg-gradient-to-br ${stat.gradient} rounded-lg shadow-lg`}>
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-400 break-words">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights with enhanced cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  
                  className="group relative p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  <div className="relative space-y-4">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-3 bg-gradient-to-br ${highlight.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${highlight.gradient} opacity-0 group-hover:opacity-20 rounded-tl-full blur-xl transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;