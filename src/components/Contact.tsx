"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, Table } from "lucide-react";

export function Contact() {
    return (
        <section className="py-24 px-4 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-secondary mb-8">
                        Open for opportunities. Let's discuss how I can contribute to your team.
                    </p>
                    <div className="flex justify-center gap-6">
                        {[
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/in/mudita-rastogi-85a9b9214/"
                            },
                            {
                                icon: Github,
                                href: "https://github.com/Mudita31"
                            },
                            {
                                icon: Table,
                                href: "https://public.tableau.com/app/profile/mudita.rastogi/vizzes"
                            },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-secondary hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-4"
                >
                    <a
                        href="mailto:rastogimudita498@gmail.com"
                        className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        rastogimudita498@gmail.com
                    </a>

                    <a
                        href="/MuditaRastogi.pdf"
                        onClick={async (e) => {
                            e.preventDefault();
                            try {
                                const response = await fetch('/MuditaRastogi.pdf');
                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = 'MuditaRastogi.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                window.URL.revokeObjectURL(url);
                            } catch (error) {
                                console.error('Download failed:', error);
                                window.open('/MuditaRastogi.pdf', '_blank');
                            }
                        }}
                        className="inline-flex items-center px-6 py-3 border border-white/10 rounded-full text-secondary hover:text-white hover:bg-white/5 transition-colors text-sm cursor-pointer"
                    >
                        Download Resume
                    </a>
                </motion.div>

                <footer className="mt-24 text-center text-sm text-neutral-600">
                    <p>© {new Date().getFullYear()} Mudita Rastogi. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
