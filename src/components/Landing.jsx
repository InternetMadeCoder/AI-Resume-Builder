import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const heroContentRef = useScrollAnimation();
  const heroImageRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div ref={heroContentRef} className="hero-content">
              <div className="slide-in-left">
                <h1 className="hero-title">
                  Create Your Professional Resume with AI
                </h1>
                <p className="hero-text">
                  Transform your career journey with our AI-powered resume
                  builder. Create stunning, professional resumes in minutes.
                </p>
                <div className="hero-btns">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate("/signup")}
                  >
                    Get Started Free
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => navigate("/signin")}
                  >
                    Already have an account?
                  </button>
                </div>
              </div>
            </div>
            <div ref={heroImageRef} className="hero-image">
              <div className="slide-in-right">
                <img src="/resume-hero.svg" alt="Resume Builder" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={featuresRef} className="features-section">
        <div className="container">
          <div className="fade-in-up">
            <h2 className="section-title">Why Choose Resume Rocket?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: "🤖",
    title: "AI-Powered",
    description: "Smart suggestions and auto-formatting powered by advanced AI",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Create professional resumes in minutes, not hours",
  },
  {
    icon: "🎨",
    title: "Beautiful Templates",
    description: "Choose from professionally designed templates",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Works perfectly on all devices",
  },
];

export default Landing;
