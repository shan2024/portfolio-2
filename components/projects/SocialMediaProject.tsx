export default function SocialMediaProject() {
  return (
    <div className="project">
      <div className="title">Social media app</div>
      <div className="project-section">
        <div className="info">
        Based on the tutorial by JSM <a href = "https://www.youtube.com/watch?v=CcBHZ0t2Qwc&ab_channel=JavaScriptMastery">here</a>.
          <br></br><br></br>
          The application is supposed to be a clone of an average social media website (like Instagram/Tiktok/Facebook).
          <img className = "project-pic" src="/images/projects/social/website.png" alt="Website picture" />
          The front end is generated using React/Next.js. It also uses Next.js’s API endpoints feature to communicate with the backend, which uses a content delivery network.
          <br></br><br></br>
          It uses Sanity as a backend to store user generated content and user data. Sanity is a CDN for storing static data with the interface of a graph database.
          <br></br><br></br>
          You can try the website here:<br></br>
          <a href = "https://social-media-app-snowy.vercel.app/">https://social-media-app-snowy.vercel.app/</a>
        </div>
      </div>
    </div>
  );
}