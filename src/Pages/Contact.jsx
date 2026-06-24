import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FiMail className="text-cyan-400" size={24} />,
            title: "Email Us",
            detail: "support@logitechg.com",
            desc: "We typically reply within 24 hours."
        },
        {
            icon: <FiPhone className="text-cyan-400" size={24} />,
            title: "Call Us",
            detail: "+1 (800) 555-0198",
            desc: "Mon-Fri from 8am to 5pm."
        },
        {
            icon: <FiMapPin className="text-cyan-400" size={24} />,
            title: "Headquarters",
            detail: "San Jose, California",
            desc: "7700 Gateway Blvd, Newark, CA 94560"
        }
    ];

    return (
        <section id="contact" className="w-full bg-black text-white py-24 relative overflow-hidden z-10">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">GET IN TOUCH</h2>
                    <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                        Have questions about the G502 HERO or need support? Our team is here to help you get the most out of your gear.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-cyan-500 pl-4">Contact Information</h3>
                            <p className="text-stone-400 mb-8 leading-relaxed">
                                Whether you're experiencing technical issues, have questions about features, or want to learn more about the Logitech G ecosystem, reach out to us using the details below or fill out the form.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-stone-900/60"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                                        <p className="text-cyan-400 font-medium mb-1">{info.detail}</p>
                                        <p className="text-sm text-stone-500">{info.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div 
                        className="bg-stone-900/40 border border-stone-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-cyan-900/5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-stone-400 ml-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-stone-950/80 border border-stone-800 text-white placeholder-stone-600 text-sm py-3.5 px-5 rounded-xl outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-stone-400 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-stone-950/80 border border-stone-800 text-white placeholder-stone-600 text-sm py-3.5 px-5 rounded-xl outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-stone-400 ml-1">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-stone-950/80 border border-stone-800 text-white placeholder-stone-600 text-sm py-3.5 px-5 rounded-xl outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mb-2">
                                <label htmlFor="message" className="text-sm font-medium text-stone-400 ml-1">Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-stone-950/80 border border-stone-800 text-white placeholder-stone-600 text-sm py-3.5 px-5 rounded-xl outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full py-4 px-6 rounded-xl font-bold text-black bg-cyan-500 hover:bg-cyan-400 cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FiSend size={18} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;