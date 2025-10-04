import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/images/logo.png'; // <-- image import

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="relative">
              {/* Clean glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-slate-800 animate-spin-slow opacity-80"></div>

              {/* Profile picture */}
              <img
                src={profileImg}
                alt="Sanjana Ranaweera"
                className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full shadow-xl border-4 border-gray-900 object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sanjana Ranaweera
            </span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Full-Stack Software Engineer
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            I craft beautiful, scalable applications using modern technologies. 
            Passionate about clean code, user experience, and solving complex problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            {/* Updated Button: Scroll to Projects */}
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>

            {/* CV Button */}
            {/* <button className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Download CV
            </button> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com/sanjanaimesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjana-ranaweera-4bb4382a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
