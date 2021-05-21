import "./App.scss";
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import Articles from "./components/Articles.js";
import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation.js";
import DesktopNavigation from "./components/DesktopNavigation";
function App() {
  return (
    <div className="App">
      <DesktopNavigation />
      <Navigation />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
