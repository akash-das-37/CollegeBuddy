export const SEMESTER_SUBJECTS_MAP: Record<string, string[]> = {
  '1': [
    'Introduction to Programming and Problem Solving',
    'Engineering Physics',
    'Engineering Mathematics-I',
    'Environmental Science',
    'Indian Knowledge System',
    'Basic Electrical Engineering',
    'Engineering Graphics & Design',
  ],
  '2': [
    'Data structure and Algorithms',
    'Introduction to Artificial Intelligence',
    'Digital Logic and Computer Organization',
    'Engineering Mathematics–II',
    'Engineering Chemistry',
    'Constitution of India & Professional Ethics',
    'Design Thinking & Innovation',
  ],
  '3': [
    'Computer Architecture',
    'Design and Analysis of Algorithms',
    'Operating Systems',
    'Advanced Artificial Intelligence',
    'Internet of Things',
    'Discrete Mathematics',
  ],
  '4': [
    'Database Management Systems',
    'Computer Networks',
    'Machine Learning',
    'Formal Language and Automata Theory',
    'Probability and Statistics',
    'Principles of Management',
  ],
  '5': [
    'Software Engineering',
    'Object Oriented Programming using Java',
    'Compiler Design',
    'Cryptography and Network Security',
    'Computer Graphics',
    'Data Handling and Visualization',
    'Soft Computing',
    'Project Management & Finance',
  ],
  '6': [
    'Web and Internet Technology',
    'Deep Learning',
    'Image Processing',
    'Cloud Computing',
    'Big Data and Data Analytics',
    'Natural Language Processing',
    'Mobile Computing',
    'Human Computer Interaction',
    'E-Commerce and Digital Business Model',
    'Quantum Computing',
    'Cyber Law and Ethics',
  ],
  '7': [
    'Distributed Systems',
    'Internet of Things (IoT)',
    'Cyber Security & Cryptography',
    'High Performance Computing',
    'Blockchain Technology',
    'Optimization Techniques',
    'Bio-informatics',
    'Robotics',
    'Human Resource Development and Organizational Behavior',
    'Research Methodology & IPR',
  ],
  '8': [
    'Internship/Entrepreneurship',
    'Grand Viva',
    'Quantum Computing & Advanced Architectures',
    'Neural Networks & Deep Learning',
    'Capstone System Design',
  ],
};

export const PALETTES = [
  { bg: '#dcfce7', color: '#16a34a' },
  { bg: '#e0f2fe', color: '#0284c7' },
  { bg: '#f3e8ff', color: '#9333ea' },
  { bg: '#fee2e2', color: '#ef4444' },
  { bg: '#ffedd5', color: '#f97316' },
  { bg: '#fef3c7', color: '#d97706' },
  { bg: '#e0e7ff', color: '#4f46e5' },
  { bg: '#fce7f3', color: '#db2777' },
];

export function getSubjectVisuals(name: string, index = 0) {
  const lower = name.toLowerCase();
  let icon = 'auto_stories';

  if (lower.includes('data structure') || lower.includes('dsa') || lower.includes('dbms') || lower.includes('database')) {
    icon = 'database';
  } else if (
    lower.includes('digital logic') ||
    lower.includes('circuit') ||
    lower.includes('hardware') ||
    lower.includes('architecture') ||
    lower.includes('computer org') ||
    lower.includes('deco')
  ) {
    icon = 'memory';
  } else if (
    lower.includes('artificial intelligence') ||
    lower.includes('ai') ||
    lower.includes('machine learning') ||
    lower.includes('deep learning') ||
    lower.includes('intelligence')
  ) {
    icon = 'psychology';
  } else if (
    lower.includes('math') ||
    lower.includes('discrete') ||
    lower.includes('calculus') ||
    lower.includes('algebra') ||
    lower.includes('probability') ||
    lower.includes('statistics')
  ) {
    icon = 'calculate';
  } else if (lower.includes('chemistry')) {
    icon = 'science';
  } else if (lower.includes('physics')) {
    icon = 'cyclone';
  } else if (lower.includes('constitution') || lower.includes('ethics') || lower.includes('law')) {
    icon = 'gavel';
  } else if (lower.includes('design thinking') || lower.includes('innovation') || lower.includes('idea')) {
    icon = 'lightbulb';
  } else if (
    lower.includes('program') ||
    lower.includes('code') ||
    lower.includes('oop') ||
    lower.includes('java') ||
    lower.includes('python') ||
    lower.includes('c++')
  ) {
    icon = 'code';
  } else if (
    lower.includes('network') ||
    lower.includes('communication') ||
    lower.includes('web') ||
    lower.includes('cloud') ||
    lower.includes('internet')
  ) {
    icon = 'lan';
  } else if (
    lower.includes('operating') ||
    lower.includes('os') ||
    lower.includes('system') ||
    lower.includes('unix') ||
    lower.includes('linux')
  ) {
    icon = 'terminal';
  }

  const palette = PALETTES[index % PALETTES.length];
  return { icon, accentBg: palette.bg, accentColor: palette.color };
}

export function getSubjectsForSemester(semester: string | number, _branch?: string): string[] {
  const semStr = String(semester || '2');
  return SEMESTER_SUBJECTS_MAP[semStr] || SEMESTER_SUBJECTS_MAP['2'];
}
