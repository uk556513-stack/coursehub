
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

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
  FaCertificate,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaRegHeart,
  FaPaperPlane,
  FaInfinity,
} from "react-icons/fa";

import reactCourse from "./assets/react-course.jpg";
import pythonCourse from "./assets/python-course.jpg";
import dataCourse from "./assets/data-course.jpg";
import designCourse from "./assets/design-course.jpg";
import marketingCourse from "./assets/marketing-course.jpg";
import businessCourse from "./assets/business-course.jpg";
import photographyCourse from "./assets/photography-course.jpg";
import advancedReact from "./assets/advanced-react.jpg";
import studentsImage from "./assets/students.jpg";
import learningImage from "./assets/learning.jpg";
import nivithaImage from "./assets/nivitha.jpg";
import udayImage from "./assets/uday.jpg";
import meeraImage from "./assets/meera.jpg";

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
    image: reactCourse,
    badge: "Bestseller",
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
    image: pythonCourse,
    badge: "Popular",
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
    image: dataCourse,
    badge: "Trending",
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
    image: designCourse,
    badge: "New",
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
    image: marketingCourse,
    badge: "Popular",
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
    image: businessCourse,
    badge: "Featured",
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
    image: photographyCourse,
    badge: "New",
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
    image: advancedReact,
    badge: "Bestseller",
  },
];

const testimonials = [
  {
    name: "Nivitha",
    role: "Frontend Developer",
    image: nivithaImage,
    text: "BrightLearn helped me learn React from scratch. Practical projects gave me the confidence to build my own portfolio.",
  },
  {
    name: "Uday",
    role: "Data Analyst",
    image: udayImage,
    text: "The Python and data science courses made difficult topics easier to understand. I can learn at my own pace.",
  },
  {
    name: "Meera",
    role: "UI/UX Designer",
    image: meeraImage,
    text: "The design courses have useful assignments. I have improved my design skills and created stronger projects.",
  },
];

