import Navbar from "../components/Navbar";
import About from "../components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "../components/Copyright";
import Studio from "../components/Studio";
import PortfolioProject from "../components/projects/PortfolioProject";
import UnityProject from "../components/projects/UnityProject";
import BattleshipProject from "../components/projects/BattleshipProject";
import WeatherProject from "../components/projects/WeatherProject";
import WebGraveyardProject from "../components/projects/WebGraveyardProject";
import HTTPServerProject from "../components/projects/HTTPServerProject";
import PaintProject from "../components/projects/PaintProject";


export default function App() {
  return (
    <div className = "app">
      <Navbar/>
      <About/>
      <Copyright/>
    </div>
  );
}
