import project1 from "../assets/projects/drowsi.png";
import project2 from "../assets/projects/e-com.png";
import project3 from "../assets/projects/profile_page.png";
import project4 from "../assets/projects/project_4.png";

export const HERO_CONTENT = `I am a fresher with strong knowledge in Java, Python, SQL, React, and JavaScript, alongside excellent problem-solving skills. Proficient in data structures, I am eager to apply my technical abilities to develop innovative solutions. My goal is to contribute to a dynamic team, leveraging my skills to drive business success and deliver exceptional user experiences. I am enthusiastic about learning new technologies and continuously improving my skills to stay at the forefront of industry advancements. I am committed to personal and professional growth, seeking opportunities to contribute meaningfully to my team and organization.`;

export const ABOUT_TEXT = `As a fresher with comprehensive training in Java Full Stack development and hands-on experience through an E-commerce Marketing internship, I am eager to apply my skills as a Java developer. My background includes a Salesforce developer internship, reinforcing my capability in both Java and Salesforce ecosystems. I am committed to continuous learning and utilizing emerging technologies to drive innovative solutions. My proficiency in Java, Python, SQL, and data structures, combined with my problem-solving abilities, prepares me to contribute effectively to a dynamic development team. I am enthusiastic about taking on challenging roles in software development and data analysis, aiming to deliver impactful results and grow professionally. I aspire to work in a collaborative environment where I can enhance my skills, contribute to innovative projects, and be part of a forward-thinking organization dedicated to excellence.`;

export const INTERNSHIP = [
  {
    year: "2021/Oct - 2021/Dec ",
    role: "Full Stack Developer Internship",
    company: "10Seconds.",
    description: `I completed an internship at 10 Seconds as a Java Full Stack Developer, working with Java Spring Boot, MySQL, HTML, and CSS. During this internship, I developed an e-commerce application that included adding, deleting, updating products, and performing CRUD operations.`,
    technologies: ["Java", "Spring boot", "HTML", "CSS", "JS", "MySql"],
  },
  {
    year: "2023/Oct - 2024/Jan",
    role: "Salesforce Developer Internship",
    company: "SmartInterz",
    description: `During an 8-week virtual internship(Nov-Dec 2023), I completed various Salesforce Trailhead modules, including Salesforce Fundamentals, Organizational Setup, and Relationship & Process Automation. I gained proficiency in Apex, Testing & Debugging, VS Code Setup, CLI Setup, LWC, and API. Additionally, I earned the Developer Super Set certification.`,
    technologies: ["Apex", "SOQL", "CLI setup", "LWC", "Traihead"],
  },
];

export const PROJECTS = [
  {
    title: "Drowsiness Detection System",
    image: project1,
    description:
      "In my 4th year of engineering, I worked on a drowsiness detection project with a group of four members.Using OpenCV, our system captured webcam images and used a Deep Learning model to classify eye states. If closed eyes were detected for a few seconds, the system alerted the driver, demonstrated live with real-time detection.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "I recently created a simple web application using React, Java, Spring Boot, and H2 database. The application allows users to add and delete products, check product availability, manage product categories, and view the price of products in USD. It's designed to function like an e-commerce application.",
    technologies: ["java", "Spring boot", "HTML", "CSS", "React", "H2"],
  },
  {
    title: "Profile Page Web Application",
    image: project3,
    description:
      "This web application allows users to register, login, and update their profiles. Developed with html, css and javascript for the frontend, java for the backend, and mysql for the database, and hosted on AWS for accessibility and scalability",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "phpMyAdmin"],
  },
  {
    title: "COVID19 Testing Management System",
    image: project4,
    description:
      "In my 3rd year of engineering, I worked on a Covid19 Testing Management System project with a group of three members using Apache Web Server, PHP, and MySQL. I wrote SQL queries to manage the database efficiently, enabling healthcare professionals to access, update, and analyze data. This facilitated informed decision-making in healthcare.",
    technologies: ["HTML", "CSS", "php", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 95383 98740",
  email: "sangameshshishir@gmail.com",
};
