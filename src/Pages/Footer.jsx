import { useState } from 'react';
import { FaXTwitter, FaDiscord, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa6';
import { FiGlobe, FiArrowRight, FiCheck } from 'react-icons/fi';
import { motion } from 'motion/react';
import LOGITECH from '../assets/BrandName.png';

function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setSubscribed(true);
        setEmail('');
        setTimeout(() => {
            setSubscribed(false);
        }, 5000);
    };

    const footerLinks = [
        {
            title: 'GEAR & ACCESSORIES',
            links: [
                { name: 'G502 HERO Mouse', href: '#product' },
                { name: 'G502 LIGHTSPEED', href: '#' },
                { name: 'G502 X PLUS', href: '#' },
                { name: 'PRO Series Gear', href: '#' },
                { name: 'Gaming Keyboards', href: '#' },
                { name: 'Audio & Headsets', href: '#' },
            ],
        },
        {
            title: 'SOFTWARE & SYSTEMS',
            links: [
                { name: 'Logitech G HUB', href: '#' },
                { name: 'LIGHTSYNC RGB', href: '#' },
                { name: 'LIGHTSPEED Wireless', href: '#' },
                { name: 'G HUB SDK', href: '#' },
                { name: 'Game Integrations', href: '#' },
                { name: 'Community Profiles', href: '#' },
            ],
        },
        {
            title: 'SUPPORT & SERVICE',
            links: [
                { name: 'Downloads & Drivers', href: '#' },
                { name: 'Register Product', href: '#' },
                { name: 'Warranty Information', href: '#' },
                { name: 'Customer Support', href: '#contact' },
                { name: 'Setup Manuals', href: '#' },
                { name: 'Recycling Programs', href: '#' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <FaXTwitter size={20} />, url: 'https://twitter.com/logitechg', label: 'Twitter' },
        { icon: <FaDiscord size={20} />, url: 'https://discord.gg/logitechg', label: 'Discord' },
        { icon: <FaYoutube size={20} />, url: 'https://youtube.com/logitechg', label: 'YouTube' },
        { icon: <FaInstagram size={20} />, url: 'https://instagram.com/logitechg', label: 'Instagram' },
        { icon: <FaTwitch size={20} />, url: 'https://twitch.tv/logitechg', label: 'Twitch' },
    ];

    return (
        <footer id="footer" className="w-full bg-stone-950 text-stone-400 relative border-t border-stone-900/60 overflow-hidden pt-20 pb-8 z-10">
            {/* Ambient Background Glow matching the Logitech RGB Theme */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img src={LOGITECH} alt="" className='h-10' />
                        </div>
                        <p className="text-sm leading-relaxed text-stone-400 font-medium pr-4">
                            Logitech G is dedicated to pushing the boundaries of performance and exploring the possibilities of play. Our gear equips the world's top esports athletes and competitive gamers with industry-leading precision, speed, and design.
                        </p>

                        {/* Social Links with interactive icons */}
                        <div className="flex gap-4 mt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-stone-900 rounded-xl text-stone-400 border border-stone-800/80 flex items-center justify-center transition-all duration-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-stone-900/60 shadow-lg hover:shadow-cyan-500/5 cursor-pointer"
                                    whileHover={{ scale: 1.1, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {footerLinks.map((group, groupIdx) => (
                        <div key={groupIdx} className="flex flex-col gap-5">
                            <h3 className="text-xs font-bold tracking-widest text-white uppercase relative inline-block">
                                {group.title}
                                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-cyan-500 rounded" />
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {group.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.href}
                                            className="text-sm font-medium hover:text-cyan-400 transition-colors duration-200 relative group flex items-center py-0.5 cursor-pointer"
                                        >
                                            <span className="w-0 group-hover:w-2 h-[2px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-200 rounded-full" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Form */}
                <div className="w-full bg-stone-900/40 border border-stone-900 rounded-2xl p-8 md:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
                    <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">STAY IN THE GAME</h3>
                        <p className="text-sm text-stone-400 leading-relaxed">
                            Subscribe to receive exclusive Logitech G product news, updates, firmware release notes, and community perks.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md relative">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className={`w-full bg-stone-950/80 border text-white placeholder-stone-500 text-sm py-3.5 px-5 rounded-xl outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 ${error ? 'border-red-500/60 focus:border-red-500' : 'border-stone-800'
                                        }`}
                                />
                                {error && (
                                    <span className="absolute left-1 -bottom-5.5 text-[11px] text-red-500 font-medium">
                                        {error}
                                    </span>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                className={`py-3.5 px-6 rounded-xl font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 min-w-[120px] ${subscribed
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                                    : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/10'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {subscribed ? (
                                    <>
                                        <FiCheck size={16} /> Subscribed
                                    </>
                                ) : (
                                    <>
                                        Subscribe <FiArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </div>

                {/* Footer Bottom Bar */}
                <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-stone-500 font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Logitech G. All rights reserved. Logitech, Logi, and their logos are trademarks or registered trademarks of Logitech Europe S.A. and/or its affiliates in the U.S. and other countries.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-500 font-medium">
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Terms of Service</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Cookie Settings</a>

                        <div className="flex items-center gap-1.5 text-stone-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer pl-2 md:border-l md:border-stone-800">
                            <FiGlobe size={13} className="text-cyan-400" />
                            <span>United States / English</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
