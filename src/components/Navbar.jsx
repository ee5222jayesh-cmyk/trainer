import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            FitnessGuide
          </Link>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#workouts">Workouts</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-buttons">
            {isAuthenticated ? (
              <div className="user-menu">
                <span className="user-greeting">
                  <User size={20} />
                  Hi, {user?.name || 'User'}!
                </span>
                <button onClick={onLogout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/auth" className="btn btn-outline">
                  Login
                </Link>
                <Link to="/auth" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
            
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .user-menu {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .user-greeting {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #333;
          font-weight: 500;
        }
        
        .nav-links.mobile-open {
          display: flex;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          flex-direction: column;
          padding: 1rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
          .user-menu {
            display: none;
          }
          
          .nav-links.mobile-open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
