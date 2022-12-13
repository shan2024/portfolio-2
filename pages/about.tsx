import About from "../components/About";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";


export default function AboutPage() {
  return (
    <div className = "app">
      <Navbar/>
      <About/>
      <Copyright/>
    </div>
  );
}