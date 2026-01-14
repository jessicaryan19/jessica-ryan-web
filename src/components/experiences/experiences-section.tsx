import { experienceData } from "@/data/experiences-data";
import ExperienceCard from "./experience-card";

export default function ExperiencesSection() {
    return (
        <div className="bg-primary w-full">
            <div className="text-white mx-32 my-12">
                <span className="font-embassy-bt text-9xl">E</span>
                <span className="font-bemore-serif text-6xl">xperiences</span>
            </div>

            <div>Built systems.</div>
            <div>Taught people.</div>
            <div>Learned both ways.</div>

            <div className="flex flex-col ps-60">
                {experienceData.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </div>
    )
}