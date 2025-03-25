import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-emerald-500">JD</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-emerald-500">John Doe</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:john@example.com" icon={<Mail />} />
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl mx-auto max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with 5 years of experience building web applications.
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <div className="space-y-4">
                <SkillBar skill="React" percentage={90} />
                <SkillBar skill="Node.js" percentage={85} />
                <SkillBar skill="TypeScript" percentage={80} />
                <SkillBar skill="UI/UX Design" percentage={75} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800"
                alt="Coding"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured online store built with React and Node.js"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800"
              link="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task manager with real-time updates"
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800"
              link="https://example.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website built with React and Tailwind"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800"
              link="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition duration-300"
    >
      {icon}
    </a>
  );
}

function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <div
          className="h-2 bg-emerald-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-500 hover:text-emerald-400"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}

export default App;