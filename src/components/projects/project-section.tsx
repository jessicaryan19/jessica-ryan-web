import { projectData } from "@/data/project-data";
import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <div className="bg-primary w-full">
            <div className="text-white mx-32 my-12">
                <span className="font-embassy-bt text-9xl">P</span>
                <span className="font-bemore-serif text-6xl">rojects</span>
            </div>
            <div>
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