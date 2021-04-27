import "./App.scss";
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation.js";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
