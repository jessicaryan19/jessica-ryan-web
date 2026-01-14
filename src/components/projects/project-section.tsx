import { projectData } from "@/data/project-data";
import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <div className="bg-white w-full">
            <div className="text-primary mx-32">
                <span className="font-embassy-bt text-[200px]">P</span>
                <span className="font-bemore-serif text-8xl">rojects</span>
            </div>
            <div className="text-primary mx-32 text-2xl">
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