const faqs = [
  {
    question: "What is BrightLearn?",
    answer:
      "BrightLearn is an online learning platform where you can explore courses in development, design, business and data science.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. You can learn at a time that suits you and practise the skills you learn.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Certificates can be provided when a course completion system is connected to the platform.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No. You can start with beginner courses and move to more advanced topics as your skills improve.",
  },
  {
    question: "How can I access my courses?",
    answer:
      "You can explore courses in this frontend demo. Student accounts and course progress need backend integration.",
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

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
    });

    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 250);
          return 100;
        }

        return Math.min(current + 10, 100);
      });
    }, 45);

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
    setTimeout(() => setNotice(""), 2500);
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (course) => {
    if (cart.some((item) => item.id === course.id)) {
      showNotice("This course is already in your cart.");
      return;
    }

    setCart((current) => [...current, course]);
    showNotice("Course added to your cart.");
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-logo">
            <FaGraduationCap />
            <span>
              Bright<span className="text-gradient">Learn</span>
            </span>
          </div>

          <div className="loader-icon">
            <FaLaptopCodeFallback />
          </div>

          <h2>Getting things ready...</h2>
          <p>Preparing your learning page</p>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="progress-meta">
            <span>Please wait</span>
            <strong>{progress}%</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      {notice && <div className="toast-message">{notice}</div>}

      <div className="announcement-bar">
        Learn something new and take the next step.
        <a href="#courses">
          Explore courses <FaArrowRight />
        </a>
      </div>

      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon"><FaGraduationCap /></span>
            <span>
              Bright<span className="text-gradient">Learn</span>
              <small>LEARN SOMETHING NEW</small>
            </span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
            {[
              ["Home", "#home"],
              ["Categories", "#categories"],
              ["Courses", "#courses"],
              ["About", "#about"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact-page"],
            ].map(([label, link]) => (
              <a href={link} key={label} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="nav-login" href="#newsletter">Log in</a>
            <a className="btn btn-primary nav-signup" href="#newsletter">
              Sign Up <FaArrowRight />
            </a>
            <a className="cart-link" href="#courses" aria-label="Course cart">
              <FaGraduationCap /> <b>{cart.length}</b>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy" data-aos="fade-up">
              <span className="eyebrow">YOUR LEARNING JOURNEY STARTS HERE</span>

              <h1>
                Learn New Skills.
                <br />
                <span className="text-gradient">Build Your Future.</span>
              </h1>

              <p className="hero-description">
                Explore online courses, learn practical skills and work
                towards your goals at your own pace.
              </p>

              <form
                className="hero-search"
                onSubmit={(event) => {
                  event.preventDefault();
                  document.getElementById("courses")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <FaSearch />
                <input
                  type="search"
                  placeholder="What do you want to learn?"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>

              <div className="hero-tags">
                <span><FaCheckCircle /> Learn at your pace</span>
                <span><FaCheckCircle /> Practical courses</span>
                <span><FaCheckCircle /> Flexible learning</span>
              </div>

              <div className="hero-stats">
                <div><strong>10K+</strong><small>Courses</small></div>
                <div><strong>5M+</strong><small>Learners</small></div>
                <div><strong>4.8/5</strong><small>Rating</small></div>
              </div>
            </div>

            <div className="hero-visual" data-aos="fade-left">
              <div className="hero-image-wrap">
                <img src={studentsImage} alt="Students learning together" />
              </div>

              <div className="floating-card floating-card-top">
                <FaPlay />
                <div>
                  <strong>Learn anywhere</strong>
                  <small>At your own pace</small>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <div className="mini-avatars">
                  <img src={nivithaImage} alt="" />
                  <img src={udayImage} alt="" />
                  <img src={meeraImage} alt="" />
                </div>
                <div>
                  <strong>Keep learning</strong>
                  <small>One step at a time</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">EXPLORE CATEGORIES</span>
                <h2>Find a subject you enjoy.</h2>
                <p>Choose an area and find a course to get started.</p>
              </div>
              <a href="#courses" className="text-link">
                Browse courses <FaArrowRight />
              </a>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`category-card ${
                    activeCategory === category.name ? "category-active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setShowAllCourses(true);
                    document.getElementById("courses")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <strong>{category.name}</strong>
                  <small>{category.count}</small>
                  <FaArrowRight />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">POPULAR COURSES</span>
                <h2>Learn something useful.</h2>
                <p>Explore courses and choose what you want to learn next.</p>
              </div>
            </div>

            <div className="course-controls">
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
                  placeholder="Search courses..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
            </div>

            {visibleCourses.length > 0 ? (
              <div className="course-grid">
                {visibleCourses.map((course) => (
                  <article className="course-card" key={course.id}>
                    <div className="course-image">
                      <img src={course.image} alt={course.title} loading="lazy" />
                      <span className="course-badge">{course.badge}</span>
                      <button
                        className={`favorite-btn ${
                          favorites.includes(course.id) ? "favorite-active" : ""
                        }`}
                        onClick={() => toggleFavorite(course.id)}
                        aria-label="Toggle favorite"
                      >
                        <FaRegHeart />
                      </button>
                    </div>

                    <div className="course-content">
                      <div className="course-meta">
                        <span>{course.category}</span>
                        <span><FaClock /> {course.duration}</span>
                      </div>

                      <h3>{course.title}</h3>
                      <p className="instructor">Instructor: {course.instructor}</p>

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
                        >
                          {cart.some((item) => item.id === course.id)
                            ? "Added"
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
                <p>Try another search or category.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                    setShowAllCourses(false);
                  }}
                >
                  Show all courses
                </button>
              </div>
            )}

            {filteredCourses.length > 4 && (
              <div className="center-action">
                <button
                  className="btn btn-outline"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                >
                  {showAllCourses ? "Show fewer courses" : "View all courses"}
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="learning-banner">
          <div className="container learning-banner-inner">
            <FaGraduationCap className="banner-icon" />
            <div className="banner-copy">
              <span>KEEP MOVING FORWARD</span>
              <h2>Small steps can lead to big achievements.</h2>
              <p>Choose a course and make time to learn something new.</p>
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
                <img src={learningImage} alt="Online learning" loading="lazy" />
              </div>
              <div className="about-experience-card">
                <FaGraduationCap />
                <strong>Learning without limits</strong>
                <span>Build skills at your own pace</span>
              </div>
            </div>

            <div className="about-copy" data-aos="fade-left">
              <span className="section-kicker">ABOUT BRIGHTLEARN</span>
              <h2>Learn today. Use your skills tomorrow.</h2>
              <p>
                BrightLearn helps learners explore different subjects and
                develop practical skills. Start with the basics and continue
                learning as your interests grow.
              </p>

              <div className="benefit-list">
                <div className="benefit-item">
                  <span className="benefit-icon"><FaInfinity /></span>
                  <div>
                    <strong>Flexible learning</strong>
                    <p>Learn at a time that suits you.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><FaUsers /></span>
                  <div>
                    <strong>Useful lessons</strong>
                    <p>Practise what you learn through projects.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><FaCertificate /></span>
                  <div>
                    <strong>Build your skills</strong>
                    <p>Keep improving with each new lesson.</p>
                  </div>
                </div>
              </div>

              <a href="#categories" className="btn btn-primary">
                Explore categories <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section className="section how-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <div>
                <span className="section-kicker">HOW IT WORKS</span>
                <h2>Get started in three steps.</h2>
                <p>A simple way to begin your learning journey.</p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                
                <span className="step-icon"><FaSearch /></span>
                <h3>Explore</h3>
                <p>Find a course that matches your interests.</p>
              </div>
              <div className="step-card">
                
                <span className="step-icon"><FaPlay /></span>
                <h3>Learn</h3>
                <p>Follow lessons and practise new skills.</p>
              </div>
              <div className="step-card">
                
                <span className="step-icon"><FaCertificate /></span>
                <h3>Grow</h3>
                <p>Use your skills and continue improving.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="container reviews-grid">
            <div className="reviews-intro">
              <span className="section-kicker">LEARNER STORIES</span>
              <h2>Learning brings new opportunities.</h2>
              <p>
                Every learner has a different goal. Read about their learning
                experiences and progress.
              </p>

              <div className="review-score">
                <strong>4.8</strong>
                <div>
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>
                  <span>Sample learner rating</span>
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

            <article className="testimonial-card">
              <div className="quote-mark"></div>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
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
                <FaCheckCircle />
              </div>
              <div className="testimonial-dots">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    className={index === testimonialIndex ? "dot-active" : ""}
                    aria-label={`Show review ${index + 1}`}
                    onClick={() => setTestimonialIndex(index)}
                  />
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Questions about learning?</h2>
              <p>Find answers to common questions before you get started.</p>
              <a href="#contact-page" className="text-link">
                Contact us <FaArrowRight />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeFaq === index ? "faq-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown />
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer"><p>{faq.answer}</p></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-copy">
                <span className="section-kicker">STAY UPDATED</span>
                <h2>Keep learning with BrightLearn.</h2>
                <p>Get course updates and useful learning tips by email.</p>
              </div>

              {subscribed ? (
                <div className="subscribe-success">
                  <FaCheckCircle />
                  <div>
                    <strong>Thanks for subscribing!</strong>
                    <span>This is a demo confirmation.</span>
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
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe <FaPaperPlane />
                  </button>
                  <small>No spam. Just learning updates.</small>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact-page">
          <div className="container">
            <div className="contact-heading">
              <span className="section-kicker">CONTACT US</span>
              <h2>How can we help you?</h2>
              <p>
                Send a message if you have questions about courses or the
                learning platform.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info-card">
                <span className="contact-label">CONTACT INFORMATION</span>
                <h3>Let's talk.</h3>
                <p className="contact-info-description">
                  Get in touch using the details below.
                </p>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaEnvelope /></span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:uk556513@gmail.com">uk556513@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaPhone /></span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+919342568375">+91 93425 68375</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaMapMarkerAlt /></span>
                  <div>
                    <strong>Location</strong>
                    <span>HSR Layout, Bengaluru, India</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaClock /></span>
                  <div>
                    <strong>Working hours</strong>
                    <span>Monday – Saturday, 9 AM – 6 PM</span>
                  </div>
                </div>

                <div className="contact-social-area">
                  <strong>Follow us</strong>
                  <div className="contact-social-links">
                    <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                    <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
                  </div>
                </div>
              </div>

              <div className="contact-form-card">
                <span className="section-kicker">SEND A MESSAGE</span>
                <h3>Write to our team</h3>
                <p className="contact-form-description">
                  Fill in the details below.
                </p>

                {contactSubmitted ? (
                  <div className="contact-success">
                    <FaCheckCircle />
                    <h3>Thank you for your message!</h3>
                    <p>
                      This demo displays a confirmation. A backend or email
                      service is needed to deliver the message.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="contact-name">Full name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          value={contactForm.name}
                          onChange={(event) =>
                            setContactForm({
                              ...contactForm,
                              name: event.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="contact-field">
                        <label htmlFor="contact-email">Email address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="Your email"
                          value={contactForm.email}
                          onChange={(event) =>
                            setContactForm({
                              ...contactForm,
                              email: event.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-subject">Subject *</label>
                      <select
                        id="contact-subject"
                        value={contactForm.subject}
                        onChange={(event) =>
                          setContactForm({
                            ...contactForm,
                            subject: event.target.value,
                          })
                        }
                        required
                      >
                        <option value="">Choose a subject</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Payment Enquiry">Payment Enquiry</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        rows="5"
                        placeholder="Write your message..."
                        value={contactForm.message}
                        onChange={(event) =>
                          setContactForm({
                            ...contactForm,
                            message: event.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <button className="btn btn-primary contact-submit-btn" type="submit">
                      Send Message <FaPaperPlane />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home">
              <span className="brand-icon"><FaGraduationCap /></span>
              <span>
                Bright<span className="text-gradient">Learn</span>
                <small>LEARN SOMETHING NEW</small>
              </span>
            </a>

            <p>
              Explore new subjects, practise useful skills and keep learning
              with BrightLearn.
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
            <a href="#courses">Courses</a>
            <a href="#about">About us</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div className="footer-column">
            <h4>Popular topics</h4>
            {["Development", "Data Science", "Design", "Business", "Marketing"].map(
              (item) => (
                <a
                  key={item}
                  href="#courses"
                  onClick={() => {
                    setActiveCategory(item);
                    setShowAllCourses(true);
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="footer-column footer-contact">
            <h4>Get in touch</h4>
            <a href="mailto:uk556513@gmail.com"><FaEnvelope /> uk556513@gmail.com</a>
            <a href="tel:+919342568375"><FaPhone /> +91 93425 68375</a>
            <span><FaMapMarkerAlt /> Bengaluru, India</span>
            <a href="#faq">Help & FAQs</a>
            <a href="#contact-page">Contact form</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} BrightLearn. All rights reserved.</p>
          <div>
            <a href="#faq">Help Center</a>
            <a href="#contact-page">Contact</a>
            <a href="#home">Back to top ↑</a>
          </div>
          <span>Learn · Build · Grow</span>
        </div>
      </footer>
    </div>
  );
}

function FaLaptopCodeFallback() {
  return <FaGraduationCap />;
}

export default App;
