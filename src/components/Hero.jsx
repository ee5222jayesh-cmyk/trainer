import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

const Hero = ({ isAuthenticated }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Your Life with FitnessGuide</h1>
          <p>
            Discover personalized workout programs, connect with expert trainers, 
            and start your fitness journey today. Perfect for beginners and 
            fitness enthusiasts alike.
          </p>
          
          <div className="hero-buttons">
            {isAuthenticated ? (
              <a href="#workouts" className="btn btn-primary">
                Explore Workouts
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </a>
            ) : (
              <>
                <Link to="/auth" className="btn btn-primary">
                  Get Started Free
                  <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </Link>
                <a href="#workouts" className="btn btn-outline">
                  <Play size={20} style={{ marginRight: '8px' }} />
                  Watch Demo
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
