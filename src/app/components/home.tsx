// "use client";
import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
import { client } from "../../sanity/lib/sanity";

const HomePage = async () => {
  // adding schema

  // Fetch data
  const hero = await client.fetch(`*[_type == "hero"][0]{
    fullName,
    paragraph,
    aboutdps,
    aboutdp,
    jobtitle,
    'imageUrl': profile_picture.asset->url,
  }`);
  const skillQuery: any = `
    *[_type == "skill"]{
    title,
    'imageUrl':image.asset->url
    
    
    }
    
    
    `;

  const projects = await client.fetch(`
    *[_type == "project"]{
    title,
    description,
    'imageUrl': image.asset->url,
    tags,
    link
    
    
    }
    
    
    
    `);

  const skills = await client.fetch(skillQuery);

  return (
    <>
    <div className="h-10"></div>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Personal Image */}
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Hi, I'm <span className="text-blue-600">{hero.fullName}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                {hero.jobtitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
{hero.paragraph}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/projects"
                  className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
                >
                  View Projects
                </a>
        
            </div>

            {/* Social Links */}
            <div className="flex gap-6 ml-5">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
    
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-[600px] h-[600px]  rounded-3xl max-md:rounded-full overflow-hidden">
              <div className=""></div>
              <img
                src={hero.imageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 to-purple-100 blur-3xl transform translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </div>
    </div>
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              {/* About Me's First Paragraph  */}
              {hero.aboutdp}
            </p>
            <p className="text-lg text-gray-600">
              {/* About me's second parahraph */}
              {hero.aboutdps}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill: any, index: number) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg flex gap-3 items-center shadow-sm text-center"
              >
                <img
                  src={skill.imageUrl}
                  alt="image"
                  className="h-[50px] w-[50px]"
                />

                <h1 className="text-gray-800">{skill.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: any, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center mt-4 text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            {/* Footer Heading */}
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {/* footer paragraph */}
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to connect!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Saudabbasi47"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saudabbasiofficial/"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div></>
  );
};

export default HomePage;
