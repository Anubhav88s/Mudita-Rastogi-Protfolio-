"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <div className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-secondary text-xs uppercase tracking-wider font-semibold">
                        Data Analyst
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Mudita Rastogi
                </h1>
                <p className="text-secondary text-lg md:text-xl max-w-lg mx-auto mb-8 leading-relaxed">
                    Translating data into actionable business insights. Experienced in SQL, ETL pipelines, Power BI, and Tableau.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button variant="primary">View Work</Button>
                    <Button variant="outline">Contact Me</Button>
                </div>
            </motion.div>
        </section>
    );
}
