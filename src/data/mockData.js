export const coursesData = [
  {
    id: "jee-advanced",
    title: "IIT-JEE (Main & Advanced) Zenith",
    category: "IIT-JEE",
    level: "Class 11, 12 & Droppers",
    duration: "1 or 2 Years",
    tag: "Flagship Program",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    rating: 4.9,
    enrolledCount: "14,200+",
    successRate: "94.6%",
    description: "Comprehensive 360° training program designed by Senior IITians featuring AI-driven problem selection, 1-on-1 daily mentorship, and real-time rank analytics.",
    features: [
      "Live Interactive 4K Classes & Recorded Archives",
      "Daily Practice Papers (DPPs) with Video Solutions",
      "3-Tiered Doubt Clearance Engine (24/7 Access)",
      "Weekly AI-Driven Adaptive All-India Test Series",
      "Specialized Super-30 Batch for Top 100 Rankers"
    ],
    facultyLead: "Dr. Rajesh Sharma & Prof. V. Verma",
    upcomingBatchDate: "October 15, 2026",
    price: "₹1,45,000 / year",
    scholarshipAvailable: true
  },
  {
    id: "neet-ug",
    title: "NEET-UG Apex Medical Batch",
    category: "NEET",
    level: "Class 11, 12 & Droppers",
    duration: "1 or 2 Years",
    tag: "High Yield",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    rating: 4.95,
    enrolledCount: "12,800+",
    successRate: "96.2%",
    description: "Deep NCERT mastery, 3D anatomical visualization modules, biological memory techniques, and high-frequency problem drill sheets.",
    features: [
      "Interactive 3D Biology Atlas & Virtual Lab Simulations",
      "NCERT Line-by-Line Micro Test Modules",
      "100+ Full Length All-India Mock Papers with AI Analytics",
      "AIIMS & JIPMER Doctor Mentorship Sessions",
      "Rapid Revision Mind Maps & Flashcards"
    ],
    facultyLead: "Dr. Sunita Rao & Dr. Ananya Mukherjee",
    upcomingBatchDate: "October 12, 2026",
    price: "₹1,35,000 / year",
    scholarshipAvailable: true
  },
  {
    id: "olympiad-kvpy",
    title: "International Olympiad & Foundation Apex",
    category: "Olympiad",
    level: "Class 8 to 10",
    duration: "1 Year",
    tag: "Pre-Foundation",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    rating: 4.88,
    enrolledCount: "6,500+",
    successRate: "91.8%",
    description: "Early grooming for INPhO, INChO, INMO, IJSO, and NTSE. Builds high-order critical thinking and international problem-solving caliber.",
    features: [
      "Advanced Math & Science Olympiad Workshops",
      "Research Paper Analysis & Problem Solving",
      "National Level Mock Olympiads",
      "Personalized Career Counseling & Profile Building"
    ],
    facultyLead: "Prof. V. Verma & Prof. Arjun Kapoor",
    upcomingBatchDate: "October 20, 2026",
    price: "₹85,000 / year",
    scholarshipAvailable: true
  },
  {
    id: "foundation-stem",
    title: "Nexora Junior Foundation (STEM)",
    category: "Foundation",
    level: "Class 8, 9, 10",
    duration: "1 to 3 Years",
    tag: "Concept Building",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    rating: 4.85,
    enrolledCount: "8,900+",
    successRate: "93.1%",
    description: "Strengthen core concepts in Mathematics, Physics, Chemistry, and Logic while introducing basic coding & AI principles.",
    features: [
      "Gamified Concept Learning Modules",
      "Hands-on Science Kits & Lab Experiments",
      "Soft Skills, Logic & Verbal Aptitude Development",
      "Parent Progress Portal & Weekly Performance Audits"
    ],
    facultyLead: "Dr. Ananya Mukherjee",
    upcomingBatchDate: "November 01, 2026",
    price: "₹65,000 / year",
    scholarshipAvailable: true
  },
  {
    id: "ai-robotics",
    title: "Nexora Quantum AI & Robotics Prep",
    category: "AI & Tech",
    level: "Class 9 to 12",
    duration: "6 Months",
    tag: "Future Skills",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    rating: 4.92,
    enrolledCount: "4,100+",
    successRate: "98.0%",
    description: "Hands-on Machine Learning, Python for Scientific Computing, Embedded Systems, and AI-driven Engineering Problem Solving.",
    features: [
      "Python, PyTorch & OpenCV Hands-on Projects",
      "Hardware Kits Delivered to Doorstep (Robotics)",
      "Global Hackathons & Capstone Project Showcase",
      "Direct Guidance from MIT & IIT Alumni"
    ],
    facultyLead: "Prof. Arjun Kapoor",
    upcomingBatchDate: "October 18, 2026",
    price: "₹45,000 / course",
    scholarshipAvailable: false
  }
];

