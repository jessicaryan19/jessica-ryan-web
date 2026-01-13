import { Experience } from "@/types/experience";
import { Role } from "@/types/role";
import { Stack } from "@/types/stack";

export const experienceData: Experience[] = [
    {
        id: "samsung-rnd-intern",
        position: "Frontend Engineer",
        company: "Samsung R&D Institute Indonesia",
        type: "Internship",
        date: "Mar 2025 - Present",
        location: "Jakarta, Indonesia",
        skills: [
            Stack.REACT,
            Stack.TYPESCRIPT,
            Stack.JAVASCRIPT,
            Stack.POSTGRESQL,
            Stack.JEST,
        ],
        description: [
            "Built and maintained an internal React and TypeScript data analytics and reporting application, delivering dashboards, tables, and visualizations used by business teams.",
            "Developed backend logic for internal services by writing JavaScript endpoint scripts and integrating PostgreSQL queries to support data processing workflows.",
            "Established unit testing using Jest and React Testing Library, improving test coverage and system reliability.",
            "Improved overall code quality by reducing technical debt and aligning development with internal quality and compliance guidelines.",
            "Collaborated with cross-functional engineers to integrate data pipelines and ensure accurate, reliable analytics.",
        ],
    },
    {
        id: "questlabs-uiux",
        position: "UI/UX Designer",
        company: "The Questlabs ID",
        type: "Part-time",
        date: "May 2024 - Apr 2025",
        location: "Remote (Indonesia)",
        skills: [
            Stack.FIGMA,
            Role.UI_UX,
        ],
        description: [
            "Designed wireframes and high-fidelity interfaces for Cakra Motor’s HRIS application using Figma, covering employee management, scheduling, attendance, payroll, and leave workflows.",
            "Collaborated with clients and developers in weekly reviews to refine requirements, assess technical feasibility, and support smooth design-to-development handoffs.",
            "Contributed UI improvements and new feature pages for product-management and ERP applications with a focus on clarity and consistency.",
            "Delivered ongoing UI refinements and helped maintain a cohesive design system used across multiple applications.",
        ],
    },
    {
        id: "binus-subject-coordinator",
        position: "Subject Coordinator Staff",
        company: "Software Laboratory Center, Bina Nusantara University",
        type: "Full-time",
        date: "Feb 2024 - Feb 2025",
        location: "Jakarta, Indonesia",
        skills: [
            Stack.JAVA,
        ],
        description: [
            "Coordinated laboratory curriculum focused on database design, human-computer interaction, and business application development, supporting over 700 students annually.",
            "Maintained quality standards for lab assignments, exams, and student work to ensure consistency and accuracy.",
            "Trained and supervised more than 50 lab assistants, ensuring effective communication and high-quality lab session delivery across classes.",
        ],
    },
    {
        id: "binus-lab-assistant",
        position: "Software Laboratory Assistant",
        company: "Software Laboratory Center, Bina Nusantara University",
        type: "Full-time",
        date: "Feb 2023 - Feb 2024",
        location: "Jakarta, Indonesia",
        skills: [
            Stack.REACT,
            Stack.NEXTJS,
            Stack.GO,
            Stack.POSTGRESQL,
            Stack.KOTLIN,
            Stack.UNITY,
            Stack.MONGODB,
            Stack.SQL,
        ],
        description: [
            "Instructed 7-10 classes per semester, delivering hands-on learning across various technical subjects.",
            "Developed lab cases, performed grading, and created video-based learning materials to support student understanding.",
            "Completed required training and qualifications for each subject area prior to teaching.",
            "Participated in the Test Progression Assistants (TPA) program, covering Unity game development, React and Electron desktop applications, Next.js, Go, PostgreSQL, Android development with Kotlin, and networking using Cisco Packet Tracer.",
            "Joined the New Assistant Recruitment (NAR) program as a trainer, teaching and creating database work cases including normalization and query exercises using SSMS, SQLite, and MongoDB.",
        ],
    },
];
