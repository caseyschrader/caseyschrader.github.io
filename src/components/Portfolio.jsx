import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink, Map, Github, FileCode, Code, Mail, Linkedin, FileText, Download, Loader2, Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(0);

  const personalInfo = {
    name: "Casey Schrader",
    position: "GIS Specialist",
    email: "caseymschrader@gmail.com",
    phone: "(801) 793-6810",
    linkedin: "https://linkedin.com/in/caseyschrader",
    github: "https://github.com/caseyschrader",
    resumeUrl: "/assets/pdfs/CaseyMSchraderResume.pdf"
  };

  const skills = [
    "Python", "R", "SQL","ArcGIS Pro", "REST", "Database Management", "SharePoint",
    "Spatial Analysis", "Remote Sensing", "Lidar and 3D visualization", "Photogrammetry and DEM processing", "Automation", "Model Builder","Survey123", "Russian"
  ];

  const experience = [
    {
      title: "GIS Specialist/Contracted",
      company: "Salt Lake County Surveyor",
      location: "Salt Lake City, UT",
      period: "Aug. 2024 - Current",
      highlights: [
        "Processed 2200+ survey monuments using python automation within ArcGIS and SharePoint to be displayed on a public web map",
        "Wrote multiple scripts utilizing SharePoint's API to efficiently update monument meta-data and decreasing monument process time by 60%",
        "Wrote documentation and meta-data for geospatial data to enhance future accessibility",
        "Improved standardized QA/QC procedures for monument data verification"
      ]
    },
    {
      title: "GIS Intern",
      company: "Utah Geological Survey",
      location: "Salt Lake City, UT",
      period: "Dec. 2023 - Apr. 2024",
      highlights: [
        "Georeferenced approximately 300 archive images, increasing accessibility and organization for future users",
        "Created centroids for each image to help orientate users in the field",
        "Maintained a database consisting of 20,000+ images and files"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science, Geography",
      degree2: "Bachelor of Arts, International Studies",
      certificate: "GIS Certificate",
      school: "University of Utah",
      location: "Salt Lake City, UT",
      date: "May 2024"
    },
    {
      degree: "Russian Language Certificate",
      school: "Minsk State Linguistic University",
      location: "Minsk, Belarus",
      date: "May 2023"
    }
  ];

  const projects = [
    {
      title: "Solar Energy Production Analysis - Salt Lake City",
      description: "Analysis of solar energy production potential across urban and residential buildings in Salt Lake City using .5m Lidar digital surface models.",
      type: "GIS Analysis",
      date: "March 2024",
      highlights: [
        "Analyzed 13km² of Lidar DSM data",
        "Identified 40,299 suitable buildings for solar installation",
        "Calculated potential yearly output of 34 Megawatts",
        "Created comprehensive GIS analysis and visualization"
      ],
      tools: ["ArcGIS Pro", "Lidar", "Spatial Analysis", "Solar Radiation Modeling"],
      key_findings: "Found that installing solar panels on suitable buildings in SLC could cover 4-5% of the city's energy consumption.",
      pdfUrl: "/assets/pdfs/solar_energy.pdf",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Analysis of the Rim Fire in Yosemite",
      description: "Comprehensive analysis of the 2013 Rim Fire's impact on Yosemite National Park and assessment of future fire risks.",
      type: "Remote Sensing Analysis",
      date: "April 2024",
      highlights: [
        "Analyzed 257,314 acres of affected area",
        "Created burn severity maps using NDMI",
        "Conducted change detection analysis over 10 years",
        "Developed fire risk assessment models"
      ],
      tools: ["Remote Sensing", "Landsat 8", "NDMI Analysis", "Change Detection"],
      key_findings: "Identified lasting impacts of severe burns and developed risk assessment strategies for future fire prevention.",
      pdfUrl: "/assets/pdfs/yosemite.pdf",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "UAV Lidar Analysis - Sunnyside Park",
      description: "Exploration and analysis of Sunnyside Park topography using UAV-mounted Lidar technology.",
      highlights: [
        "Conducted UAV Lidar flights at multiple altitudes",
        "Generated high-resolution DTM and DSM",
        "Performed comparative analysis with SfM data",
        "Created comprehensive terrain analysis maps"
      ],
      tools: ["UAV Lidar", "ENVI + IDL", "ArcGIS Pro", "Point Cloud Processing"],
      key_findings: "Demonstrated superiority of Lidar for accurate terrain mapping compared to SfM methods.",
      pdfUrl: "/assets/pdfs/sunnyside.pdf",
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const githubRepos = [
    {
      name: "SLCO SharePoint Automation",
      description: "Python scripts for automating survey monument processing with ArcGIS and SharePoint integration.",
      language: "Python",
      url: "https://github.com/caseyschrader/SLCOSharePointAutomation"
    },
    {
      name:"Greenspace Accessibility Analysis",
      description: "Python script analyzing accessibility of urban green spaces in Salt Lake City using OSMnx and GeoPandas.",
      language: "Python",
      url: "https://github.com/caseyschrader/green_space_analysis"
    },

    {
      name:"Asteroids",
      description: "A simple yet fun remake of the classic 'Asteroids' in Python to showcase classes and OOP.",
      language: "Python",
      url: "https://github.com/caseyschrader/Asteroids"
    }
  ];

  const rProjects = [
    {
      title: "Real Estate Pricing Analysis in R",
      description: "Comprehensive R analysis demonstrating spatial data processing techniques, statistical analysis, and visualization methods for real estate pricing data.",
      topics: ["ggplot2", "linear regression", "spatial statistics"],
      lastUpdated: "",
      url: "https://rpubs.com/casch15/1066990",
      type: "R Analysis"
    }
  ];

  const renderHeader = () => (
    <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-6">{personalInfo.position}</h2>
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center text-blue-600 hover:text-blue-800">
          <Mail className="w-5 h-5 mr-2" />
          caseymschrader@gmail.com
        </a>
        <a href={`tel:${personalInfo.phone}`} className="flex items-center text-blue-600 hover:text-blue-800">
          <Phone className="w-5 h-5 mr-2" />
          {personalInfo.phone}
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a 
          href={personalInfo.resumeUrl} 
          download="Casey_Schrader_Resume.pdf" 
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FileText className="w-5 h-5 mr-2" />
          Resume
        </a>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-600 mb-8">
        I am a GIS specialist with skills in spatial analysis, data management, programming, and data visualization.
        I strive to uncover insights within geographic information and transform raw data into useful solutions.
        My adaptability, problem-solving, and commitment to continous learning make me a valuable assest in any
        collaborative environment.
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Relevant Experience</h3>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border-l-4 border-[#2171B5] pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">{job.title}</h4>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Education</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-900">{edu.school}</h4>
              <p className="text-gray-600">{edu.degree}</p>
              {edu.degree2 && <p className="text-gray-600">{edu.degree2}</p>}
              {edu.certificate && <p className="text-gray-600">{edu.certificate}</p>}
              <p className="text-sm text-gray-500">{edu.location} • {edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => {
    return (
      <div className="space-y-8"> {/* This creates vertical spacing between projects */}
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <Map className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Findings</h3>
                <p className="text-gray-600">{project.key_findings}</p>
              </div>
  
              <a 
                href={project.pdfUrl}
                download={`${project.title.split(" ").join("")}.pdf`}
                className="bg-[#2171B5] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-52 duration-300 flex justify-center items-center gap-2"
              >
                <span>Download Project PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderGithub = () => (
    <div className="grid gap-6 md:grid-cols-2">
      {githubRepos.map((repo, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Github className="w-6 h-6 text-gray-600 mr-2" />
              <h3 className="text-xl font-semibold">{repo.name}</h3>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{repo.description}</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                {repo.language}
              </span>
            </div>
           
          </div>
          <a href={repo.url} className="bg-[#2171B5] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-48 justify-center duration-300 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 mr-1" />
              View Repository
          </a>
        </div>
      ))}
    </div>
  );

  const renderRProjects = () => (
    <div className="space-y-8">
      {rProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden p-6"
        >
          <div className="flex items-center mb-2">
            <Code className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">
              {project.type}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2171B5] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View on RPubs
            </a>
          </div>
        </div>
      ))}
    </div>
  );
  

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return renderAbout();
      case 'github':
        return renderGithub();
      case 'r':
        return renderRProjects();
      case 'projects':
        return renderProjects();
      default:
        return renderAbout();
    }
  };

  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url(/assets/pdfs/bluedemart2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white/30 min-h-screen backdrop-blur-md">
        {/* Make the header more transparent */}
        <div className="bg-white/40 backdrop-blur-sm shadow-lg rounded-lg mb-8 p-8">
          {/* Header content remains the same */}
          {renderHeader()}
        </div>

        {/* Style the navigation */}
        <div className="border-b border-white/20 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'about', label: 'About', icon: FileText },
              { id: 'projects', label: 'Projects', icon: Map },
              { id: 'github', label: 'GitHub', icon: Github },
              { id: 'r', label: 'R', icon: Code }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-900'
                    : 'border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Wrap the content in a transparent container */}
        <div className="bg-white/40 backdrop-blur-sm rounded-lg shadow-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;