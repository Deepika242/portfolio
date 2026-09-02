
export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  REACT = "react",
  PYTHON = "python",
  EXCEL = "excel",
  GIT = "git",
  GITHUB = "github",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: {
    id: 1,
    name: "html",
    label: "HTML",
    shortDescription:
      "I use HTML to create the structure and content of web pages.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 2,
    name: "css",
    label: "CSS",
    shortDescription:
      "I use CSS to create responsive and attractive web interfaces.",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "I use JavaScript to add functionality and interactivity to websites.",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.REACT]: {
    id: 4,
    name: "react",
    label: "React",
    shortDescription:
      "I use React to build modern and reusable user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 5,
    name: "python",
    label: "Python",
    shortDescription:
      "I have knowledge of Python programming and its fundamentals.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.EXCEL]: {
    id: 6,
    name: "excel",
    label: "Microsoft Excel",
    shortDescription:
      "I use Excel for data organization, calculations, and basic data analysis.",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },

  [SkillNames.GIT]: {
    id: 7,
    name: "git",
    label: "Git",
    shortDescription:
      "I use Git for version control and managing project changes.",
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 8,
    name: "github",
    label: "GitHub",
    shortDescription:
      "I use GitHub to store, manage, and collaborate on my projects.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "2024",
    title: "React Developer Intern",
    company: "Error Technologies",
    description: [
      "Worked on frontend development using React.",
      "Built responsive user interfaces using HTML and CSS.",
      "Implemented interactive features using JavaScript and React.",
      "Worked on improving frontend components and user experience.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.REACT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],

  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

