import React, { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "FitnessGuide completely transformed my approach to fitness. The personalized workout programs and expert trainers helped me lose 30 pounds and gain incredible strength. I feel more confident than ever!",
      results: "Lost 30 lbs, Gained strength"
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As someone who never worked out before, I was intimidated by gyms. FitnessGuide's beginner-friendly programs and supportive community made it easy to start. Now I work out 4 times a week!",
      results: "Consistent 4x/week routine"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The yoga and flexibility programs have been life-changing. I've improved my posture, reduced back pain, and found a sense of peace I never knew I needed. The instructors are amazing!",
      results: "Better posture, No back pain"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I've tried many fitness apps, but FitnessGuide stands out. The variety of programs, quality of instruction, and the ability to track progress keeps me motivated. Highly recommend!",
      results: "Consistent progress tracking"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "Nurse",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working night shifts made it hard to maintain a fitness routine. FitnessGuide's flexible scheduling and home workout options fit perfectly into my busy life. I feel stronger and more energetic!",
      results: "Flexible scheduling, More energy"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Members Say</h2>
          <p>Real stories from real people who transformed their lives with FitnessGuide</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <Quote size={32} />
                    </div>
                    
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      
                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="star-icon" />
                        ))}
                      </div>
                      
                      <div className="testimonial-author">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="author-image"
                        />
                        <div className="author-info">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                          <span className="results">{testimonial.results}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slider-controls">
            <button 
              className="slider-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="slider-btn next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card-static">
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 5rem 0;
          background: #f8fafc;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .section-header p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .testimonials-container {
          margin-bottom: 3rem;
        }
        
        .testimonials-slider {
          overflow: hidden;
          border-radius: 16px;
        }
        
        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        
        .testimonial-slide {
          min-width: 100%;
          flex-shrink: 0;
        }
        
        .testimonial-card {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          text-align: center;
        }
        
        .quote-icon {
          color: #2563eb;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-text {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #374151;
          margin-bottom: 2rem;
          font-style: italic;
        }
        
        .testimonial-rating {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 2rem;
        }
        
        .star-icon {
          color: #f59e0b;
          fill: currentColor;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }
        
        .author-info p {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .results {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .slider-btn {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #64748b;
        }
        
        .slider-btn:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
          transform: scale(1.1);
        }
        
        .slider-dots {
          display: flex;
          gap: 0.5rem;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .testimonial-card-static {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .testimonial-card-static:hover {
          transform: translateY(-4px);
        }
        
        .testimonial-card-static .testimonial-text {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-card-static .author-image {
          width: 50px;
          height: 50px;
        }
        
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .testimonial-card {
            padding: 2rem;
          }
          
          .testimonial-text {
            font-size: 1.1rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .slider-controls {
            gap: 1rem;
          }
          
          .slider-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
