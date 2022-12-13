import { useRouter } from "next/router";

import Copyright from "../../components/Copyright";
import Navbar from "../../components/Navbar";

// List of project components
import BattleShip from "../../components/projects/BattleshipProject";
import HTTPServer from "../../components/projects/HTTPServerProject";
import OperatingSystem from "../../components/projects/OperatingSystemProject";
import Paint from "../../components/projects/PaintProject";
import Portfolio from "../../components/projects/PortfolioProject";
import Unity from "../../components/projects/UnityProject";
import Weather from "../../components/projects/WeatherProject";
import WebGraveyard from "../../components/projects/WebGraveyardProject";
import Solar from "../../components/projects/SolarProject";
import Social from "../../components/projects/SocialMediaProject";

const components = {
  battleship : BattleShip,
  httpserver : HTTPServer,
  os : OperatingSystem,
  paint : Paint,
  portfolio : Portfolio,
  social : Social,
  solar : Solar,
  unity : Unity,
  weather : Weather,
  webgraveyard : WebGraveyard
}

// The dynamic project page that will display the project description sites.
export default function ProjectPage() {
  const router = useRouter();

  const {pname} = router.query;
  const ProjectComponent = components[pname as keyof typeof components];

  return (
    <div className = "app">
      <Navbar/>
      <ProjectComponent/>
      <Copyright/>
    </div>
  );
}

export async function getServerSideProps(context:any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}