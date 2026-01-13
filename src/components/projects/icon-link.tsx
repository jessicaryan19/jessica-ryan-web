
import { ProjectLink } from "@/types/project";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ProjectLinksProps {
    link: ProjectLink
}

export default function IconLink({
    link
}: ProjectLinksProps) {
    const icon = {
        github: "mingcute:github-fill",
        external: "mdi:globe",
        figma: "gg:figma",
    }[link.type];

    return (
        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <Icon icon={icon} className="text-4xl" />
        </Link>
    )
}