# 🏏 Bahuballa (Smart Cricket Bat) by Team Vivekastra

An **AI-powered cricket training system** that combines **sensor technology**, **real-time swing metrics**, and **AI coaching feedback** to help players improve their batting technique.
Built with **React**, styled with **Tailwind CSS**, and designed for **modern cricket training**.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Unity-Game%20Integration-black?logo=unity" alt="Unity"/>
  <img src="https://img.shields.io/badge/TensorFlow.js-AI-orange?logo=tensorflow" alt="TensorFlow.js"/>
</p>

---

## 🚀 Features

* ⚡ **Real-time swing metrics** (direction, angle, axis, angular speed)
* 🎮 **Unity game integration** for interactive training
* 📷 **Live camera feed** with posture tracking (WebRTC)
* 🤖 **AI-powered coaching recommendations** (TensorFlow\.js)
* 👥 **Team section** with member profiles
* 📱 Fully responsive modern UI with **Tailwind CSS**

---

## 📂 Project Structure

```
bahuballa/
├── public/
│   ├── images/        # Team member images
│   ├── index.html
│   └── ...
├── src/
│   ├── components/    # React components
│   │   ├── Navbar.jsx
│   │   ├── StatsSection.jsx
│   │   └── ...
│   ├── App.js         # Main app component
│   ├── index.js
│   └── index.css
├── tailwind.config.js # Tailwind configuration
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (>=14.0)
* npm (comes with Node.js) or [yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)

---

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/your-username/bahuballa.git
cd bahuballa

# Install dependencies
npm install
# or
yarn install

# Setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ▶️ Running Locally

```bash
npm start
# or
yarn start
```

Your app will open at **[http://localhost:3000](http://localhost:3000)** 🚀

---

## 📸 Adding Team Member Photos

1. Place images inside `public/images/`
2. Update `teamMembers` array in `src/App.js`:

```js
const teamMembers = [
  {
    name: "John Doe",
    role: "AI Engineer",
    image: "/images/john.jpg"
  },
  {
    name: "Jane Smith",
    role: "Frontend Developer",
    image: "/images/jane.jpg"
  }
];
```

---

## 🎨 Customization

Update theme colors in `tailwind.config.js`:

```js
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
}
```

---

## 📦 Deployment

### 🔹 Netlify

```bash
npm run build
# Drag & drop /build folder to Netlify
```

### 🔹 Vercel

```bash
npm i -g vercel
vercel
```

### 🔹 GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/bahuballa",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run:

```bash
npm run deploy
```

---

## 🧰 Technologies Used

* **React** – Frontend framework
* **Tailwind CSS** – Styling
* **Unity WebGL** – Game integration *(upcoming)*
* **WebRTC** – Camera feed *(upcoming)*
* **TensorFlow.js** – AI posture analysis *(upcoming)*

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 🙌 Acknowledgments

* Icons from [Heroicons](https://heroicons.com/)
* UI inspiration from [Tailwind UI](https://tailwindui.com/)
* Cricket coaching insights from experts

---

## 📬 Support

💌 For questions or issues, open a GitHub issue or reach out at **[teamvivekastra@gmail.com](mailto:teamvivekastra@gmail.com)**

<p align="center">  
  Made with ❤️ by the <b>Vivekastra Team</b>  
</p>

---
