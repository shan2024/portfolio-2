export default function WeatherProject() {
  return (
    <div className = "project">
      <div className = "title">Weather App</div>
      <div className="project-section">
        <div className="info">
        Useful in the improbable event that all of <a href="https://weather.com/">weather.com</a>&apos;s servers fail.

        <img className = "project-pic" src="/images/projects/weather/home.png" alt="Home screen of weather app" />

        I created this just to practice calling and parsing RESTful API&apos;s. 
        The search functionality isn&apos;t great, considering that the app basically 
        pastes the search contents into the parameters of the API call. 
        Also, since I&apos;m using the free subscription of the API, the number of calls
        you make at any given time is fairly limited. 
        <br></br><br></br>
        I used openweathermap.com for the up-to-date weather information; you can find out more about their API&nbsp;
        <a href="https://openweathermap.org/api">here</a>.
        <br></br><br></br>
        Find out the weather around the world:<br></br>
        <a href="https://shan2024.github.io/weather-app/">https://shan2024.github.io/weather-app/</a>
        </div>
      </div>
       
    </div>
  );
}