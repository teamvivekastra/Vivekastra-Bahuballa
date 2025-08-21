VIVEKASTRA
Smart Bat (Bahuballa) is an innovative cricket training system that combines sensor technology with artificial intelligence to provide real-time feedback on batting technique. This React-based web application features swing metrics visualization, posture tracking, and AI-powered coaching recommendations.


Features
🏏 Real-time swing metrics (direction, angle, axis, angular speed)

🎮 Unity game integration for interactive training

📷 Live camera feed for posture tracking

🤖 AI-powered coaching feedback

👥 Team section with member profiles

📱 Fully responsive design

🎨 Modern UI with Tailwind CSS

Prerequisites
Before installing, make sure you have the following installed on your system:

Node.js (version 14.0 or higher)

npm (usually comes with Node.js) or yarn

Git

Installation
Follow these steps to set up the project locally:

1. Clone the Repository
bash
git clone https://github.com/your-username/bahuballa.git
cd bahuballa
2. Install Dependencies
bash
# Using npm
npm install

# Or using yarn
yarn install
3. Install Tailwind CSS and Dependencies
bash
# Using npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Or using yarn
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
4. Configure Tailwind CSS
Update tailwind.config.js with the following content:

javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
5. Set Up CSS
Replace the contents of src/index.css with:

css
@tailwind base;
@tailwind components;
@tailwind utilities;
6. Start the Development Server
bash
# Using npm
npm start

# Or using yarn
yarn start
The application will open in your browser at http://localhost:3000.

Project Structure
text
bahuballa/
├── public/
│   ├── images/           # Folder for team member images
│   ├── index.html
│   └── ...
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── StatsSection.jsx
│   │   └── ...
│   ├── App.js           # Main application component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json
└── README.md
Adding Team Member Photos
To add team member photos:

Place your images in the public/images/ folder

Update the teamMembers array in src/App.js:

javascript
const teamMembers = [
  {
    name: "Team Member Name",
    role: "Team Member Role",
    image: "/images/your-photo.jpg"
  },
  // ... more team members
];
Customization
Colors
The color scheme can be customized by modifying the Tailwind configuration in tailwind.config.js:

javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#5a67d8',
        DEFAULT: '#4c51bf',
        dark: '#434190',
      },
    },
  },
},
Adding New Sections
To add new sections to the application:

Create a new component in the src/components/ folder

Import and add it to the App.js file

Update the navigation if needed

Building for Production
To create a production build:

bash
# Using npm
npm run build

# Or using yarn
yarn build
This creates a build folder with optimized production files.

Deployment
Deploy to Netlify
Build the project: npm run build

Drag and drop the build folder to Netlify

Deploy to Vercel
Install Vercel CLI: npm i -g vercel

Run: vercel in the project directory

Deploy to GitHub Pages
Install gh-pages: npm install --save-dev gh-pages

Add to package.json:

json
"homepage": "https://yourusername.github.io/bahuballa",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Run: npm run deploy

Technologies Used
React - Frontend framework

Tailwind CSS - Styling

Unity WebGL - Game integration (to be implemented)

WebRTC - Camera feed (to be implemented)

TensorFlow.js - AI posture analysis (to be implemented)

Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Acknowledgments
Icons from Heroicons

UI inspiration from Tailwind UI

Cricket coaching insights from [Cricket Coaching Experts]

Support
If you have any questions or issues, please create an issue in the GitHub repository or contact us at wardhanpranavraj@gmail.com.

<div align="center">
Made with ❤️ by the Vivekastra Team

</div>
