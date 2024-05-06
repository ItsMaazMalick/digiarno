type TeamMember = {
  name: string;
  position: string;
  image: string;
  social: { id: "fb" | "tw" | "in"; link: string }[];
};

export const staff: TeamMember[] = [
  {
    name: "M. Nouman Abbasi",
    position: "CEO",
    image: "/images/team/ceo.png",
    social: [],
  },
  {
    name: "Arslan Abbasi",
    position: "Co-Founder",
    image: "/images/team/co-founder.jpg",
    social: [],
  },
  {
    name: "Qasim Shabir",
    position: "Business Development Manager in UAE",
    image: "/images/team/qasim-shabir.jpg",
    social: [],
  },
  {
    name: "Maaz Malick",
    position: "Senior Developer",
    image: "/images/team/maaz-malick.jpg",
    social: [
      {
        id: "fb",
        link: "https://www.facebook.com/itsmaazmalick",
      },
      {
        id: "tw",
        link: "https://twitter.com/itsmaazmalick",
      },
      {
        id: "in",
        link: "https://www.linkedin.com/in/itsmaazmalick/",
      },
    ],
  },
];

export const graphicDesigner: TeamMember[] = [
  {
    name: "Asmat Farooq",
    position: "Senior Graphic Designer",
    image: "/images/team/asmat-farooq.jpg",
    social: [],
  },
  {
    name: "Eman Shahzad",
    position: "Graphic Designer",
    image: "/images/team/eman-shahzad.jpg",
    social: [],
  },
  {
    name: "Aman Ijaz",
    position: "Graphic Designer",
    image: "/images/team/aman-ijaz.png",
    social: [],
  },
];

export const webDeveloper: TeamMember[] = [
  {
    name: "Maaz Malick",
    position: "Senior Developer",
    image: "/images/team/maaz-malick.jpg",
    social: [
      {
        id: "fb",
        link: "https://www.facebook.com/itsmaazmalick",
      },
      {
        id: "tw",
        link: "https://twitter.com/itsmaazmalick",
      },
      {
        id: "in",
        link: "https://www.linkedin.com/in/itsmaazmalick/",
      },
    ],
  },
  {
    name: "Areaba Touseef",
    position: "Web Developer",
    image: "/images/team/areeba-touseef.jpg",
    social: [],
  },
  {
    name: "Asma Hashmi",
    position: "Wordpress Developer",
    image: "/images/team/asma-hashmi.jpg",
    social: [],
  },
  {
    name: "Mujeer Khurshid",
    position: "Wordpress Developer",
    image: "/images/team/mujeer-khurshid.png",
    social: [],
  },
  {
    name: "Hamza Khurram",
    position: "Wordpress Developer",
    image: "/images/team/hamza-khurram.jpg",
    social: [],
  },
];

export const flutterDeveloper: TeamMember[] = [
  {
    name: "Malik Atif Saleem",
    position: "Senior Flutter Developer",
    image: "/images/team/malik-atif-saleem.jpg",
    social: [],
  },
  {
    name: "Muhammad Jawad Khalid",
    position: "Flutter Developer",
    image: "/images/team/muhammad-jawad-khalid.png",
    social: [],
  },
  {
    name: "Abrar Ahmed",
    position: "Flutter Developer",
    image: "/images/team/abrar-ahmed.jpg",
    social: [],
  },
];

export const digitalMarketers: TeamMember[] = [
  {
    name: "Usama Ahmed Siddiqui",
    position: "Video Editor",
    image: "/images/team/usama-ahmed-siddiqui.jpg",
    social: [],
  },
  {
    name: "Haider Ikhtiar",
    position: "Content Researchers",
    image: "/images/team/haider-ikhtiar.jpg",
    social: [],
  },
  {
    name: "Syed Jamal Haider",
    position: "Video Editor",
    image: "/images/team/syed-jamal-haider.jpg",
    social: [],
  },
];
