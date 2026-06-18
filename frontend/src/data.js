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
  { label: 'Certifications', value: 8, suffix: '' },
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
    live: 'https://project-ai-resume-analyzer.onrender.com/',
  },
  {
    title: 'Browser-Based Code Editor',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Live Preview', 'Real Time Execution', 'File Download', 'Theme Switching'],
    image: '/project-code-editor.png',
    mediaClass: 'media-laptop',
    live: 'https://lakshyasaraswat07.github.io/Project--Browser_Based_Code_Editor/',
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
  {
    title: 'Fundamentals of Machine Learning and Artificial Intelligence',
    issuer: 'AWS Training & Certification',
    description: 'Completed AWS training in core machine learning concepts, artificial intelligence foundations, and practical cloud applications.',
    image: '/certificates/aws-ml-ai.jpg',
    pdf: '/certificates/aws-ml-ai.pdf',
  },
  {
    title: 'Oracle Generative AI Professional',
    issuer: 'Oracle University',
    description: 'Earned the OCI 2025 professional certification covering generative AI, large language models, and Oracle Cloud AI services.',
    image: '/certificates/oracle-generative-ai.jpg',
    pdf: '/certificates/oracle-generative-ai.pdf',
  },
  {
    title: 'Getting Started with AI on Jetson Nano',
    issuer: 'NVIDIA',
    description: 'Demonstrated competency in deploying AI workflows and computer vision applications on the NVIDIA Jetson Nano platform.',
    image: '/certificates/nvidia-jetson-nano.jpg',
    pdf: '/certificates/nvidia-jetson-nano.pdf',
  },
  {
    title: 'PCB Design Course',
    issuer: 'Simplilearn',
    description: 'Completed practical training in printed circuit board design, component placement, routing, and electronic hardware workflows.',
    image: '/certificates/pcb-design.jpg',
    pdf: '/certificates/pcb-design.pdf',
  },
  {
    title: 'VLSI Course',
    issuer: 'Simplilearn',
    description: 'Completed foundational VLSI training covering integrated circuit design concepts and semiconductor development workflows.',
    image: '/certificates/vlsi-course.jpg',
    pdf: '/certificates/vlsi-course.pdf',
  },
  {
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    description: 'Completed structured training in Python syntax, programming fundamentals, problem solving, and core language concepts.',
    image: '/certificates/infosys-python.jpg',
    pdf: '/certificates/infosys-python.pdf',
  },
  {
    title: 'Web Development: HTML, CSS, JavaScript, Bootstrap & React JS',
    issuer: 'Udemy',
    description: 'Completed full web development training across responsive interfaces, JavaScript, Bootstrap, and modern React applications.',
    image: '/certificates/web-development.jpg',
    pdf: '/certificates/web-development.pdf',
  },
  {
    title: "DOEACC 'O' Level Qualification",
    issuer: 'NIELIT, Government of India',
    description: 'Qualified the O Level programme covering IT tools, web design, Python programming, networking, and Internet of Things.',
    image: '/certificates/o-level.jpg',
    pdf: '/certificates/o-level.pdf',
  },
];

export const achievements = [
  { title: 'Finalist TechExpo 2025', detail: 'Recognized for practical engineering innovation and prototype execution.' },
  { title: 'International Conference EACE 2025 Presenter', detail: 'Presented technical work at an international academic and engineering forum.' },
  { title: 'AIR 342 CodeQuot Coding Challenge', detail: 'Secured All India Rank 342 in a competitive programming challenge.' },
];
