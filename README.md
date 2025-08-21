<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 9b93bfd (Initialize project using Create React App)
