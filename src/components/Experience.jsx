import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Digital Forensics R&D Intern",
        company: "Cyberentech.com",
        date: "Jul 2025 – Aug 2025",
        points: [
            "Conducted research on digital forensics and incident response (DFIR) tools.",
            "Secured original evidence with write blockers and verified integrity via MD5/SHA256.",
            "Maintained Chain of Custody and documented forensic acquisition procedures.",
            "Hands-on experience with FTK Imager, Autopsy, and Android WhatsApp extraction for LEA cases."
        ]
    },
    {
        title: "Cybersecurity Research Intern",
        company: "CoE CnDS Lab, VJTI",
        date: "Feb 2025 – Jul 2025",
        points: [
            "Researched Android CWE vulnerabilities and built static/dynamic scanners for APK analysis.",
            "Automated checks for insecure BroadcastReceivers, WebViews, and dynamic code loading via smali code analysis.",
            "Documented outcomes to bolster the knowledge base for future researchers."
        ]
    },
    {
        title: "Web Development Intern",
        company: "Ek2Teen - Freelancer's Client",
        date: "Jan 2024 – Feb 2024",
        points: [
            "Developed a PHP/MySQL based e-commerce marketplace from scratch including user auth and orders.",
            "Designed a responsive UI/UX leading to significantly better customer engagement.",
            "Reviewed code quality and resolved business logic flaws."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-accent/80 to-transparent"></div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experience</h2>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative"
                        >
                            <div className="md:grid md:grid-cols-4 md:gap-8 items-start group">
                                <div className="hidden md:block col-span-1 pt-2 text-gray-500 text-sm tracking-widest font-mono">
                                    {exp.date}
                                </div>

                                <div className="md:col-span-3 glass-card p-8 rounded-2xl group-hover:border-accent/30 transition-all duration-500 relative hover:-translate-y-1">
                                    {/* Mobile Date */}
                                    <div className="md:hidden text-accent text-xs font-mono mb-3">{exp.date}</div>

                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                                    <div className="text-lg text-gray-400 mb-6 font-light">{exp.company}</div>

                                    <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <span className="text-accent mt-1.5 opacity-60 text-xs">▹</span>
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Experience;
