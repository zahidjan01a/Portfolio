export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const heroTypingWords = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
];

export const aboutSummary =
  "I am an AI Engineer with a strong foundation in Machine Learning, Natural Language Processing, and Computer Vision, focused on developing reliable and deployable intelligent systems. My work integrates academic rigor with engineering execution through research-oriented projects, teaching exposure, and practical industry experience. I aim to pursue a fully funded MS abroad and contribute to high-impact research in trustworthy and applied AI.";

export const skillGroups = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python"],
  },
  {
    title: "AI / ML",
    icon: "🧠",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"],
  },
  {
    title: "Tools & Frameworks",
    icon: "🛠️",
    skills: ["FastAPI", "Flask", "Streamlit", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    title: "Data",
    icon: "📊",
    skills: ["Data Analysis", "Data Visualization"],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MySQL"],
  },
];

export const projects = [
  {
    title: "MNIST Digit Recognition",
    description:
      "Built a robust handwritten digit classifier using PCA for dimensionality reduction and KNN for fast and interpretable prediction.",
    problem: "Accurate handwritten digit recognition with reduced feature complexity.",
    approach: "Applied PCA before KNN and tuned neighbor selection for stable classification.",
    result: "Improved inference efficiency while maintaining strong recognition performance.",
    stack: ["Python", "Scikit-learn", "PCA", "KNN"],
    github: "https://github.com/zahidjan01a",
  },
  {
    title: "Sentiment Analysis API",
    description:
      "Developed a production-ready sentiment analysis backend with DistilBERT and FastAPI for scalable text inference.",
    problem: "Need for fast, high-quality sentiment inference on real text inputs.",
    approach: "Integrated DistilBERT with FastAPI and structured API-ready preprocessing.",
    result: "Delivered scalable NLP inference service suitable for real-time integration.",
    stack: ["Python", "DistilBERT", "FastAPI", "Transformers"],
    github: "https://github.com/zahidjan01a",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Designed an end-to-end churn prediction pipeline to identify at-risk customers and support proactive retention strategies.",
    problem: "Difficulty identifying customers likely to churn early enough for intervention.",
    approach: "Built complete ML pipeline with feature engineering and model evaluation.",
    result: "Enabled risk-based targeting for proactive customer retention actions.",
    stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/zahidjan01a",
  },
  {
    title: "Email Spam Classifier",
    description:
      "Trained and optimized a spam detection model achieving 98% classification accuracy on benchmark email datasets.",
    problem: "High volume of noisy and malicious email traffic in inbox streams.",
    approach: "Used TF-IDF feature extraction and supervised NLP model optimization.",
    result: "Achieved 98% accuracy with reliable spam-vs-ham classification.",
    stack: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
    github: "https://github.com/zahidjan01a",
  },
  {
    title: "Sales Forecasting Service",
    description:
      "Implemented a time-series sales forecasting solution with XGBoost and wrapped predictions in a lightweight API.",
    problem: "Need for dependable forward-looking sales estimates for planning.",
    approach: "Engineered temporal features and trained XGBoost with API deployment.",
    result: "Provided actionable forecasting outputs for operational decision-making.",
    stack: ["Python", "XGBoost", "FastAPI", "Time-Series"],
    github: "https://github.com/zahidjan01a",
  },
  {
    title: "Helmet Detection System",
    description:
      "Created a computer vision safety monitoring system with YOLOv8 for real-time helmet detection in industrial settings.",
    problem: "Manual monitoring misses PPE non-compliance in dynamic worksites.",
    approach: "Trained YOLOv8 detector and optimized vision pipeline for live detection.",
    result: "Enabled real-time safety monitoring support for smarter compliance checks.",
    stack: ["Python", "YOLOv8", "Computer Vision", "OpenCV"],
    github: "https://github.com/zahidjan01a",
  },
];

export const experiences = [
  {
    role: "Machine Learning Intern",
    organization: "Arch Technology",
    details:
      "Contributed to model development and evaluation workflows, turning data-driven ideas into deployable ML solutions.",
  },
  {
    role: "AI Work",
    organization: "UET Mardan",
    details:
      "Worked on applied AI initiatives with a focus on practical experimentation, algorithm selection, and problem-solving.",
  },
  {
    role: "IT Teacher",
    organization: "NICE College",
    details:
      "Taught core computing concepts and guided students in foundational programming and technical skill development.",
  },
];

export const researchInterests = [
  "Artificial Intelligence",
  "Image Analysis, Clustering, and Segmentation using Deep Learning",
  "Convolutional Neural Networks (CNNs) for visual recognition tasks",
  "Sequential Models: LSTM and RNN for time-series and pattern analysis",
  "Natural Language Processing (NLP) using Python",
  "Digital Image Processing and Computer Vision",
  "Fault Diagnosis and Intelligent System Monitoring",
];

export const certifications = [
  "Machine Learning",
  "Python",
  "Prompt Engineering",
  "WordPress",
  "Intro to Programming",
];

export const contact = {
  name: "Zahid Jan",
  role: "AI Engineer | Machine Learning Engineer | Data Scientist",
  location: "Pakistan",
  email: "zahidkhanchd0088@gmail.com",
  github: "https://github.com/zahidjan01a",
  linkedin: "https://www.linkedin.com/in/zahid-jan-548b90301",
};
