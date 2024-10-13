
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Taskboard from "./Components/Task/Taskboard";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header/>
      <Hero/>
      <Taskboard/>
      <Footer/>
    </div>
  );
}

export default App;
