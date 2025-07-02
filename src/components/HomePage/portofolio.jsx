import { useState } from "react";

const categories = [
  "All",
  "Ecommerce",
  "Apps",
  "Web",
  "Social",
  "Educational",
  "Fintech",
  "Healthcare",
];

const projects = [
  { title: "E-Commerce Platform", category: "Ecommerce", image: "https://via.placeholder.com/400" },
  { title: "Mielle Website", category: "Web", image: "https://via.placeholder.com/400" },
  { title: "Amala Earth", category: "Ecommerce", image: "https://via.placeholder.com/400" },
  { title: "FastGrowingTrees", category: "Web", image: "https://via.placeholder.com/400" },
  { title: "LG Website", category: "Apps", image: "https://via.placeholder.com/400" },
  { title: "Jiffy Shirts", category: "Ecommerce", image: "https://via.placeholder.com/400" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">Our Projects</h2>

        {/* Filtering Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-yellow-400">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
