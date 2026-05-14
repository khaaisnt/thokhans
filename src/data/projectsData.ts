export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  webPreview?: string;
  github?: string;
  competencies: string[];
}

export const allProjects: Project[] = [
  {
    id: "telkom-digiup",
    title: "Telkom DigiUp",
    category: "Frontend Development",
    date: "Sep 2025 - Dec 2025",
    shortDescription:
      "Telkom Digiup is a Telkom innovation program that targets high school students and equivalents for digital skills development and training. Competencies: Frontend Development, Next.js, Tailwind CSS, Moodle.",
    fullDescription:
      "Telkom DigiUp is a comprehensive digital skills development program designed by Telkom for high school students. The platform provides interactive learning modules, real-time progress tracking, and certification upon completion. I contributed to the frontend development using Next.js to create a responsive and user-friendly interface that enables students to access learning materials across all devices. The platform integrates with Moodle LMS for course management and tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRNBdG3Tq6FeTZCcMbRc6j-pjxj0b25rXjCSa_VKTFQ2wQNvypTqZz2XR9l4hI3LENqeWeP1-1DiSfiOxMHa_MsPUbLn7gkyRMEN0iwnvyYhpL1cpympZCjbiDLAYi-xz83bMM8Z3-f5sYe1BIsAcdKdjaMvSr7oA5b3V0HecdIcRaiqXxRkFH6BKJCmP2fbNdBTeva1T9lovgRwaf-S--BCE_8t-XKjSNL_Nsqo2qmhFQqX0Lj6IhtjFcK0zhaMhBwwe02h8uj4o",
    webPreview: "https://digiup.telkom.co.id",
    competencies: ["Frontend Development", "Next.js", "Tailwind CSS", "Moodle"],
  },
  {
    id: "digiup-ready-for-industry",
    title: "DigiUp Ready For Industry",
    category: "Frontend Development",
    date: "Sep 2025 - Dec 2025",
    shortDescription:
      "DigiUp Ready for Industry is a career acceleration program to produce professional telecommunications technicians who are certified and ready to work. Competencies: Frontend Development, Next.js, Tailwind CSS, Moodle.",
    fullDescription:
      "A specialized career acceleration program designed to bridge the gap between education and industry requirements for telecommunications technicians. The platform features job simulations, industry expert mentoring, and certification programs. I developed the frontend interface using modern web technologies to provide an intuitive user experience for career preparation, including interactive dashboards, progress tracking, and resource management.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAADXzmKD57gJ76b5PhwMpjigRe8BpGYxHhgFhQcZmIdOXXwY5NSQMqS_zgHOmyseC2cTVFTWhKeE_KGkmxDz3PG68-9BHE4gxRgN2o-zf9xMQUBgFT8LE-3CP5gwf4AL-9oU_JHURifKYicffKpxovjKF3jgYGbSEq80DcmC1dWyE4TrO47QzvWCA9WnkE6bNVQbUIgQ_Ku85esStC9C76lB9pbMh5mVWy7LWk1YjymdZL8u-prHunEhq66vrVczzoWpeqvhP4UZQ",
    webPreview: "https://readyforindustry.telkom.co.id",
    competencies: ["Frontend Development", "Next.js", "Tailwind CSS", "Moodle"],
  },
  {
    id: "indonesia-digital-learning",
    title: "Indonesia Digital Learning",
    category: "Frontend Development",
    date: "Jun 2025 - Aug 2025",
    shortDescription:
      "The Indonesia Digital Learning platform provides various digital learning services. Competencies: Frontend Development, Next.js, Tailwind CSS, React Query, Single Sign-On.",
    fullDescription:
      "A comprehensive digital learning ecosystem providing access to diverse online courses and educational resources. The platform features multi-format content delivery, learner analytics, and personalized learning paths. I built the frontend using Next.js with advanced state management using React Query to handle complex data fetching. The platform implements Single Sign-On (SSO) integration for seamless access across educational partners.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW5wHjsHHiCPenJ1NLc9ZLy_ORa7B_zBE2tfV-0O57h2x9o3MJLdU7yzNFDYa8LqPO6ZtVfYboKmjVMGAOoVPh64cpeMh1y6PyOHurNWV434sbpBP8ObKRJlCnmTnE0rhhx9uV4Hz5bF_WtVy0aBEub3dP6ghs-XPy0O5iK7OAeHGGLPNq6IgS9Y1VKpNdu3IfPx0B_HkCaAyl_4r3JDjD7gf1-D6N25yiSSdlmdoj1bmcTDT2iGFn938OPh6m2bVehSe3XcQMk3c",
    webPreview: "https://indonesiadigitallearning.id",
    competencies: [
      "Frontend Development",
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Single Sign-On",
    ],
  },
  {
    id: "digital-educator-expert",
    title: "Digital Educator Expert",
    category: "Frontend Development",
    date: "May 2025 - Jun 2025",
    shortDescription:
      "Digital Educator Expert is a digital training platform developed to improve the literacy and competence of Indonesian educators in facing educational challenges in the era of digital transformation. Competencies: Frontend Development, Next.js, Tailwind CSS, Moodle.",
    fullDescription:
      "A specialized platform designed to support Indonesian educators in their digital transformation journey. The platform offers continuous professional development programs, teaching methodologies for digital age, and collaborative learning communities. I developed the responsive frontend ensuring accessibility and usability for educators across different technical proficiency levels, incorporating best practices in educational UX design.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM4z_SLVcM7_ufP3Mj-5tdowoVKAPsKJomxMuLOx6tGRlYyh2svK8QmySLbv65gIPlhm3gUTPS0k6zeYD99d9aVvWBVMzFEV3XeNgi1v-mS3q48GVvZTZNXZLrxphujGG4D-INrgiQt20dD75qWKPXKuzZ55sCmLl1uVOOiH19Wfkq9B1QwRePqOrIVnJsfcERtNR_oGjpPVkzexdjo3jDptx7qci0oNbQnKmKyYkT2jsYvrnKCOAA61WXRbUdycfLRQgSTWFr95k",
    webPreview: "https://educatorexpert.id",
    competencies: ["Frontend Development", "Next.js", "Tailwind CSS", "Moodle"],
  },
  {
    id: "indonesia-cyber-heroes",
    title: "Indonesia Cyber Heroes",
    category: "Frontend Development",
    date: "Apr 2025 - May 2025",
    shortDescription:
      "Cyber Heroes Indonesia is a cyber training platform developed to improve the literacy and skills of the Indonesian people in the field of cybersecurity. Competencies: Frontend Development, Next.js, Tailwind CSS, Moodle.",
    fullDescription:
      "A pioneering cybersecurity awareness and training platform aimed at building Indonesia's digital defense capabilities. The platform provides hands-on training, security simulations, and certification programs for individuals and enterprises. I developed an engaging and intuitive frontend interface that makes cybersecurity education accessible to both beginners and advanced practitioners, with interactive challenges and real-time progress tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDLuG717lrB0Pxg4YRizovD23Vqq9GnUkeJIAjcjqpHEfm2kT2R38Ed6ORe8z3GbTKnIui0OEtdegFN-10pVEiQ-y2CMOxfQMiJMLnD5WnOIbCXpaLCGOIkSxNAOQotgYJ8ePeRTGxXpe6dAHFIz-V_fvr3c9AqsK1i8tdICeWs0GIeTgX6QqwU6sssAJ94j51ZVXlJid1cOm7VEcYQojYXGUT1FBe87IR5MwiW_mASuSbL1ojRY9G7C8NoCLTHh4skfRG08ifOyY",
    webPreview: "https://cyberheroes.id",
    github: "https://github.com/cyberheroes-id",
    competencies: ["Frontend Development", "Next.js", "Tailwind CSS", "Moodle"],
  },
  {
    id: "e-pilketos-smk-telkom",
    title: "E-Pilketos SMK Telkom Malang",
    category: "Frontend Development",
    date: "Jul 2024 - Oct 2024",
    shortDescription:
      "E-Pilketos is an online voting website for the election of the chairman of the intra-school student organization of SMK Telkom Malang. Competencies: Frontend Development, Next.js, Tailwind CSS, Prisma ORM.",
    fullDescription:
      "A comprehensive online voting system for SMK Telkom Malang student organizational elections. The platform ensures secure, transparent, and efficient voting processes with real-time result tallying and verification. I developed the full frontend interface with real-time updates, voter authentication, and secure ballot casting mechanisms. The system integrates with a robust backend using Prisma ORM for data integrity and security.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDokXV9IFm2blSwQ1w9nn3PgfLezRZOS6oWkUTlsBjB16dTVemHdYri18m2a6R-M-xaKQw0m2ahZhS569cNvryegFI775ZfkNNkbvReLhdNowndW-B_ZlY9umGt6Z_CPNn0OQpNo4UNtDVtHNDnhN9ne0jp6XufqNeq7w2AZFGfS8XUbwxEQBDVFDmuLIILkO2VmtlSX1kr4TBjaS4gVkOD48U0TQHS-VW6zLEOTaNX5gpHzJwD3K5952NEOh973FTnqnYmowOWxeQ",
    github: "https://github.com/thokhans/e-pilketos",
    competencies: [
      "Frontend Development",
      "Next.js",
      "Tailwind CSS",
      "Prisma ORM",
    ],
  },
  {
    id: "lansicare",
    title: "LansiCare",
    category: "Frontend Development",
    date: "Jan 2024 - Jul 2024",
    shortDescription:
      "This website is specially designed to help users register for a health check-up and view health check-up history. Competencies: Frontend Development, Next.js, Tailwind CSS, NFC Integration.",
    fullDescription:
      "A modern healthcare platform designed to streamline health check-up registration and medical history management. The platform features NFC card integration for quick user identification, appointment scheduling, medical history tracking, and test result accessibility. I built the frontend with a focus on accessibility and user experience for healthcare professionals and patients, implementing real-time notifications and secure data handling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRNBdG3Tq6FeTZCcMbRc6j-pjxj0b25rXjCSa_VKTFQ2wQNvypTqZz2XR9l4hI3LENqeWeP1-1DiSfiOxMHa_MsPUbLn7gkyRMEN0iwnvyYhpL1cpympZCjbiDLAYi-xz83bMM8Z3-f5sYe1BIsAcdKdjaMvSr7oA5b3V0HecdIcRaiqXxRkFH6BKJCmP2fbNdBTeva1T9lovgRwaf-S--BCE_8t-XKjSNL_Nsqo2qmhFQqX0Lj6IhtjFcK0zhaMhBwwe02h8uj4o",
    webPreview: "https://lansicare.app",
    github: "https://github.com/thokhans/lansicare",
    competencies: [
      "Frontend Development",
      "Next.js",
      "Tailwind CSS",
      "NFC Integration",
    ],
  },
];
