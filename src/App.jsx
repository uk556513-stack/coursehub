
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaSearch,
  FaBars,
  FaTimes,
  FaStar,
  FaPlay,
  FaCode,
  FaChartLine,
  FaPalette,
  FaBriefcase,
  FaBullhorn,
  FaCamera,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaInfinity,
  FaCertificate,
  FaArrowRight,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaLaptopCode,
  FaRegHeart,
  FaFire,
  FaPaperPlane,
} from "react-icons/fa";
import "./style.css";

const categories = [
  { name: "Development", icon: <FaCode />, count: "1,240+ courses" },
  { name: "Data Science", icon: <FaChartLine />, count: "860+ courses" },
  { name: "Design", icon: <FaPalette />, count: "720+ courses" },
  { name: "Business", icon: <FaBriefcase />, count: "590+ courses" },
  { name: "Marketing", icon: <FaBullhorn />, count: "640+ courses" },
  { name: "Photography", icon: <FaCamera />, count: "430+ courses" },
];

const courses = [
  {
    id: 1,
    title: "React JS Complete Developer Course",
    category: "Development",
    instructor: "Sarah Johnson",
    rating: "4.9",
    reviews: "2,450",
    students: "18.5k",
    price: 799,
    oldPrice: 2499,
    duration: "24 hours",
    level: "Beginner",
    image:"https://i.pinimg.com/736x/99/b3/f3/99b3f36de5cd3a669b4c4f72fc940783.jpg",
    badge: "Bestseller",
    color: "blue",
  },
  {
    id: 2,
    title: "Python Programming for Beginners",
    category: "Development",
    instructor: "David Wilson",
    rating: "4.8",
    reviews: "1,820",
    students: "14.2k",
    price: 699,
    oldPrice: 2199,
    duration: "18 hours",
    level: "Beginner",
    image:"https://i.pinimg.com/736x/2b/0d/4d/2b0d4d78685a644953702214c497d81c.jpg",
    badge: "Popular",
    color: "yellow",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    instructor: "Michael Chen",
    rating: "4.9",
    reviews: "1,340",
    students: "12.8k",
    price: 999,
    oldPrice: 2999,
    duration: "32 hours",
    level: "Intermediate",
    image:"https://i.pinimg.com/736x/e3/12/c8/e312c8b957c995cc9c304aeaf2e87374.jpg",
    badge: "Trending",
    color: "blue",
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Emily Carter",
    rating: "4.7",
    reviews: "980",
    students: "9.6k",
    price: 899,
    oldPrice: 2499,
    duration: "16 hours",
    level: "Beginner",
    image:"https://i.pinimg.com/736x/8e/36/7f/8e367fdcb3518e292acc883c0aca1070.jpg",
    badge: "New",
    color: "pink",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    category: "Marketing",
    instructor: "James Miller",
    rating: "4.8",
    reviews: "760",
    students: "7.4k",
    price: 599,
    oldPrice: 1899,
    duration: "12 hours",
    level: "Beginner",
    image:"https://i.pinimg.com/736x/87/c6/cb/87c6cb07e95350f5ed2288fd05b50211.jpg",
    badge: "Popular",
    color: "blue",
  },
  {
    id: 6,
    title: "Business & Entrepreneurship",
    category: "Business",
    instructor: "Olivia Martin",
    rating: "4.8",
    reviews: "640",
    students: "6.2k",
    price: 749,
    oldPrice: 1999,
    duration: "14 hours",
    level: "All levels",
    image:"https://i.pinimg.com/1200x/0d/98/9e/0d989ec15e5eabe357d327034c059ca0.jpg",
    badge: "Featured",
    color: "skyblue",
  },
  {
    id: 7,
    title: "Professional Photography Basics",
    category: "Photography",
    instructor: "Daniel Brooks",
    rating: "4.7",
    reviews: "520",
    students: "4.8k",
    price: 649,
    oldPrice: 1799,
    duration: "10 hours",
    level: "Beginner",
    image:"https://i.pinimg.com/1200x/88/59/be/8859be10f7284dc3a8466ce90484572d.jpg",
    badge: "New",
    color: "yellow",
  },
  {
    id: 8,
    title: "Advanced React Projects & APIs",
    category: "Development",
    instructor: "Alex Turner",
    rating: "4.9",
    reviews: "890",
    students: "8.1k",
    price: 1099,
    oldPrice: 3299,
    duration: "28 hours",
    level: "Advanced",
    image:"https://i.pinimg.com/736x/78/fd/6d/78fd6dd13904b38d57af1c6721b6e6ce.jpg",
    badge: "Bestseller",
    color: "blue",
  },
];

