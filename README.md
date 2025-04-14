# college-event-management-site
📛 Project Name Suggestion
EventSphere – A One-Stop Platform for All College Events
🔧 TECH STACK
Layer
Tech
Frontend
React.js + Tailwind CSS + Axios
Backend
Node.js + Express.js
Database
MongoDB (via Mongoose)
Authentication
JWT (Role-based auth)
File Upload
Cloudinary (for posters)
Email Service
Nodemailer (for confirmations/reminders)
Deployment
Frontend: Netlify / Vercel
Backend: Render / Railway
DB: MongoDB Atlas
🧱 USER ROLES
1. Admin
○ Approves/rejects events
○ Manages users & analytics
2. Organizer (Club/Dept Heads)
○ Creates & manages events
○ Views registrations
3. Student/Participant
○ Registers & tracks events
○ Views personalized dashboard
🌐 WEBSITE PAGES & THEIR FEATURES
1. Home Page (/)
Welcoming landing page to explore events
Features:
● Navbar with login/signup
● Hero section with featured events
● Category filter tabs (Hackathon, Cultural, Sports, Technical)
● Carousel for upcoming events
● Footer with contact/socials
2. All Events Page (/events)
Explore all upcoming & past events
Features:
● Search bar + filters (date, type, club, venue)
● Event cards grid (title, date, category, poster, register)
● “View Details” button
● Pagination or infinite scroll
3. Event Details Page (/events/:id)
Detailed view of selected event
Features:
● Event poster
● Description, date, time, venue
● Organizer contact info
● Rules/guidelines
● “Register Now” button (with modal/form)
● Countdown timer (optional)
4. Login/Signup Page (/login, /signup)
Auth system for all users
Features:
● Login with email + password
● Signup with role selection (student, organizer)
● JWT auth
● Forgot password (optional)
5. Student Dashboard (/dashboard/student)
Personalized student page
Features:
● Registered events list
● Cancel registration
● Event reminders
● Download certificates (optional)
6. Organizer Dashboard (/dashboard/organizer)
For club/department heads
Features:
● View created events
● Add/edit/delete events
● View registered users
● Registration stats
7. Admin Dashboard (/dashboard/admin)
Admin control panel
Features:
● View all events (approved/pending)
● Approve/Reject events
● Manage users (ban/promote)
● Analytics (event counts, popular types, user stats)
8. Create/Edit Event Page (/events/new, /events/edit/:id)
For organizers only
Form Fields:
● Title
● Poster (upload)
● Type (Hackathon, Sports, etc.)
● Description
● Date, Time, Venue
● Rules & Guidelines
● Registration deadline
● Contact info
9. Gallery Page (/gallery)
Memories of past events
Features:
● Photos/videos by category or year
● Event highlights
● Winner showcases
10. Contact & About Page (/contact, /about)
General platform info and support
11. Notifications Page (/notifications)
For event updates, reminders, announcements
Optional Enhancements:
● Toast popups or in-app notifications
● Email alerts
📲 FEATURE SUMMARY
Type
Features
General
Home, Filterable events, Event details
Auth
JWT login, Role-based access
Registration
Form, user-event linking, email confirmation
Dashboards
Role-based: Student, Organizer, Admin
Admin Tools
Event moderation, user management, analytics
Media
Poster uploads, Gallery
Analytics
Popular events, user stats (admin)
Extras
QR for event check-ins, dark mode (optional), certificate generator (optional)
✅ PROJECT HIGHLIGHTS
● 🔍 Smart Event Filtering
● 📝 Smooth Registration Flow
● 🧑 🎓 Student-Friendly Dashboard
● 🛠️ Organizer Tools for Event Control
● 📊 Admin Analytics for Decision-Making
● 🖼️ Event Gallery for College Legacy
● 📩 Auto Emails for Confirmation & Reminders
● 🔐 Secure & Scalable MERN Stack Architecture
