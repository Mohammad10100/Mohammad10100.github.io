import { motion } from 'framer-motion';

const skillsCategories = [
    {
        title: "Programming Languages",
        skills: ["Javascript", "Python", "Java", "C++", "C", "Smali"]
    },
    {
        title: "Web Development",
        skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "React Native", "SCSS", "HTML/CSS"]
    },
    {
        title: "Tools & Cloud",
        skills: ["Android Studio", "JADX", "AWS", "MongoDB", "Postman", "Firebase", "Git", "GitHub", "Figma"]
    },
    {
        title: "Certifications & Core",
        skills: ["Android App Hacking", "Machine Learning (Standford)", "AWS Academy", "Data Structures", "OOP", "DBMS", "Computer Networks"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Cinematic Blur Effect */}
            <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-accent rounded-full mix-blend-multiply filter blur-[200px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Toolkit</h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/80 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {skillsCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="glass p-8 rounded-3xl hover:-translate-y-2 hover:border-accent/30 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-medium text-white mb-6 border-b border-white/10 pb-4 group-hover:border-accent/50 transition-colors">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
