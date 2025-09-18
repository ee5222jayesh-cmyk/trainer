# FitnessGuide - Your Personal Fitness Journey

A comprehensive fitness website designed to help beginners explore workout programs, view trainer profiles, and access basic fitness guidance with personalized authentication.

## 🚀 Features

- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Workout Programs**: 6 different workout categories with detailed descriptions
- **Trainer Profiles**: Expert trainers with specialties and certifications
- **Testimonials**: Real user stories with interactive slider
- **Contact Form**: Functional contact form with validation
- **Authentication**: Login/Signup system with form validation
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Clean, professional design with hover effects

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with modern features
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Authentication**: Local storage (ready for Supabase integration)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitness-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

### Hostinger Deployment (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**
   - Upload the contents of the `dist` folder to your Hostinger public_html directory
   - Ensure your domain points to the correct directory

3. **Configure for SPA**
   - Add a `.htaccess` file to handle React Router:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📱 Features Overview

### Day 1: Project Setup & Hero Section
- ✅ Responsive navigation bar
- ✅ Hero section with gradient background
- ✅ Call-to-action buttons
- ✅ Smooth scrolling navigation

### Day 2: Workout Programs
- ✅ 6 workout program cards
- ✅ High-quality images from Unsplash
- ✅ Program details and features
- ✅ Hover effects and animations

### Day 3: Trainer Profiles
- ✅ 6 expert trainer profiles
- ✅ Professional photos and bios
- ✅ Certifications and specialties
- ✅ Contact buttons for each trainer

### Day 4: Testimonials
- ✅ Interactive testimonial slider
- ✅ 5 real user testimonials
- ✅ Star ratings and user photos
- ✅ Navigation controls

### Day 5: Contact & Footer
- ✅ Functional contact form
- ✅ Contact information display
- ✅ Social media links
- ✅ Responsive footer design

### Day 6: Authentication
- ✅ Login/Signup forms
- ✅ Form validation
- ✅ Social login options (UI ready)
- ✅ User state management

### Day 7: Styling & Responsiveness
- ✅ Mobile-first responsive design
- ✅ Smooth animations and transitions
- ✅ Enhanced hover effects
- ✅ Loading states

### Day 8: Final Polish
- ✅ Cross-browser compatibility
- ✅ Performance optimization
- ✅ SEO-friendly structure
- ✅ Ready for deployment

## 🎨 Customization

### Colors
The main color scheme can be customized by updating CSS variables in `src/index.css`:
- Primary: `#2563eb` (Blue)
- Secondary: `#1e293b` (Dark Gray)
- Accent: `#f59e0b` (Amber)

### Content
- Update workout programs in `src/components/WorkoutPrograms.jsx`
- Modify trainer profiles in `src/components/Trainers.jsx`
- Change testimonials in `src/components/Testimonials.jsx`

### Styling
- All styles are in `src/index.css` and component-specific styled-jsx
- Responsive breakpoints: 768px, 1024px, 1200px

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── WorkoutPrograms.jsx
│   ├── Trainers.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Auth.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Adding New Features
1. Create new components in `src/components/`
2. Import and use in `App.jsx`
3. Add routing if needed
4. Style with CSS or styled-jsx

## 📞 Support

For support or questions:
- Email: hello@fitnessguide.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**FitnessGuide** - Transform your life, one workout at a time! 💪
