import Studio from "../components/Studio";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";


export default function StudioPage() {
  return (
    <div className = "app">
      <Navbar/>
      <Studio/>
      <Copyright/>
    </div>
  );
}