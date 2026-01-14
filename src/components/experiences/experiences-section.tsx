import { experienceData } from "@/data/experiences-data";
import ExperienceCard from "./experience-card";

export default function ExperiencesSection() {
    return (
        <div className="bg-primary w-full flex">
            <div className="text-white w-1/3 border-r-2 ps-32">
                <span className="font-embassy-bt text-[200px]">E</span>
                <span className="font-bemore-serif text-8xl">xperiences</span>
            </div>

            <div className="flex flex-col flex-1">
                {experienceData.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </div>
    )
}