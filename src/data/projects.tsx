
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  html: { title: "HTML5", bg: "#e34f26", fg: "#ffffff", icon: "HTML" },
  css: { title: "CSS3", bg: "#1572b6", fg: "#ffffff", icon: "CSS" },
  javascript: { title: "JavaScript", bg: "#f7df1e", fg: "#000000", icon: "JS" },
  react: { title: "React.js", bg: "#61dafb", fg: "#000000", icon: "React" },
  java: { title: "Java", bg: "#5382a1", fg: "#ffffff", icon: "Java" },
  springBoot: {
    title: "Spring Boot",
    bg: "#6db33f",
    fg: "#ffffff",
    icon: "SB",
  },
  mysql: {
    title: "MySQL",
    bg: "#4479a1",
    fg: "#ffffff",
    icon: "SQL",
  },
  python: { title: "Python", bg: "#3776ab", fg: "#ffffff", icon: "Py" },
  git: { title: "Git", bg: "#f05032", fg: "#ffffff", icon: "Git" },
  github: { title: "GitHub", bg: "#181717", fg: "#ffffff", icon: "GH" },
};

const GITHUB_PROFILE = "https://github.com/Deepika242";

const ProjectsLinks = ({ github }: { github?: string }) => (
  github ? (
    <div className="flex items-center gap-3 my-5">
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        View on GitHub
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  ) : null
);

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live?: string;
};

const ProjectContent = ({
  description,
  features,
  technologies,
}: {
  description: string;
  features: string[];
  technologies: string;
}) => (
  <div>
    <TypographyP className="font-mono text-2xl text-center">
      {technologies}
    </TypographyP>

    <TypographyP className="font-mono mt-4 leading-7">
      {description}
    </TypographyP>

    <TypographyH3 className="my-4 mt-8">
      Key Features
    </TypographyH3>

    <ul className="font-mono list-disc pl-6 space-y-2 leading-6">
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>

    <TypographyH3 className="my-4 mt-8">
      Technologies Used
    </TypographyH3>

    <p className="font-mono leading-7">
      {technologies}
    </p>
  </div>
);

const projects: Project[] = [
  {
    id: "course-management-system",
    category: "College Mini Project",
    title: "Course Management System",
    src: "/assets/project-previews/course-management.svg",

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.mysql,
      ],
    },

    github: GITHUB_PROFILE,

    content: (
      <ProjectContent
        description="A complete college mini project developed to provide an online platform for managing courses and student enrollments. The system includes separate Admin and Student login modules. Students can register online, browse available courses, and enroll in courses without manual registration, while administrators can manage courses, students, and enrollment details."
        features={[
          "Separate Admin and Student login",
          "Online student registration",
          "Browse available courses",
          "Online course enrollment",
          "Admin course management",
          "Add, update, and delete courses",
          "Student and enrollment management",
          "Course and student information management",
          "REST API-based backend",
          "CRUD operations using Spring Data JPA",
          "MySQL database integration",
        ]}
        technologies="Java, Spring Boot, Spring Data JPA, MySQL, HTML5, CSS3 and JavaScript"
      />
    ),
  },

  {
    id: "shop-fusion",
    category: "E-Commerce",
    title: "ShopFusion",
    src: "/assets/project-previews/shopfusion.svg",

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.react,
      ],
      backend: [],
    },

    github: GITHUB_PROFILE,

    content: (
      <ProjectContent
        description="A responsive React e-commerce interface where users can browse products, search, view details, and manage a shopping cart."
        features={[
          "Product listing",
          "Product search",
          "Product details",
          "Add and remove products from cart",
          "Responsive user interface",
        ]}
        technologies="React.js, JavaScript, HTML5 and CSS3"
      />
    ),
  },

  {
    id: "sunnyside-agency",
    category: "Landing Page",
    title: "Sunnyside Agency",
    src: "/assets/project-previews/sunnyside.svg",

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [],
    },

    github: GITHUB_PROFILE,

    content: (
      <ProjectContent
        description="A modern, responsive agency landing page focused on clean layouts, attractive visual presentation, and mobile-friendly design."
        features={[
          "Responsive landing page",
          "Modern layout",
          "Clean typography",
          "Mobile-friendly design",
          "Multiple website sections",
        ]}
        technologies="HTML5 and CSS3"
      />
    ),
  },

  {
    id: "art-gallery",
    category: "Frontend Website",
    title: "Art Gallery",
    src: "/assets/project-previews/art-gallery.svg",

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [],
    },

    github: GITHUB_PROFILE,

    content: (
      <ProjectContent
        description="A clean frontend gallery website designed to showcase artwork in an organized, visually appealing layout."
        features={[
          "Artwork showcase",
          "Clean gallery layout",
          "Responsive design",
          "Simple navigation",
          "Mobile-friendly interface",
        ]}
        technologies="HTML5 and CSS3"
      />
    ),
  },
];

export default projects;
