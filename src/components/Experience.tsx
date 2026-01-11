"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Elevate Labs India",
        role: "SQL Developer Intern",
        date: "Jun 2025 - Jul 2025",
        description:
            "Built an end-to-end SQL ETL-based HR Management System. Designed relational schemas and developed analytical SQL queries using JOINs and CTEs for reporting.",
    },
    {
        company: "Edunet Foundation India",
        role: "Power BI Developer Intern",
        date: "Jan 2025 - Feb 2025",
        description:
            "Designed 2 interactive dashboards with 6-7 KPIs each for sustainability and education datasets. Performed data transformation and modeling to support KPI tracking.",
    },
];

export function Experience() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-white/10 rounded-full" />
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-secondary hidden sm:block">•</span>
                                <span className="text-secondary font-medium">{exp.role}</span>
                            </div>

                            <span className="text-xs text-white/40 mb-3 block uppercase tracking-widest font-medium">
                                {exp.date}
                            </span>

                            <p className="text-secondary leading-relaxed max-w-xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
