# 🌟 Glassmorph Calculator

A stunning **glassmorphism-styled calculator** built with React and Sass, featuring smooth 3D tilt animations and a beautiful translucent design.

![Calculator Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Sass](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern translucent UI with backdrop blur effects
- 🎭 **3D Tilt Animation** - Interactive hover effects using Vanilla Tilt
- ⚡ **React Hooks** - Modern React with useState and useEffect
- 🎯 **Sass/SCSS** - Organized styling with variables and mixins
- 📱 **Responsive Design** - Works beautifully on all screen sizes
- 🔢 **Full Calculator** - Complete arithmetic operations
- 🎪 **Gradient Backgrounds** - Animated gradient orbs for visual appeal
- ⚙️ **Modern Architecture** - Clean component structure and event handling

## 🚀 Demo

Experience the calculator live: [View Demo](https://your-demo-link.com)

## 🛠️ Built With

- **React** - Frontend framework
- **Sass/SCSS** - Advanced CSS preprocessing
- **Vanilla Tilt** - 3D tilt hover effects
- **CSS Grid** - Layout system for button arrangement
- **Glassmorphism** - Modern UI design trend

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DisanduP/Calculator-React.git
   cd Calculator-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

- **Numbers & Operations**: Click any number or operation button
- **Clear**: Press 'C' to clear the display
- **Calculate**: Press '=' to evaluate the expression
- **Tilt Effect**: Hover over the calculator to see the 3D tilt animation

## 🏗️ Project Structure

```
src/
├── Calculator.js       # Main calculator component
├── Calculator.scss     # Glassmorphism styles
├── App.js             # Root component
├── App.css            # App-level styles
└── index.js           # Entry point
```

## 🎨 Styling Features

- **Glass Effect**: `backdrop-filter: blur()` with transparency
- **Gradient Orbs**: Animated background elements
- **Hover States**: Smooth transitions and interactive feedback
- **Typography**: Clean Quicksand font family
- **Color Scheme**: Dark theme with vibrant accents

## 🔧 Customization

### Modify Colors
Edit the Sass variables in `Calculator.scss`:
```scss
$primary-bg: #091921;
$glass-bg: rgba(255, 255, 255, 0.05);
$active-bg: #14ff47;
```

### Adjust Size
Change the calculator dimensions:
```scss
$button-size: 95px;
$calculator-width: 380px;
```

### Tilt Settings
Modify the tilt effect in `Calculator.js`:
```javascript
VanillaTilt.init(containerRef.current, {
  max: 15,           // Max tilt rotation
  speed: 400,        // Speed of animation
  glare: true,       // Enable glare effect
  "max-glare": 0.2   // Glare intensity
});
```

## 📱 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production with optimized performance

### `npm run eject`
⚠️ **One-way operation** - Ejects from Create React App

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Glassmorphism** design inspiration
- **Vanilla Tilt** for the amazing 3D effects
- **React** team for the incredible framework
- **Sass** for powerful CSS preprocessing

## 📧 Contact

**Disandu** - [@DisanduP](https://github.com/DisanduP)

Project Link: [https://github.com/DisanduP/Calculator-React](https://github.com/DisanduP/Calculator-React)

---

⭐ **Star this repo if you found it helpful!** ⭐

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
