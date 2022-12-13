export default function UnityProject() {
  return (
    <div className = "project">
      <div className = "title">Feline Frenzy</div>
      <div className="project-section">
        <div className = "subtitle">Background</div>
        <div className="info">
        Feline Frenzy is a game I made over the spring/summer as a hobby project. 
        It is a local 2-player fighting game (so something like Super Smash Bros) where players pilot
         cat characters and battle versus each other.
         <br></br> <br></br> 
        I ended up using Unity as the game engine backing my game. 
        I made this choice because I was already fluent with Java, and C# 
        (which Unity uses as its scripting language) is very similar. 
        I also saw that Unity is the most popular game engine used by game developers overall, 
        which also factored into my choice. 
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Screenshots</div>
        <div className="info">
          <img className = "project-pic" src="/images/projects/unity/abilities.png" alt="Game abilities" />
          <img className = "project-pic" src="/images/projects/unity/play1.png" alt="Gameplay 1" />
          <img className = "project-pic" src="/images/projects/unity/play2.png" alt="Gameplay 2" />
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">The Problem of Networking</div>
        <div className="info">
        Looking back, my initial expectations for the scope of the game were too high. 
        At first, I wanted my game to be networked, and I also wanted more character archetypes than just cats.
        However, I soon discovered that implementing networked code was much more difficult than I expected.
        <br></br> <br></br> 
        First, I underestimated the difficulty of accounting for latency in a fast-paced fighting game. 
        Without properly accounting for potential high latency between the client and server, 
        the game will be very laggy (even using a lossy protocol like UDP). 
        Typically, in a physics-based game, the solution is to “predict” the movement of players on 
        the server/other clients&apos; end, and make updates to the game based on these extrapolations. 
        For example, if we know the kinematic properties of a player at some time ago, we can 
        calculate the current position of the player using the right physics formulas.
        <br></br> <br></br> 
        You can also predict collisions and other interactions using this method. 
        However, doing this properly is <i>extremely</i> difficult, to say the least. 
        Integrating game physics with predictions is one of the most challenging parts of networked games, 
        and there is no “standard” solution for any of this. Different games will potentially require 
        different methods to solve the networking problem. 
        <br></br> <br></br> 
        Furthermore, doing this also introduces a new problem with delayed updates: 
        when a client predicts the state of another player, but the next update does not match the prediction. 
        This will force the client to suddenly pop the remote player into the correct position, 
        which can look very jarring on screen. If not handled well, these delayed prediction 
        corrections can make the game into a jerky, unplayable mess. 
        <br></br> <br></br> 
        Once again, this is not an easy thing to solve. This was the point where I decided the 
        drastically lower the scope of my game by making it local multiplayer only. 
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Finishing the Game</div>
        <div className="info">
        Everything progressed smoothly after that. Within two months, I had a playable draft of the game
         (which can be downloaded below). There are still several things I need to iron out, but overall 
        I&apos;m satisfied with what came out of the project.
        <br></br> <br></br> 
        I had a blast creating the game, but I&apos;m aware of the limitations that come from using a 
        feature-rich engine like Unity. I wasn&apos;t able to get deeper insights into the systems 
        behind game engines; for example, collision detection or event systems. This is unfortunate, 
        since gaining a richer understanding of these systems was why I started this project in the first place.
        <br></br> <br></br> 
        Next time I make a game, I&apos;m planning on creating the engine completely from scratch. 
        To be honest, I&apos;m probably drastically underestimating the work needed to create a game engine, 
        just as I did with the whole networking thing. We&apos;ll see. But, it will certainly be a more
        interesting experience than using a pre-existing engine, so I can&apos;t wait to try. 
        In the meantime, you can try out the game below. I&apos;ll still be making updates to the game from time to time.
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Download</div>
        <div className="info">
          You can play the game on the browser <a href="https://play.unity.com/mg/other/feline-frenzy-1" >here.</a>
          <br></br>
          <a href="/files/feline_frenzy.zip" download>MacOS download</a>
        </div>
      </div>
      {/* <div className="project-section footnotes">
        <hr></hr>
        <ol>
        </ol>
      </div> */}
    </div>
  );
}