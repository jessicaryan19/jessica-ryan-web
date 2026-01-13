import { Role } from "./roles";
import { Stack } from "./stacks";


export type ProjectLinkType =
  | "github"
  | "figma"
  | "external";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
    id: string,
    title: string,
    date: string,
    subtitle: string,
    shortDesc: string,
    roles: Role[],
    stacks: Stack[],
    links: ProjectLink[],
}