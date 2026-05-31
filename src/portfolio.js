const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cjlacson4.github.io/portfolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Carl James Lacson',
  role: 'Full Stack Developer',
  picture: 'profile/profile.jfif',

  description:
    'Passionate Full-Stack Developer specializing in Laravel, Vue.js, React.js, and FastAPI. This portfolio features projects that demonstrate expertise in web development, database design, system architecture, and problem-solving. Through academic, internship, and personal projects, I strive to build scalable, user-focused applications that address real-world challenges.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/carl-james-lacson-a36429383',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    slug: 'gamified-trainee-placement-system',
    name: 'Gamified Trainee Placement System With Decision Support',
    description:
      'A web-based trainee placement platform that matches student skills with company requirements using decision support techniques, enhanced with gamification features to improve engagement and participation.',
    stack: ['Laravel', 'Vuejs', 'MySQL'],
    livePreview: true,
    image: 'gamified_trainee_placement_system/1.png',
    slides: [
      'gamified_trainee_placement_system/1.png',
      'gamified_trainee_placement_system/2.png',
      'gamified_trainee_placement_system/3.png',
      'gamified_trainee_placement_system/4.png',
      'gamified_trainee_placement_system/5.png',
      'gamified_trainee_placement_system/6.png',
      'gamified_trainee_placement_system/7.png',
      'gamified_trainee_placement_system/8.png',
      'gamified_trainee_placement_system/9.png',
      'gamified_trainee_placement_system/10.png',
      'gamified_trainee_placement_system/11.png',
      'gamified_trainee_placement_system/12.png',
      'gamified_trainee_placement_system/13.png',
      'gamified_trainee_placement_system/14.png',
      'gamified_trainee_placement_system/15.png',
      'gamified_trainee_placement_system/16.png',
      'gamified_trainee_placement_system/17.png',
    ],
  },
  {
    slug: 'dental-clinic-management-system',
    name: 'Dental Clinic Management System',
    description:
      'A web-based dental clinic management system that centralizes patient records, treatment history, and clinical workflows to improve efficiency and patient care.',
    stack: ['Laravel', 'Vuejs', 'PostgreSQL'],
    livePreview: true,
    image: 'dental/1.png',
    slides: [
      'dental/1.png',
      'dental/2.png',
      'dental/3.png',
      'dental/4.png',
      'dental/5.png',
      'dental/6.png',
      'dental/7.png',
    ],
  },
  {
    slug: 'resort-management-system',
    name: 'Resort Management System',
    description:
      'A web-based management platform that handles customer information, cottage reservations, walk-in and overnight accommodations, and transaction processing, helping streamline resort operations through a centralized system.',
    stack: ['Laravel', 'React', 'PostgreSQL'],
    livePreview: true,
    image: 'icoys-management-system/1.png',
    slides: [
      'icoys-management-system/1.png',
      'icoys-management-system/2.png',
      'icoys-management-system/3.png',
      'icoys-management-system/4.png',
      'icoys-management-system/5.png',
    ],
  },
  {
    slug: 'payroll-management-system',
    name: 'Payroll Management System',
    description:
      'A web-based payroll system that simplifies employee management, salary computation, and payroll processing through an automated and centralized platform.',
    stack: ['FastAPI', 'React', 'PostgreSQL'],
    livePreview: true,
    image: 'payroll_management_system/1.png',
    slides: [
      'payroll_management_system/1.png',
      'payroll_management_system/2.png',
      'payroll_management_system/3.png',
      'payroll_management_system/4.png',
      'payroll_management_system/5.png',
      'payroll_management_system/6.png',
      'payroll_management_system/7.png',
      'payroll_management_system/8.png',
      'payroll_management_system/9.png',
      'payroll_management_system/10.png',
    ],
  },
  {
    slug: 'phonebook',
    name: 'Phonebook',
    description:
      'A contact management system that allows users to store, manage, and search contact information through a simple and organized interface.',
    stack: ['Laravel'],
    livePreview: true,
    image: 'phonebook/1.png',
    slides: ['phonebook/1.png'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Vuetify',
  'Chakra UI',
  'Git',
  'CI/CD',
  'VueJs',
  'FastAPI',
  'Laravel',
  'MySQL',
  'PostgreSQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cjlacson4@mail.com',
}

export { header, about, projects, skills, contact }