const testimonials = [
  {
    name: "Nivitha",
    role: "Frontend Developer",
    image:"https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg",
    text: "BrightLearn helped me learn React from scratch. The practical projects gave me the confidence to build my own portfolio and apply for developer jobs.",
  },
  {
    name: "Uday",
    role: "Data Analyst",
    image:"https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
    text: "The Python and data science courses made difficult topics easier to understand. I can learn at my own pace whenever I have free time.",
  },
  {
    name: "Meera",
    role: "UI/UX Designer",
    image:"https://i.pinimg.com/1200x/1f/15/70/1f1570ded07a4d4fea0d9b28dffbc037.jpg",
    text: "The design courses have excellent explanations and useful assignments. I have improved my design skills and created stronger projects.",
  },
];

const faqs = [
  {
    question: "What is BrightLearn?",
    answer:
      "BrightLearn is an online learning platform where you can explore courses in web development, design, business, data science and more.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. Learn at a time that suits you, revisit lessons and practise the skills you learn. Course access depends on the course terms.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "The platform is designed to support course completion certificates. Actual certificate issuing should be connected to your course and completion system.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No. You can start with beginner-friendly courses and progress to intermediate and advanced topics as your skills improve.",
  },
  {
    question: "How can I access my courses?",
    answer:
      "This frontend demo lets you explore courses. Real student accounts, payments and saved course progress require a backend integration.",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState("");
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 65,
      easing: "ease-out-cubic",
    });

    let value = 0;
    const timer = setInterval(() => {
      value += 4;
      setProgress(Math.min(value, 100));

      if (value >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 350);
      }
    }, 65);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  const filteredCourses = useMemo(() => {
    const term = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const visibleCourses = showAllCourses
    ? filteredCourses
    : filteredCourses.slice(0, 4);

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (course) => {
    setCart((current) =>
      current.some((item) => item.id === course.id)
        ? current
        : [...current, course]
    );
    showNotice(`${course.title} added to your learning cart!`);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  const closeMenu = () => setMenuOpen(false);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-orb orb-one" />
        <div className="loader-orb orb-two" />

        <div className="loader-content">
          <div className="loader-logo">
            <span className="logo-icon">
              <FaGraduationCap />
            </span>
            <span>
              Bright<span className="text-gradient">Learn</span>
            </span>
          </div>

          <div className="loader-ring">
            <FaLaptopCode />
          </div>

          <p className="loader-tagline">LEARN · BUILD · GROW</p>
          <h2>Loading your future...</h2>
          <p className="loader-description">
            Preparing your learning experience
          </p>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="progress-meta">
            <span>PLEASE WAIT</span>
            <strong>{progress}%</strong>
          </div>
        </div>

        <div className="loader-bottom">YOUR JOURNEY STARTS HERE</div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      {notice && <div className="toast-message">{notice}</div>}

      <div className="announcement-bar">
        <span className="announcement-icon">✦</span>
        Unlock your potential — discover your next skill today!
        <a href="#courses">
          Explore courses <FaArrowRight />
        </a>
      </div>

      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon">
              <FaGraduationCap />
            </span>
            <span>
              Bright<span className="text-gradient">Learn</span>
              <small>LEARN SOMETHING NEW</small>
            </span>
          </a>

          <button
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#categories" onClick={closeMenu}>Categories</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-actions">
            <a className="nav-login" href="#newsletter">Log in</a>
            <a className="btn btn-primary nav-signup" href="#newsletter">
              Sign Up <FaArrowRight />
            </a>
            <a className="cart-link" href="#courses" aria-label="Learning cart">
              <span><FaGraduationCap /></span>
              <b>{cart.length}</b>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy" data-aos="fade-up">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h1>
                Learn New Skills.
                <br />
                <span className="text-gradient">Build Your Future.</span>
              </h1>

              <p className="hero-description">
                Discover expert-led online courses, gain practical skills
                and take the next step toward your goals — anytime, anywhere.
              </p>

              <form
                className="hero-search"
                onSubmit={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaSearch />
                <input
                  type="search"
                  placeholder="What do you want to learn?"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search courses"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>

              <div className="hero-tags">
                <span><FaCheckCircle /> Expert instructors</span>
                <span><FaCheckCircle /> Learn at your pace</span>
                <span><FaCheckCircle /> Practical skills</span>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>10K<span>+</span></strong>
                  <small>Online courses</small>
                </div>
                <div>
                  <strong>5M<span>+</span></strong>
                  <small>Happy learners</small>
                </div>
                <div>
                  <strong>4.8<span>/5</span></strong>
                  <small>Average rating</small>
                </div>
              </div>
            </div>

            <div className="hero-visual" data-aos="fade-left" data-aos-delay="180">
              <div className="visual-decoration visual-decoration-one" />
              <div className="visual-decoration visual-decoration-two" />

              <div className="floating-card floating-card-top">
                <span className="float-icon purple"><FaPlay /></span>
                <div>
                  <strong>Learn anywhere</strong>
                  <small>Your schedule, your rules</small>
                </div>
              </div>

              <div className="hero-image-wrap">
                <img
                  src="https://i.pinimg.com/736x/6d/c8/d4/6dc8d469422de802812fe40a05c48ab7.jpg"
                  alt="Students learning together"
                />
                <div className="image-gradient" />
                <div className="hero-image-caption">
                  <span className="live-dot" />
                  <div>
                    <strong>Your future is in your hands</strong>
                    <small>Start learning something amazing</small>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <div className="mini-avatars">
                  <img src={testimonials[0].image} alt="" />
                  <img src={testimonials[1].image} alt="" />
                  <img src={testimonials[2].image} alt="" />
                </div>
                <div>
                  <strong>Join 5M+ learners</strong>
                  <small>Growing together every day</small>
                </div>
              </div>

              <div className="floating-rating">
                <FaStar />
                <strong>4.8/5</strong>
                <small>Learner rating</small>
              </div>
            </div>
          </div>

          <div className="container trusted-row" data-aos="fade-up">
            <p>SKILLS FOR TOMORROW'S CAREERS</p>
            <div className="trusted-brands">
              <span><FaCode /> DEV SKILLS</span>
              <span><FaChartLine /> DATA LAB</span>
              <span><FaPalette /> DESIGN STUDIO</span>
              <span><FaBriefcase /> BUSINESS PRO</span>
            </div>
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">EXPLORE YOUR INTERESTS</span>
                <h2>Find your next <span className="text-gradient">passion.</span></h2>
                <p>Explore subjects that move your career forward.</p>
              </div>
              <a href="#courses" className="text-link">
                Browse courses <FaArrowRight />
              </a>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`category-card ${
                    activeCategory === category.name ? "category-active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(
                      activeCategory === category.name ? "All" : category.name
                    );
                    setShowAllCourses(true);
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <span className={`category-icon category-icon-${index + 1}`}>
                    {category.icon}
                  </span>
                  <strong>{category.name}</strong>
                  <small>{category.count}</small>
                  <span className="category-arrow"><FaArrowRight /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">LEARN SOMETHING AMAZING</span>
                <h2>Popular <span className="text-gradient">courses.</span></h2>
                <p>Handpicked learning experiences to help you grow.</p>
              </div>
              <div className="course-heading-side">
                
              </div>
            </div>

            <div className="course-controls" data-aos="fade-up">
              <div className="filter-list">
                {["All", ...categories.map((item) => item.name)].map((item) => (
                  <button
                    key={item}
                    className={`filter-btn ${
                      activeCategory === item ? "filter-active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(item);
                      setShowAllCourses(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <label className="course-search">
                <FaSearch />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search courses..."
                  aria-label="Filter courses"
                />
              </label>
            </div>

            {visibleCourses.length > 0 ? (
              <div className="course-grid">
                {visibleCourses.map((course, index) => (
                  <article
                    className="course-card"
                    key={course.id}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                  >
                    <div className="course-image">
                      <img src={course.image} alt={course.title} loading="lazy" />
                      <span className={`course-badge badge-${course.color}`}>
                        {course.badge}
                      </span>
                      <button
                        className={`favorite-btn ${
                          favorites.includes(course.id) ? "favorite-active" : ""
                        }`}
                        aria-label="Add to favorites"
                        onClick={() => toggleFavorite(course.id)}
                      >
                        <FaRegHeart />
                      </button>
                      <span className="course-image-overlay">
                        <FaPlay /> Explore course
                      </span>
                    </div>

                    <div className="course-content">
                      <div className="course-meta">
                        <span>{course.category}</span>
                        <span><FaClock /> {course.duration}</span>
                      </div>

                      <h3>{course.title}</h3>

                      <p className="instructor">
                        Instructor: {course.instructor}
                      </p>

                      <div className="course-rating">
                        <strong>{course.rating}</strong>
                        <FaStar />
                        <span>({course.reviews} reviews)</span>
                      </div>

                      <div className="course-students">
                        <FaUsers /> {course.students} students
                        <span>{course.level}</span>
                      </div>

                      <div className="course-bottom">
                        <div className="course-price">
                          <strong>₹{course.price.toLocaleString("en-IN")}</strong>
                          <del>₹{course.oldPrice.toLocaleString("en-IN")}</del>
                        </div>
                        <button
                          className="add-course-btn"
                          onClick={() => addToCart(course)}
                          aria-label={`Add ${course.title} to cart`}
                        >
                          {cart.some((item) => item.id === course.id)
                            ? "Added ✓"
                            : "Add course"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FaSearch />
                <h3>No courses found</h3>
                <p>Try another search term or choose a different category.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Show all courses
                </button>
              </div>
            )}

            {filteredCourses.length > 4 && (
              <div className="center-action" data-aos="fade-up">
                <button
                  className="btn btn-outline"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                >
                  {showAllCourses ? "Show fewer courses" : "Explore all courses"}
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="learning-banner">
          <div className="container learning-banner-inner" data-aos="zoom-in">
            <div className="banner-icon"><FaGraduationCap /></div>
            <div className="banner-copy">
              <span>YOUR NEXT BIG OPPORTUNITY</span>
              <h2>Small steps today. Big achievements tomorrow.</h2>
              <p>Make learning a habit and move closer to your goals.</p>
            </div>
            <a href="#courses" className="btn btn-light">
              Start learning <FaArrowRight />
            </a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-aos="fade-right">
              <div className="about-image-main">
                <img
                  src="https://i.pinimg.com/1200x/28/5a/31/285a31ee0fbd58dcc2e7b7ad99c0fdf7.jpg"
                  alt="Online learning and collaboration"
                  loading="lazy"
                />
              </div>
              <div className="about-experience-card">
                <FaGraduationCap />
                <strong>Learning without limits</strong>
                <span>Skills for every stage of your journey</span>
              </div>
              <div className="about-decoration" />
            </div>

            <div className="about-copy" data-aos="fade-left">
              <span className="section-kicker">WHY LEARNHUB?</span>
              <h2>
                Education that moves
                <span className="text-gradient"> you forward.</span>
              </h2>
              <p>
                We believe learning should be flexible, practical and
                accessible. BrightLearn brings useful skills and structured
                lessons together to help you take your next step.
              </p>

              <div className="benefit-list">
                <div className="benefit-item">
                  <span className="benefit-icon"><FaInfinity /></span>
                  <div>
                    <strong>Learn at your own pace</strong>
                    <p>Fit learning into your schedule and your life.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><FaUsers /></span>
                  <div>
                    <strong>Industry-focused instructors</strong>
                    <p>Build skills through guided, practical lessons.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><FaCertificate /></span>
                  <div>
                    <strong>Career-ready learning</strong>
                    <p>Focus on skills you can apply to real projects.</p>
                  </div>
                </div>
              </div>

              <a href="#categories" className="btn btn-primary">
                Discover your path <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section className="section how-section">
          <div className="container">
            <div className="section-heading centered-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">SIMPLE STEPS, REAL PROGRESS</span>
                <h2>Start learning in <span className="text-gradient">3 steps.</span></h2>
                <p>Your next skill is closer than you think.</p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-card" data-aos="fade-up">
                <span className="step-number">01</span>
                <span className="step-icon"><FaSearch /></span>
                <h3>Explore</h3>
                <p>Find a course that matches your interests and goals.</p>
              </div>
              <div className="step-card" data-aos="fade-up" data-aos-delay="120">
                <span className="step-number">02</span>
                <span className="step-icon"><FaPlay /></span>
                <h3>Learn</h3>
                <p>Follow lessons, practise new ideas and build projects.</p>
              </div>
              <div className="step-card" data-aos="fade-up" data-aos-delay="240">
                <span className="step-number">03</span>
                <span className="step-icon"><FaCertificate /></span>
                <h3>Grow</h3>
                <p>Apply your skills and keep moving toward your goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="container reviews-grid">
            <div className="reviews-intro" data-aos="fade-right">
              <span className="section-kicker">LEARNER STORIES</span>
              <h2>Real growth.<br /><span className="text-gradient">Real confidence.</span></h2>
              <p>
                Every learning journey is different. Get inspired by people
                building new skills and exploring new possibilities.
              </p>
              <div className="review-score">
                <strong>4.8</strong>
                <div>
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map((star) => <FaStar key={star} />)}
                  </div>
                  <span>Illustrative learner rating</span>
                </div>
              </div>
              <div className="review-controls">
                <button
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (testimonialIndex + testimonials.length - 1) %
                      testimonials.length
                    )
                  }
                >
                  ←
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (testimonialIndex + 1) % testimonials.length
                    )
                  }
                >
                  →
                </button>
              </div>
            </div>

            <article className="testimonial-card" data-aos="fade-left">
              <div className="quote-mark">“</div>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => <FaStar key={star} />)}
              </div>
              <p className="testimonial-text">
                {testimonials[testimonialIndex].text}
              </p>
              <div className="testimonial-person">
                <img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                />
                <div>
                  <strong>{testimonials[testimonialIndex].name}</strong>
                  <span>{testimonials[testimonialIndex].role}</span>
                </div>
                <FaCheckCircle className="verified-icon" />
              </div>
              <div className="testimonial-dots">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    className={index === testimonialIndex ? "dot-active" : ""}
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => setTestimonialIndex(index)}
                  />
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro" data-aos="fade-right">
              <span className="section-kicker">GOT QUESTIONS?</span>
              <h2>Good questions.<br /><span className="text-gradient">Clear answers.</span></h2>
              <p>
                Everything you need to know before starting your learning
                journey with BrightLearn.
              </p>
              <a href="#contact" className="text-link">
                Ask us a question <FaArrowRight />
              </a>
            </div>

            <div className="faq-list" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeFaq === index ? "faq-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown />
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="container">
            <div className="newsletter-card" data-aos="zoom-in">
              <div className="newsletter-decoration" />
              <div className="newsletter-copy">
                <span className="section-kicker">A LITTLE INSPIRATION, REGULARLY</span>
                <h2>Make room for <span className="text-gradient">growth.</span></h2>
                <p>
                  Get learning tips, course highlights and fresh ideas in your inbox.
                </p>
              </div>

              {subscribed ? (
                <div className="subscribe-success">
                  <FaCheckCircle />
                  <div>
                    <strong>Thanks for subscribing!</strong>
                    <span>This demo shows the subscription confirmation.</span>
                  </div>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="newsletter-input">
                    <FaEnvelope />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      aria-label="Email address"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe <FaPaperPlane />
                  </button>
                  <small>No spam. Just useful learning inspiration.</small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home">
              <span className="brand-icon"><FaGraduationCap /></span>
              <span>Bright<span className="text-gradient">Learn</span>
                <small>LEARN SOMETHING NEW</small>
              </span>
            </a>
            <p>
              Good learning opens new doors. Discover useful skills, explore
              your interests and take the next step with BrightLearn.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#courses">Popular courses</a>
            <a href="#about">About us</a>
            <a href="#reviews">Learner stories</a>
          </div>

          <div className="footer-column">
            <h4>Popular topics</h4>
            <a href="#courses" onClick={() => setActiveCategory("Development")}>Web development</a>
            <a href="#courses" onClick={() => setActiveCategory("Data Science")}>Data science</a>
            <a href="#courses" onClick={() => setActiveCategory("Design")}>UI/UX design</a>
            <a href="#courses" onClick={() => setActiveCategory("Business")}>Business</a>
            <a href="#courses" onClick={() => setActiveCategory("Marketing")}>Marketing</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>Get in touch</h4>
            <a href="mailto:uk556513@gmail.com"><FaEnvelope /> uk556513@gmail.com</a>
            <a href="tel:+919342568375"><FaPhone /> +91 93425 68375</a>
            <span><FaMapMarkerAlt /> Hsr Layout Bengaluru</span>
            <a href="#faq">Help & FAQs</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} BrightLearn. All rights reserved.</p>
          <div>
            <a href="#faq">Help Center</a>
            <a href="#contact">Contact</a>
            <a href="#home">Back to top ↑</a>
          </div>
          <span>Learn · Build · Grow</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
