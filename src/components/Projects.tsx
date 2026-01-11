"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "SQL Data Warehouse (Medallion Architecture)",
        description:
            "Built an end-to-end SQL data warehouse using Bronze-Silver-Gold layers. Designed star schema with fact/dimension tables and implemented ETL pipelines.",
        tags: ["SQL", "ETL", "Data Modeling"],
        link: "https://github.com/Mudita31/sql-data-warehourse-project"
    },
    {
        title: "HR Analytics Dashboard",
        description:
            "Designed an interactive Tableau dashboard to analyze employee demographics, attrition, and performance metrics using KPI cards and drill-downs.",
        tags: ["Tableau", "HR Analytics", "Visualization"],
        link: "https://public.tableau.com/app/profile/mudita.rastogi/viz/HumanResourceDashboard_17644358905870/HRSummaryDetails"
    },
    {
        title: "Electric Vehicle Analysis",
        description:
            "Created a Tableau dashboard to analyze electric vehicle adoption trends, regional distribution, and market patterns using visual analytics.",
        tags: ["Tableau", "Data Analysis", "Trends"],
        link: "https://public.tableau.com/app/profile/mudita.rastogi/viz/ElectricVehicleAnalysis_17575780666290/Dashboard1"
    }
];

export function Projects() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                    <div className="h-1 w-20 bg-white/10 rounded-full mx-auto md:mx-0" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors"
                        >
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium text-secondary bg-white/5 px-2 py-1 rounded-md border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors text-white/90">
                                    {project.title}
                                </h3>
                                <p className="text-secondary leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold border-b border-white/20 pb-0.5 group-hover:border-white transition-colors cursor-pointer"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
