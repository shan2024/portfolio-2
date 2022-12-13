export default function BattleshipProject() {
  return (
    <div className = "project">
      <div className = "title">Battleship</div>
      <div className="project-section">
        <div className = "subtitle">Background</div>
        <div className="info">
          This browser game was created while I was learning Javascript in the context of web programming.
          I wanted to create something simple enough that I could reasonably make it, 
          yet complex enough to provide a challenge. 
          <br></br><br></br>
          The game is based on “항공모함”<sup className="fn-link"><a href="#footnote1">[1]</a></sup>, 
          which is basically the Korean spinoff of Battleship. 
          In this version, you get multiple shots per round based on the number of ships you have left 
          (and more powerful ships give you more shots).
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Screenshots</div>
        <div className="info">
        <img className = "project-pic" src="/images/projects/battleship/start.png" alt="Starting the game" />
        <img className = "project-pic" src="/images/projects/battleship/play.png" alt="Playing the game" />
        <img className = "project-pic" src="/images/projects/battleship/win.png" alt="Winning the game" />
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Making the Game</div>
        <div className="info">
        Looking back, the game-making was made unnecessarily arduous by the fact that I didn&apos;t know 
        many site-building tools yet (React, Express, etc). The entire website is made entirely through
        raw Javascript and DOM API calls. To be clear, using the DOM API directly isn&apos;t bad by any means. 
        However, compared to something like React, which handles all interactions with the DOM for you, 
        it is a bit messier to deal with. 
        <br></br><br></br>
        This was also created at a time when I was fairly new to programming in general. 
        At the time, I had been seriously programming for only a couple of months. 
        Naturally, I had no knowledge of proper programming practices. 
        This meant that my code had no modularity, no tests, and didn&apos;t use any design patterns
        <sup className="fn-link"><a href="#footnote2">[2]</a></sup>. 
        And of these issues, the biggest was how tightly coupled my code was. 
        Every time I changed anything in the code, I had to simultaneously make updates in several other places. 
        This made debugging and updating the code a nightmare. Plus, since I didn&apos;t have any unit tests, 
        bugs popped up frequently, making the problem even worse. 
        <br></br><br></br>
        Eventually, I did get the game made. It&apos;s not perfect by any means<sup className="fn-link"><a href="#footnote3">[3]</a></sup>. 
        But considering that I was a complete novice, I don&apos;t think it&apos;s that bad, either. 
        <br></br><br></br>
        You can try out the game here:<br></br>
        <a href="https://shan2024.github.io/battleship/">https://shan2024.github.io/battleship/</a>
        </div>
      </div>
      <div className="project-section footnotes">
        <hr></hr>
        <ol>
          <li id="footnote1">
            For more information, you can read about it here (if you can understand Korean):&nbsp; 
            <a href="https://namu.wiki/w/%ED%95%AD%EA%B3%B5%EB%AA%A8%ED%95%A8">항공모함</a>
          </li>
          <li id="footnote2">
            There were many anti-patterns, however. The DOM.js file basically does everything 
            related to DOM manipulation, making it a clear example of a <a href="https://en.wikipedia.org/wiki/God_object">god class</a>.
            Not great.
          </li>
          <li id="footnote3">
            The most glaring issue is how terrible the AI is. 
            I didn&apos;t bother with using any sophisticated algorithm, so as of now the AI is fairly easy to beat. 
            Recently, however, I read a very interesting <a href="https://en.wikipedia.org/wiki/God_object">blog post</a> about the optimal battleship algorithm. 
            One of these days, I might come back to this project and implement it. 
          </li>
        </ol>
      </div>

    </div>
  );
}