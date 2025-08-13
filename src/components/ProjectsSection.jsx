import React from 'react'

const Projects = [
  {
    id: 1,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://www.coastaldreamrentals.com/',
    image: 'src/assets/project-img/project1.png' 
  },
  {
    id: 2,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://newvilla1.mydesign.blog/',
    image: 'src/assets/project-img/project2.png'
  },
  {
    id: 3,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://newvilla2.mydesign.blog/',
    image: 'src/assets/project-img/project3.png'
  },
  {
    id: 4,
    title: 'Property Peoject',
    description: 'website',
    link: 'https://newvilla3.mydesign.blog/',
    image: 'src/assets/project-img/project4.png'
  },
  {
    id: 5,
    title: 'Final Project',
    description: 'The description of my last project.',
    link: 'https://github.com/your-username/final-project',
    image: 'src/assets/project-img/project5.png'
  },
  // Add more projects here
];
const projectsPerPage = 3;

const projectsSection = () => {
           const [currentIndex, setCurrentIndex] = useState(0);
          
            const totalPages = Math.ceil(projects.length / projectsPerPage);
          
            const nextSlide = () => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
            };
          
            const prevSlide = () => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
            };
  return (
    <>
        <section className="py-12 ">
      <div className="container mx-auto px-4 relative overflow-hidden">
        <h2 className="text-center mb-10 text-[34px] text-[#000] font-[300] mx-59">My Projects</h2>
        
        {/* Carousel Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * (100 / projectsPerPage)}%)` }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#000000ae] bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-center">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-center">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#1c75bc] hover:bg-[#1c74bcfe] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 p-4 ">
          <button
            onClick={prevSlide}
            className="p-5 bg-white rounded-full shadow-md z-10 hover:bg-gray-200"
          >
          <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 bg-white rounded-full shadow-md z-10 hover:bg-gray-200"
          >
           <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects
