import ProjectLink from "./projects/ProjectLink";

export default function Studio() {
  return (
    <div className="studio">
      <div className = "projects studio-section">
        <div className="project-title title">Projects</div>
        <ProjectLink title = "Real time paint" link="/projects/paint" date = "October 2022"></ProjectLink>
        <ProjectLink title = "Feline Frenzy" link="/projects/unity" date = "June 2022"></ProjectLink>
        <ProjectLink title = "HTTP web server" link="/projects/httpserver" date = "March 2022"></ProjectLink>
        <ProjectLink title = "Solar sizing" link="/projects/solar" date = "August 2021"></ProjectLink>
        <ProjectLink title = "Social media app" link="/projects/social" date = "August 2021"></ProjectLink>
      </div>
      <div className = "other studio-section">
        <div className="other-title title">Other</div>
        <ProjectLink title = "OS resources/notes" link="/projects/os" date = "October 2022"></ProjectLink>
        <ProjectLink title = "Portfolio redesign" link="/projects/portfolio" date = "December 2021"></ProjectLink>
        <ProjectLink title = "Battleship" link="/projects/battleship" date = "September 2021"></ProjectLink>
        <ProjectLink title = "Weather app" link="/projects/weather" date = "October 2021"></ProjectLink>
        {/* <ProjectLink title = "The other section" link="/projects/othersection" date = "September 2021"></ProjectLink> */}
        <ProjectLink title = "Website graveyard" link="/projects/webgraveyard" date = "August 2021"></ProjectLink>
      </div>
      <div className = "links studio-section">
        <div className="link-title title">Links</div>
        <div className="link-info info">
          Github: <a href="https://github.com/shan2024">https://github.com/shan2024</a>
          <br></br>
          Resume: <a href="/files/resume.pdf" download>download link</a>
        </div>
      </div>
    </div>
  );
}
