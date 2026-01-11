"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "SQL & Data Engineering",
        skills: ["JOINs", "CTEs", "Subqueries", "Window Functions", "ETL", "Data Validation"],
    },
    {
        title: "Business Intelligence & Analytics",
        skills: ["Tableau", "Python", "NumPy", "Pandas", "KPIs", "Dashboard Design", "Data Modeling"],
    },
    {
        title: "Tools & Analytics",
        skills: ["MySQL", "SQL Server", "Excel", "Pivot Tables", "Git", "Exploratory Analysis"],
    },
];

export function Skills() {
    return (
        <section className="py-24 px-4 bg-background border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Skills</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Proficient in data engineering, visualization, and analytics tools to drive decision making.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-lg font-semibold mb-6 text-center">{category.title}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm text-secondary hover:bg-white/10 hover:text-white transition-all cursor-default"
                                    >
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
}
