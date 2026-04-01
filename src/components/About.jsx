import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/80 to-transparent"></div>
                    </div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl text-lg text-gray-300 leading-relaxed font-light">
                        <p className="mb-6">
                            I am a <span className="text-white font-medium">Full Stack Developer</span> and <span className="text-white font-medium">Cybersecurity Researcher</span> with a passion for building secure, scalable applications and discovering deep-level vulnerabilities.
                        </p>
                        <p className="mb-6">
                            With experience spanning the MERN stack, Web-Security, Android Vulnerability Research, and Digital Forensics, I bridge the gap between building software and breaking it to make it stronger.
                        </p>
                        <p className="mb-8">
                            I've recently contributed as a Digital Forensics R&D Intern at <span className="text-accent hover:text-blue-400 transition-colors">CyberEnTechnologies</span> and a Cybersecurity Intern at <span className="text-accent hover:text-blue-400 transition-colors">CoE CNDS Lab, VJTI</span>, exploring DFIR tools, capturing forensic evidence, and developing custom security analyzers.
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <a href="https://github.com/mohammad10100" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                GitHub
                            </a>
                            <span className="text-white/20">•</span>
                            <a href="https://linkedin.com/in/Mohammad-Abdul-Lateef" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <span className="text-white/20">•</span>
                            <a href="mailto:mohammadabdullateef592@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                Email Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default About;
