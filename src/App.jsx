import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutPrograms from './components/WorkoutPrograms'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Auth from './components/Auth'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in (will be implemented with Supabase)
    const savedUser = localStorage.getItem('fitness_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('fitness_user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('fitness_user')
  }

  return (
    <Router>
      <div className="App">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          user={user} 
          onLogout={handleLogout}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero isAuthenticated={isAuthenticated} />
              <WorkoutPrograms />
              <Trainers />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
