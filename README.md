# College Event Management Site

This project is a **MERN stack application** designed to manage college events. The platform includes features like a gallery page for showcasing memories, a contact and about page for platform information, and a notifications page for event updates.

## Features

### Gallery Page (`/gallery`)
- Browse photos and videos by category or year.
- Highlight event memories and winners.

### Contact Page (`/contact`)
- Displays contact information: email, phone, and address.
- Allows users to submit inquiries via a contact form.

### About Page (`/about`)
- Provides information about the platform and its purpose.

### Notifications Page (`/notifications`)
- Displays event updates, reminders, and announcements.
- Includes optional features like toast popups and email alerts.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/099anshu/college-event-management-site.git
   cd college-event-management-site
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

### Running the App
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Available Scripts

### Backend
- `npm start`: Starts the backend server.
- `npm run dev`: Starts the backend server in development mode with hot reload.

### Frontend
- `npm start`: Starts the frontend development server.
- `npm run build`: Builds the frontend for production.

---

## Folder Structure

```
college-event-management-site/
├── backend/
│   ├── models/           # Database models (e.g., Gallery, Notification)
│   ├── routes/           # API routes
│   ├── server.js         # Backend server entry point
├── frontend/
│   ├── src/
│   │   ├── components/   # React components (GalleryPage, ContactPage, etc.)
│   │   ├── App.js        # Main React app
│   ├── public/           # Public assets
│   ├── package.json      # Frontend dependencies
├── README.md             # Project documentation
```

---

## Technologies Used
### Frontend
- React.js
- Axios (for API calls)
- React Router (for navigation)
- React Hot Toast (for toast notifications)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## Deployment
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to any static hosting service (e.g., Netlify, Vercel).
3. Deploy the backend server to a platform like Heroku or AWS.

---

## Learn More
- [React Documentation](https://reactjs.org/)
- [MERN Stack Overview](https://www.mongodb.com/mern-stack)

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.