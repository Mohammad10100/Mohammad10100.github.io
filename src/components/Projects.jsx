import { m, motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "StudyNotion",
        description: "Full Stack EdTech Platform and Content Management System. Features role-based access control, RazorPay payments, Google SMTP, JWT Auth, and Cloudinary media hosting.",
        tags: ["MERN Stack", "Redux", "RazorPay", "JWT"],
        image: "/projects/studynotion.png",
        gitLink: "studynotion-final",
        liveLink: "https://studynotion-edtech-platform.vercel.app"
    },
    {
        title: "ReconizeX",
        description: "Android App Vulnerability Scanner. Custom static analysis tool using Smali parsing and Regex analysis via Nuclei Engine to detect insecure components and misconfigurations.",
        tags: ["Static Analysis", "Smali", "Nuclei", "Cybersecurity"],
        image: "/projects/reconizex.png",
        gitLink: "ReconizeX"
    },
    {
        title: "E Bazaar",
        description: "An Agricultural E-commerce platform enabling farmers to directly sell crops to buyers. Includes auth, sales tracking, CRUD operations, and a membership system.",
        tags: ["React.js", "Firebase", "MongoDB", "SCSS"],
        image: "/projects/ebazaar.png"
    },
    {
        title: "Movie Recommendation System",
        description: "A dynamic web application that recommends movies based on user selections. Features a sleek, modern interface and real-time data fetching.",
        tags: ["React.js", "Machine Learning", "API", "Tailwind CSS"],
        image: "/projects/movie-recommendation.png",
        gitLink: "Moviematcher",
        liveLink: "https://moviee-matcher.streamlit.app/"
    },
    {
        title: "Sweet Shop",
        description: "A delightful e-commerce platform for ordering premium chocolates and candies. Includes an admin dashboard, user authentication, and a responsive layout.",
        tags: ["React.js", "E-commerce", "Admin Dashboard", "UI/UX"],
        image: "/projects/sweet-shop.png",
        gitLink: "sweet-shop-frontend",
        liveLink: "https://sweet-shop-iota.vercel.app/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/80 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card flex flex-col rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]"
                        >
                            {/* Project Image */}
                            <div className="h-48 w-full relative overflow-hidden group-hover:opacity-90 transition-opacity duration-500 bg-surface">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(project.title)}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-80"></div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                                    <div className="flex gap-3 text-gray-400">
                                        <a href={`https://github.com/mohammad10100/${project.gitLink}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                            <Code size={20} />
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors opacity-50 cursor-not-allowed" title="Live demo not available">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 font-light leading-relaxed mb-6 flex-1 text-sm md:text-base">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
