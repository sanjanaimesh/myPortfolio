
import { Mail, MapPin, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      content: "sanjanaimesh@gmail.com",
      link: "mailto:sanjanaimesh@gmail.com",
      gradient: "from-blue-500 to-cyan-400",
      bgGlow: "bg-blue-500/10",
      hoverGlow: "hover:shadow-blue-500/50"
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      content: "+94 770695919",
      link: "tel:+94770695919",
      gradient: "from-green-500 to-emerald-400",
      bgGlow: "bg-green-500/10",
      hoverGlow: "hover:shadow-green-500/50"
    },
    {
      icon: <MapPin size={28} />,
      title: "Location",
      content: "No 142 Papolayaya Kuruwawa Rattota Matale",
      link: "#",
      gradient: "from-purple-500 to-pink-400",
      bgGlow: "bg-purple-500/10",
      hoverGlow: "hover:shadow-purple-500/50"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/sanjanaimesh",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sanjana-ranaweera-4bb4382a1/",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-4">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">Let's Connect</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                
                
                className={`group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 ${info.hoverGlow} hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative mb-4 inline-flex p-4 bg-gradient-to-br ${info.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-2">
                  <h4 className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {info.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {info.content}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Send size={18} className="text-gray-400 transform rotate-45" />
                </div>
              </a>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Follow My Journey</h4>
                <p className="text-gray-400 text-sm">Connect with me on social platforms</p>
              </div>
              
              <div className="flex justify-center gap-4 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-5 bg-gradient-to-br ${social.gradient} rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl overflow-hidden`}
                    title={social.name}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <div className="relative text-white">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <div className="relative border-t border-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Sanjana Ranaweera. Crafted with passion using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;