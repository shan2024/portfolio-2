export default function PortfolioProject() {
  return (
    <div className = "project">
      <div className = "title">Personal Site Redesign</div>
      <div className="project-section">
        <div className = "subtitle">Background</div>
        <div className="info">
        My first personal website was created a few years back. This was before I knew much programming at all, so it was all done in Wordpress using a fancy portfolio theme I found off Google.
        <br></br> <br></br> 
        Lately, though, I&apos;ve felt that it was time to start over with a new site. The old site&apos;s design was a bit lacking for me, and I wanted something different.
        Luckily, I&apos;ve recently been learning React. This was a good opportunity to practice building a website from scratch, using some very popular software tools.
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Design</div>
        <div className="info">
        Before creating my site, I first took a look at my old website and tried to glean which features and design characteristics I liked and disliked. 
        As it turns out, there wasn&apos;t a lot I liked about my old site. 
        <br></br> <br></br> 
        The thing about Wordpress templates is that there&apos;s usually a lot of eye-candy. 
        Wordpress sites tend to be full of bright colors and fancy transitions/animations. 
        Here&apos;s an example of what I&apos;m talking about:
        <img className = "project-pic" src="/images/projects/portfolio/flashyportfolio.png" alt="Picture of flashy porfolio" />
        The younger me would have loved these sorts of flashy design traits, but nowadays I prefer a simple, clean layout to websites. 
        In part, I think I am influenced by the design of my peers&apos; websites, which are often very straightforward. 
        Take a look at the personal websites of some graduate students at my school, for example: <a href="https://yoavartzi.com/">1</a>, <a href="https://mjyc.github.io/">2</a>, <a href="https://kentonl.com/"> 3</a>.
        <br></br> <br></br> 
        As you can see, these sites tend to just list out the important details without need for visual flair. 
        I rather like the simplicity of these designs, since they allow you to quickly find any relevant information about the person in question. 
        They are also not overwhelming to look at.
        <br></br> <br></br> 
        For my particular website, I decided to just stick with the basic elements, including the most rudimentary font (Arial), and a wide-margin rectangular space to put content on.
        The actual content would be generated with text sections placed one after the other. Since my layout was so simple, 
        I also only needed two pages for my website: a “About” section with an introduction and a “Studio” section with essentially everything else.
         <br></br> <br></br> 
        All in all, my site turned out to look like this (but of course you&apos;ve already seen it):
        <img className = "project-pic" src="/images/projects/portfolio/myportfolio.png" alt="Picture of my current porfolio" />
        </div>
      </div>
      <div className="project-section">
        <div className = "subtitle">Coding</div>
        <div className="info">
        The actual coding of my website was, like the design, fairly straightforward. I used React for the frontend, since I was already sort of used to using it. 
        Looking back, though, my website was so simple that I mostly didn&apos;t even use the full power of the React library. 
        I probably could have just created static html files for my website and served them instead. It would have worked just as fine.         
        <br></br> <br></br> 
        Next, I used Express.js to create my web server. Again, there&apos;s nothing too complex here. The Express server simply serves a Javascript file bundled together from all of the React components.
        It also serves all of the static files such as images and downloads. 
        <br></br> <br></br> 
        The full code for my website can be found here: <br></br>
        <a href = "https://github.com/shan2024/Portfolio">github.com/shan2024/Portfolio</a>
        </div>
      </div>
    </div>
  );
}