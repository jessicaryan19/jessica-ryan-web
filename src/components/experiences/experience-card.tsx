import { Experience } from "@/types/experience"

interface ExperienceCardProps {
    experience: Experience
}

export default function ExperienceCard({
    experience
}: ExperienceCardProps) {
    return (
        <div key={experience.id} className="flex justify-between border-white border-b-2 text-white mx-32 text-lg py-12">
            <div className="flex flex-col">
                <div>{experience.company}</div>
                <div className="font-bemore-serif">
                    <span className="text-6xl me-4">{experience.position}</span>
                    <span className="text-2xl">({experience.type})</span>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div>{experience.location}</div>
                <div>{experience.date}</div>
            </div>
        </div>
    )
}