export const facultyData = [
  {
    id: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma",
    role: "Head of Physics & Co-Founder",
    qualification: "Ph.D. Physics (IIT Bombay), B.Tech IIT Kharagpur",
    experience: "18+ Years Experience",
    topRanks: "AIR 1, AIR 3, AIR 7 in JEE Advanced",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    specialty: "Quantum Physics & Mechanics Master",
    bio: "Pioneer in interactive visual physics pedagogy. Mentored over 25,000+ students with 1,200+ selections in top 500 IIT ranks.",
    quote: "Physics isn't about memorizing formulas; it's about seeing the fundamental harmony of nature.",
    stats: { students: "25K+", top100Ranks: "140+", rating: "4.98" },
    nodeType: "LEARN"
  },
  {
    id: "dr-ananya-mukherjee",
    name: "Dr. Ananya Mukherjee",
    role: "Senior Director - Organic & Physical Chemistry",
    qualification: "Ph.D. Organic Chemistry (IISc Bangalore)",
    experience: "14+ Years Experience",
    topRanks: "AIR 1, AIR 4, AIR 9 in NEET & JEE",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialty: "Reaction Mechanism & Physical Kinetics",
    bio: "Renowned author of 4 chemistry problem books. Her 3D reaction mechanism breakdowns make complex synthesis feel intuitive.",
    quote: "Chemistry is the bridge between abstraction and life. Once you see the electron flow, chemistry becomes poetry.",
    stats: { students: "20K+", top100Ranks: "115+", rating: "4.96" },
    nodeType: "PRACTICE"
  },
  {
    id: "prof-vikramaditya-verma",
    name: "Prof. Vikramaditya Verma",
    role: "Chief Mathematics Strategist",
    qualification: "M.Tech Computer Science & Math (IIT Delhi)",
    experience: "16+ Years Experience",
    topRanks: "AIR 1 (3 Times) in JEE Advanced",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    specialty: "Calculus, Algebra & Rapid Shortcut Algorithms",
    bio: "Master of speed algorithms and spatial geometry. Creator of Nexora's proprietary 1-minute problem solver method.",
    quote: "Mathematics is the art of giving the same name to different things. Logic is your greatest superpower.",
    stats: { students: "30K+", top100Ranks: "180+", rating: "4.99" },
    nodeType: "IMPROVE"
  },
  {
    id: "dr-sunita-rao",
    name: "Dr. Sunita Rao",
    role: "Head of Biology & Medical Sciences",
    qualification: "M.D. (AIIMS New Delhi), MBBS (Gold Medalist)",
    experience: "15+ Years Experience",
    topRanks: "AIR 1, AIR 2, AIR 5 in NEET UG",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    specialty: "Human Physiology & Genetics Specialist",
    bio: "Practicing doctor and master educator who translates clinical insights into bulletproof NEET preparation strategies.",
    quote: "To heal lives tomorrow, master every single cell's biology today. Detail accuracy is everything in NEET.",
    stats: { students: "22K+", top100Ranks: "160+", rating: "4.97" },
    nodeType: "ACHIEVE"
  }
];

export const resultsData = [
  {
    rank: "AIR 01",
    exam: "JEE Advanced 2025",
    name: "Aarav K. Sharma",
    score: "352 / 360",
    branch: "Computer Science - IIT Bombay",
    courseEnrolled: "2-Year Zenith Classroom Program",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    quote: "Nexora's AI test analytics identified my weak areas in rotational dynamics within 2 weeks. The faculty's personal guidance was unmatched!"
  },
  {
    rank: "AIR 04",
    exam: "NEET UG 2025",
    name: "Ananya S. Roy",
    score: "715 / 720",
    branch: "MBBS - AIIMS New Delhi",
    courseEnrolled: "Apex Medical 2-Year Program",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote: "Dr. Sunita Rao's 3D anatomy modules & NCERT micro-tests gave me the speed and accuracy to score 360/360 in Biology!"
  },
  {
    rank: "AIR 12",
    exam: "JEE Advanced 2025",
    name: "Devansh V. Mehta",
    score: "338 / 360",
    branch: "Electrical Eng. - IIT Delhi",
    courseEnrolled: "1-Year Super-30 Droppers",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "The 24/7 instant doubt portal saved hundreds of hours. Whenever I hit a roadblock at midnight, a senior IIT mentor resolved it."
  },
  {
    rank: "AIR 27",
    exam: "NEET UG 2025",
    name: "Riya P. Sen",
    score: "705 / 720",
    branch: "MBBS - Maulana Azad Medical College",
    courseEnrolled: "2-Year Medical Batch",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote: "Periodic mock tests prepared me for extreme pressure. Nexora made the actual exam day feel like just another practice session."
  }
];

