import { Experience } from "@/types/experience"
import { Icon } from "@iconify/react"

interface ExperienceCardProps {
    experience: Experience
}

export default function ExperienceCard({
    experience
}: ExperienceCardProps) {
    return (
        <div key={experience.id} className="flex justify-between border-white border-b-2 text-white text-lg px-32 py-12 last:border-b-0">
            <div className="flex flex-col">
                <div>{experience.company}</div>
                <div className="font-bemore-serif">
                    <span className="text-6xl me-4">{experience.position}</span>
                    <span className="text-2xl">({experience.type})</span>
                </div>
            </div>
            
            <div className="flex flex-col justify-between items-end">
                <div className="flex flex-col items-end">
                    <div>{experience.location}</div>
                    <div>{experience.date}</div>
                </div>
                <Icon icon="fluent-mdl2:arrow-up-right-8" className="text-2xl" />
            </div>
        </div>
    )
}