import { Project } from "./models/Project";
import { Role } from "./models/Role";
import { Stack } from "./models/Stack";

export const projectData: Project[] = [
    {
        id: "fj-constructions",
        title: "FJ Constructions",
        subtitle: "Company Website for FJ Constructions Bali",
        shortDesc:
            "FJ Constructions is a freelance website project for a construction company based in Bali. The site presents company services, project showcases, and business information in a clean and professional layout.",
        date: "Dec 2025",
        roles: [Role.FRONTEND],
        stacks: [Stack.NEXTJS, Stack.TYPESCRIPT],
        links: [
            { type: "external", url: "https://fjconstructions.com/" }
        ]
    },
    {
        id: "satu-dua",
        title: "SatuDua",
        subtitle: "AI Innovation Challenge, Compfest 2025, University of Indonesia",
        shortDesc:
            "SatuDua is an emergency-response system developed for the AI Innovation Challenge at Compfest 2025. It consists of a mobile application for public use and a dispatcher dashboard equipped with real-time tracking and AI-assisted decision support.",
        date: "Aug - Sep 2025",
        roles: [Role.FRONTEND],
        stacks: [Stack.NEXTJS, Stack.NATIVE, Stack.TYPESCRIPT, Stack.SUPABASE],
        links: [
            { type: "github", url: "https://github.com/jessicaryan19/satu-dua-web" },
            { type: "github", url: "https://github.com/Satu-Dua-App/satu-dua-mobile" },
        ]
    },
    {
        id: "retail-rumble",
        title: "Retail Rumble",
        subtitle: "Top 20 GameSeed 2025, AGI x Indonesian Ministry of Creative Economy (EKRAF)",
        shortDesc:
            "Retail Rumble is an endless arcade game developed for GameSeed 2025. The game features rock–paper–scissors-based combat mechanics, responsive controls, and a score-driven progression system.",
        date: "Jul - Jul 2025",
        roles: [Role.GAME_DESIGNER, Role.GAME_PROGRAMMER],
        stacks: [Stack.GODOT],
        links: [
            { type: "external", url: "https://vanssnn.itch.io/retail-rumble" },
            { type: "github", url: "https://github.com/jessicaryan19/retail-rumble" }
        ]
    },
    {
        id: "jam-nightmare",
        title: "Jam Nightmare",
        subtitle: "2nd Winner of BGDJam 2025 Binus Game Development Club",
        shortDesc:
            "Jam Nightmare is a puzzle-strategy game developed in three days for BGDJam 2025. Players solve lockscreen-based pattern puzzles under time pressure to reach the final objective before the timer runs out.",
        date: "Jan 2025",
        roles: [Role.GAME_DESIGNER, Role.GAME_PROGRAMMER],
        stacks: [Stack.GODOT],
        links: [
            { type: "external", url: "https://vanssnn.itch.io/jam-nightmare" },
            { type: "github", url: "https://github.com/vanssnn/jam-nightmare" },
        ],
    },
    {
        id: "car-crash-detection",
        title: "Car Crash Detection",
        subtitle: "Computer Vision Project",
        shortDesc:
            "Car Crash Detection is a computer vision project focused on identifying traffic accidents from dashcam footage. The project evaluates multiple machine learning and deep learning approaches to automate crash classification accurately.",
        date: "Sep - Dec 2024",
        roles: [Role.AI],
        stacks: [Stack.PYTHON, Stack.TENSORFLOW],
        links: [
            { type: "github", url: "https://github.com/jessicaryan19/car-crash-detection" },
            { type: "external", url: "https://drive.google.com/file/d/1FGmNX9pOatkTVErVswXL7qkdhPwWyCr9/view?usp=sharing" },
        ],
    },
    {
        id: "verdant-seeds",
        title: "Verdant Seeds",
        subtitle: "Submitted for GameSeed 2024",
        shortDesc:
            "Verdant Seeds is a tower defense roguelike game where players defend the World Tree from waves of enemies. Players use magical plants and strategic upgrades to survive increasingly difficult encounters.",
        date: "Aug - Sept 2024",
        roles: [Role.GAME_DESIGNER, Role.ASSET, Role.UI_UX],
        stacks: [],
        links: [{ type: "external", url: "https://hpnv.itch.io/verdant-seeds" }],
    },
    {
        id: "hris-cm11",
        title: "HRIS Cakra Motor 11",
        subtitle: "HR Platform for Cakra Motor",
        shortDesc:
            "HRIS Cakra Motor 11 is an internal HR platform designed to support employee management across multiple branches. It streamlines attendance tracking, scheduling, payroll processing, and leave management.",
        date: "May 2024 - May 2025",
        roles: [Role.UI_UX],
        stacks: [Stack.FIGMA],
        links: [],
    },
    {
        id: "trashare",
        title: "Trashare",
        subtitle: "Semifinalist of Hackathon FindIT 2024 Universitas Gadjah Mada",
        shortDesc:
            "Trashare is a mobile application that connects households with local waste management organizations. It incorporates gamification and AI-assisted waste sorting to encourage sustainable recycling behavior.",
        date: "Apr - May 2024",
        roles: [Role.UI_UX, Role.AI, Role.FRONTEND],
        stacks: [Stack.FIGMA, Stack.PYTHON, Stack.TENSORFLOW, Stack.NATIVE],
        links: [
            { type: "github", url: "https://github.com/dave-andrew/trashare" },
            { type: "github", url: "https://github.com/jessicaryan19/trashare_ai" },
        ],
    },
    {
        id: "ocular-disease-diagnosis",
        title: "Harnessing Deep Learning for Ocular Disease Diagnosis",
        subtitle:
            "A Scientific Paper Published and Presented at the 9th International Conference on Computer Science and Computational Intelligence (ICCSCI)",
        shortDesc:
            "This research explores the use of deep learning models to assist in ocular disease diagnosis. Several CNN architectures are evaluated to improve accuracy and reduce reliance on manual clinical assessment.",
        date: "Mar - May 2024",
        roles: [Role.AI, Role.AUTHOR],
        stacks: [Stack.PYTHON, Stack.TENSORFLOW],
        links: [
            { type: "github", url: "https://github.com/dave-andrew/Ocular-Disease-Recognition" },
            { type: "external", url: "https://www.sciencedirect.com/science/article/pii/S1877050924031272" },
        ],
    },
    {
        id: "reef-rascals",
        title: "Reef Rascals",
        subtitle: "3rd Winner of Hackathon 2.0 CodeFest Indonesia",
        shortDesc:
            "Reef Rascals is a blockchain-based game where players collect, trade, and battle unique creatures. The project emphasizes player-owned assets and a marketplace-driven game economy.",
        date: "Feb - Mar 2024",
        roles: [Role.GAME_DESIGNER, Role.ASSET, Role.UI_UX, Role.FRONTEND],
        stacks: [Stack.FIGMA, Stack.REACT, Stack.TYPESCRIPT, Stack.MOTOKO],
        links: [
            { type: "github", url: "https://github.com/swiftee19/Reef-Rascals" },
            { type: "figma", url: "https://www.figma.com/design/6PHVRNoXcOAGIMOh03RzdX/Reef-Rascals?node-id=0-1&t=h9iE5LlCV4vmOVKQ-1" },
        ],
    },
    {
        id: "i-calorix",
        title: "I-CaloriX",
        subtitle: "Diet Management Mobile Application",
        shortDesc:
            "I-CaLoriX is a mobile application that helps users track calorie intake using a food database and image recognition. It provides personalized insights, progress tracking, and motivational features for healthier eating habits.",
        date: "Oct - Nov 2023",
        roles: [Role.UI_UX, Role.FRONTEND],
        stacks: [Stack.FIGMA, Stack.KOTLIN],
        links: [
            { type: "external", url: "https://play.google.com/store/apps/details?id=edu.bluejack23_1.ICaLoriX" },
            { type: "figma", url: "https://www.figma.com/design/JsbF4ocGmS2oo1574QMNdZ/Wireframe?node-id=0-1&t=BA1GWOtQxEjasWZi-1" },
        ],
    },
];

