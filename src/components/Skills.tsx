
import { Code2, Settings, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
  
  

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={28} />,
      gradient: "from-blue-500 to-cyan-400",
      bgGlow: "bg-blue-500/10",
      hoverGlow: "hover:shadow-blue-500/50",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "HTML/CSS" }
      ]
    },
    {
      title: "Backend",
      icon: <Settings size={28} />,
      gradient: "from-green-500 to-emerald-400",
      bgGlow: "bg-green-500/10",
      hoverGlow: "hover:shadow-green-500/50",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={28} />,
      gradient: "from-purple-500 to-pink-400",
      bgGlow: "bg-purple-500/10",
      hoverGlow: "hover:shadow-purple-500/50",
      skills: [
        { name: "Git" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-4">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">Tech Stack</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of cutting-edge technologies and tools that power my development journey
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                
                
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 ${category.hoverGlow} hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Category Header */}
                <div className="relative text-center mb-8 space-y-4">
                  <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="relative grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      
                      className={`group/skill relative bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                        category.skills.length === 1 ? 'col-span-2' : ''
                      }`}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/skill:translate-x-[200%] transition-transform duration-1000"></div>
                      
                      {/* Skill Name */}
                      <div className="relative flex items-center justify-center h-full">
                        <span className="text-white font-semibold text-center text-sm group-hover/skill:text-gray-100 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl">
              <span className="text-gray-300 text-lg font-medium">Always learning</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-gray-300 text-lg font-medium">always growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;