"use client";
import { projectData } from "@/data/project-data";
import ProjectCard from "./project-card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectSection() {
    const container = useRef<any>(null);
    useGSAP(() => {

        gsap.to('.project-section-subtitle', {
            scrollTrigger: {
                trigger: '.project-section-subtitle',
                end: '+=500',
                markers: true
            },
            x: 500
        })
    }, { scope: container })

    return (
        <div ref={container} className="bg-white w-full">
            <div className="text-primary mx-32">
                <span className="font-embassy-bt text-[200px]">P</span>
                <span className="font-bemore-serif text-8xl">rojects</span>
            </div>
            <div className="text-primary mx-32 text-2xl project-section-subtitle">
                <div>A curated selection of my most meaningful work.</div>
                <div>Built with care.</div>
            </div>

            <div className="border-t-2 border-primary">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index + 1}
                        type={index % 2 === 0 ? 'light' : 'dark'}
                    />
                ))}
            </div>
        </div>
    )
}