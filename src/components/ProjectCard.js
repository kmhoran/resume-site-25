import React from "react";

const ProjectCard = ({
  title,
  tech,
  year,
  repositoryUrl,
  blogUrl,
  content,
}) => {
  return (
    <div className="project-card">
      <div className="tech-col">
        {(tech || []).map(getTechData).map((data) => (
          <div className="tech-block">
            <img src={data.logo} className="tech-logo" />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
      <div className="content-col">
        <h2>{title}</h2>
        <p>{year}</p>
        {repositoryUrl ?? <a href={repositoryUrl}>check out the code</a>}
        {blogUrl ?? <a href={blogUrl}>read the blog</a>}
        {content}
      </div>
    </div>
  );
};

const techInfo = {
  aspnet: {
    name: "ASP.Net",
    logo: "resources/asp-net-logo.jpg",
  },
  csharp: {
    name: "C#",
    logo: "resources/csharp-logo.jpg",
  },
  django: {
    name: "Django",
    logo: "resources/django-logo.jpg",
  },
  heroku: {
    name: "Heroku",
    logo: "resources/heroku-logo.jpg",
  },
  python: {
    name: "Python",
    logo: "resources/python-logo.jpg",
  },
  pythonScheduler: {
    name: "Python Scheduler",
    logo: "resources/python-scheduler-logo.jpg",
  },
  sqlServer: {
    name: "SQL Server",
    logo: "resources/sql-server-logo.jpg",
  },
};

function getTechData(tech) {
  return techInfo[tech];
}

export default ProjectCard;
