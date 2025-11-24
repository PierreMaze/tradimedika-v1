import Hero from "./components/sections/Hero";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div className="bg-light flex h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
