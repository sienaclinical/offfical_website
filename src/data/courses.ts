export interface CourseSection {
  heading: string;
  items: string[];
}

export interface Course {
  slug: string;
  title: string;
  titleId: string;
  badge: string;
  badgeId: string;
  description: string;
  descriptionId: string;
  sections: CourseSection[];
  instructor?: string;
  registerUrl?: string;
  icon: string;
}

export const courses: Course[] = [
  {
    slug: "basic-concepts-in-biostatistics",
    title: "Basic Concepts in Biostatistics",
    titleId: "Konsep Dasar Biostatistika",
    badge: "3-Day Workshop",
    badgeId: "Lokakarya 3 Hari",
    description:
      "This workshop is an intensive three-day course designed specifically for clinicians, researchers, and industry professionals. Its goal is to equip participants with statistical tools to analyze data, interpret research findings, and improve study quality.",
    descriptionId:
      "Workshop ini adalah kursus intensif selama tiga hari yang dirancang khusus untuk klinisi, peneliti, dan profesional industri. Tujuannya adalah membekali peserta dengan perangkat statistik untuk menganalisis data, menginterpretasi temuan riset, dan meningkatkan kualitas studi.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Descriptive statistics & probability",
          "Hypothesis testing and p-values",
          "Confidence intervals",
          "Regression and correlation analysis",
          "Introduction to clinical trial design",
        ],
      },
      {
        heading: "Practicum",
        items: [
          "Hands-on data analysis exercises",
          "Statistical software walkthrough",
          "Interpreting real research outputs",
        ],
      },
    ],
    instructor: "Siena Clinical Expert Team",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 14l6-6-1.41-1.41L12 14.17l-2.59-2.58L8 13l4 4zm-4-8h8v1.5H8V9zm0 3h5v1.5H8V12z"/></svg>`,
  },
  {
    slug: "predictive-modeling-techniques",
    title: "Predictive Modeling Techniques - Workshop",
    titleId: "Workshop Teknik Pemodelan Prediktif",
    badge: "3-Day Workshop",
    badgeId: "Lokakarya 3 Hari",
    description:
      "Dive into the area of predictive analytics with our intensive three-day course tailored for researchers, clinicians, and industry professionals. Participants will grasp advanced analytical methods, allowing them to build robust models that enhance the accuracy of predictions, streamline decision-making, and advance medical research.",
    descriptionId:
      "Jelajahi bidang analitik prediktif melalui kursus intensif tiga hari yang dirancang untuk peneliti, klinisi, dan profesional industri. Peserta akan mempelajari metode analitik lanjutan untuk membangun model yang kuat, meningkatkan akurasi prediksi, mendukung pengambilan keputusan, dan memajukan riset medis.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Classical methods: linear-, logistic-, poisson-regression",
          "Supervised learning: SVM, penalized-regression, tree-based methods",
          "Unsupervised learning: k-means, KNN",
          "Penalized-methods",
        ],
      },
      {
        heading: "Practicum",
        items: ["Case studies with R"],
      },
      {
        heading: "Contact & Registration",
        items: ["REGISTER NOW", "admin@sienaclinical.com", "bit.ly/SienaCourseRegis"],
      },
    ],
    instructor: "Ivonne Martin, PhD & Putri Novianti, PhD",
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M4 5.75A2.75 2.75 0 0 1 6.75 3h6.19c.73 0 1.43.29 1.94.8l3.32 3.32c.51.51.8 1.21.8 1.94v9.19A2.75 2.75 0 0 1 16.25 21h-9.5A2.75 2.75 0 0 1 4 18.25v-12.5Zm9 0v2.5A1.75 1.75 0 0 0 14.75 10h2.5l-4.25-4.25ZM8 13.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"/></svg>`,
  },
  {
    slug: "systematic-literature-review",
    title: "Systematic Literature Review",
    titleId: "Workshop Tinjauan Pustaka Sistematis",
    badge: "2-Day Workshop",
    badgeId: "Lokakarya 2 Hari",
    description:
      "Uncover the art of evidence synthesis with our comprehensive two-day course. This course illuminates the crucial skill of navigating vast bodies of literature. Mastering systematic review techniques empowers participants to make informed decisions, critically appraise existing research, and contribute significantly to the academic and clinical field.",
    descriptionId:
      "Temukan seni sintesis bukti melalui kursus dua hari kami yang komprehensif. Kursus ini menyoroti keterampilan penting dalam menavigasi literatur yang sangat luas. Penguasaan teknik systematic review membantu peserta membuat keputusan yang lebih tepat, menilai penelitian yang ada secara kritis, dan memberi kontribusi bermakna pada bidang akademik maupun klinis.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Formulating research questions",
          "Search strategies, incl: inclusion and exclusion criteria",
          "Information extraction",
          "Reporting and writing",
        ],
      },
      {
        heading: "Practicum",
        items: ["Literature search", "Information extraction: documentation"],
      },
      {
        heading: "Registration Information",
        items: ["REGISTER NOW", "admin@sienaclinical.com", "bit.ly/SienaCourseRegis"],
      },
    ],
    instructor: "Putri Novianti, PhD",
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 14v-2h12v2H6zm12-4H6v-2h12v2zm0-4h-5V4h5v6z"/></svg>`,
  },
  {
    slug: "introduction-to-quantitative-research",
    title: "Introduction to Quantitative Research - Course",
    titleId: "Pengantar Penelitian Kuantitatif",
    badge: "2-Day Course",
    badgeId: "Kursus 2 Hari",
    description:
      "Unleash the potential of quantitative research in two days! Participants will acquire the skills to design, analyze, and interpret quantitative data, empowering them to contribute meaningfully to the ever-evolving landscape of medical research.",
    descriptionId:
      "Maksimalkan potensi penelitian kuantitatif dalam dua hari. Peserta akan memperoleh keterampilan untuk merancang, menganalisis, dan menginterpretasikan data kuantitatif, sehingga dapat berkontribusi secara bermakna pada lanskap riset medis yang terus berkembang.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Overview and Fundamentals in Quantitative Research",
          "Measures of Association",
          "Population and Sampling Distributions",
          "Inferential Statistics: Hypothesis Testing",
        ],
      },
      {
        heading: "Practicum",
        items: ["Case studies with R"],
      },
      {
        heading: "Registration Information",
        items: ["REGISTER NOW", "admin@sienaclinical.com", "bit.ly/SienaCourseRegis"],
      },
    ],
    instructor: "Dewi Amaliah, M.Bat",
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M5 4.75A2.75 2.75 0 0 1 7.75 2h5.69c.73 0 1.43.29 1.94.8l2.82 2.82c.51.51.8 1.21.8 1.94v11.69A2.75 2.75 0 0 1 16.25 22h-8.5A2.75 2.75 0 0 1 5 19.25V4.75Zm3.25 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"/></svg>`,
  },
  {
    slug: "scientific-writing-and-research-methodologies",
    title: "Scientific Writing & Research Methodologies - Courses and Workshops",
    titleId: "Kursus dan Workshop Penulisan Ilmiah & Metodologi Riset",
    badge: "Course Series",
    badgeId: "Rangkaian Kursus",
    description:
      "Calling all medical professionals with a passion for advancing knowledge and contributing to research and clinical practice. Our specialized online courses are designed exclusively for medics eager to contribute into science. Whether you're a clinician, researcher or academia, medical student, or industry professional, this course provides a comprehensive roadmap to elevate your research skills.",
    descriptionId:
      "Ditujukan bagi para profesional medis yang ingin mengembangkan pengetahuan serta berkontribusi pada riset dan praktik klinis. Rangkaian kursus online ini dirancang untuk klinisi, peneliti, akademisi, mahasiswa kedokteran, dan profesional industri yang ingin meningkatkan keterampilan riset secara menyeluruh.",
    sections: [
      {
        heading: "Our Courses",
        items: [
          "Introduction to Scientific Writing",
          "Advance Course on Scientific Writing",
          "Systematic Literature Review",
          "Basic Concept in Biostatistics",
          "Introduction to Meta-Analysis",
          "Predictive Modelling Techniques",
          "Introduction to Quantitative Research",
        ],
      },
      {
        heading: "Additional Information",
        items: [
          "Can't find what you are looking for?",
          "We provide on-demand workshops & courses that tailor to your needs.",
          "Let's discuss how we can collaborate together",
        ],
      },
    ],
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M3.75 5.5A2.75 2.75 0 0 1 6.5 2.75h11A2.75 2.75 0 0 1 20.25 5.5v13A2.75 2.75 0 0 1 17.5 21.25h-11A2.75 2.75 0 0 1 3.75 18.5v-13Zm4 1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 4a.75.75 0 0 0 0 1.5h8.5a.75.75 0 1 0 0-1.5h-8.5Zm0 4a.75.75 0 0 0 0 1.5H13a.75.75 0 0 0 0-1.5H7.75Z"/></svg>`,
  },
  {
    slug: "introduction-to-scientific-writing",
    title: "Introduction to Scientific Writing - Workshop",
    titleId: "Workshop Pengantar Penulisan Ilmiah",
    badge: "1-Day Workshop",
    badgeId: "Lokakarya 1 Hari",
    description:
      "Join our one-day course that is tailored for medical students and clinical practitioners. In this course, you will learn essential scientific writing skills from industry experts to enhance your research communication. Benefit from a post-course advantage with free consultations to boost your writing proficiency.",
    descriptionId:
      "Ikuti kursus satu hari yang dirancang untuk mahasiswa kedokteran dan praktisi klinis. Dalam kursus ini, peserta akan mempelajari keterampilan dasar penulisan ilmiah dari para ahli untuk meningkatkan komunikasi riset. Setelah kursus, peserta juga memperoleh kesempatan konsultasi gratis untuk membantu meningkatkan kemampuan menulis.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Introduction to research publication in Medical Field",
          "Introduction to Literature Search",
          "Strategy for journal publication",
        ],
      },
      {
        heading: "Practicum",
        items: ["Building personal tools for publication", "Referencing softwares"],
      },
      {
        heading: "Registration Information",
        items: ["REGISTER NOW", "admin@sienaclinical.com", "bit.ly/SienaCourseRegis"],
      },
    ],
    instructor: "dr Pandji Nurikhwan M.Pd.Ked & dr. Alfi Yasmina, MD, PhD",
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M6.25 4A2.25 2.25 0 0 0 4 6.25v11.5A2.25 2.25 0 0 0 6.25 20h11.5A2.25 2.25 0 0 0 20 17.75V8.56a2.25 2.25 0 0 0-.66-1.59l-2.31-2.31A2.25 2.25 0 0 0 15.44 4H6.25Zm2 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3.5A.75.75 0 0 1 9 11h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"/></svg>`,
  },
  {
    slug: "advance-course-in-scientific-writing",
    title: "Advance Course in Scientific Writing - Workshop",
    titleId: "Workshop Lanjutan Penulisan Ilmiah",
    badge: "1-Day Workshop",
    badgeId: "Lokakarya 1 Hari",
    description:
      "Elevate your scholarly communication skills with our immersive one-day course. Tailored for clinicians, seasoned researchers, and academia, this course delves into the intricacies of crafting sophisticated scientific documents. Participants will learn advanced techniques in manuscript preparation, effective communication of complex research findings, and strategy to respond to peer-review evaluations. This course empowers professionals to enhance their influence within the medical community and beyond.",
    descriptionId:
      "Tingkatkan kemampuan komunikasi ilmiah Anda melalui kursus satu hari yang intensif ini. Dirancang untuk klinisi, peneliti berpengalaman, dan kalangan akademik, kursus ini membahas cara menyusun dokumen ilmiah yang lebih matang. Peserta akan mempelajari teknik lanjutan dalam persiapan manuskrip, komunikasi efektif atas temuan riset yang kompleks, serta strategi merespons evaluasi peer-review.",
    sections: [
      {
        heading: "Highlighted Materials",
        items: [
          "Building narration in scientific report",
          "Assertive and Persuasive communication",
          "Strategy to publish in high reputable journal",
          "Strategy to deal with peer-review evaluation",
        ],
      },
      {
        heading: "Registration Information",
        items: ["REGISTER NOW", "admin@sienaclinical.com", "bit.ly/SienaCourseRegis"],
      },
    ],
    instructor: "dr Pandji Nurikhwan M.Pd.Ked & dr. Alfi Yasmina, MD, PhD",
    registerUrl: "https://bit.ly/SienaCourseRegis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V8.81a2.75 2.75 0 0 0-.8-1.94l-2.07-2.07A2.75 2.75 0 0 0 16.19 4H5.75Zm3 4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H9.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H9.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H9.5a.75.75 0 0 1-.75-.75Z"/></svg>`,
  },
];
