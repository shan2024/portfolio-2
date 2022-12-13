export default function HTTPServerProject() {
  return (
    <div className="project">
      <div className="title">Building an HTTP Server</div>
      <div className="project-section">
        <div className="info">
          At my university, CSE 333 is the name of the systems programming course that all computer
          engineering students have to take. For the class, there is a main project, which involves building
          an HTTP server using the POSIX sockets API. The server is built in raw C (and some C++ for classes).
          <br></br><br></br>
          The basic idea is to build a server that can do the bare minimum: accept TCP client connections
          and serve static HTML and CSS files by responding to HTTP GET requests. The served website looked like this:
          <img className="project-pic" src="/images/projects/http/http1.png" alt="Picture of the served website" />
          Why is this class project listed here? Well, the truth is that prior to this project, I didn&apos;t have a
          good understanding of <i>how</i> the HTTP protocol, the browser, and web servers interacted together<sup className="fn-link"><a href="#footnote1">[1]</a></sup>.
          <br></br><br></br>
          The funny thing is, I&apos;ve used web server frameworks like Express.js prior to all of this, and I&apos;ve
          built websites using them. However, everything is so abstracted that it&apos;s hard to understand what&apos;s
          really going on under the hood<sup className="fn-link"><a href="#footnote2">[2]</a></sup>. Thanks to this project, I at least have a better fundamental
          understanding of how servers establish client connections and how to parse and format HTTP requests/responses.
          <br></br><br></br>
          As an extension, I also got to integrate a SQLite database into my server to store user input and various
          HTTP header information, which was pretty fun.
        </div>
      </div>
    </div>
  );
}