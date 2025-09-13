# Jharkhand Darshan - Frontend

A clean and simple React frontend for the Jharkhand Darshan hackathon project.

## 🚀 Features

- **React + Vite** - Fast development and building
- **TailwindCSS** - Utility-first CSS framework for styling
- **React Router DOM** - Client-side routing
- **Responsive Design** - Works on all device sizes
- **Clean Architecture** - Well-organized folder structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar for landing page
│   └── Sidebar.jsx     # Sidebar for dashboard pages
├── pages/              # Main page components
│   ├── Landing.jsx     # Landing page with hero section
│   ├── SignIn.jsx      # User sign in page
│   ├── SignUp.jsx      # User registration page
│   ├── DashboardHome.jsx    # Dashboard home page
│   ├── DashboardExplore.jsx # Explore places page
│   └── DashboardChat.jsx    # AI chatbot page
├── layouts/            # Layout wrapper components
│   ├── AuthLayout.jsx  # Layout for auth pages (centered card)
│   └── DashboardLayout.jsx # Layout for dashboard (sidebar + content)
├── App.jsx             # Main app component with routing
├── main.jsx            # React root render
└── index.css           # TailwindCSS imports and custom styles
```

## 🛣️ Routes

- `/` - Landing page with hero section
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard/home` - Dashboard home
- `/dashboard/explore` - Explore places
- `/dashboard/chat` - AI chatbot

## 🎨 Design Features

- **Modern UI** - Clean and professional design
- **Indigo Color Scheme** - Consistent branding
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - Focus states and semantic HTML
- **Mobile Responsive** - Works on all screen sizes

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- All components are beginner-friendly with detailed comments
- Forms are set up with basic state management (ready for backend integration)
- Placeholder content is used for demonstration
- Easy to extend and customize for your specific needs

## 🔧 Customization

- Update colors in TailwindCSS classes
- Modify content in page components
- Add new routes in `App.jsx`
- Extend layouts as needed

Happy coding! 🎉