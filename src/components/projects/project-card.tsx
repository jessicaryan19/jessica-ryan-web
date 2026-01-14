import { Project } from "@/types/project";
import Image from "next/image";
import IconLink from "./icon-link";

interface ProjectCardProps {
    type?: 'dark' | 'light'
    project: Project
    index: number
}
export default function ProjectCard({
    type = 'dark',
    project,
    index
}: ProjectCardProps) {
    const containerStyle = {
        dark: 'bg-primary text-white',
        light: 'bg-white text-primary',
    }[type];

    const indexStyle = {
        dark: 'text-white/20 left-0',
        light: 'text-primary/10 left-0',
    }[type];

    const titleStyle = {
        dark: 'justify-end border-l-2',
        light: 'justify-start border-r-2 border-primary',
    }[type];

    const contentStyle = {
        dark: 'flex-row-reverse text-right',
        light: 'flex-row',
    }[type];

    const dateStyle = {
        dark: 'border-white',
        light: 'border-primary justify-end',
    }[type];

    const badgeContainerStyle = {
        dark: 'justify-end',
        light: 'justify-start',
    }[type]

    const textContentStyle = {
        dark: 'ms-24 items-end',
        light: 'me-24'
    }[type];

    const descStyle = {
        dark: 'border-b-2 border-r-2 ',
        light: 'border-b-2 border-l-2 border-primary',
    }[type];

    const borderStyle = {
        dark: 'border-white',
        light: 'border-primary',
    }[type];

    const iconContainerStyle = {
        dark: 'border-white border-r-2 justify-end',
        light: 'border-primary border-l-2 ',
    }[type];

    return (
        <div className={`relative flex flex-col ps-60 ${containerStyle}`}>
            <div className={`font-bemore-serif text-[350px] absolute -bottom-40 ${indexStyle}`}>
                {index.toString().padStart(2, '0')}
            </div>

            <div className={`min-h-32 flex items-end mx-32 font-bemore-serif text-6xl ${titleStyle}`}>
                {project.title}
            </div>

            <div className={`flex justify-between z-20 ${contentStyle}`}>
                <div className={`min-w-32 border-b-2 flex items-end p-4 text-2xl ${dateStyle}`}>
                    <div className="text-xl" style={{ writingMode: type === 'light' ? 'sideways-lr' : 'vertical-rl' }}>
                        {project.date}
                    </div>
                </div>

                <div className={`flex flex-col justify-between ${textContentStyle}`}>
                    <div className="flex flex-col gap-10">
                        <div className="font-bold italic text-xl py-2">
                            {project.subtitle}
                        </div>
                        <div className="flex flex-col text-lg gap-2">
                            <div className={`flex flex-wrap gap-2 ${badgeContainerStyle}`}>
                                {project.roles.map((role) => (
                                    <span key={role} className="bg-white border-primary border-2 text-primary font-bold px-2">{role}</span>
                                ))}
                            </div>
                            <div className={`flex flex-wrap gap-2 ${badgeContainerStyle}`}>
                                {project.stacks.map((stack) => (
                                    <span key={stack} className="bg-primary border-white border-2 text-white font-bold px-2">{stack}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 font-light text-lg ${descStyle}`}>
                        {project.shortDesc}
                    </div>
                </div>

                <div className={`w-full relative border-2 min-w-2/5 aspect-video ${borderStyle}`}>
                    <Image
                        src='/cover.png'
                        alt="project cover"
                        className="object-cover"
                        fill
                    />
                    
                <div className="absolute bg-white border-primary border-2 w-4 h-4 -top-2 -left-2"/>
                <div className="absolute bg-white border-primary border-2 w-4 h-4 -top-2 -right-2"/>
                <div className="absolute bg-white border-primary border-2 w-4 h-4 -bottom-2 -left-2"/>
                <div className="absolute bg-white border-primary border-2 w-4 h-4 -bottom-2 -right-2"/>
                </div>
                <div className={`min-w-32 border-t-2 ${borderStyle}`} />
            </div>

            <div className={`min-h-32 flex gap-2 p-4 mx-32 z-20 ${iconContainerStyle}`}>
                {project.links?.map((link) => {
                    return (
                        <IconLink key={link.url} link={link} />
                    )
                })}
            </div>
        </div>
    )
}