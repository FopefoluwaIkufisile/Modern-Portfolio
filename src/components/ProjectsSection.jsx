import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Loopstudios Landing Page",
    description: "A visually appealing landing page built with React and TailwindCSS.",
    image: "https://i.ibb.co/GQR2sJx2/Screenshot-2025-05-02-at-2-35-02-AM.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://fopefoluwaikufisile.github.io/Loopstudios-landing-page/",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Loopstudios-landing-page",
  },
  {
    id: 2,
    title: "Movie App (TMDB API & Appwrite)",
    description:
      "An interactive movie website leveraging the TMDB API and Appwrite for backend functionality, including top user searches.",
    image: "https://i.ibb.co/2XCyZqd/Screenshot-2025-05-02-at-3-53-03-AM.png",
    tags: ["React", "TailwindCSS", "Appwrite"],
    demoUrl: "https://fopefoluwaikufisile.github.io/movie-page-TMDB-API-and-Appwrite-integration-/",
    githubUrl: "https://github.com/FopefoluwaIkufisile/movie-page-TMDB-API-and-Appwrite-integration-",
  },
  {
    id: 3,
    title: "Shop Desk (Team Project)",
    description:
      "A cloud based inventory management software that helps you track stock, process sales, and generate business records so you can focus on growing your business.",
    image: "https://i.ibb.co/Pn42Bmj/Screenshot-2025-03-31-at-2-26-38-AM.png",
    tags: ["Nextjs", "Node.js", "TailwindCss"],
    demoUrl: "https://shopdesk.im/",
    githubUrl: "https://shopdesk.im/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection
