import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.target);

        // Web3Forms endpoint
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
            setStatus('error');
            console.error("Missing Web3Forms Access Key!");
            return;
        }

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-surface/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-xl mx-auto font-light">
                        Whether you have a question, a project inquiry, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl h-full">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="mailto:mohammadabdullateef592@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                                        <Mail size={20} className="text-accent" />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="text-sm text-gray-500 font-mono mb-1">Email</div>
                                        <div className="truncate text-sm md:text-base">mohammadabdullateef592<br className="md:hidden" />@gmail.com</div>
                                    </div>
                                </a>

                                <a href="tel:+919209635852" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                                        <Phone size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-mono mb-1">Phone</div>
                                        <div className="text-sm md:text-base">+91 92096 35852</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300 group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                                        <MapPin size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-mono mb-1">Location</div>
                                        <div className="text-sm md:text-base">Malegaon, Nashik, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6">
                            <input type="hidden" name="subject" value="New Submission from Portfolio" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                    <input required type="text" name="name" id="name" placeholder="John Doe"
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                                    <input required type="email" name="email" id="email" placeholder="john@example.com"
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                <textarea required name="message" id="message" rows="5" placeholder="How can I help you?"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600 resize-none"></textarea>
                            </div>

                            <button disabled={status === 'sending'} type="submit"
                                className="w-full bg-white text-black font-semibold rounded-xl px-6 py-4 hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 group mt-2"
                            >
                                {status === 'sending' ? (
                                    <>Sending <Loader2 size={18} className="animate-spin" /></>
                                ) : status === 'success' ? (
                                    'Message Sent Successfully!'
                                ) : status === 'error' ? (
                                    'Error Sending Message'
                                ) : (
                                    <>Send Message <Mail size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </button>

                            {status === 'success' && <p className="text-green-400 text-sm text-center font-medium">Thank you! Your message sent successfully. I will reach out soon.</p>}
                            {status === 'error' && <p className="text-red-400 text-sm text-center font-medium">Please add your Web3Forms access key, or email me directly for now!</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