export const statsOverview = [
  { label: "Top 100 All India Ranks", value: 340, prefix: "", suffix: "+" },
  { label: "Selections in IITs & AIIMS", value: 18500, prefix: "", suffix: "+" },
  { label: "Avg Score Improvement", value: 42, prefix: "+", suffix: "%" },
  { label: "Scholarship Awarded", value: 12, prefix: "₹", suffix: "Cr+" },
];

export const upcomingBatches = [
  {
    id: "batch-1",
    name: "Zenith IIT-JEE Super-30 Phase II",
    targetYear: "JEE 2027",
    grade: "Class 11",
    mode: "Hybrid (Offline + Live Interactive)",
    startDate: "Oct 15, 2026",
    timings: "4:00 PM - 8:30 PM IST",
    seatsRemaining: 6,
    totalSeats: 30,
    center: "Nexora Apex Tower & Digital Portal"
  },
  {
    id: "batch-2",
    name: "Apex NEET Droppers Fast-Track",
    targetYear: "NEET 2027",
    grade: "Class 12 / Dropper",
    mode: "Live Interactive 4K",
    startDate: "Oct 12, 2026",
    timings: "9:00 AM - 2:00 PM IST",
    seatsRemaining: 9,
    totalSeats: 40,
    center: "Nexora Global Live Portal"
  },
  {
    id: "batch-3",
    name: "Quantum Olympiad Foundation",
    targetYear: "Olympiad 2027",
    grade: "Class 9 & 10",
    mode: "Offline Classroom",
    startDate: "Oct 20, 2026",
    timings: "5:00 PM - 7:30 PM IST",
    seatsRemaining: 4,
    totalSeats: 25,
    center: "Nexora Cyber City Campus"
  },
  {
    id: "batch-4",
    name: "Nexora STEM & AI Pioneers",
    targetYear: "Skill Cert 2026",
    grade: "Open for Class 8-12",
    mode: "Project Based Weekend",
    startDate: "Oct 18, 2026",
    timings: "Weekends 10:00 AM - 1:00 PM",
    seatsRemaining: 11,
    totalSeats: 30,
    center: "Nexora Quantum AI Lab"
  }
];

export const testSeriesFeatures = [
  {
    id: "live-mocks",
    title: "Real Exam Simulator",
    icon: "MonitorPlay",
    desc: "Exact UI replication of NTA JEE Main, JEE Advanced & NEET portals with identical keypads, timers, and marking schemes."
  },
  {
    id: "ai-analytics",
    title: "AI Diagnostic Engine",
    icon: "Cpu",
    desc: "Pinpoint accuracy breakdown on speed vs accuracy, time wasted per question, conceptual weakness tags, and peer benchmarking."
  },
  {
    id: "rank-predictor",
    title: "Predictive AIR Calculator",
    icon: "TrendingUp",
    desc: "Machine-learning algorithm calibrated on 10+ years of historical test data predicts your probable All-India Rank range."
  },
  {
    id: "doubt-vault",
    title: "Instant Video Solutions",
    icon: "FileCheck",
    desc: "Get line-by-line step video walkthroughs for every single mock question by senior master faculty."
  }
];

export const campusGallery = [
  {
    title: "Nexora Quantum AI Learning Lab",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    desc: "High-performance computing workstations equipped with interactive physics & 3D chemistry simulators."
  },
  {
    title: "Futuristic 300-Seater Auditorium",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    desc: "Acoustically tuned master lecture hall with dual 4K LED screens and surround directional audio."
  },
  {
    title: "24/7 Digital Quiet Study Lounge",
    category: "Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    desc: "Ergonomic study pods equipped with high-speed fiber internet and tablet access to 50,000+ reference e-books."
  },
  {
    title: "1-on-1 Faculty Mentorship Cubicles",
    category: "Mentorship",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    desc: "Dedicated personal spaces for daily doubt solving, psychological coaching, and exam strategy sessions."
  },
  {
    title: "Student Wellness & Cafeteria Hub",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    desc: "Nutritious organic meal cafeteria, recreational break areas, and green roof garden."
  }
];

