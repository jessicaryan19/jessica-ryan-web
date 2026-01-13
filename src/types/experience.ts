import { Role } from "./role";
import { Stack } from "./stack";

export interface Experience {
    id: string,
    position: string,
    company: string,
    location: string,
    type: "Full-time" | "Part-time" | "Internship" | "Contract",
    date: string,
    skills: Array<Stack | Role>,
    description: string[],
}