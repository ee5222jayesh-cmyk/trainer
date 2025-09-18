import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>FitnessGuide</h3>
              <p>Your personal fitness journey starts here. Transform your life with expert guidance and proven workout programs.</p>
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#workouts">Workouts</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Beginner's Strength</a></li>
              <li><a href="#">Cardio Blast</a></li>
              <li><a href="#">Yoga Flow</a></li>
              <li><a href="#">HIIT Power</a></li>
              <li><a href="#">Core Strength</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@fitnessguide.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Fitness Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © 2024 FitnessGuide. All rights reserved. Made with 
              <Heart size={16} className="heart-icon" /> 
              for fitness enthusiasts.
            </p>
            <button 
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1e293b;
          color: white;
          padding: 3rem 0 0;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 1rem;
        }
        
        .footer-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .footer-logo p {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #334155;
          color: #94a3b8;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #2563eb;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        .footer-bottom {
          border-top: 1px solid #334155;
          padding: 1.5rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-bottom p {
          color: #94a3b8;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .scroll-to-top {
          background: #2563eb;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scroll-to-top:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
