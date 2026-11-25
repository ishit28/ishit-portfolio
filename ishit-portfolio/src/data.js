// Edit everything about you here. The components read from this file.
export const profile = {
  name: 'Ishit Tyagi',
  role: 'Software developer who designs databases that hold up',
  intro:
    'Computer Science graduate with hands-on experience in Oracle and MySQL design and IT compliance at India Optel Limited, a defence PSU. I build full-stack apps in Java, JavaScript and React.',
  email: 'ishit.software@gmail.com',
  phone: '+919458251513',
  phoneDisplay: '+91-9458251513',
  whatsapp: '917618137975',
  whatsappDisplay: '+91 76181 37975',
  linkedin: 'https://linkedin.com/in/ishittyagi',
  github: 'https://github.com/ishit28', // GitHub button shows in the hero when set
  location: 'Indirapuram, Ghaziabad, Uttar Pradesh',
}

export const nav = [
  ['work', 'Work'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['training', 'Training'],
  ['contact', 'Contact'],
]

export const stats = [
  { to: 50, suffix: '+', label: 'systems kept compliant' },
  { to: 30, suffix: '+', label: 'staff trainings coordinated' },
  { to: 5, suffix: '+', label: 'database modules designed' },
  { to: 3, suffix: '', label: 'full projects built' },
]

export const job = {
  title: 'IT & Database Support Executive',
  org: 'India Optel Limited (OLF), a defence PSU',
  when: 'Jun 2025 – Jun 2026',
  place: 'Dehradun',
  points: [
    'Designed and managed a relational training database in Oracle DBMS, with schemas across 5+ modules to track personnel metrics and speed up data retrieval.',
    'Supported endpoint management and IT infrastructure compliance for 50+ systems, aligned with the Chakravyuh Security framework.',
    'Contributed documentation and fixture testing for a gun position sensor environmental testing stand.',
    'Drafted official bilingual (English/Hindi) communications and coordinated technical training nominations for 30+ staff.',
    'Led internal cybersecurity awareness initiatives that improved compliance among technical personnel.',
  ],
}

// Add `repo` and `demo` URLs to show "View code" / "Live demo" buttons.
export const projects = [
  {
    name: 'E-Commerce Web App',
    year: '2023',
    tech: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    points: [
      'A full-stack shop with a product catalog, shopping cart, order management and user authentication.',
      'Normalized MySQL schemas and RESTful CRUD APIs for products, orders and cart operations keep data handling consistent.',
    ],
    repo: '',
    demo: '',
  },
  {
    name: 'Library Management System',
    year: '2023',
    tech: ['Java', 'JDBC', 'MySQL', 'OOP'],
    points: [
      'A desktop app in core Java, built on OOP principles, that manages book inventory, membership records and issue/return transactions.',
      'A JDBC data layer handles CRUD across inventory, members and transactions.',
    ],
    repo: '',
    demo: '',
  },
  {
    name: 'School Management System',
    year: 'Aug – Sep 2024',
    tech: ['Oracle DBMS', 'SQL', 'Constraints'],
    points: [
      'A relational database covering students, teachers, classes, attendance and fee records.',
      'SQL for insert, update, delete and retrieval across related tables, with primary keys, foreign keys and constraints enforcing referential integrity.',
    ],
    repo: '',
    demo: '',
  },
]

export const skills = [
  ['Languages', ['Java', 'C++', 'C', 'JavaScript', 'SQL']],
  ['Web', ['React.js', 'Node.js', 'REST APIs', 'HTML5', 'CSS3']],
  ['Databases', ['Oracle DBMS', 'MySQL', 'Schema design', 'Normalization', 'Query optimization']],
  ['Foundations', ['OOP', 'DSA', 'SDLC', 'Agile', 'Git & GitHub']],
  ['IT & Security', ['Endpoint management', 'IT compliance', 'Cybersecurity', 'Cloud', 'IoT', 'RPA']],
]

export const education = [
  {
    title: 'Bachelor of Engineering, Computer Science',
    where: 'Chandigarh University · Aug 2021 – Jun 2024',
    chips: ['DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Web Technologies'],
  },
  {
    title: 'Diploma, Computer Science Engineering',
    where: 'Krishna Institute of Polytechnic · Aug 2018 – Jun 2021',
    note: 'Board of Technical Education, Uttar Pradesh',
  },
]

export const training = [
  {
    title: 'Full-Stack Web Development Bootcamp',
    where: 'CodeHelp · Mar 2023 – Aug 2023',
    note: '4.5 months of intensive training in modern web development technologies and best practices.',
  },
  {
    title: 'NASSCOM FutureSkills Foundational Programs',
    where: 'Wipro TalentNext · Nov 2023 – Mar 2024',
    chips: ['AI', 'Cloud Computing', 'Cisco Cybersecurity', 'IoT', 'RPA'],
  },
]
