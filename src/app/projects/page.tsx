import React from "react";
import { Github, Globe, Code, ExternalLink } from "lucide-react";
import { client } from "../../sanity/lib/sanity";

const ProjectsPage = async () => {
  const projects = await client.fetch(`
    *[_type == "projects"]{
    title,
    description,
    tags,
    link,
    github,
    highlights,
   "imageUrl":image.asset->url
    
    
    
    }
    
    
    
    `);

  

  return (
<>
<div className="h-12"></div>
  
    <div className="min-h-screen bg-gray-50 ">
      
      {/* Projects Header */}
      <div className="bg-white ">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center mb-6">
            <Code className="w-10 h-10 mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              My Projects
            </h2>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="space-y-12">
          {projects.map((project:any, index:number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Project Highlights */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.highlights.map((highlight:any, i:number) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag:any, tagIndex:number) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      View Code
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default ProjectsPage;
