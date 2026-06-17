export const profile = {
  name: 'Lakshya Saraswat',
  role: 'Full Stack Developer | Electronics & Communication Engineer | AI Enthusiast',
  location: 'Kanpur, Uttar Pradesh, India',
  email: 'lakshya3924@gmail.com',
  github: 'https://github.com/LakshyaSaraswat07',
  linkedin: 'https://linkedin.com/in/lakshya-saraswat',
  photo: '/lakshya-profile.png',
};

export const stats = [
  { label: 'Projects Completed', value: 3, suffix: '' },
  { label: 'Certifications', value: 6, suffix: '+' },
  { label: 'Technologies', value: 22, suffix: '+' },
  { label: 'Hackathons', value: 4, suffix: '+' },
];

export const skills = [
  { category: 'Programming', items: [['Python', 92], ['Java', 82], ['C', 78], ['JavaScript', 90]] },
  { category: 'Frontend', items: [['HTML', 95], ['CSS', 92], ['ReactJS', 88], ['TailwindCSS', 84]] },
  { category: 'Backend', items: [['NodeJS', 86], ['ExpressJS', 84], ['MongoDB', 82]] },
  { category: 'AI & ML', items: [['Machine Learning', 78], ['Generative AI', 82]] },
  { category: 'ECE', items: [['Circuit Design', 80], ['RF Communication', 76], ['Embedded Systems', 84], ['Arduino', 88]] },
  { category: 'Tools', items: [['GitHub', 90], ['VS Code', 94], ['Render', 78], ['MATLAB', 74]] },
];

export const projects = [
  {
    title: 'AI Resume Analyzer & ATS Checker',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'PyPDF2'],
    features: ['ATS Scoring', 'Resume Parsing', 'Skill Gap Analysis', 'Suggestions Engine'],
    image: '/project-ai-resume.png',
    mediaClass: 'media-laptop',
    live: '/demos/ai-resume-analyzer/',
  },
  {
    title: 'Browser-Based Code Editor',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Live Preview', 'Real Time Execution', 'File Download', 'Theme Switching'],
    image: '/project-code-editor.png',
    mediaClass: 'media-laptop',
    live: '/demos/code-editor/',
  },
  {
    title: 'RF Transmission Drone',
    tech: ['RF Modules', 'Flight Controller', 'Embedded Systems'],
    type: 'Hardware Project',
    features: ['RF Communication', 'Stable Flight Control', 'Hardware Integration'],
    image: '/project-drone.png',
    mediaClass: 'media-drone',
  },
];

export const certifications = [
  'AWS Fundamentals of ML & AI',
  'Oracle Generative AI Professional',
  'NVIDIA Jetson Nano AI',
  'VLSI & PCB Design',
  'Infosys Python Programming',
  'Web Development Certification',
];

export const achievements = [
  { title: 'Finalist TechExpo 2025', detail: 'Recognized for practical engineering innovation and prototype execution.' },
  { title: 'International Conference EACE 2025 Presenter', detail: 'Presented technical work at an international academic and engineering forum.' },
  { title: 'AIR 342 CodeQuot Coding Challenge', detail: 'Secured All India Rank 342 in a competitive programming challenge.' },
];
