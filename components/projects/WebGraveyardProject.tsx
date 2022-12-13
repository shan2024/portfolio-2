export default function WebGraveyardProject() {
  return (
    <div className = "project">
      <div className = "title">Website Graveyard</div>
      <div className="project-section">
        <div className="info">
        In my experience, learning web development sometimes requires tinkering with various smaller web designs. 
        That is, sometimes you just want to build a couple of small things and try out some software tools along the way.
        <br></br><br></br>
        To recognize this, I&apos;ve assembled a small catalog of (long-abandoned) websites I built in my efforts
        to learn web development. 
        </div>
      </div>
      <div className="project-section">
        <div className="subtitle">Mini-Paint</div>
        <div className="info">
          This was one of the first websites I ever created using raw HTML/CSS/JS.
          <img className = "project-pic" src="/images/projects/webgraveyard/paint.png" alt="Paint app" />
          <div className="caption-section">
            <a href="https://shan2024.github.io/mini-paint/">mini-paint</a>
            <p>A simple painting app.</p>
          </div> 
          There isn&apos;t much functionality; just a simple colored pen and eraser. 
          At the time I built this, though, I was awed by how seemingly complex the site was.
        </div>
      </div>
      <div className="project-section">
        <div className="subtitle">To-Do List</div>
        <div className="info">
          One of the most generic and overdone projects ever. It was fun to make, though.
          <img className = "project-pic" src="/images/projects/webgraveyard/todo.png" alt="To-do list app" />
          <div className="caption-section">
            <a href="https://shan2024.github.io/to-do-list/">to-do-list</a>
            <p>An app for keeping track of notes.</p>
          </div> 
          This was right before I discovered CSS Grid, which might explain why the layout is so clunky.
        </div>
      </div>
      <div className="project-section">
        <div className="subtitle">CV Application</div>
        <div className="info">
          This was the first app I created using the React library.
          <img className = "project-pic" src="/images/projects/webgraveyard/cv.png" alt="CV-app" />
          <div className="caption-section">
            <a href="https://shan2024.github.io/cv-application/">cv-application</a>
            <p>A templating app to help create resumes.</p>
          </div> 
          I&apos;ve never used this application for any actual resumes. Make of that what you will.
        </div>
      </div>
      <div className="project-section">
        <div className="subtitle">Memory Game</div>
        <div className="info">
          This was another one of the apps I made to practice React.
          <img className = "project-pic" src="/images/projects/webgraveyard/mem.png" alt="memory game" />
          <div className="caption-section">
            <a href="https://shan2024.github.io/memory-game/">memory-game</a>
            <p>A card memorizing game.</p>
          </div> 
          There isn&apos;t much help on-site with how to play the game, so I&apos;ll give a brief explanation here. 
          At the start of the game, you are given 16 random “cards”, which are uniquely identified by color and shape. 
          The goal is to click each unique card exactly once. The tricky part is that each time you click a unique card, 
          the positions of all the cards will randomly swap. If you mess up, the game resets with a new set of cards.
        </div>
      </div>
      <div className="project-section">
        <div className="subtitle">Gem Store</div>
        <div className="info">
          I created this to practice client-side routing with React. 
          I used a <a href="https://v5.reactrouter.com/web/api/HashRouter">HashRouter</a> since there was no server backing up all of the different url endpoints. 
          Everything is handled entirely client-side.
          <img className = "project-pic" src="/images/projects/webgraveyard/gem.png" alt="gem store" />
          <div className="caption-section">
            <a href="https://shan2024.github.io/gem-store/">gem-store</a>
            <p>A minimal website mimicking online stores.</p>
          </div> 
          No, the payment option does not work.
        </div>
      </div>
       
    </div>
  );
}