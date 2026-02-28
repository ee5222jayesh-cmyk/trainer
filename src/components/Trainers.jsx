import React from 'react'
import { Star, Award, Users, MessageCircle } from 'lucide-react'
const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Strength Training",
      experience: "8 years",
      rating: 4.9,
      clients: 150,
      image: "https://images.unsplash.com/photo-1594824388852-8a5b5b5b5b5b?w=300&h=300&fit=crop&crop=face",
      bio: "Certified personal trainer specializing in strength training and body transformation.",
      certifications: ["NASM-CPT", "CSCS", "Precision Nutrition"],
      specialties: ["Weight Loss", "Muscle Building", "Form Correction"]
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "HIIT & Cardio",
      experience: "6 years",
      rating: 4.8,
      clients: 200,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "High-intensity training expert helping clients achieve their fitness goals faster.",
      certifications: ["ACSM-CPT", "HIIT Specialist", "Group Fitness"],
      specialties: ["Fat Loss", "Endurance", "Metabolic Training"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      rating: 4.9,
      clients: 300,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Yoga instructor and flexibility coach with a holistic approach to wellness.",
      certifications: ["RYT-500", "Yin Yoga", "Meditation Teacher"],
      specialties: ["Flexibility", "Stress Relief", "Mind-Body Connection"]
    },
    {
      id: 4,
      name: "David Thompson",
      specialty: "Sports Performance",
      experience: "12 years",
      rating: 4.9,
      clients: 180,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former professional athlete now helping others reach peak performance.",
      certifications: ["CSCS", "USAW", "Sports Nutrition"],
      specialties: ["Athletic Performance", "Injury Prevention", "Power Training"]
    },
    {
      id: 5,
      name: "Lisa Park",
      specialty: "Prenatal & Postnatal",
      experience: "7 years",
      rating: 4.8,
      clients: 120,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Specialized trainer supporting women through pregnancy and postpartum fitness.",
      certifications: ["Pre/Post Natal", "Pelvic Floor", "Women's Health"],
      specialties: ["Prenatal Fitness", "Postpartum Recovery", "Core Rehabilitation"]
    },
    {
      id: 6,
      name: "James Wilson",
      specialty: "Functional Training",
      experience: "9 years",
      rating: 4.7,
      clients: 220,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Functional movement specialist helping clients move better in daily life.",
      certifications: ["FMS", "TRX", "Kettlebell"],
      specialties: ["Movement Quality", "Injury Prevention", "Daily Function"]
    },
    {
      id: 7,
      name: "Ram dev Baba ",
      specialty: "YOGA and Meditation",
      experience: "29 years",
      rating: 4.9,
      clients: 1000,
      image: "https://th.bing.com/th/id/OIP.i7ySWy40wmhX4Kh9kCmc0QHaEK?w=326&h=183&c=7&r=0&o=7&pid=1.7&rm=3",
      bio: "Functional movement specialist helping clients move better in daily life.",
      certifications: ["", "Teera", "becholor in yoga"],
      specialties: ["vyayam", "FOUNDER OF GURUKUL SCHOOL", "ALL INDIA YOGA CHAMPION"]
    }
  ]

  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Trainers</h2>
          <p>Professional trainers with years of experience to guide your fitness journey</p>
        </div>
        
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-overlay">
                  <button className="btn btn-primary">
                    <MessageCircle size={16} />
                    Contact
                  </button>
                </div>
              </div>
              
              <div className="trainer-content">
                <div className="trainer-header">
                  <h3>{trainer.name}</h3>
                  <div className="trainer-rating">
                    <Star className="star-icon" />
                    <span>{trainer.rating}</span>
                  </div>
                </div>
                
                <div className="trainer-specialty">
                  <Award size={16} />
                  <span>{trainer.specialty}</span>
                </div>
                
                <p className="trainer-bio">{trainer.bio}</p>
                
                <div className="trainer-stats">
                  <div className="stat">
                    <span className="stat-number">{trainer.experience}</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span className="stat-number">{trainer.clients}+</span>
                    <span className="stat-label">Clients</span>
                  </div>
                </div>
                
                <div className="trainer-specialties">
                  {trainer.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
                
                <div className="trainer-certifications">
                  <h4>Certifications:</h4>
                  <div className="cert-list">
                    {trainer.certifications.map((cert, index) => (
                      <span key={index} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trainers {
          padding: 5rem 0;
          background: white;
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
        
        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .trainer-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .trainer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .trainer-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .trainer-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .trainer-card:hover .trainer-image img {
          transform: scale(1.05);
        }
        
        .trainer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.9), rgba(29, 78, 216, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .trainer-card:hover .trainer-overlay {
          opacity: 1;
        }
        
        .trainer-content {
          padding: 1.5rem;
        }
        
        .trainer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .trainer-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        .trainer-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #f59e0b;
          font-weight: 600;
        }
        
        .star-icon {
          fill: currentColor;
        }
        
        .trainer-specialty {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .trainer-bio {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .trainer-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }
        
        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .trainer-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .specialty-tag {
          background: #f0f9ff;
          color: #0369a1;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .trainer-certifications h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .cert-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .cert-tag {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .trainers-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .trainer-stats {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Trainers
