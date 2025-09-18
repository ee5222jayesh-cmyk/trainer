import React from 'react'
import { Clock, Users, Target, Dumbbell, Heart, Zap } from 'lucide-react'

const WorkoutPrograms = () => {
  const workoutPrograms = [
    {
      id: 1,
      name: "Beginner's Strength",
      description: "Perfect for those starting their fitness journey. Build fundamental strength with basic exercises.",
      duration: "30-45 min",
      difficulty: "Beginner",
      participants: "1,200+",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: <Dumbbell className="workout-icon" />,
      features: ["Bodyweight exercises", "Proper form focus", "Progressive overload"]
    },
    {
      id: 2,
      name: "Cardio Blast",
      description: "High-energy cardio workouts to burn calories and improve cardiovascular health.",
      duration: "25-35 min",
      difficulty: "Intermediate",
      participants: "2,100+",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop",
      icon: <Heart className="workout-icon" />,
      features: ["HIIT training", "Fat burning", "Endurance building"]
    },
    {
      id: 3,
      name: "Yoga Flow",
      description: "Mindful movement combining strength, flexibility, and relaxation techniques.",
      duration: "45-60 min",
      difficulty: "All Levels",
      participants: "1,800+",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      icon: <Zap className="workout-icon" />,
      features: ["Flexibility", "Stress relief", "Mind-body connection"]
    },
    {
      id: 4,
      name: "HIIT Power",
      description: "High-intensity interval training for maximum results in minimal time.",
      duration: "20-30 min",
      difficulty: "Advanced",
      participants: "1,500+",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      icon: <Target className="workout-icon" />,
      features: ["Maximum intensity", "Quick results", "Fat burning"]
    },
    {
      id: 5,
      name: "Core Strength",
      description: "Targeted core workouts to build a strong, stable foundation.",
      duration: "25-40 min",
      difficulty: "Intermediate",
      participants: "1,900+",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: <Dumbbell className="workout-icon" />,
      features: ["Core stability", "Posture improvement", "Functional strength"]
    },
    {
      id: 6,
      name: "Flexibility & Mobility",
      description: "Gentle stretching and mobility work to improve range of motion and prevent injury.",
      duration: "30-45 min",
      difficulty: "All Levels",
      participants: "1,300+",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      icon: <Zap className="workout-icon" />,
      features: ["Injury prevention", "Better movement", "Recovery"]
    }
  ]

  return (
    <section id="workouts" className="workout-programs">
      <div className="container">
        <div className="section-header">
          <h2>Popular Workout Programs</h2>
          <p>Choose from our carefully crafted workout programs designed for all fitness levels</p>
        </div>
        
        <div className="workout-grid">
          {workoutPrograms.map((workout) => (
            <div key={workout.id} className="workout-card">
              <div className="workout-image">
                <img src={workout.image} alt={workout.name} />
                <div className="workout-overlay">
                  <div className="workout-icon">{workout.icon}</div>
                </div>
              </div>
              
              <div className="workout-content">
                <h3>{workout.name}</h3>
                <p>{workout.description}</p>
                
                <div className="workout-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{workout.participants}</span>
                  </div>
                  <div className="meta-item">
                    <Target size={16} />
                    <span>{workout.difficulty}</span>
                  </div>
                </div>
                
                <div className="workout-features">
                  {workout.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <button className="btn btn-primary workout-btn">
                  Start Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .workout-programs {
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
        
        .workout-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .workout-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .workout-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .workout-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .workout-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .workout-card:hover .workout-image img {
          transform: scale(1.05);
        }
        
        .workout-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .workout-card:hover .workout-overlay {
          opacity: 1;
        }
        
        .workout-icon {
          color: white;
          font-size: 2rem;
        }
        
        .workout-content {
          padding: 1.5rem;
        }
        
        .workout-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }
        
        .workout-content p {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .workout-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .workout-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .workout-btn {
          width: 100%;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .workout-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default WorkoutPrograms
