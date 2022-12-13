export default function SolarProject() {
  return (
    <div className="project">
      <div className="title">SolarSizer</div>
      <div className="project-section">
        <div className="info">
          UW SolarSizer is an ongoing project by UW GRID. It is an in-house software project for solar sizing.
          <br></br><br></br>
          Solar sizing is the task of finding a good approximate number/quality of the solar panels needed for your 
          area (like a house/university/company). It basically requires gathering data for the energy needs and 
          solar irradiance (how much sunlight you get throughout the year) in your system. You then run models 
          to calculate how many and what type of solar panels are needed.
          <img className="project-pic" src="/images/projects/solar/solarpanels.jpg" alt="Picture of solar panels" />
          SolarSizer uses the PySAM Python package to develop its underlying solar sizing model, created by the NREL.
          <br></br><br></br>
          Read more about GRID here:<br></br>
          <a href="https://sites.uw.edu/grid/"> https://sites.uw.edu/grid/</a>
          <br></br><br></br>
          Repository for the SolarSizer:<br></br>
          <a href="https://github.com/UW-GRID/SolarSizer"> https://github.com/UW-GRID/SolarSizer</a>
        </div>
      </div>
    </div>
  );
}