export const faqsData = [
  {
    category: "Admissions & Batches",
    question: "How do I secure admission into the Nexora Super-30 Batch?",
    answer: "Admission into the Super-30 batch is conducted exclusively through the Nexora Scholastic Aptitude Test (NSAT). High performers receive up to 100% merit-based scholarship and direct mentorship under Dr. Rajesh Sharma."
  },
  {
    category: "Admissions & Batches",
    question: "What is the difference between Offline Classroom and Live Interactive modes?",
    answer: "Offline Classroom students attend live lectures at our tech campuses with access to physical lab equipment and offline study pods. Live Interactive students attend 4K real-time broadcasts with instant digital hand-raise, chat doubt clearance, and physical books delivered to their doorstep."
  },
  {
    category: "Pedagogy & AI Portal",
    question: "How does Nexora's AI performance analytics engine work?",
    answer: "After every test, our proprietary AI analyzes time spent on every question, question switching frequency, and topic accuracy. It generates a personalized 'Remedial Action Plan' targeting specific sub-topics where you lose marks."
  },
  {
    category: "Scholarships & Fees",
    question: "Are there scholarships available for single parents or defense personnel background?",
    answer: "Yes! Nexora offers specialized concessions: 25% fee waiver for children of defense personnel, 30% for single parent households, and up to 100% based on NSAT exam merit rank."
  },
  {
    category: "Doubt Clearance",
    question: "What happens if I get stuck on a question at 11 PM?",
    answer: "You can snap a photo or type your question on the Nexora Mobile App. Our 24/7 AI-Faculty hybrid engine generates a verified step-by-step video solution or connects you to an online teaching assistant within 3 minutes."
  }
];

export const upcomingEvents = [
  {
    id: "event-1",
    title: "Mastering Rotational Motion & Electrodynamics for JEE 2027",
    speaker: "Dr. Rajesh Sharma (IIT Bombay)",
    date: "Sept 28, 2026",
    time: "6:00 PM IST",
    type: "Live Mega Masterclass",
    registeredCount: 3840
  },
  {
    id: "event-2",
    title: "3D Biology Blueprint: How to Score 360/360 in NEET Biology",
    speaker: "Dr. Sunita Rao (AIIMS New Delhi)",
    date: "Oct 02, 2026",
    time: "5:00 PM IST",
    type: "Interactive Workshop",
    registeredCount: 4210
  }
];

export const testimonialsData = [
  {
    id: "testi-1",
    name: "Aarav K. Sharma",
    rank: "AIR 01 - JEE Advanced 2025",
    category: "JEE Toppers",
    type: "Student",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    text: "The 3D visual physics simulations by Dr. Rajesh Sharma completely transformed my electrodynamics understanding. Whenever I got stuck, the 24/7 AI doubt engine resolved it within minutes.",
    rating: 5,
    highlight: "Scored 352/360 in JEE Advanced",
    videoTitle: "Aarav's Strategy to AIR 1"
  },
  {
    id: "testi-2",
    name: "Ananya S. Roy",
    rank: "AIR 04 - NEET UG 2025",
    category: "NEET Toppers",
    type: "Student",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    text: "Dr. Sunita Rao's 3D anatomy modules and NCERT line-by-line micro test series gave me absolute confidence. Scoring 360/360 in Biology was smooth because of Nexora's precision drills.",
    rating: 5,
    highlight: "360/360 in NEET Biology",
    videoTitle: "Ananya's Journey to AIIMS New Delhi"
  },
  {
    id: "testi-3",
    name: "Dr. Ramesh S. Roy",
    rank: "Father of Ananya Roy (AIR 04 NEET)",
    category: "Parents",
    type: "Parent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    text: "As a practicing surgeon myself, I was amazed by Nexora’s technical depth and daily progress reports sent directly to parents. They gave my daughter absolute focus without stress.",
    rating: 5,
    highlight: "Parent of AIIMS Scholar",
    videoTitle: "Why Dr. Roy Chose Nexora for Ananya"
  },
  {
    id: "testi-4",
    name: "Devansh V. Mehta",
    rank: "AIR 12 - JEE Advanced 2025",
    category: "JEE Toppers",
    type: "Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "I was in a droppers batch and had panic issues during mock tests. Nexora’s psychometric stamina drills and 1-on-1 counselor audits turned my weak areas into my strongest points.",
    rating: 5,
    highlight: "Dropper to AIR 12 Jump",
    videoTitle: "Overcoming Mock Test Anxiety"
  },
  {
    id: "testi-5",
    name: "Riya P. Sen",
    rank: "AIR 27 - NEET UG 2025",
    category: "NEET Toppers",
    type: "Student",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    text: "The NTA exam simulator portal is identical to the actual exam hall interface. When I sat for NEET, it felt like just another Sunday test at Nexora Apex Campus.",
    rating: 5,
    highlight: "Scored 705/720 in NEET",
    videoTitle: "Riya's Test Series Blueprint"
  },
  {
    id: "testi-6",
    name: "Sunil & Pratibha Mehta",
    rank: "Parents of Devansh Mehta (AIR 12 JEE)",
    category: "Parents",
    type: "Parent",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    text: "The faculty mentor calls us every fortnight to discuss our child's mental well-being and academic graphs. The level of care and personal attention is unprecedented in India.",
    rating: 5,
    highlight: "Parent Experience Review",
    videoTitle: "Parent Review on Super-30 Mentorship"
  }
];

