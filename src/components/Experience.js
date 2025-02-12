import React from "react";
import ExperienceCard from "./ExperienceCard";
import { formatTimespan } from "../helpers/dateHelper";

const Experience = () => {
  const yearsOfExperience = formatTimespan("2016-10-01T00:00:00Z", new Date());
  return (
    <main>
      <section>
        <h2>Experience</h2>
        <p className="years-of-experience">
          Building software professionally for {yearsOfExperience}.
        </p>
        <hr />
        <br />
        <ExperienceCard
          company="Amazon Prime Video"
          title="Software Development Engineer II (SDE II)"
          logoSrc="resources/pv-logo.jpg"
          dates="2021 - present"
          location="Culver City, Ca"
          bulletPoints={[
            "Lead a team of 5 engineers in architecting and deploying a microservices-based asset publication dashboard handling 50M+ updates per day, increasing on-time delivery of Prime Video assets by 40%.",
            "Designed an event-driven architecture to optimize real-time publication statuses, enabling <1m response time for partner studio insights.",
            "Identified tech debt costing team $50,000/month and spearheaded deprecation effort across multiple teams.",
            "Recognized as a bar-raising mentor for our summer intern and several junior engineers.",
          ]}
        />
        <ExperienceCard
          company="Beautycounter"
          title="Software Engineer"
          logoSrc="resources/bc-logo.jpg"
          dates="2018 - 2021"
          location="Santa Monica, Ca"
          bulletPoints={[
            "Promoted to Senior Developer, managing the full-stack sales portal for 100K+ daily active users.",
            "Engineered and maintained the backend commissions engine, ensuring financial accuracy and reliability for international consultants.",
            "Designed and launched a sales dashboard that drove a 20% increase in average sales by enabling data-driven team management.",
            "Won the 2019 company hackathon by developing a machine-learning-powered product recommendation engine that boosted customer engagement.",
            "Led small teams and mentored junior developers, fostering best practices in scalable system design across a diverse tech stack (Azure, Google Cloud, C#, Node.js, React, Firebase).",
          ]}
        />
        <ExperienceCard
          company="Millennium Space Systems"
          title="Software Developer"
          logoSrc="resources/ms-logo.jpg"
          dates="2017 - 2018"
          location="El Segundo, Ca"
          bulletPoints={[
            "Development of Software for the management of the Aerospace company. Everything from building UI rich, employee-facing features to architectural innovations behind the scenes.",
            "Angular JS, jQuery, ASP.Net, C#, MVC, WCF, Windows Services, HTTP, AJAX, JSON, Entity Framework, mss SQL server, TSQL, RabbitMQ, Git, TeamCity, Sass.",
            "Personally introduced and implement Angular JS. Personally introduced and implemented a distributed microservice architecture through DDD.",
          ]}
        />
        <ExperienceCard
          company="QuoteMule"
          title="Enterprise-Software Developer"
          logoSrc="resources/qm-logo.jpg"
          dates="2016 - 2017"
          location="New Port Beach, Ca"
          bulletPoints={[
            "Team-built web application aimed at streamlining the contract bidding process between construction contractors and their clients.",
            "This project utilizes a C# ASP.NET MVC & MSSQL backend to implement a WebApi 2 infrastructure running a jQuery, AJAX & AngularJs frontend.",
            "I was personally responsible for creating a workflow state machine using the .NET Stateless library, drag-and-drop file-upload feature with DropZone, and an interactive AI powered chatbot which leverages Microsoft’s LUIS machine learning technology. I also contributed to implementing a real-time messaging and notification system powered by the Signal R library.",
            "I also made use of numerous other libraries and external APIs including, GMaps, Twilio, SendGrid, AWS, BrainTree, DropZone, PDFSharp, and MigraDoc.",
            "In this project, the team has adopted industry best practices such as Agile/Scrum with Trello management, Dependency Injection, and Service-Oriented Architecture.",
          ]}
        />
      </section>
    </main>
  );
};

export default Experience;
