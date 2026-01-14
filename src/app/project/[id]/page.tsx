import { projectData } from "@/data/project-data";

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { id } = await params;
    const project = projectData.find((project) => id === project.id);

    return (
        <div>
            <div>{project!.title}</div>
        </div>
    )
}