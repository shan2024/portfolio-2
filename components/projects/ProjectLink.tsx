export default function ProjectLink(props : any) {
  return (
    <div className="project-info info">
      <a className= "project-link" href={props.link}>{props.title}<time>{props.date}</time></a>
    </div>
  );
}