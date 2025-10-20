import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="text-6xl mb-3">{project.icon}</div>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Xem chi tiết
              </button>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role and Features */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Vai trò:</span>
            <span>{project.role}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Chức năng chính:</span>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-xs">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <a 
            href={project.demo}
            {...(project.demo && project.demo.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
          >
            🚀 Xem dự án
          </a>
          <a 
            href={project.github}
            {...(project.github && project.github.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
          >
            💻 Mã nguồn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
